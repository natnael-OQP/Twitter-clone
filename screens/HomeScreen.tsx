import { FlatList, StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../types'
import TweetComponent from '../components/TweetComponent'

import tweets from '../assets/data/tweets'

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <FlatList
                data={tweets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TweetComponent tweet={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
