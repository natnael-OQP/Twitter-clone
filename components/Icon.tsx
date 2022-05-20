import { StyleSheet, Text, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

interface Props {
    name: string
    size?: number
    color?: string
    number?: number
}

const Icon = ({ name, size = 35, color = 'grey', number }: Props) => {
    return (
        <View style={styles.container}>
            <EvilIcons name={name} size={size} color={color} />
            {number && <Text style={styles.iconText}>{number}</Text>}
        </View>
    )
}

export default Icon

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        marginLeft: 5,
        color: 'grey',
    },
})
