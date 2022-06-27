import { View, Text , Image } from 'react-native'
import React from 'react'

const Header = ({title}) => {
    return (
        <View style={{ position: "relative" }}>

            <Image source={require("../assets/wave.png")} style={{ width: "100%", height: 240 }} resizeMode="stretch" />
            <View style={{
                position: "absolute", width: 220, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", height: 45, bottom: "50%", alignSelf: 'center', shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 7,
                },
                shadowOpacity: 0.21,
                shadowRadius: 7.68,
                elevation: 10
            }}>

                <Text style={{ fontSize: 32, fontWeight: "600", color: "#1E1C0F" }}>{title}</Text>
            </View>
        </View>
    )
}

export default Header