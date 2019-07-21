import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Avatar, Repositories, Text } from "components";
import UserContext from "stores/UserStore";

import styles from "./UserDetails.module.css";

const UserDetails = ({ data: user }) => {
  const userStore = useContext(UserContext);

  userStore.setUser(user);

  return (
    <section>
      <div className={styles.userDetails}>
        <div className={styles.avatar}>
          <Avatar data={user} showBorder={true} />
          <Text bold={true} size="16" text={user.name || user.login} />
        </div>
        <br />
        {user.bio && (
          <div>
            <Text bold={true} size="14" text="Biografia: " />
            <Text bold={true} size="14" text={user.bio} secondary={true} />
          </div>
        )}
        {user.email && (
          <div>
            <Text bold={true} size="14" text="Email: " />
            <Text bold={true} size="14" text={user.email} secondary={true} />
          </div>
        )}
        <div>
          <Text bold={true} size="14" text="Seguidores: " />
          <Text bold={true} size="14" text={user.followers} secondary={true} />
        </div>
        <div>
          <Text bold={true} size="14" text="Seguindo: " />
          <Text bold={true} size="14" text={user.following} secondary={true} />
        </div>
        {user.login && <Repositories data={user} />}
      </div>
    </section>
  );
};

UserDetails.propTypes = {
  data: PropTypes.any.isRequired
};

export default UserDetails;
