import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
      createUser(email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
          token
          user {
            _id
            firstname
            lastname
            }
      }
  }
`;

export const UPDATE_USER = gql`
mutation updateUser($email: String!, $password: String!, $firstname: String!, $lastname: String!,
  $phone: String, headshot:String, aboutMe: String) {
    createUser(email: $email, password: $password, firstname: $firstname, lastname: $lastname,
      phone:$phone, headshot: $headshot, aboutMe: $aboutMe ) {
        token
        user {
          _id
          firstname
          lastname
        }
    }
}
`;

export const ADD_PROJECT = gql`
mutation addProject($title: String!, $thumbnail: String, $repoLink: String, $deployedLink: String,
  $videoLink: String, $organization: String, $blurb: String, $projectSkills: [String]) {
    createUser(title: $title, thumbnail: $thumbnail, repoLink: $repolink, deployedLink: $deployedLink,
      videoLink: $videoLink, organization: $organization, blurb: $blurb, projectSkills: $projectSkills ) {
        token
        user {
          _id
          firstname
          lastname
          projects
        }
    }
}

`;




