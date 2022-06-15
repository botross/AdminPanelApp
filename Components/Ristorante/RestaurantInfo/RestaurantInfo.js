import { View, ScrollView, TextInput, Text } from 'react-native'

import React from 'react'
import DropDownCheckBox from './DropDownCheckBox';

const RestaurantInfo = () => {
    return (



        <ScrollView style={{ marginBottom: 100 }}>

            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", paddingHorizontal: 15, justifyContent: "space-between", marginBottom: 10 }}>
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Nome Ristorante" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Categorie primarie" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Categorie secondarie" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Indirizzo" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Area di servizio" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Numero di telefono" />
                <TextInput style={{ width: "100%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Descrivi il tuo Ristorante" />

            </View>
            <Text style={{ color: "#000", fontWeight: "600", fontSize: 20, padding: 12, marginBottom:10 }}>L'apertura del tuo Ristorante</Text>
            <View style={{
                width: "95%", alignSelf: "center", backgroundColor: "white", shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.21,
                shadowRadius: 7.68,
                elevation: 10,
                borderRadius: 10, marginBottom: 20,
                paddingVertical: 10,

            }}>
                <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, padding: 12 }}>Imposta Orari di Consegna</Text>
                <DropDownCheckBox title="Lunedi" />
                <DropDownCheckBox title="Martedì" />
                <DropDownCheckBox title="Mercoledì" />
                <DropDownCheckBox title="Giovedì" />
                <DropDownCheckBox title="Venerdì" />
                <DropDownCheckBox title="Sabato" />
                <DropDownCheckBox title="Domenica " />
            </View>

        </ScrollView>

    )
}

export default RestaurantInfo