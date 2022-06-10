import { View, Text } from 'react-native'
import React from 'react'
import { BarChart, PieChart } from "react-native-gifted-charts";

const CircleChart = () => {
    const pieData = [
        { value: 54, color: '#4D9253', text: '54%' },
        { value: 40, color: '#243C6D', text: '30%' },
        { value: 20, color: '#A8231E', text: '26%' },
    ];
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
    return (
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
    )
}

export default CircleChart