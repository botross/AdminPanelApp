import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import axios from "axios"
import { Calendar } from 'react-native-big-calendar'
import { MyContext } from '../../AppContext';
import PostModal from './PostModal';
const MainCalendar = () => {
    const [CurrentDate, SetCurrentDate] = React.useState(new Date())
    const [Loading, SetLoading] = React.useState(false)
    const [AllFacebookPost, SetAllPosts] = React.useState([])
    const [SinglePost, SetSinglePosts] = React.useState()
    const [visible, setVisible] = React.useState(false);
    const { Token } = useContext(MyContext)

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const config = { headers: { Authorization: `Bearer ${Token}` } };

    async function getSchedules() {
        SetLoading(true)
        try {
            const res = await axios.get("https://admin.develop.unifarco.aigotsrl-dev.com/api/socials/facebook/schedules", config)

            if (res.data) {
                res.data.map((post) => {
                    SetAllPosts(old => old.concat(
                        {
                            title: "Facebook post",
                            start: new Date(post.scheduledFor),
                            end: new Date(post.scheduledFor).setHours(new Date(post.scheduledFor).getHours() + 2),
                            postContent: post.fbpost.message,
                            post_Image: post.fbpost.photoUrl
                        }
                    ))
                })
            }
        } catch (error) {
            console.log(error)
        }
        SetLoading(false)
    }
    React.useEffect(() => { getSchedules() }, [])

    const darkTheme = {
        palette: {
            primary: {
                main: '#00B27A',
                contrastText: '#000',
            },

        },
    }
    return (
        <>
            {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />}
            {!Loading &&
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
                        <Calendar
                            onPressEvent={event => {
                                SetSinglePosts(event)
                                showModal()

                            }} date={CurrentDate}
                            theme={darkTheme}
                            events={AllFacebookPost}
                            height={500} mode="day"
                            swipeEnabled={false}
                            dayHeaderStyle={{ display: "none", height: 0 }}
                            dayHeaderHighlightColor={{ display: "none", height: 0 }} />
                    </View>
                </View>}
            {SinglePost &&
                <PostModal
                    visible={visible}
                    hideModal={hideModal}
                    SinglePost={SinglePost}
                />
            }
        </>

    )
}

export default MainCalendar