import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import BouncyCheckbox from "react-native-bouncy-checkbox";
const DropDownCheckBox = ({title}) => {
    return (
        <View style={{marginVertical:10, display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 14 }}>
            <BouncyCheckbox
                size={25}
                fillColor="#00B27A"
                unfillColor="#FFFFFF"
                // text="Custom Checkbox"
                iconStyle={{ borderColor: "#00B27A" }}
                textStyle={{}}
                onPress={(isChecked) => { }}
            />
            <Text style={{ fontSize: 18, color: "#00B27A", fontWeight: "600", marginRight: 15 , width:100}}>{title}</Text>
            <View style={{ maxWidth: "50%", minWidth:"50%" }}>
                <RNPickerSelect
                    placeholder={{
                        label: 'Seleziona ora...',
                        value: null,
                        color: '#00B27A',
                    }}
                    style={pickerSelectStyles}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />
            </View>


        </View>
    )
}

export default DropDownCheckBox

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#00B27A',
        borderRadius: 4,
        color: '#00B27A',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#00B27A',
        borderRadius: 8,
        color: '#00B27A',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});