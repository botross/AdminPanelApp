import { View, Text, Pressable, ScrollView, Switch } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { AntDesign } from 'react-native-vector-icons'
import DayComponent from './DayComponent'

const ReservationSettings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Header navigation={navigation} title="Reservation" icon={require("../../assets/PrenotazioniIcon.png")}>
            <ScrollView style={{ marginBottom: 80 }}>

                <Text onPress={() => navigation.goBack()} style={{ fontSize: 20, fontWeight: "600", color: "#00B27A", marginLeft: 15 }}><AntDesign name="back" color="#00B27A" size={25} /> Back</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 10, marginTop: 15 }} >

                    <Switch
                        trackColor={{ false: "#767577", true: "#4CAF50" }}
                        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}

                    />
                    <Text style={{ fontWeight: "700", fontSize: 22, color: "#00B27A", marginLeft: 10 }}>Sezione Attivata</Text>
                </View>
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
                    paddingVertical: 10, marginTop: 15

                }}>
                    <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, padding: 12, marginBottom: 10 }}>Imposta Orari di Servizio</Text>
                    <DayComponent title="Monday" />
                    <DayComponent title="Tuesday" />
                    <DayComponent title="Wednesday" />
                    <DayComponent title="Thursday" />
                    <DayComponent title="Friday" />
                    <DayComponent title="Saturday" />
                    <DayComponent title="Sunday" />
                    <Pressable style={{ width: "60%", height: 45, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginVertical: 30 }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Salva</Text>
                    </Pressable>
                </View>
            </ScrollView>

        </Header>
    )
}

export default ReservationSettings