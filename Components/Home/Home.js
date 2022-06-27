import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TotalOrdiniChart from './TotalOrdiniChart';
import CircleChart from './CircleChart';
import TotalVisitorsChart from './TotalVisitorsChart';
import PrenotazioniChart from './PrenotazioniChart';

const Home = ({ navigation }) => {

    return (

        <Header navigation={navigation} title={"Dashboard"} icon={require("../../assets/DashboardIcon.png")} >
            <ScrollView style={{ marginBottom: 150 }}>

                <Text style={{ fontSize: 20, fontWeight: "700", color: '#00B27A', alignSelf: 'center', marginVertical: 15 }}>Comunicazioni amministrative</Text>


                <View style={{ width: "90%", alignItems: 'center', height: 180, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#F8F8F8", borderRadius: 14, marginVertical: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: "700", color: "#00B27A" }}>7432341</Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: "#AEAEAE", marginVertical: 5 }}>Utenti raggiunti</Text>
                    <TouchableOpacity style={{ width: 160, height: 40, backgroundColor: '#00B27A', borderRadius: 15, justifyContent: "center", alignItems: 'center' }}>
                        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Vai al tuo sito</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ width: "90%", alignItems: 'center', height: 180, justifyContent: 'space-between', alignSelf: 'center', borderRadius: 14, marginBottom: 15, display: 'flex', flexDirection: "row", }}>
                    <View style={{
                        width:
                            "47%", alignItems: 'center', height: 180, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#F8F8F8", borderRadius: 14, display: 'flex', flexDirection: "column",
                    }}>
                        <Image source={require("../../assets/HomeIcon2.png")} style={{ width: 70, height: 70, marginBottom: 8 }} />
                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#00B27A" }}>Nuovi ordini</Text>

                    </View>
                    <View style={{ width: "47%", alignItems: 'center', height: 180, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#F8F8F8", borderRadius: 14, display: 'flex', flexDirection: "column", }}>
                        <Image source={require("../../assets/HomeIcon1.png")} style={{ width: 70, height: 70, marginBottom: 8 }} resizeMode="contain" />

                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#00B27A" }}>Prenotazioni</Text>

                    </View>
                </View>


                <TotalVisitorsChart />
                <CircleChart />
                <TotalOrdiniChart />
                <PrenotazioniChart />
            </ScrollView>

        </Header>

    )
}

export default Home