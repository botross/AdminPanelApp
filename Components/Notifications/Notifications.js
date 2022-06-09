import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'

const Notifications = ({navigation}) => {
    return (
        <Header navigation={navigation} title="Notifications" icon={require("../../assets/PrenotazioniIcon.png")}>
            <Text>Notifications</Text>
        </Header>
    )
}

export default Notifications