import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
// import { Feather } from "react-native-vector-icons"
import { ToggleButton } from 'react-native-paper';
const Header = ({ navigation, children, title, icon }) => {
    return (
        <>
            <View style={{ width: "100%", height: "17%", backgroundColor: "#00B27A", alignItems: 'center', justifyContent: 'center', marginBottom: -15, zIndex: -1, display: 'flex', flexDirection: 'row', position: 'relative' }}>
                    <ToggleButton onPress={() => navigation.openDrawer()} icon="format-align-left" value="left"  size={35} color="white" style={{ position: 'absolute', zIndex: 10, left: 0, marginLeft: 10 }}/>
                <Pressable  >
                    {/* <Image source={require("../assets/drawer.jpg")} style={{ width: 30, height: 30, }} resizeMode="contain" /> */}
                    {/* <Feather name="menu" color="white" size={35} /> */}
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