import { View, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Fatturazione = () => {
    return (
        <ScrollView >
            <View style={{ padding: 10, backgroundColor: "#F8F8F8", borderRadius: 10, width: "93%", alignSelf: 'center', marginBottom: 20 }}>
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 10, width: "100%", alignSelf: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Indirizzo di Fatturazione</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="Scrivi l’indirizzo di fatturazione..." />
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Codice Fiscale</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="Scrivi il tuo codice fiscale..." />
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Invoicing Endpoint</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="aigot@pec.it" />
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Nome</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="Scrivi il tuo nome..." />
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Cognome</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="Scrivi il tuo cognome..." />
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>VAT</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="VAT..." />
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Ragione Sociale</Text>
                    <TextInput style={{ width: "100%", height: 40, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginVertical: 10 }} placeholder="Ragione Sociale" />

                </View>
            </View>
            <TouchableOpacity style={{ width: 240, height: 40, backgroundColor: '#00B27A', borderRadius: 10, alignSelf: 'center', marginBottom: 120, justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Salva</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Fatturazione