import { flow, makeAutoObservable, observable } from "mobx";

export interface IHero {
    id: number;
    name: string;
    power: string;
}

export class HeroesStore {
    heroes: IHero[] = [];
    loading: boolean = false;
    constructor() {
        makeAutoObservable(this, {
            heroes: observable,
            loading: observable,
        });
    }
    fetchHeroes = flow(function*(this: HeroesStore) {
        try {
            console.log(this.loading);
            const response = yield fetch('https://akabab.github.io/superhero-api/api/all.json');
            const heroesYield = yield response.json();
            this.heroes = heroesYield;
            this.loading = false;
        } catch (error) {
            console.log(error);
            this.loading = false;
        }
    })
    toggleLoading = () => {
        this.loading = !this.loading;
    }
}

const store = new HeroesStore();

export default store;