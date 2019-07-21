import React from "react";
import { mount } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { GET_REPOSITORIES_BY_USER } from "graphql/queries";
import { Repositories } from "components";

const MOCK_GET_REPOSITORIES_BY_USER = [
  {
    request: {
      query: GET_REPOSITORIES_BY_USER,
      variables: {
        login: "teste",
        first: 1,
        orderBy: "NAME",
        direction: "ASC"
      }
    },
    result: {
      data: {
        user: {
          repositories: {
            totalCount: 20,
            edges: [
              {
                node: {
                  name: "angularjs-bootstrap-datetimepicker",
                  description:
                    "AngularJS date e time picker directive styled by Bootstrap",
                  url: "https://github.com/teste/angularjs",
                  stargazers: {
                    totalCount: 0
                  },
                  languages: {
                    edges: [
                      {
                        node: {
                          name: "JavaScript"
                        }
                      }
                    ]
                  },
                  primaryLanguage: {
                    name: "JavaScript"
                  }
                },
                cursor: "Y3Vyc29yOn="
              }
            ],
            pageInfo: {
              endCursor: "Y3Vyc29yOn=",
              hasNextPage: true
            }
          }
        }
      }
    }
  }
];

describe("< Repositories />", () => {
  let component;
  afterEach(() => {
    sessionStorage.clear();
  });
  describe("repositories test", () => {
    const user = {
      login: "willwfm"
    };
    beforeEach(() => {
      component = mount(
        <MockedProvider
          mocks={MOCK_GET_REPOSITORIES_BY_USER}
          addTypename={false}
        >
          <Repositories data={user} />
        </MockedProvider>
      );
    });
    it("render Repositories component", () => {
      expect(component).toHaveLength(1);
    });
    it("test props", () => {
      expect(component.props().children.props.data.login).toBe(user.login);
    });
    it("test rendered data", async () => {
      const text = component.text();

      expect(text).toContain("Carregando");
    });
  });
});
