import React, { useState, useLayoutEffect } from "react";
import { Redirect } from "react-router-dom";

import { Button, Text } from "components"

import styles from "./Repository.module.css";

const Repository = props => {
  const [linkToRedirect, setLinkToRedirect] = useState(null);

  const repository = props.location.state && props.location.state.repository; //repoStore.getRepository();

  useLayoutEffect(() => {
    if (!repository) {
      return setLinkToRedirect("/");
    }
  }, [repository]);

  if (linkToRedirect) {
    return <Redirect to={linkToRedirect} />;
  }

  return (
    <>
      {repository && (
        <div className={styles.block}>
          <Text bold={true} size="18" text={repository.name} />
          <br />
          <div>
            <Text bold={true} size="14" text="Descrição: " />
            <Text bold={true} size="14" text={repository.description} secondary={true} />
          </div>
          <div>
            <Text bold={true} size="14" text="Estrelas: " />
            <Text bold={true} size="14" text={repository.stargazers} secondary={true} />
          </div>
          <div>
            <Text bold={true} size="14" text="Linguagem: " />
            <Text bold={true} size="14" text={repository.languages} secondary={true} />
          </div>
          <div>
            <Text bold={true} size="14" text="Url: " />
            <a href={repository.url} target="_blank" rel="noopener noreferrer">
              <Text bold={true} size="14" text="Ver mais no github" secondary={true} />
            </a>
          </div>
          <br />
          <br />
          <br />
          <Button text="Voltar" onClick={() => setLinkToRedirect("/")} />
        </div>
      )}
    </>
  );
};

export default Repository;
