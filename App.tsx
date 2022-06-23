import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
// aws amplify
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(awsconfig)

function App() {
    const isLoadingComplete = useCachedResources()
    const colorScheme = useColorScheme()

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
