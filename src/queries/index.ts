import gql from 'graphql-tag';

export const GET_USERNAME = gql`
  query GetUsername { 
    viewer { 
      login
    }
  }
`;