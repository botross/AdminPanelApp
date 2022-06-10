import { View, Text } from 'react-native'
import React from 'react'
import { BarChart, PieChart } from "react-native-gifted-charts";

const TotalOrdiniChart = () => {

    const renderTitle = () => {
        return (
            <View style={{ marginVertical: 30 }}>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingLeft: 10
                    }}>
                    Totali Ordini Ricevuti
                </Text>
                <View
                    style={{
                        paddingLeft: 10,
                        marginTop: 14,

                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#2B65BB',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Totale Ordini Prenotazioni
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#BE53A3',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Totale Ordini Pickup
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#ECBD5B',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Totale Prenotazione Servizi
                        </Text>
                    </View>
                </View>
            </View>
        )
    }



    const barData = [
        {
            value: 40,
            label: 'Jan',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: { color: 'gray', marginLeft: 6 },
            frontColor: '#2B65BB',
        },
        { value: 50, frontColor: '#BE53A3', spacing: 2, },
        { value: 20, frontColor: '#ECBD5B' },
        {
            value: 50,
            label: 'Feb',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: { color: 'gray', marginLeft: 6 },
            frontColor: '#2B65BB',
        },
        { value: 50, frontColor: '#BE53A3', spacing: 2, },
        { value: 40, frontColor: '#ECBD5B' },
        {
            value: 75,
            label: 'Mar',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: { color: 'gray', marginLeft: 6 },
            frontColor: '#2B65BB',
        },
        { value: 50, frontColor: '#BE53A3', spacing: 2, },
        { value: 25, frontColor: '#ECBD5B' },
        {
            value: 30,
            label: 'Apr',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: { color: 'gray', marginLeft: 6 },
            frontColor: '#2B65BB',
        },
        { value: 50, frontColor: '#BE53A3', spacing: 2, },
        { value: 20, frontColor: '#ECBD5B' },
        {
            value: 60,
            label: 'May',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: { color: 'gray', marginLeft: 6 },
            frontColor: '#2B65BB',
        },
        { value: 50, frontColor: '#BE53A3', spacing: 2, },
        { value: 40, frontColor: '#ECBD5B' },
        {
            value: 65,
            label: 'Jun',
            spacing: 2,
            labelWidth: 40,
            labelTextStyle: { color: 'gray', marginLeft: 6 },
            frontColor: '#2B65BB',
        },
        { value: 50, frontColor: '#BE53A3', spacing: 2, },
        { value: 30, frontColor: '#ECBD5B' },
    ];
    return (
        <View style={{ backgroundColor: "#F8F8F8", padding: 10, width: "95%", alignSelf: "center", marginVertical: 20, borderRadius: 15 }}>

            <View
                style={{
                    backgroundColor: 'white',
                    paddingBottom: 10,
                    borderRadius: 15,
                }}>
                {renderTitle()}
                <BarChart
                    data={barData}
                    barWidth={8}
                    spacing={24}
                    roundedTop
                    roundedBottom
                    hideRules
                    xAxisThickness={0}
                    yAxisThickness={0}
                    yAxisTextStyle={{ color: 'gray' }}
                    noOfSections={5}
                    maxValue={75}
                />
            </View>
        </View>
    )
}

export default TotalOrdiniChart

