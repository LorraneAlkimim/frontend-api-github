import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft} from 'react-icons/fi';
import {
  FaExclamationCircle,
  FaCodeBranch,
  FaCircle,
  FaStar
} from 'react-icons/fa';

import axios from 'axios';

import Figure from '../../assets/figure_02.svg';

import '../styles.css';
import '../repositories.css';


export default function Favorites() {
  const [repos, setRepos] = useState();

  async function teste(fav) {
    let aux = [];
   
    const response = await axios.get(fav);
    aux.push(response.data);
    setRepos(aux);
    console.log(aux);
  }

  function handleRepositories(fav) {
  
    fav.map(url => teste(url));

 
  }

  useEffect(() => {
    let aux = localStorage.favorites.split(',');
    handleRepositories(aux);
  }, []);

  return (
    <>
      <header>
        <Link className="link-menu" to="/" >
          <FiArrowLeft color="#eee" size={20} />
          <p>Home</p>
        </Link>
      </header>

      <main>
        {repos ?
          <>
            <p className="username">Repositórios favoritos:</p>
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

