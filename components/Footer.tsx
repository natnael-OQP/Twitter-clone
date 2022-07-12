import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from './Icon'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createLike, deleteLike } from '../graphql/mutations'

type Props = {
    id: string
    tweet: any
}

const Footer = ({ id, tweet }: Props) => {
    const [isLiked, setLiked] = useState('')
    const [user, setUser] = useState(false)
    const [likesCounter, SetLikesCounter] = useState(
        tweet.likes.items.length > 0 ? Number(tweet.likes.items.length) : 0
    )

    const handelLike = async () => {
        if (!user) {
            return
        }

        if (isLiked) {
            SetLikesCounter(likesCounter - 1)
            setLiked('')
            try {
                console.log(isLiked)

                const res = await API.graphql(
                    graphqlOperation(deleteLike, { input: { id: isLiked } })
                )
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        } else {
            SetLikesCounter(likesCounter + 1)
            setLiked('data.createLike.id')
            const input = {
                userId: user.attributes.sub,
                tweetId: id,
            }

            try {
                const { data } = await API.graphql(
                    graphqlOperation(createLike, { input })
                )
                setLiked(data.createLike.id)
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        const fetcher = async () => {
            const user = await Auth.currentAuthenticatedUser()
            setUser(user)
        }

        fetcher()
    }, [])

    useEffect(() => {
        if (user) {
            tweet.likes.items.forEach((item) => {
                if (item.userId === user?.attributes.sub) {
                    setLiked(item.id)
                }
            })
        }
    }, [user])

    return (
        <View style={styles.footer}>
            <Icon name="comment" number={123} />
            <Icon name="retweet" number={230} />

            <Icon
                name={isLiked ? 'heart' : 'hearto'}
                color={isLiked ? 'red' : 'grey'}
                number={likesCounter}
                size={24}
                onPress={handelLike}
            />

            <Icon name="share-google" number={0} />
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4,
        marginLeft: -5,
    },
})
