import React, { FC } from "react";
import { IHero } from "../components/store/HeroesStore";
import { HeroesStore } from "./store/HeroesStore";
import { observer } from 'mobx-react';

interface IProps {
    heroesP: HeroesStore;
}

const Heroes:FC<IProps> = observer(({ heroesP }) => {

    return (
        <div>
            { heroesP.loading && <h1
            style={{color: 'red'}}
            >Loading...</h1> }
        <ul>
            {heroesP.heroes.map((hero: IHero) => (
                <li key={hero.id} style={{
                    color: 'white',
                    padding: '10px',
                }}>
                    {hero.name}
                </li>
            ))}
        </ul>
        </div>
    );
});


export default Heroes;