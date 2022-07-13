import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import Colors from '../constants/Colors'
import Avatar from '../components/Avatar'
import { useNavigation } from '@react-navigation/native'
import { API, Auth, graphqlOperation, Storage } from 'aws-amplify'
import { createTweet } from '../graphql/mutations'
import { getUser } from '../graphql/queries'
import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'

const NewTweetScreen = () => {
    const [tweet, setTweet] = useState('')
    const [image, setImage] = useState(null)
    const [url, setUrl] = useState('')
    const [user, setUser] = useState(null)
    const [avatar, setAvatar] = useState('')
    const [percentage, setPercentage] = useState(0)

    const navigation = useNavigation()

    const createNewTweet = async (newTweet: any) => {
        try {
            await API.graphql(
                graphqlOperation(createTweet, { input: newTweet })
            )
        } catch (error) {
            console.log(error)
        }
    }

    const handelSubmit = async () => {
        if (user && tweet) {
            const newTweet = {
                content: tweet,
                image: url,
                userId: user,
            }
            await createNewTweet(newTweet)
            setTweet('')
            setUrl('')
            navigation.navigate('Home')
        }
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setPercentage(0)
            setImage(result.uri)
            // upload image
            await uploadImage('demo.jpg', result.uri)
        }
    }

    // handelUpload
    const uploadImage = async ({ filename, img }: any) => {
        Auth.currentCredentials()
        try {
            const res = await Storage.put(filename, img, {
                level: 'public',
                contentType: 'image/jpeg image/jpg',
                progressCallback(progress) {
                    const calculated = parseInt(
                        (progress.loaded / progress.total) * 100
                    )
                    console.log(calculated)
                },
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(percentage)

    useEffect(() => {
        const fetcher = async () => {
            const authUser = await Auth.currentAuthenticatedUser()
            setUser(authUser.attributes.sub)
            if (authUser) {
                const { data } = await API.graphql(
                    graphqlOperation(getUser, { id: authUser.attributes.sub })
                )
                setAvatar(data.getUser.image)
            }
        }
        fetcher()
    }, [])

    useEffect(() => {
        ;(async () => {
            if (Constants.platform?.ios || Constants.platform?.android) {
                const cameraRollStatus =
                    await ImagePicker.requestMediaLibraryPermissionsAsync()
                const cameraStatus =
                    await ImagePicker.requestCameraPermissionsAsync()
                if (
                    cameraRollStatus.status !== 'granted' ||
                    cameraStatus.status !== 'granted'
                ) {
                    alert('Sorry, we need these permissions to make this work!')
                }
            }
        })()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            {!avatar ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    {/* header */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                        >
                            <AntDesign
                                name="close"
                                size={30}
                                color={Colors.light.tint}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handelSubmit}
                        >
                            <Text style={styles.text}>Tweet</Text>
                        </TouchableOpacity>
                    </View>
                    {/* header-X */}
                    <View style={styles.inputContainer}>
                        <Avatar image={avatar} />
                        <View style={{ width: '100%', marginLeft: 10 }}>
                            <TextInput
                                style={styles.tweetInput}
                                value={tweet}
                                onChangeText={setTweet}
                                placeholder="what's happening"
                                multiline
                                maxLength={200}
                                numberOfLines={3}
                            />
                            <TouchableOpacity
                                activeOpacity={0.55}
                                onPress={pickImage}
                            >
                                <AntDesign
                                    style={{ marginBottom: 10 }}
                                    name="addfile"
                                    size={30}
                                    color="black"
                                />
                            </TouchableOpacity>
                            {!image && (
                                <TextInput
                                    placeholder="Image url (optional)"
                                    style={styles.imageInput}
                                    value={url}
                                    onChangeText={setUrl}
                                />
                            )}
                        </View>
                    </View>
                    <View
                        style={{
                            width: '100%',
                            marginTop: 20,
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginHorizontal: 'auto',
                            // alignItems: 'center',
                        }}
                    >
                        {image && (
                            <Image
                                source={{ uri: image }}
                                style={{
                                    width: '90%',
                                    aspectRatio: 5 / 3,
                                    borderRadius: 5,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                }}
                            />
                        )}
                    </View>
                </>
            )}
        </SafeAreaView>
    )
}

export default NewTweetScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        flex: 1,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    button: {
        backgroundColor: Colors.light.tint,
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text: {
        color: '#fff',
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 0,
        width: '100%',
    },
    tweetInput: {
        fontSize: 14,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 15,
        height: 60,
        maxHeight: 300,
        alignItems: 'flex-start',
    },
    imageInput: { paddingLeft: 6 },
})
