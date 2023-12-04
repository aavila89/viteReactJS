import gql from 'graphql-tag';

const GET_DATA = gql`
  query {
    characters {
      results {
        id
        name
        species
      }
    }
  }
`;

export default GET_DATA;
