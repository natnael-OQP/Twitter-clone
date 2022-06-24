/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        name
        email
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
        tweetUserId
      }
      nextToken
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
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
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        content
        image
        user {
          nextToken
        }
        createdAt
        updatedAt
        userTweetsId
      }
      nextToken
    }
  }
`;
