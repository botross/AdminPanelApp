import { View, Text, ScrollView, TextInput, Pressable, Image } from 'react-native'
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from 'react-native-vector-icons'
import React, { useContext } from 'react'
import Header from '../../../Reuseable/Header'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker';
import { REACT_APP_THEMES_PREFIX, REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_THEMES_API_PATH } from "@env"
import { MyContext } from '../../../AppContext';

const EditProduct = ({ route, navigation }) => {
    const { productData } = route.params
    const { userData } = useContext(MyContext)
    const [NewData, SetNewData] = React.useState(productData)

    function handleChange(name, text) {
        SetNewData({ ...NewData, [name]: text })
    }
    let openImagePickerAsync = async () => {
        SetNewData({ ...NewData, image: null })

        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(pickerResult);
        SetNewData({ ...NewData, image: pickerResult.uri })

    }

    const updateProduct = async (id, data) => {
        try {
            const formData = new FormData();
            if (data.image) {
                formData.append("image", data.image);
                delete data.image;
            }
            Object.keys(data).forEach(key => formData.append(key, data[key]));

            const url = `https://${userData._id}.${REACT_APP_THEMES_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_THEMES_API_PATH}/products/${id}`;
            const result = await axios.patch(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (!result.data || result.data?.Error || result.data?.error)
                throw new Error(result.data?.Error || result.data?.error);

            return result.data;
        } catch (error) {
            console.log(error.response)
        }
    };


    return (
        <Header navigation={navigation} title="Edit Product" icon={require("../../../assets/ProdottiIcon.png")} >

            <ScrollView style={{ marginBottom: 90 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 10 }}>
                    <Ionicons name="arrow-back-circle" color="#00B27A" size={50} />
                </Pressable>
                <View style={{ width: "100%", alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 15 }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
                        <Pressable onPress={() => openImagePickerAsync()}>

                            <Image source={{ uri: NewData?.image, width: 45, height: 45 }} style={{ width: 160, height: 140, borderRadius: 15 }} />
                        </Pressable>


                        <Text style={{ color: "#00B27A", fontWeight: "700", fontSize: 26, width: "50%", alignSelf: "center", textAlign: "center" }}>Modifica prodotto</Text>

                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Nome prodotto</Text>
                        <TextInput onChangeText={(e) => handleChange("title", e)} value={NewData.title} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Brand</Text>
                        <TextInput onChangeText={(e) => handleChange("brand", e)} value={NewData.brand} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Price</Text>
                        <TextInput onChangeText={(e) => handleChange("price", e)} value={NewData.price.toString()} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" keyboardType='numeric' />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Format</Text>
                        <TextInput onChangeText={(e) => handleChange("format", e)} value={NewData.format} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Formulation</Text>
                        <TextInput onChangeText={(e) => handleChange("formulation", e)} value={NewData.formulation} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>GTIN</Text>
                        <TextInput onChangeText={(e) => handleChange("gtin", e)} value={NewData?.gtin?.toString()} style={{ width: "95%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, alignSelf: 'center' }} placeholder="Inserisci nome del prodotto" keyboardType='numeric' />
                        {/* <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Ingredienti</Text>
                        <TextInput onChangeText={(e) => handleChange("ingredients", e)} value={NewData.ingredients[0]} multiline={true} style={{ width: "95%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, padding: 10, marginBottom: 10, alignSelf: 'center', textAlignVertical: "top" }} placeholder="Inserisci qui gli ingredienti..." />
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Allergeni</Text>
                        <TextInput onChangeText={(e) => handleChange("allergens", e)} value={NewData.allergens[0]} multiline={true} style={{ width: "95%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, padding: 10, marginBottom: 10, alignSelf: 'center', textAlignVertical: "top" }} placeholder="Inserisci qui gli allergeni..." /> */}
                        <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Informazioni Aggiuntive:</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="fire" color="#C25039" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Piccante</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox isChecked size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="tree" color="#25BE35" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Vegano</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialCommunityIcons name="tree-outline" color="#00B27A" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Vegetariano</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                            <BouncyCheckbox size={25} fillColor="#00B27A" unfillColor="#FFFFFF" iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }} onPress={(isChecked) => { }} />
                            <MaterialIcons name="do-not-disturb" color="#2B65BB" size={20} />
                            <Text style={{ color: "#989898", fontSize: 14, fontWeight: "400", marginLeft: 5 }}>Senza Glutine</Text>
                        </View>
                    </View>

                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Aggiungi Formato e Prezzo</Text>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", borderWidth: 1, borderColor: "#00B27A", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginRight: 10 }}>Aggiungi Formato e Prezzo</Text>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                    </Pressable>


                    <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", marginVertical: 15 }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Formato</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>Piccola</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Prezzo</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>€ 4,00</Text>
                        </View>
                        <MaterialCommunityIcons name="delete-circle" color="#C2222B" size={35} />
                    </View>


                    <Text style={{ fontWeight: "600", fontSize: 18, color: "#00B27A", marginVertical: 10 }}>Aggiungi Opzione Extra</Text>
                    <Pressable style={{ paddingHorizontal: 22, height: 50, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "white", display: "flex", flexDirection: "row", borderWidth: 1, borderColor: "#00B27A", marginVertical: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginRight: 10 }}>Aggiungi Opzione Extra</Text>
                        <Octicons name="diff-added" color="#00B27A" size={25} />
                    </Pressable>


                    <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", marginVertical: 15 }}>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Extra</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>Pomodorini</Text>
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ color: "#323232", fontSize: 18, fontWeight: "400", marginBottom: 6 }}>Prezzo</Text>
                            <Text style={{ color: "#323232", fontSize: 16, fontWeight: "400", paddingVertical: 12, paddingHorizontal: 25, backgroundColor: "#F6F6F6", borderRadius: 10 }}>€ 4,00</Text>
                        </View>
                        <MaterialCommunityIcons name="delete-circle" color="#C2222B" size={35} />
                    </View>



                    <Pressable onPress={() => updateProduct(NewData._id, NewData)} style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 30 }}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Aggiungi</Text>
                    </Pressable>
                    <Pressable style={{ width: "80%", height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", alignSelf: "center", marginTop: 20, borderWidth: 1, borderColor: "#00B27A", marginBottom: 40 }}>
                        <Text style={{ color: "#00B27A", fontSize: 20, fontWeight: "600" }}>Torna Indietro</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </Header>
    )
}

export default EditProduct