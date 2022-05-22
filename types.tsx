/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined
    Modal: undefined
    NotFound: undefined
    NewTweetScreen: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>

export type RootTabParamList = {
    Home: undefined
    Search: undefined
    Notifications: undefined
    Messages: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >

export type UserProps = {
    id: string
    username: string
    name: string
    image?: string
}

export type TweetsProps = {
    id: string
    user: UserProps
    createdAt: string
    content: string
    image?: string
    numberOfComments: number
    numberOfRetweets: number
    numberOfLikes: number
}
