import { FlatList, StyleSheet } from 'react-native'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import TweetComponent from '../components/TweetComponent'

import tweets from '../assets/data/tweets'
import Separator from '../components/Separator'
import CreateTweetButton from '../components/CreateTweetButton'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <FlatList
                data={tweets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TweetComponent tweet={item} />}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={Separator}
            />
            <CreateTweetButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        position: 'relative',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
