import React from 'react';
import {
  FaExclamationCircle,
  FaCodeBranch,
  FaCircle,
  FaStar
} from 'react-icons/fa';
import { FiGitPullRequest } from 'react-icons/fi';

import './styles.css';

export default function Repository() {

  return (
    <div className="repo-container">
      <h1>rocks-db</h1>
      <p>A library that provides an embeddable, persistent key-value store for fast storage.</p>

      <div className="repo-infos">
        <div>
          <FaCircle size={16} color="#767D9F" />
          <p>JavaScript</p>
        </div>
        <div className="link">
          <FaCodeBranch size={16} color="#767D9F" />
          <p>3,860</p>
        </div>
        <div className="link">
          <FaStar size={16} color="#767D9F" />
          <p>17,083</p>
        </div>
        <div className="link">
          <FaExclamationCircle size={16} color="#767D9F" />
          <p>358</p>
        </div>
        <div className="link">
          <FiGitPullRequest size={16} color="#767D9F" />
          <p>168</p>
        </div>
        <div>
          <p>Atualizado 20 minutos atrás</p>
        </div>
      </div>
    </div>
  );
}