import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FiSearch, FiArrowLeft} from 'react-icons/fi';
import {
  FaExclamationCircle,
  FaCodeBranch,
  FaCircle,
  FaStar
} from 'react-icons/fa';

import Figure from '../../assets/figure.svg';

import '../styles.css';
import '../repositories.css';

import api from '../../services/api';


export default function Favorites() {
  const [repos, setRepos] = useState();

  return (
    <>
      <header>
        <Link className="link-menu" to="/" >
          <FiArrowLeft color="#eee" size={20} />
          <p>Home</p>
        </Link>
        <div className="search-box">
          <input
            type="search"
            name="search"
            placeholder="Procurar..."
            
          />
          <div
            className="search-button"
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
            <p className="username">Repositórios de <b>{repos[0].owner.login}</b></p>
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
            <h1>Você ainda não tem favoritos</h1>
          </div>
        }
      </main>
    </>
  );
}

