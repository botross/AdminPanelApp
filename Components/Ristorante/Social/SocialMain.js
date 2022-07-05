import { View, Text, ScrollView, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Facebook from "./Facebook/Facebook"

const SocialMain = () => {

    return (
        <ScrollView>


            <Facebook  />
       
            <ImageBackground source={require("../../../assets/GMBBackground.png")} style={{ width: 300, height: 250, alignSelf: "center", borderRadius: 100, position: 'relative', marginVertical: 20 }} resizeMode="contain">
                <View style={{ position: "absolute", bottom: 0, right: 0, margin: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "white", marginBottom: 10 }}>Google{"\n"}my Business</Text>
                    <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 10, justifyContent: "center", alignItems: 'center', backgroundColor: 'transparent', width: 160, height: 40 }}>
                        <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>Connetti</Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <ImageBackground source={require("../../../assets/InstagramBackground.png")} style={{ width: 300, height: 250, alignSelf: "center", borderRadius: 100, position: 'relative', marginBottom: 100 }} resizeMode="contain">
                <View style={{ position: "absolute", bottom: 0, right: 0, margin: 20, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "white", marginBottom: 10 }}>Instagram</Text>
                    <Pressable style={{ borderWidth: 2, borderColor: "white", borderRadius: 10, justifyContent: "center", alignItems: 'center', backgroundColor: 'transparent', width: 160, height: 40 }}>
                        <Text style={{ fontSize: 14, color: "white", fontWeight: "600" }}>Connetti</Text>
                    </Pressable>
                </View>
            </ImageBackground>

        </ScrollView>
    )
}

export default SocialMain