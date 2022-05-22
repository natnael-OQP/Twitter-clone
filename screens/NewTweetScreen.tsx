import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Avatar from '../components/Avatar'
import { useNavigation } from '@react-navigation/native'

const NewTweetScreen = () => {
    const [tweet, setTweet] = useState('')
    const [url, setUrl] = useState('')
    const navigation = useNavigation()
    const onSubmit = () => {
        console.warn(url, tweet)
        setTweet('')
        setUrl('')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <AntDesign
                        name="close"
                        size={30}
                        color={Colors.light.tint}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.text}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <Avatar image="https://avatars.githubusercontent.com/u/81810944?v=4" />
                <View style={{ width: '100%', marginLeft: 5 }}>
                    <TextInput
                        style={styles.tweetInput}
                        value={tweet}
                        onChangeText={setTweet}
                        placeholder="what's happening"
                        multiline
                        maxLength={200}
                        numberOfLines={3}
                    />
                    <TextInput
                        placeholder="Image url (optional)"
                        style={styles.imageInput}
                        value={url}
                        onChangeText={setUrl}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NewTweetScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    button: {
        backgroundColor: Colors.light.tint,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0,
        width: '100%',
    },
    tweetInput: {
        fontSize: 14,
        width: '100%',
        paddingLeft: 6,
        paddingRight: 15,
        height: 90,
        maxHeight: 300,
        alignItems: 'flex-start',
    },
    imageInput: { paddingLeft: 6 },
})
