import { View, Text } from 'react-native'
import React from 'react'
import CalendarStrip from 'react-native-calendar-strip';

import { Calendar } from 'react-native-big-calendar'
const MainCalendar = () => {
    const [CurrentDate, SetCurrentDate] = React.useState(new Date())

    var dt = new Date();
    const events = [
        {
            title: 'Coffee break',
            start: new Date(),
            end: dt.setHours(dt.getHours() + 2),


        },
    ]

    const darkTheme = {
        palette: {
            primary: {
                main: '#00B27A',
                contrastText: '#000',
            },

        },
    }
    return (
        <View>
            <View style={{
                width: "90%", shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.21,
                shadowRadius: 7.68,
                elevation: 10, borderRadius: 15, marginVertical: 6, alignSelf: "center", backgroundColor: "white"
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
                <Calendar date={CurrentDate} theme={darkTheme} events={events} height={500} mode="day" swipeEnabled={false} dayHeaderStyle={{ display: "none", height: 0 }} dayHeaderHighlightColor={{ display: "none", height: 0 }} />
            </View>
        </View>
    )
}

export default MainCalendar