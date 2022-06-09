import { View, Text, Image } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { BarChart, PieChart } from "react-native-gifted-charts";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
const Home = ({ navigation }) => {
    const renderLegend = (text, color) => {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 8, alignItems: 'center' }}>
                <View
                    style={{
                        height: 14,
                        width: 14,
                        marginRight: 10,
                        borderRadius: 100,
                        backgroundColor: color || 'white',
                    }}
                />
                <Text style={{ color: '#8A8A8A', fontSize: 12 }}>{text}</Text>
            </View>
        );
    };
    const stackData = [
        {
            stacks: [
                { value: 30, color: '#1B3D71', },
                { value: 30, color: '#2B65BB', },
                { value: 20, color: '#BE53A3' },
                { value: 20, color: '#ECBD5B', borderTopRightRadius: 10, borderTopLeftRadius: 10, },
            ],
            label: 'Jan',
        },
        {
            stacks: [
                { value: 30, color: '#1B3D71' },
                { value: 30, color: '#2B65BB' },
                { value: 20, color: '#BE53A3' },
                { value: 50, color: '#ECBD5B', borderTopRightRadius: 10, borderTopLeftRadius: 10, },
            ],
            label: 'Mar',
        },
        {
            stacks: [
                { value: 30, color: '#1B3D71' },
                { value: 50, color: '#2B65BB' },
                { value: 20, color: '#BE53A3' },
                { value: 10, color: '#ECBD5B', borderTopRightRadius: 10, borderTopLeftRadius: 10, },
            ],
            label: 'Feb',
        },
        {
            stacks: [
                { value: 60, color: '#1B3D71' },
                { value: 30, color: '#2B65BB' },
                { value: 20, color: '#BE53A3' },
                { value: 10, color: '#ECBD5B', borderTopRightRadius: 10, borderTopLeftRadius: 10, },
            ],
            label: 'Mar',
        },
    ];

    const pieData = [
        { value: 54, color: '#4D9253', text: '54%' },
        { value: 40, color: '#243C6D', text: '30%' },
        { value: 20, color: '#A8231E', text: '26%' },
    ];
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
                        <Image source={require("../../assets/HomeIcon2.png")} style={{ width: 70, height: 70, marginBottom: 8 }} resizeMode="contain" />
                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#00B27A" }}>Nuovi ordini</Text>

                    </View>
                    <View style={{ width: "47%", alignItems: 'center', height: 180, justifyContent: 'center', alignSelf: 'center', backgroundColor: "#F8F8F8", borderRadius: 14, display: 'flex', flexDirection: "column", }}>
                        <Image source={require("../../assets/HomeIcon1.png")} style={{ width: 70, height: 70, marginBottom: 8 }} resizeMode="contain" />

                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#00B27A" }}>Prenotazioni</Text>

                    </View>
                </View>

                <View style={{ backgroundColor: "#F8F8F8", padding: 10, width: "95%", alignSelf: "center", marginVertical: 20, borderRadius: 15 }} >

                    <View style={{ width: "100%", alignSelf: "center", paddingVertical: 10, backgroundColor: "white", borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <BarChart
                            width={250}
                            yAxisThickness={0}
                            yAxisIndicesColor="#fff"
                            noOfSections={4}
                            stackData={stackData}
                        />
                    </View>
                </View>
                <View style={{ backgroundColor: "#F8F8F8", padding: 10, width: "95%", alignSelf: "center", marginVertical: 20, borderRadius: 15 }} >

                    <View style={{ height: 200, backgroundColor: "white", alignItems: "center", display: 'flex', flexDirection: 'row', borderRadius: 15 }}>
                        <View style={{ width: "55%", height: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

                            <PieChart
                                donut

                                radius={85}
                                toggleFocusOnPress={false}
                                innerRadius={75}
                                // focusOnPress
                                data={pieData}
                                centerLabelComponent={() => {
                                    return <Text style={{ fontSize: 12 }}>Google my Business</Text>
                                }}
                            />

                        </View>
                        <View
                            style={{

                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                alignSelf: 'flex-end',
                                marginBottom: 12,
                                marginRight: 50

                            }}>
                            {renderLegend('Google My Business', '#4D9253')}
                            {renderLegend('Social', '#243C6D')}
                            {renderLegend('Campagne Marketing', '#A8231E')}
                        </View>
                    </View>
                </View>

            </ScrollView>

        </Header>

    )
}

export default Home