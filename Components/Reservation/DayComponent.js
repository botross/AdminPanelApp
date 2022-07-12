import { View, Text, Switch, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Feather } from "react-native-vector-icons"


const DayComponent = ({ title }) => {
    const [isEnabled, setIsEnabled] = React.useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ width: "90%", alignSelf: "center" , marginBottom:10 }}>
            <View style={{ display: "flex", flexDirection: 'column' }} >

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ color: "black", fontWeight: "600", fontSize: 16 }}>{title}</Text>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Switch
                            trackColor={{ false: "#767577", true: "#4CAF50" }}
                            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}

                        />
                        <Text style={{ color: "black", fontWeight: "400", fontSize: 16, marginLeft: 10 }}>Aperto</Text>
                    </View>
                </View>

                <View style={{ width: "90%", display: "flex", flexDirection: "column" }}>



                    <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, alignItems: "center", justifyContent: "space-between" }} >
                        <View style={{ width: "100%", display: "flex", flexDirection: 'row', alignItems: "center" }}>

                            <TextInput keyboardType='number-pad' style={{ width: "35%", height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "white", padding: 5, marginHorizontal: 10, textAlign: 'center' }} value={"10:00"} readOnly />
                            <Text style={{ color: "black", fontWeight: "500", fontSize: 28 }}>-</Text>
                            <TextInput keyboardType='number-pad' style={{ width: "35%", height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "white", padding: 5, marginHorizontal: 10, textAlign: 'center' }} value={"18:00"} />
                        </View>
                        <Pressable style={{ marginTop: 10 }}>
                            <Feather name="x" size={25} color="black" />
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row", marginBottom: 10, alignItems: "center", justifyContent: "space-between" }} >
                        <View style={{ width: "100%", display: "flex", flexDirection: 'row', alignItems: "center" }}>

                            <TextInput keyboardType='number-pad' style={{ width: "35%", height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "white", padding: 5, marginHorizontal: 10, textAlign: 'center' }} value={"10:00"} readOnly />
                            <Text style={{ color: "black", fontWeight: "500", fontSize: 28 }}>-</Text>
                            <TextInput keyboardType='number-pad' style={{ width: "35%", height: 30, borderBottomWidth: 2, borderBottomColor: "black", backgroundColor: "white", padding: 5, marginHorizontal: 10, textAlign: 'center' }} value={"18:00"} />
                        </View>
                        <Pressable style={{ marginTop: 10 }}>
                            <Feather name="x" size={25} color="black" />
                        </Pressable>
                    </View>



                </View>
            </View>
        </View>
    )
}

export default DayComponent