import React from "react";

import styles from "./Avatar.module.css";

const {
  avatar__img: avatarImg,
  "avatar--purpleBorder": avatarpurpleBorder
} = styles;

const Avatar = ({ data, showBorder }) => (
  <section className={styles.avatar}>
    <img
      className={`${avatarImg} ${showBorder ? avatarpurpleBorder : ''}`}
      src={data.avatar_url}
      alt="Imagem Avatar"
    />
  </section>
);

export default Avatar;
