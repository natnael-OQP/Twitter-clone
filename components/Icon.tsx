import {
    GestureResponderEvent,
    Pressable,
    StyleSheet,
    Text,
} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

interface Props {
    name: string
    size?: number
    color?: string
    number?: number
    onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Icon = ({ name, size = 35, color = 'grey', number, onPress }: Props) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <EvilIcons
                name={name}
                size={size}
                color={color}
                onPress={onPress}
            />
            {number && <Text style={styles.iconText}>{number}</Text>}
        </Pressable>
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
