import { View, Text, Pressable, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import { Modal, Portal, Provider } from 'react-native-paper';
import { Feather } from "react-native-vector-icons"
const PostModal = ({ visible, hideModal, SinglePost }) => {
    const containerStyle = { backgroundColor: 'white', padding: 20, width: "90%", alignSelf: "center", borderRadius: 15, zIndex: 100, marginBottom: 150 };
    const { postContent, post_Image } = SinglePost
    const [ImageLoaded, SetLoaded] = React.useState(false)
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ScrollView style={{ position: "relative" }}>
                        <Pressable onPress={() => hideModal()} style={{ position: "absolute", top: 0, right: 0, }}>
                            <Feather name="x-circle" size={30} color="#00b27A" />
                        </Pressable>
                        <Text style={{ marginTop: 30, marginVertical: 20, textAlign: "left", fontWeight: "500" }} >{postContent}</Text>
                        {ImageLoaded &&
                            <Image
                                onLoad={() => SetLoaded(true)}
                                source={{ uri: post_Image, width: 2, height: 2, }}
                                style={{ width: "90%", height: 250, alignSelf: "center", borderRadius: 10 }} resizeMode="contain" />}
                        <View style={{ display: "flex", flexDirection: "row", alignSelf: 'center' }} >
                            <Pressable onPress={() => hideModal()} style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "white", borderRadius: 15, marginRight: 10, borderWidth: 2, borderColor: '#c25039' }}>
                                <Text style={{ color: "#c25039", fontWeight: "600" }}>
                                    Cancella
                                </Text>
                            </Pressable>
                            <Pressable onPress={() => hideModal()} style={{ paddingVertical: 10, paddingHorizontal: 20, backgroundColor: "#00b27A", borderRadius: 15 }}>
                                <Text style={{ color: "white", fontWeight: "600" }}>
                                    Chiudi
                                </Text>
                            </Pressable>

                        </View>
                    </ScrollView>
                </Modal>
            </Portal>

        </Provider>
    )
}

export default PostModal