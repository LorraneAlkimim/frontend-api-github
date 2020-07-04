import React, { useState } from 'react';
import { FiSearch, FiGitPullRequest } from 'react-icons/fi';
import {
  FaExclamationCircle,
  FaCodeBranch,
  FaCircle,
  FaStar
} from 'react-icons/fa';

import Figure from './assets/figure.svg';

import './App.css';
import './repositories.css';

import api from './services/api';


function App() {
  const [search, setSearch] = useState();
  const [repos, setRepos] = useState();

  async function handleSearch(){
    const response = await api.get(`${search}/repos`);
    setRepos(response.data);
  }

  return (
    <>
      <header>
        <div className="search-box">
          <input
            type="search"
            name="search"
            placeholder="Procurar..."
            
            onChange={event => setSearch(event.target.value)}
          />
          <div
            className="search-button"
            onClick={() => handleSearch()}
          >
            <FiSearch
              color="#eee"
              size={20}
            />
          </div>
        </div>
      </header>

      <main>
        {repos ?
          <>
            <p className="username">Repositórios de <b>{search}</b></p>
            {repos.map(repo => (
              <div key={repo.id} className="repo-container">
                <h1>{repo.name}</h1>
                <p>{repo.description}</p>
          
                <div className="repo-infos">
                  <div>
                    <FaCircle size={16} color="#767D9F" />
                    <p>{repo.language}</p>
                  </div>
                  <div className="link">
                    <FaCodeBranch size={16} color="#767D9F" />
                    <p>{repo.forks_count}</p>
                  </div>
                  <div className="link">
                    <FaStar size={16} color="#767D9F" />
                    <p>{repo.stargazers_count}</p>
                  </div>
                  <div className="link">
                    <FaExclamationCircle size={16} color="#767D9F" />
                    <p>{repo.open_issues}</p>
                  </div>
                  <div className="link">
                    <FiGitPullRequest size={16} color="#767D9F" />
                    <p>{repo.pulls}</p>
                  </div>
                  <div>
                    <p>Atualizado em {repo.updated_at}</p>
                  </div>
                </div>
              </div>
            ))}
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
