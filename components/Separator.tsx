import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Separator = () => {
    return <View style={styles.separator} />
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255 ,0.3)',
    },
})
