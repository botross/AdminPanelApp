import { View, Text } from 'react-native'
import React from 'react'
import { BarChart, PieChart } from "react-native-gifted-charts";

const TotalVisitorsChart = () => {
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
                        display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", paddingRight: 40
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <View
                            style={{
                                height: 12,
                                width: 12,
                                borderRadius: 6,
                                backgroundColor: '#1B3D71',
                                marginRight: 8,
                            }}
                        />
                        <Text
                            style={{
                                height: 16,
                                color: 'lightgray',
                            }}>
                            Restaurant Discovery Portal
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
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
                                width: 75,
                                color: 'lightgray',
                            }}>
                            Mobile App
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
                            Google My Business
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
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
                                width: 75,
                                color: 'lightgray',
                            }}>
                            Overall
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    const stackData = [
        {
            stacks: [
                { value: 30, color: '#1B3D71', },
                { value: 30, color: '#2B65BB', },
                { value: 20, color: '#BE53A3' },
                { value: 20, color: '#ECBD5B', borderTopRightRadius: 8, borderTopLeftRadius: 8, },
            ],
            label: 'Jan',
            labelTextStyle: { color: 'gray' },
        },
        {
            stacks: [
                { value: 30, color: '#1B3D71' },
                { value: 30, color: '#2B65BB' },
                { value: 20, color: '#BE53A3' },
                { value: 50, color: '#ECBD5B', borderTopRightRadius: 8, borderTopLeftRadius: 8, },
            ],
            label: 'Feb',
            labelTextStyle: { color: 'gray' },

        },
        {
            stacks: [
                { value: 30, color: '#1B3D71', },
                { value: 50, color: '#2B65BB' },
                { value: 20, color: '#BE53A3' },
                { value: 10, color: '#ECBD5B', borderTopRightRadius: 8, borderTopLeftRadius: 8, },
            ],
            label: 'Mar',
            labelTextStyle: { color: 'gray' },

        },
        {
            stacks: [
                { value: 60, color: '#1B3D71' },
                { value: 30, color: '#2B65BB' },
                { value: 20, color: '#BE53A3' },
                { value: 10, color: '#ECBD5B', borderTopRightRadius: 8, borderTopLeftRadius: 8, },
            ],
            label: 'April',
            labelTextStyle: { color: 'gray' },

        },
        {
            stacks: [
                { value: 50, color: '#1B3D71' },
                { value: 40, color: '#2B65BB' },
                { value: 30, color: '#BE53A3' },
                { value: 20, color: '#ECBD5B', borderTopRightRadius: 8, borderTopLeftRadius: 8, },
            ],
            label: 'May',
            labelTextStyle: { color: 'gray' },

        },
        {
            stacks: [
                { value: 5, color: '#1B3D71' },
                { value: 40, color: '#2B65BB' },
                { value: 21, color: '#BE53A3' },
                { value: 22, color: '#ECBD5B', borderTopRightRadius: 8, borderTopLeftRadius: 8, },
            ],
            label: 'June',
            labelTextStyle: { color: 'gray' },

        },
    ];

    return (
        <View style={{ backgroundColor: "#F8F8F8", padding: 10, width: "95%", alignSelf: "center", marginVertical: 20, borderRadius: 15 }} >

            <View style={{
                backgroundColor: 'white',
                paddingBottom: 10,
                borderRadius: 15,
            }}>
                {renderTitle()}
                <BarChart
                    barWidth={12}
                    spacing={30}
                    roundedTop
                    roundedBottom
                    hideRules
                    xAxisThickness={0}
                    yAxisThickness={0}
                    yAxisTextStyle={{ color: 'gray' }}
                    noOfSections={5}

                    stackData={stackData}
                />
            </View>
        </View>
    )
}

export default TotalVisitorsChart