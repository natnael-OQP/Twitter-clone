/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
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
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
