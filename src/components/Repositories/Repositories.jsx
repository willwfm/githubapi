import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Query } from "react-apollo";

import { Button, ErrorMessage, Text } from "components";
import RepositoryContext from "stores/RepositoryStore";
import { Star } from "icons";

import { GET_REPOSITORIES_BY_USER } from "graphql/queries";

import styles from "./Repositories.module.css";

const UserDetails = ({ data: user }) => {
  const repoStore = useContext(RepositoryContext);

  const [linkToRedirect, setLinkToRedirect] = useState(null);

  const filters = [
    {
      description: "Mais estrelas",
      field: "STARGAZERS",
      direction: "DESC"
    },
    {
      description: "Menos estrelas",
      field: "STARGAZERS",
      direction: "ASC"
    },
    {
      description: "Nome A-Z",
      field: "NAME",
      direction: "ASC"
    },
    {
      description: "Nome Z-A",
      field: "NAME",
      direction: "DESC"
    }
  ];

  const [filter, setFilter] = useState(0);

  const [current, setCurrent] = useState(0);

  const repoData = repoStore.getRepository();

  useEffect(() => {
    if (repoData && repoData.name) {
      setFilter(repoData.filter);
      setCurrent(repoData.current);
    }
  }, [repoData, setFilter, setCurrent]);

  const repositoryDetail = repo => {
    const data = {
      name: repo.node.name,
      description: repo.node.description,
      stargazers: repo.node.stargazers.totalCount,
      languages: repo.node.languages.edges.map(x => x.node.name).join(", "),
      url: repo.node.url,
      filter,
      current
    };

    if (!data.languages && repo.node.primaryLanguage.name) {
      data.languages = repo.node.primaryLanguage.name;
    }

    repoStore.setRepository(data);
    setLinkToRedirect("/repository");
  };

  if (linkToRedirect) {
    return (
      <Redirect
        to={{
          pathname: linkToRedirect,
          state: {
            repository: repoStore.getRepository(),
            avatar_url: user.avatar_url
          }
        }}
      />
    );
  }

  const handleMore = (data, fetchMore, current, orderBy, direction) => {
    fetchMore({
      variables: {
        first: current + 10,
        orderBy: orderBy,
        direction: direction
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }
        return Object.assign(prev, fetchMoreResult);
      }
    });
  };

  const handleChange = (e, data, fetchMore) => {
    setFilter(e.target.value);
    handleMore(
      data,
      fetchMore,
      0,
      filters[e.target.value].field,
      filters[e.target.value].direction
    );
  };

  return (
    <Query
      query={GET_REPOSITORIES_BY_USER}
      variables={{
        login: user.login,
        first: 10,
        orderBy: filters[filter].field,
        direction: filters[filter].direction
      }}
    >
      {({ data, loading, error, fetchMore }) => {
        if (loading) return "Carregando Repositórios...";

        if (error) {
          return (
            <ErrorMessage error="Desculpe!!! Um erro ocorreu ao processar a busca, por favor tente novamente mais tarde." />
          );
        }

        if (!data || !data.user) {
          return null;
        }

        setCurrent(data.user.repositories.edges.length);

        const repositories = data.user.repositories.edges;

        return (
          <div>
            <br />
            <div className={styles.header}>
              <span className={styles.header__title}>
                <Text
                  bold={true}
                  size="16"
                  text={
                    data.user
                      ? "Repositórios"
                      : "Nenhum repositório encontrado."
                  }
                />
              </span>
              <Text
                bold={true}
                size="14"
                text="Ordenar por&nbsp;"
                secondary={true}
              />
              <select
                value={filter}
                onChange={e => handleChange(e, data, fetchMore)}
              >
                {filters.map((x, index) => (
                  <option key={index} value={index}>
                    {x.description}
                  </option>
                ))}
              </select>
            </div>
            <ul id="repositories" className={styles.repositories_list}>
              {repositories.map(x => (
                <li
                  key={x.node.id}
                  onClick={() => repositoryDetail(x)}
                  className={styles.repositories_list__item}
                >
                  <div className={styles["repositories_list__item--header"]}>
                    <span
                      className={
                        styles["repositories_list__item--header--title"]
                      }
                    >
                      <Text bold={true} size="14" text="Nome " />
                      <Text
                        bold={true}
                        size="14"
                        text={x.node.name}
                        secondary={true}
                      />
                    </span>
                    <span
                      className={
                        styles["repositories_list__item--header--stars"]
                      }
                    >
                      <Star color="var(--color-purple)" size={20} />
                      <Text
                        bold={true}
                        size="16"
                        text={x.node.stargazers.totalCount}
                        secondary={true}
                      />
                    </span>
                  </div>
                  <div>
                    <Text bold={true} size="14" text="Criado em " />
                    <Text
                      bold={true}
                      size="14"
                      text={new Date(x.node.createdAt).toLocaleDateString()}
                      secondary={true}
                    />
                  </div>
                </li>
              ))}
            </ul>
            {data.user.repositories.pageInfo.hasNextPage && (
              <Button
                text="Carregar mais"
                onClick={() =>
                  handleMore(
                    data,
                    fetchMore,
                    current,
                    filters[filter].field,
                    filters[filter].direction
                  )
                }
              />
            )}
          </div>
        );
      }}
    </Query>
  );
};

UserDetails.propTypes = {
  data: PropTypes.any.isRequired
};

export default UserDetails;
