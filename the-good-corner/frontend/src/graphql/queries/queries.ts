import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query AllCategories {
    allCategories {
      id
      name
    }
  }
`;

export const LOGIN = gql`
query Query($userData1: UserInput!) {
  login(UserData: $userData1)
}
`;
