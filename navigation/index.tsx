/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable, StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '../screens/ModalScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import HomeScreen from '../screens/HomeScreen'
import TabTwoScreen from '../screens/TabTwoScreen'
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../types'
import LinkingConfiguration from './LinkingConfiguration'
import { Ionicons } from '@expo/vector-icons'
import Avatar from '../components/Avatar'
import NewTweetScreen from '../screens/NewTweetScreen'

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    )
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Screen name="NewTweetScreen" component={NewTweetScreen} />
        </Stack.Navigator>
    )
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>()

function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarShowLabel: false,
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }: RootTabScreenProps<'Home'>) => ({
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                    headerTitle: () => (
                        <Ionicons
                            name="ios-logo-twitter"
                            size={24}
                            color={Colors.light.tint}
                        />
                    ),
                    headerLeftContainerStyle: {
                        marginLeft: 15,
                    },
                    headerLeft: () => (
                        <Avatar
                            image="https://avatars.githubusercontent.com/u/81810944?v=4"
                            size={42}
                        />
                    ),
                    headerRightContainerStyle: {
                        marginRight: 15,
                    },
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <MaterialCommunityIcons
                                name="star-four-points-outline"
                                size={24}
                                color={Colors.light.tint}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="Search"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" size={size} color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="notifications"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Messages"
                component={TabTwoScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="mail" size={size} color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name']
    color: string
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

const styles = StyleSheet.create({
    avatar: {
        // width
    },
})
