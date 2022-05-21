import { StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CreateTweetButton = () => {
    const onPress = () => {}
    return (
        <TouchableOpacity style={styles.cerateButton} onPress={onPress}>
            <MaterialCommunityIcons
                style={{ position: 'absolute', top: 13, left: 10 }}
                name="plus"
                size={19}
                color="white"
            />
            <MaterialCommunityIcons
                style={{ marginLeft: 5 }}
                name="feather"
                size={30}
                color="white"
            />
        </TouchableOpacity>
    )
}

export default CreateTweetButton

const styles = StyleSheet.create({
    cerateButton: {
        bottom: 15,
        right: 10,
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.tint,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
})
