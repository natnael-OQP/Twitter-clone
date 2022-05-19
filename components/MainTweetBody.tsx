import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TweetsProps } from '../types'
import Icon from './Icon'

interface Props {
    tweet: TweetsProps
}

const MainTweetBody = ({ tweet }: Props) => {
    const { user, content, image } = tweet

    return (
        <View style={styles.container}>
            {/* username */}
            <View style={styles.header}>
                <Text>{user.name}</Text>
                <Text>{user.username}</Text>
            </View>
            {/* content */}
            <View style={styles.main}>
                <Text style={styles.content}>{content}</Text>
                {image && (
                    <Image style={styles.image} source={{ uri: image }} />
                )}
            </View>
            {/* footer */}
            <View style={styles.footer}>
                <Icon name="comment" number={123} />
                <Icon name="retweet" number={230} />
                <Icon name="heart" number={2300} />
                <Icon name="share-google" />
            </View>
        </View>
    )
}

export default MainTweetBody

const styles = StyleSheet.create({
    container: {},
    header: {},
    name: {},
    username: {},
    main: {},
    content: {},
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginTop: 10,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})
