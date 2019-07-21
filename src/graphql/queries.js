import gql from 'graphql-tag';

export const GET_REPOSITORIES_BY_USER = gql`
    query GetRepos($login: String!, $first: Int!, $orderBy: RepositoryOrderField!, $direction: OrderDirection!){
        user(login: $login) {
            repositories(first: $first, orderBy:{ field: $orderBy, direction: $direction}) {
                totalCount
                edges {
                    node {
                        id
                        name
                        description
                        url
                        createdAt
                        stargazers {
                            totalCount
                        }
                        languages(first: 20) {
                            edges {
                                node {
                                    name
                                }  
                            }
                        }
                        primaryLanguage {
                            name
                        }
                    }
                    cursor
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
`