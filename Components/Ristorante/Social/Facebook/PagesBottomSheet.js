import React from "react";

import { View, Text, Pressable, TextInput } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
const PagesBottomSheet = ({ refRBSheet, Pages, handlePageChoose }) => {
    return (

        <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            animationType="slide"
            closeOnPressMask={true}
            height={670}
            customStyles={{
                draggableIcon: {
                    backgroundColor: "#000"
                },
                container: { height: 600 }
            }}
        >
            <View style={{ width: "100%", padding: 10, height: 550, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                {Pages.map((item) => {
                    return (
                        <>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 4 }} >
                                <Text style={{ color: "black", fontSize: 18, marginVertical: 5 }} >{item.name}</Text>
                                <Pressable
                                    style={{ paddingHorizontal: 6, paddingVertical: 2, borderRadius: 15, backgroundColor: "#3366BB" }}
                                    onPress={() => {
                                        handlePageChoose(item.id)
                                        handleClose()
                                    }}>
                                    <Text style={{ color: "white" }} >Scegli</Text>
                                </Pressable>
                            </View>
                        </>
                    )
                })}
            </View>
        </RBSheet>

    )
}

export default PagesBottomSheet