import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const Header = ({ navigation, children, title, icon }) => {
    return (
        <>
            <View style={{ width: "100%", height: "17%", backgroundColor: "#00B27A", alignItems: 'center', justifyContent: 'center', marginBottom: -15, zIndex: -1, display: 'flex', flexDirection: 'row', position: 'relative' }}>
                <Pressable onPress={() => navigation.openDrawer()} style={{ position: 'absolute', zIndex: 10, left: 0, marginLeft: 10 }}>
                    <Image source={require("../assets/drawer.png")} style={{ width: 30, height: 30, tintColor: "white" }} />
                </Pressable>
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={icon} style={{ width: 30, height: 30, marginRight: 10 }} resizeMode="contain" />
                    <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>{title}</Text>
                </View>
            </View>
            <View style={{ width: "100%", height: "100%", backgroundColor: "white", borderRadius: 20, paddingVertical: 22 }}>
                {children}
            </View>
        </>
    )
}

export default Header