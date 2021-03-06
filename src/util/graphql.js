import { gql } from "@apollo/client";

const GET_POSTS = gql`
    query getPosts {
        getPosts {
            id
            userId
            username
            body
            createdAt
            likeCount
            likes {
                id
                userId
                username
                createdAt
            }
            commentCount
            comments {
                id
                userId
                username
                body
                createdAt
            }
        }
    }
`;

const CREATE_POST = gql`
    mutation CreatePost($body: String!) {
        createPost(body: $body) {
            id
            userId
            username
            body
            createdAt
            likeCount
            likes {
                id
                userId
                username
                createdAt
            }
            commentCount
            comments {
                id
                userId
                username
                body
                createdAt
            }
        }
    }
`;

const DELETE_POST = gql`
    mutation DeletePost($postId: ID!) {
        deletePost(postId: $postId) {
            id
            username
            body
        }
    }
`;

const LIKE_POST = gql`
    mutation LikePost($postId: ID!) {
        likePost(postId: $postId) {
            id
            likeCount
            likes {
                id
                userId
            }
        }
    }
`;

const CREATE_COMMENT = gql`
    mutation CreateComment($postId: ID!, $body: String!) {
        createComment(postId: $postId, body: $body) {
            id
            commentCount
            comments {
                id
                userId
            }
        }
    }
`;

const DELETE_COMMENT = gql`
    mutation DeleteComment($postId: ID!, $userId: ID!, $commentId: ID!) {
        deleteComment(postId: $postId, userId: $userId, commentId: $commentId) {
            id
            commentCount
            comments {
                id
                userId
            }
        }
    }
`;

const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            username
            createdAt
            conversations
            posts
            token
        }
    }
`;

const REGISTER_USER = gql`
    mutation Register($username: String!, $email: String!, $password: String!) {
        register(username: $username, email: $email, password: $password) {
            id
            email
            username
            createdAt
            conversations
            posts
            token
        }
    }
`;

const GET_CONVERSATION = gql`
    query GetConversation($conversationId: ID!) {
        getConversation(conversationId: $conversationId) {
            id
            userIds
            messages {
                id
                userId
                body
                createdAt
            }
            createdAt
        }
    }
`;

const CREATE_CONVERSATION = gql`
    mutation CreateConversation($userIds: [ID]!) {
        createConversation(userIds: $userIds) {
            id
            userIds
            messages {
                id
                userId
                body
                createdAt
            }
            createdAt
        }
    }
`;
/*
const CREATE_MESSAGE = gql`
    mutation CreateMessage($conversationId: ID, $recipientId: ID!, $body: String!) {
        createMessage(conversationId: $conversationId, recipientId: $recipientId, body: $body) {
            id
            userId
            body
            createdAt
        }
    }
`;
*/
const CREATE_MESSAGE = gql`
    mutation CreateMessage($conversationId: ID, $recipientId: ID!, $body: String!) {
        createMessage(conversationId: $conversationId, recipientId: $recipientId, body: $body) {
            message {
                id
                userId
                body
                createdAt
            }
            conversation {
                id
                userIds
                messages {
                    id
                    userId
                    body
                    createdAt
                }
                createdAt
            }
            users {
                userId
                username
            }
        }
    }
`;

const DELETE_MESSAGE = gql`
    mutation DeleteMessage($conversationId: ID!, $messageId: ID!) {
        deleteMessage(conversationId: $conversationId, messageId: $messageId) {
            id
            userIds
            messages
            createdAt
        }
    }
`;

const GET_PROFILE = gql`
    query GetProfile($userId: ID!) {
        getProfile(userId: $userId) {
            userId
            username
        }
    }
`;

const GET_CONVERSATIONS = gql`
    query GetConversations($conversationIds: [ID]) {
        getConversations(conversationIds: $conversationIds) {
            conversationId
            userId
            username
        }
    }
`;

const GET_USER = gql`
    query GetUser {
        getUser {
            id
            username
            email
            password
            createdAt
            posts
            conversations
        }
    }
`;

const FETCH_CONVERSATIONS = gql`
    query FetchConversations($conversationIds: [ID!]) {
        fetchConversations(conversationIds: $conversationIds) {
            conversation {
                id
                userIds
                messages {
                    id
                    userId
                    body
                    createdAt
                }
                createdAt
            }
            profile {
                userId
                username
            }
        }
    }
`;

export {
    GET_POSTS,
    CREATE_POST,
    DELETE_POST,
    LIKE_POST,
    CREATE_COMMENT,
    DELETE_COMMENT,
    LOGIN_USER,
    REGISTER_USER,
    GET_CONVERSATION,
    CREATE_CONVERSATION,
    CREATE_MESSAGE,
    DELETE_MESSAGE,
    GET_PROFILE,
    GET_CONVERSATIONS,
    GET_USER,
    FETCH_CONVERSATIONS
};
