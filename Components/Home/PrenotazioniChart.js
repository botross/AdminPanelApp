import { View, Text } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-gifted-charts";

const PrenotazioniChart = () => {
    const data = [
        { value: 15, label: "Jan", labelTextStyle: { color: 'gray', marginLeft: 20 }, },
        { value: 30, label: "Feb", labelTextStyle: { color: 'gray', marginLeft: 20 }, },
        { value: 26, label: "Mar", labelTextStyle: { color: 'gray', marginLeft: 20 }, },
        { value: 40, label: "April", labelTextStyle: { color: 'gray', marginLeft: 20 }, },
        { value: 31, label: "May", labelTextStyle: { color: 'gray', marginLeft: 20 }, },
        { value: 24, label: "June", labelTextStyle: { color: 'gray', marginLeft: 20 }, },
        { value: 50, label: "July", labelTextStyle: { color: 'gray', marginLeft: 20 }, },


    ];
    return (
        <View style={{ backgroundColor: "#F8F8F8", padding: 10, width: "95%", alignSelf: "center", marginVertical: 20, borderRadius: 15 }}>

            <View style={{
                backgroundColor: 'white',
                paddingBottom: 14,
                borderRadius: 15,
            }}>
                <Text style={{ paddingLeft: 12, paddingTop: 12, fontSize: 20, fontWeight: "600" }}>Totali Prenotazioni</Text>
                <Text style={{ paddingLeft: 16, fontSize: 13, fontWeight: "300", color:"#8A8A8A" , marginBottom:10}}>Download Complessivo: 100.000</Text>
                <LineChart
                    hideRules
                    xAxisThickness={0}
                    yAxisThickness={0}
                    yAxisTextStyle={{ color: 'gray' }}
                    noOfSections={5}
                    thickness={3}
                    color="#00B27A"
                    maxValue={50}
                    areaChart
                    dataPointsColor1='#00B27A'
                    startFillColor={'#00B27A'}
                    endFillColor={'#00B27A'}
                    startOpacity={0.4}
                    endOpacity={0.1}
                    spacing={60}

                    initialSpacing={0}

                    data={data} />
            </View>
        </View>
    )
}

export default PrenotazioniChart