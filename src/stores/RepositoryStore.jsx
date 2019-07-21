import { createContext } from "react";

export class RepositoryStore {
  name = null;
  description = null;
  stargazers = null;
  languages = null;
  url = null;
  filter = null;
  current = null;

  setRepository = repoData => {
    this.name = repoData.name;
    this.description = repoData.description;
    this.stargazers = repoData.stargazers;
    this.languages = repoData.languages;
    this.url = repoData.url;
    this.filter = repoData.filter;
    this.current = repoData.current;
  };

  getRepository = () => ({
    name: this.name,
    description: this.description,
    stargazers: this.stargazers,
    languages: this.languages,
    url: this.url,
    filter: this.filter,
    current: this.current
  });
}

export default createContext(new RepositoryStore());
