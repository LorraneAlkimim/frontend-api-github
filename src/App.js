import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import './App.css';
import Figure from './assets/figure.svg';
import Repository from './components/Repository';

function App() {
  const [search, setSearch] = useState('sad');

  return (
    <>
      <header>
        <div className="search-box">
          <input
            type="search"
            name="search"
            placeholder="Procurar..."
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
          <div
            className="search-button"
            onClick={() => { alert('Vrau') }}
          >
            <FiSearch
              color="#eee"
              size={20}
            />
          </div>
        </div>
      </header>

      <main>
        {search ?
          <>
            <p className="username">Repositórios de <b>@username</b></p>
            <Repository />
            <Repository />
            <Repository />
          </>
        : 
          <div className="initial-screen">
            <img src={Figure} alt="Figure"/>
            <h1>Busque por um usuário para ver seus repositórios</h1>
          </div>
        }
      </main>
    </>
  );
}

export default App;
