import { View, Text, ScrollView, Switch, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import WeekDays from './WeekDays'
import { AntDesign } from "react-native-vector-icons"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const AdvancedSettings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Header navigation={navigation} title="Delivery" icon={require("../../assets/DeliveryIcon.png")} >
            <ScrollView style={{ marginBottom: 100 }}>
                <Text onPress={() => navigation.goBack()} style={{ fontSize: 20, fontWeight: "600", color: "#00B27A", marginLeft: 15 }}><AntDesign name="back" color="#00B27A" size={25} /> Back</Text>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10, paddingLeft: 10 }} >
                    <Switch
                        trackColor={{ false: "#767577", true: "#4CAF50" }}
                        thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled} />
                    <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, padding: 12 }}>Imposta Orari di Consegna</Text>

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
                    borderRadius: 10, marginVertical: 20,
                    paddingVertical: 10,

                }}>
                    <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, padding: 12 }}>Imposta Orari di Consegna</Text>
                    <WeekDays title="Lunedi" />
                    <WeekDays title="Martedì" />
                    <WeekDays title="Mercoledì" />
                    <WeekDays title="Giovedì" />
                    <WeekDays title="Venerdì" />
                    <WeekDays title="Sabato" />
                    <WeekDays title="Domenica " />
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
                    borderRadius: 10, marginVertical: 20,
                    padding: 10,

                }}>
                    <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 16, padding: 12 }}>Imposta Zone di Consegna</Text>

                    <MapView
                        provider={PROVIDER_GOOGLE}
                        showsUserLocation
                        style={styles.map} />
                </View>
            </ScrollView>

        </Header>
    )
}

export default AdvancedSettings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {

        height: Dimensions.get('window').height / 4,
    },
});