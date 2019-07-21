import React, { useState, useContext, useEffect } from "react";
import { useForm, useFetch } from "hooks";
import { validateUsername } from "./validate";
import { ErrorMessage, UserDetails, Text } from "components";
import { Search } from "icons";
import UserContext from "stores/UserStore";

import styles from "./User.module.css";

const User = () => {
  const userStore = useContext(UserContext);

  const onValidForm = userData => {
    setUrl(`${process.env.REACT_APP_GITHUB_API_URL}/users/${values.username}`);
  };
  const fields = {
    username: ""
  };

  const { values, handleChange, errors, onSubmitForm } = useForm(
    fields,
    onValidForm,
    validateUsername
  );

  const [url, setUrl] = useState("");

  const userData = userStore.getUser();

  let [data, loading, error, loaded, setData] = useFetch(url);

  useEffect(() => {
    if (!data && userData && userData.login) {
      setData(userData);
    }
  });

  return (
    <article className={styles.article}>
      <div>
        <Text bold={true} size="18" text="Busca de usuários do GitHub" />
      </div>

      <form onSubmit={onSubmitForm}>
        <div className={styles.username}>
          <input
            type="text"
            className={styles.username__input}
            value={values.username}
            placeholder="Username"
            onChange={e =>
              handleChange({ name: "username", value: e.target.value })
            }
          />
          <button type="submit" className={styles.username__search}>
            <Search color="var(--color-white)" />
          </button>
        </div>

        {errors.username && <ErrorMessage error={errors.username} />}

        {error && (
          <ErrorMessage error="Desculpe!!! Um erro ocorreu ao processar a busca, por favor tente novamente mais tarde." />
        )}

        {(!data || !data.login) && loaded && (
          <ErrorMessage error="Ops!!! Não encontramos ninguem com esse username, por favor tente outro" />
        )}
      </form>

      {loading && "Carregando..."}

      <br />

      {!loading && data && data.login && <UserDetails data={data} />}
    </article>
  );
};

export default User;
