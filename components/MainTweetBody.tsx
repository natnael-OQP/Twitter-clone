import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TweetsProps } from '../types'
import Icon from './Icon'
import { Entypo } from '@expo/vector-icons'
import moment from 'moment'

interface Props {
    tweet: TweetsProps
}

const MainTweetBody = ({ tweet }: Props) => {
    const { user, content, image, createdAt } = tweet

    return (
        <View style={styles.container}>
            {/* username */}
            <View style={styles.header}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.username}>{user.username}</Text>
                {createdAt && (
                    <Text style={styles.time}>
                        {moment(createdAt).fromNow()}
                    </Text>
                )}
                <TouchableOpacity style={{ marginLeft: 'auto' }}>
                    <Entypo name="chevron-down" size={21} color="grey" />
                </TouchableOpacity>
            </View>
            {/* content */}
            <View>
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
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 7,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
        textTransform: 'capitalize',
    },
    username: {
        fontSize: 16,
        fontWeight: '300',
        marginRight: 5,
    },
    time: {
        color: 'grey',
        fontSize: 12,
    },
    content: {
        fontSize: 16,
        fontWeight: '400',
        marginRight: 7,
        lineHeight: 19,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginTop: 10,
        borderRadius: 10,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        marginLeft: -5,
    },
})
