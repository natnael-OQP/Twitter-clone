import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TweetsProps } from '../types'
import Avatar from './Avatar'
import MainTweetBody from './MainTweetBody'

interface Props {
    tweet: TweetsProps
}

const TweetComponent = ({ tweet }: Props) => {
    const {
        content,
        image,
        user,
        numberOfComments,
        numberOfLikes,
        numberOfRetweets,
    } = tweet
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Avatar image={user?.image} size={50} />
            </View>
            <MainTweetBody tweet={tweet} />
        </View>
    )
}

export default TweetComponent

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 12,
        backgroundColor: '#fff',
    },
    leftContainer: {
        marginRight: 10,
    },
})
