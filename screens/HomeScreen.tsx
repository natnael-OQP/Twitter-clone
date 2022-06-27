import { FlatList, StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import TweetComponent from '../components/TweetComponent'

import Separator from '../components/Separator'
import CreateTweetButton from '../components/CreateTweetButton'
import { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listTweets } from '../graphql/queries'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    const [tweets, setTweets] = useState()
    const [loading, setLoading] = useState(false)

    const fetchTweets = async () => {
        setLoading(true)
        try {
            const { data } = await API.graphql(graphqlOperation(listTweets))
            setTweets(data.listTweets.items)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTweets()
    }, [listTweets])

    if (!tweets) {
        return <Text>Loading ....</Text>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tweets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TweetComponent tweet={item} />}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={Separator}
                refreshing={loading}
                onRefresh={fetchTweets}
            />
            <CreateTweetButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        position: 'relative',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
