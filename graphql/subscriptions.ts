/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          userId
          content
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      createdAt
      updatedAt
      tweetUserId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          userId
          content
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      createdAt
      updatedAt
      tweetUserId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      name
      email
      image
      tweets {
        items {
          id
          userId
          content
          image
          createdAt
          updatedAt
          userTweetsId
        }
        nextToken
      }
      createdAt
      updatedAt
      tweetUserId
    }
  }
`;
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
      id
      userId
      content
      image
      user {
        items {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          tweetUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
      id
      userId
      content
      image
      user {
        items {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          tweetUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
      id
      userId
      content
      image
      user {
        items {
          id
          username
          name
          email
          image
          createdAt
          updatedAt
          tweetUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      userTweetsId
    }
  }
`;
