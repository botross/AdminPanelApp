import { View, Text, Switch, TextInput, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from "react-native-vector-icons"

const WeekDays = ({ title }) => {
    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ marginVertical: 14, display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 14 }}>
            <Text style={{ fontSize: 16, color: "#000", fontWeight: "600", width: 90 }}>{title}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#4CAF50" }}
                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled} />
            <View style={{ maxWidth: "50%", minWidth: "50%", display: "flex", flexDirection: "column" }}>
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

export default WeekDays