This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### About

This project was developed using React, it searches for users of GitHub by 'username' and searches its repositories.<br>
We have two examples to get this data from the api, one using javascript fetch and another using graphql <br>

### Generate a GitHub personal access token

We will authenticate to GitHub’s GraphQL API via a personal access token.
[Follow the steps](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) in the GitHub guide, enabling the following scopes:

![alt text](https://1npo9l3lml0zvr6w62acc3t1-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/scopes.png)

Copy the generated access token to your clipboard.<br>

Search for `REACT_APP_GITHUB_TOKEN` on `.env` and replace `PERSONAL_TOKEN_HERE` for your token <br>

### PT-BR - Criar Token pessoal no GitHub

É preciso ter um token de authenticação pras consultas no graphql do GitHub
[Siga esses passos](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) no guia do GitHub <br>

Busque por `REACT_APP_GITHUB_TOKEN` no arquivo `.env` na raiz do projeto e altere o `PERSONAL_TOKEN_HERE` pelo token gerado <br>

Importante notar que cada token gerado só é válido no computador onde foi gerado.

### `npm i`

After cloning the repository, run the `npm i` command to install the project dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

https://www.alura.com.br/artigos/criando-componentes-css-com-padrao-bem

https://www.w3schools.com/howto/howto_css_search_button.asp

https://reactgo.com/graphql-react-apollo-client/

https://blog.codeship.com/an-introduction-to-graphql-via-the-github-api/
