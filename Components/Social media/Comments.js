import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from "react-native-vector-icons"
import { Rating, AirbnbRating } from 'react-native-ratings';
const Comments = () => {
    const star = require("../../assets/star.png")
    return (
        <View style={{ width: "90%", alignSelf: 'center', backgroundColor: "#FBFBFB", paddingHorizontal: 15, borderRadius: 10, paddingVertical: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 26, color: "#00B27A" }}>Recensioni</Text>
            
            <View style={{ marginVertical: 15 }}>
                <View style={{ padding: 20, backgroundColor: "white", borderRadius: 15 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Entypo name="facebook" color="#4267B2" size={25} />
                        <Text style={{ fontWeight: "600", fontSize: 14, marginHorizontal: 10 }}>Federica Morocutti</Text>
                        <Rating
                            ratingCount={5}
                            imageSize={16}
                            readonly
                            style={{ paddingVertical: 10 }}
                        />
                    </View>
                    <Text style={{ color: '#AEAEAE', fontWeight: '300', fontSize: 12, marginTop: 10 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Lorem ipsum
                        dolor sit amet, consectetur et dolore magna
                        aliqua.
                    </Text>
                </View>
                <Pressable style={{ width: 160, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 15 }}>
                    <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
                        Reply
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Comments