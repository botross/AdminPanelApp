import { View, Text, StyleSheet, Switch, TextInput, Pressable } from 'react-native'
import React from 'react'

import { FontAwesome } from "react-native-vector-icons"
const DropDownCheckBox = ({ title, isWorkDay, opening }) => {
    const [isEnabled, setIsEnabled] = React.useState(isWorkDay);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ marginVertical: 14, display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 10 }}>

            <Text style={{ fontSize: 12, color: "#000", fontWeight: "600", width: 90 }}>{title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#4CAF50" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}

            />
            <View style={{ maxWidth: "50%", minWidth: "50%", display: "flex", flexDirection: "column" }}>

                {opening?.map((item) => {

                    return (
                        <>
                            <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }} >
                                <TextInput keyboardType = 'number-pad' style={{ width: 70, height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#F6F6F6", padding: 5, marginHorizontal: 10 , textAlign:'center' }} value={item?.openTime?.hours.toString()} />
                                <TextInput keyboardType = 'number-pad' style={{ width: 70, height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "#F6F6F6", padding: 5, marginHorizontal: 10 , textAlign:'center' }} value={item?.closeTime?.hours.toString()} />
                                <Pressable>
                                    <FontAwesome name="remove" size={20} color="black" />
                                </Pressable>
                            </View>
                        </>
                    )
                })}

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