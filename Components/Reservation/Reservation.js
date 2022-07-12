import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import ReserveManuallyModal from './ReserveManuallyModal';

import CalendarStrip from 'react-native-calendar-strip';
import axios from "axios"
import { Calendar } from 'react-native-big-calendar'
const Reservation = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [CurrentDate, SetCurrentDate] = React.useState(new Date())



    const darkTheme = {
        palette: {
            primary: {
                main: '#00B27A',
                contrastText: '#000',
            },

        },
    }
    return (
        <Header navigation={navigation} title="Reservation" icon={require("../../assets/PrenotazioniIcon.png")}>
            <ScrollView style={{ width: "95%", alignSelf: "center", marginBottom: 120 }}>

                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: 20 }}>
                    <Pressable onPress={() => navigation.navigate("ReservationSettings")} style={{ width: "40%", height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", }}>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Impostazioni</Text>
                    </Pressable>
                    <Pressable onPress={() => showModal()} style={{ width: "40%", height: 30, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", }}>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>Prenota Manualmente</Text>
                    </Pressable>
                </View>

                <View>
                    <View style={{
                        width: "90%", shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.21,
                        shadowRadius: 7.68,
                        elevation: 10, borderRadius: 15, marginVertical: 6, alignSelf: "center", backgroundColor: "white", marginTop: 25
                    }}>
                        <CalendarStrip

                            onDateSelected={(date) => SetCurrentDate(date)}
                            scrollable
                            style={{ height: 80, borderRadius: 20, }}
                            calendarColor={'#fff'}
                            calendarHeaderStyle={{ color: '#bbbbbb' }}
                            showMonth={false}
                            showDayName={true}
                            selectedDate={new Date()}
                            showDayNumber={true}
                            dateNumberStyle={{ color: '#414141' }}
                            dateNameStyle={{ color: '#D0D0D0' }}
                            highlightDateNumberStyle={{ color: "#fff", }}
                            highlightDateNameStyle={{ color: "#fff" }}
                            highlightDateContainerStyle={{ backgroundColor: "#00B27A", borderRadius: 5, }}
                            iconContainer={{ flex: 0.08 }}
                            iconStyle={{ display: "none" }}
                        />
                    </View>




                    <View style={{ marginTop: -90, zIndex: -1 }}>
                        <Calendar
                            // onPressEvent={event => {
                            //     SetSinglePosts(event)
                            //     showModal()

                            // }} 
                            date={CurrentDate}
                            theme={darkTheme}
                            // events={AllFacebookPost}
                            events={[]}
                            height={550} mode="day"
                            swipeEnabled={false}
                            dayHeaderStyle={{ display: "none", height: 0 }}
                            dayHeaderHighlightColor={{ display: "none", height: 0 }} />
                    </View>
                </View>
            </ScrollView>



            <ReserveManuallyModal visible={visible} hideModal={hideModal} />
        </Header>
    )
}

export default Reservation

