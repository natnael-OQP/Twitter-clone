import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icon from './Icon'

const Footer = () => {
    const [isLiked, setLike] = useState(false)

    const handelLike = () => {
        setLike(!isLiked)
    }

    return (
        <View style={styles.footer}>
            <Icon name="comment" number={123} />
            <Icon name="retweet" number={230} />
            {isLiked ? (
                <Icon
                    name="heart"
                    color="red"
                    number={2300}
                    onPress={handelLike}
                />
            ) : (
                <Icon name="heart" number={2300} onPress={handelLike} />
            )}
            <Icon name="share-google" />
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
