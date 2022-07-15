import { View, Text, Pressable } from 'react-native'
import React from 'react'

const DeliveryCard = ({ handleSingleItem ,item }) => {

    return (
        <View style={{
            width: "90%", alignSelf: "center", height: 130, borderRadius: 10
            , shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 6,
            },
            shadowOpacity: 0.21,
            shadowRadius: 7.68,
            elevation: 8,
            backgroundColor: "white",
            padding: 15,
            flexDirection: "column", display: "flex", justifyContent: "space-between", marginVertical: 10
        }} >
            <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ display: 'flex', flexDirection: "column" }}>

                    <Text style={{ fontWeight: "600", fontSize: 16, color: "#6C6C6C" }}>{item.customer.firstname} {item.customer.lastnem} </Text>

                    <Text style={{ fontWeight: "400", fontSize: 12, color: "#B2B2B2" }}>{item.customer.phoneNumber}</Text>
                    <Text style={{ fontWeight: "400", fontSize: 12, color: "#B2B2B2" }}>{item.customer.email}</Text>
                </View>
                <Text style={{ fontWeight: "500", fontSize: 15, color: "#00B27A" }}>Total price: ${item.totalPrice}</Text>
            </View>
            <View style={{ width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>


                <Text style={{ fontWeight: "400", fontSize: 12, color: "#B2B2B2" }}>Delivery time: {item.deliveryTime}</Text>
                <Pressable onPress={() => handleSingleItem(item._id)} style={{ width: 60, height: 25, backgroundColor: "#00B27A", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                    <Text style={{ color: "white", fontSize: 12 }}>Vedi</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default DeliveryCard