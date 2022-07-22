import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import uuid from "react-native-uuid"
import shortenText from "../../../Reuseable/shortenText"
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from 'react-native-vector-icons'


const ProductCard = ({ item, navigation, DeleteAlert }) => {
    const [isMore, SetMore] = React.useState(false)
    const defaultImage = require("../../../assets/defaultImageProduc.png")
    const ItemImage = { uri: item.image }

    return (

        <View key={uuid.v4()} style={{ backgroundColor: "#F8F8F8", borderRadius: 15, width: "90%", alignSelf: "center", paddingVertical: 30, paddingHorizontal: 15, position: "relative", marginVertical: 15 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center", marginBottom: 15, marginTop: 10, justifyContent: "space-between", width: "95%" }}>
                <Image source={item.image != "null" ? ItemImage : defaultImage} style={{ width: 140, height: 140, marginRight: 20, borderRadius: 10 }} resizeMode="contain" />
                <View style={{ width: "50%" }}>
                    <Text style={{ color: "#00B27A", fontWeight: "700", fontSize: 22, marginBottom: 6 }}>{item.title}</Text>
                    <Text style={{ color: "#FFA563", fontWeight: "700", fontSize: 20, marginBottom: 6 }}>€ {item.price}</Text>
                    <Text style={{ color: "#000", fontWeight: "400", fontSize: 12, marginBottom: 6 }}>Quantity: {item.inventory}</Text>


                </View>
            </View>
            {item.description &&
                item.description === shortenText(item.description, 100) ?
                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>description: <Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}>{item.description}</Text></Text>
                :
                <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>
                        description:
                        <Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}>
                            {isMore ? item.description : shortenText(item.description, 100)}
                        </Text>
                        <Text onPress={() => SetMore(!isMore)} style={{ fontSize: 12, fontWeight: "300", color: "black" }}>{isMore ? "See less" : "See More"}</Text>
                    </Text>
                </View>
            }

            {item.ingredients?.length > 0 ?

                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Ingredienti: {item.ingredients?.map((allrgn) => { return (<Text style={{ color: "#1E1C0F", fontWeight: "400", fontSize: 14 }}> {allrgn},</Text>) })} </Text>
                :

                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>the ingredients of the product is not available  </Text>

            }

            {item.allergens?.length > 0 ?

                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>Allergeni: {item.allergens?.map((allrgn) => { return (<Text> {allrgn}</Text>) })} </Text>
                :

                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 14, marginVertical: 5 }}>This product has no Allergeni </Text>

            }
            <View style={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>

                {item.indications?.length !== 0
                    ? item.indications.map(x =>
                        x === "SPICY" ? (
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 6 }}>
                                <MaterialCommunityIcons name="fire" color="#C25039" size={25} />
                                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 10 }}>Piccante</Text>
                            </View>
                        ) : x === "VEGAN" ? (
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 6 }}>
                                <MaterialCommunityIcons name="tree" color="#25BE35" size={25} />
                                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 10 }}>Vegano</Text>
                            </View>
                        ) : x === "GLUTEN FREE" ? (
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 6 }}>
                                <MaterialCommunityIcons name="tree-outline" color="#00B27A" size={25} />
                                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 10 }}>Senza Glutine</Text>
                            </View>
                        ) : x === "VEGETARIAN" ? (
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: 6 }}>
                                <MaterialIcons name="do-not-disturb" color="#2B65BB" size={25} />
                                <Text style={{ color: "#1E1C0F", fontWeight: "600", fontSize: 10 }}>Vegetariano</Text>
                            </View>
                        ) : null
                    )
                    : null}
            </View>


            <View style={{ display: "flex", flexDirection: "row", position: "absolute", top: 0, right: 0, margin: 15, alignItems: "center" }}>

                <Pressable onPress={() => navigation.navigate("EditProduct", { productData: item })} style={{ marginRight: 6 }}>
                    <MaterialCommunityIcons name="square-edit-outline" color="#00B27a" size={25} />
                </Pressable>

                <Pressable onPress={() => DeleteAlert(item._id)}>
                    <MaterialCommunityIcons name="delete" color="#BE4E4E" size={25} />
                </Pressable>

            </View>
        </View>
    )
}

export default ProductCard