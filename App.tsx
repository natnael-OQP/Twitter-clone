import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
// aws amplify
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsconfig from './src/aws-exports'

import { withAuthenticator } from 'aws-amplify-react-native'
import { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { getUser } from './graphql/queries'
import { createUser } from './graphql/mutations'

Amplify.configure(awsconfig)

function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

    const saveUserToDB = async (user: any) => {
        await API.graphql(graphqlOperation(createUser, { input: user }))
    }

    useEffect(() => {
        const updateUser = async () => {
            const authUser = await Auth.currentAuthenticatedUser()

            if (authUser) {
                // check if user already exist in database
                const { data }: any = await API.graphql(
                    graphqlOperation(getUser, { id: authUser.attributes.sub })
                )

                if (!data.getUser) {
                    const user = {
                        id: authUser.attributes.sub,
                        username: authUser.username,
                        name: authUser.username,
                        email: authUser.attributes.email,
                        image: 'http://cdn.onlinewebfonts.com/svg/img_215059.png',
                    }
                    await saveUserToDB(user)
                } else {
                    console.log('user already exists')
                }
            }
        }

        updateUser()
    }, [])

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        )
    }
}

export default withAuthenticator(App)
