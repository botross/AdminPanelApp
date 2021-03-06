import { Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'
import QA from './Q&A/Q&A'
import MainCalendar from './MainCalendar'
import Reviews from './Comments&Reviews/Reviews'
const SocialMedia = ({ navigation }) => {
    const [isActive, SetActive] = React.useState(0)

    const Buttons =
        [
            {
                id: 0,
                name: "Social Manager",
            },
            {
                id: 1,
                name: "Commenti & Recensioni",
            },
            {
                id: 2,
                name: "Q&A",
            },
        ]
    console.log(new Date().setDate())
    return (
        <Header navigation={navigation} title="SocialMedia" icon={require("../../assets/SocialMediaIcon.png")}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginBottom: 10, maxHeight: 80, minHeight: 80 }} >
                {Buttons.map((btn, index) => {
                    return (
                        <TouchableOpacity onPress={() => SetActive(btn.id)} key={index} style={{ paddingVertical: 15, borderBottomWidth: 2, borderBottomColor: isActive === btn.id ? "#00B27A" : "#AEAEAE", width: 200, alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 12, fontWeight: "700", color: isActive === btn.id ? "#00B27A" : "#AEAEAE" }}>{btn.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            {isActive === 0 && <MainCalendar />}
            {isActive === 1 && <Reviews />}
            {isActive === 2 && <QA />}



        </Header>
    )
}

export default SocialMedia