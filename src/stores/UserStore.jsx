import { createContext } from "react";

export class UserStore {
  login = null;
  name = null;
  avatar_url = null;
  bio = null;
  email = null;
  followers = null;
  following = null;
  repositories = null;
  sort = null;

  setUser = userData => {
    this.login = userData.login;
    this.name = userData.name;
    this.avatar_url = userData.avatar_url;
    this.bio = userData.bio;
    this.email = userData.email;
    this.followers = userData.followers;
    this.following = userData.following;
    this.repositories = userData.repositories;
    this.sort = userData.sort;
  };

  getUser = () => ({
    login: this.login,
    name: this.name,
    avatar_url: this.avatar_url,
    bio: this.bio,
    email: this.email,
    followers: this.followers,
    following: this.following,
    repositories: this.repositories,
    sort: this.sort
  });
}

export default createContext(new UserStore());
