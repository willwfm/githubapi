import PropTypes from "prop-types";
import React from "react";

import styles from "./Layout.module.css";
import { Avatar, Text } from "components";

const {
  page,
  main,
  footer,
  article,
  header,
  header__nav: headerNav,
  header__nav__link: headerNavLink,
  article__children: articleChildren
} = styles;

const WrapperLayout = (PublicComponent, props) => (
  <Layout>
    <PublicComponent {...props} />
  </Layout>
);

const Layout = ({ children }) => {
  const avatar =
    children.props.location.state && children.props.location.state.avatar_url;

  return (
    <section className={page}>
      <section className={main}>
        <header className={header}>
          <nav className={headerNav}>
            <a href="/" className={headerNavLink}>
              <Text
                bold={true}
                size="24"
                text="Home"
                color="var(--color-white)"
              />
            </a>
            {avatar && (
              <div>
                <Avatar
                  data={{
                    avatar_url: avatar
                  }}
                />
              </div>
            )}
          </nav>
        </header>

        <article className={article}>
          <div className={articleChildren}>{children}</div>
        </article>
      </section>

      <footer className={footer}>
        <Text bold={true} size="24" text="2019" color="var(--color-white)" />
      </footer>
    </section>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export { Layout, WrapperLayout };
