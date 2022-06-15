import { View, Text, StyleSheet, Switch, TextInput, Pressable } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { FontAwesome } from "react-native-vector-icons"
const DropDownCheckBox = ({ title }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ marginVertical: 14, display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 14 }}>
            {/* <BouncyCheckbox
                size={25}
                fillColor="#00B27A"
                unfillColor="#FFFFFF"
                // text="Custom Checkbox"
                iconStyle={{ borderColor: "#00B27A" }}
                textStyle={{}}
                onPress={(isChecked) => { }}
            /> */}
            <Text style={{ fontSize: 18, color: "#000", fontWeight: "600", width: 100 }}>{title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#4CAF50" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            <View style={{ maxWidth: "50%", minWidth: "50%", display: "flex", flexDirection: "column" }}>
                {/* <RNPickerSelect
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
                /> */}
                <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }} >
                    <TextInput style={{ width: 70, height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#F6F6F6", padding: 5, marginHorizontal: 10 }} value="09:00" />
                    <TextInput style={{ width: 70, height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#F6F6F6", padding: 5, marginHorizontal: 10 }} value="09:00" />
                    <Pressable>
                        <FontAwesome name="remove" size={20} color="black" />
                    </Pressable>
                </View>
                <View style={{ display: "flex", flexDirection: "row", }} >
                    <TextInput style={{ width: 70, height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#F6F6F6", padding: 5, marginHorizontal: 10 }} value="09:00" />
                    <TextInput style={{ width: 70, height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#F6F6F6", padding: 5, marginHorizontal: 10 }} value="09:00" />
                    <Pressable>
                        <FontAwesome name="remove" size={20} color="black" />
                    </Pressable>
                </View>
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