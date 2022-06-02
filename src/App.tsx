import React, { useEffect } from 'react';
import store from './components/store/HeroesStore';
import Heroes from './components/Heroes';
import './App.css';



function App() {

  useEffect(() => {
    store.toggleLoading();
    setTimeout(() => {
      store.fetchHeroes();
    } , 2000);
  }, []);

  return (
    <div className="App">
      { store.loading && <div>Loading...</div> }
      <Heroes heroesP={store} />
    </div>
  );
}

export default App;
