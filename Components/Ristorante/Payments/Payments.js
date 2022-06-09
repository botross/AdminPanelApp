import { View, Text, ScrollView, ImageBackground, Pressable, Image } from 'react-native'

import React from 'react'

const Payments = () => {
    return (
        <ScrollView>


            <ImageBackground source={require("../../../assets/PaypalBackground.png")} style={{ width: 300, height: 250, alignSelf: "center", borderRadius: 100, position: 'relative' }} resizeMode="contain">
                <View style={{ position: "absolute", bottom: 0, right: 0, margin: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "white", marginBottom: 10 }}>Facebook</Text>
                    <Pressable style={{ borderRadius: 10, justifyContent: "center", alignItems: 'center', backgroundColor: 'transparent', width: 160, height: 40 }}>
                        <Image source={require("../../../assets/PaypalButton.png")} style={{width:"100%" , height:"100%"}} resizeMode="contain" />
                    </Pressable>
                </View>
            </ImageBackground>

            <ImageBackground source={require("../../../assets/StripeBackground.png")} style={{ width: 300, height: 250, alignSelf: "center", borderRadius: 100, position: 'relative', marginTop: 20, marginBottom: 100 }} resizeMode="contain">
                <View style={{ position: "absolute", bottom: 0, right: 0, margin: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "white", marginBottom: 10 }}>Stripe</Text>
                    <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 10, justifyContent: "center", alignItems: 'center', backgroundColor: 'white', width: 160, height: 40 }}>
                        <Text style={{ fontSize: 14, color: "#333259", fontWeight: "600" }}>Carte</Text>
                    </Pressable>
                </View>
            </ImageBackground>

        </ScrollView>
    )
}

export default Payments