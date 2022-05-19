import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    image: string
    size?: number
}

const Avatar = ({ image, size = 50, ...other }: Props) => {
    return (
        <Image
            style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                ...other,
            }}
            source={{ uri: image }}
        />
    )
}

export default Avatar
