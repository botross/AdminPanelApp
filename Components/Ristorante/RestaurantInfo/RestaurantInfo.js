import { View, ScrollView, TextInput, } from 'react-native'

import React from 'react'
import DropDownCheckBox from './DropDownCheckBox';

const RestaurantInfo = () => {
    return (



        <ScrollView style={{ marginBottom: 150 }}>

            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", paddingHorizontal: 15, justifyContent: "space-between", marginBottom: 10 }}>
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Nome Ristorante" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Categorie primarie" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Categorie secondarie" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Indirizzo" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Area di servizio" />
                <TextInput style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Numero di telefono" />
                <TextInput style={{ width: "100%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Descrivi il tuo Ristorante" />

            </View>

            <DropDownCheckBox title="Lunedi" />
            <DropDownCheckBox title="Martedì" />
            <DropDownCheckBox title="Mercoledì" />
            <DropDownCheckBox title="Giovedì" />
            <DropDownCheckBox title="Venerdì" />
            <DropDownCheckBox title="Sabato" />

        </ScrollView>

    )
}

export default RestaurantInfo