import { RefreshControl, View, Text, ScrollView, Pressable, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../Reuseable/Header'
import { Octicons } from "react-native-vector-icons"
import UserModal from './UserModal';

import { MyContext } from '../../AppContext';
import CalendarStrip from 'react-native-calendar-strip';
import axios from "axios"
import uuid from "react-native-uuid"
import DeliveryCard from './DeliveryCard';
const Delivery = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const { Token } = useContext(MyContext)
    const [Container, SetContainer] = React.useState([])
    const [DeliveriesList, SetDeliveries] = React.useState([])
    const [SingleOrder, SetSingleOrder] = React.useState([])
    const [Loading, SetLoading] = React.useState(false)
    const [CurrentDate, SetCurrentDate] = React.useState(new Date())
    const [orderType, SetOrderType] = React.useState(false)
    const [isActive, SetActive] = React.useState(0)




    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        SetLoading(true);
        wait(2000).then(() => GetDeliveries());
    }, []);


    function HandleOrderTypeChange(deliveryStatus) {
        SetOrderType(deliveryStatus)
        console.log(deliveryStatus, orderType)
        const filterd = Container.filter((item) => (new Date(item.createdAt).getDate() + "/" + new Date(item.createdAt).getMonth() === new Date(CurrentDate).getDate() + "/" + new Date(CurrentDate).getMonth()) && item.isCompleted == deliveryStatus)
        SetDeliveries(filterd)
    }

    const baseOrdersUrl = `https://deployment.restaurants.club/orders`;

    async function GetDeliveries() {
        SetLoading(true)
        try {
            let url = `${baseOrdersUrl}/?status=pending`;
            const result = await axios.get(url, { headers: { authorization: `Bearer ${Token}` } });
            const today = result.data.filter((item) => (new Date(item.createdAt).getDate() + "/" + new Date(item.createdAt).getMonth() === new Date(CurrentDate).getDate() + "/" + new Date(CurrentDate).getMonth()) && item.isCompleted === (orderType))
            SetDeliveries(today)
            SetContainer(result.data)
        } catch (error) {
            console.log(error)
        }
        SetLoading(false)
    }

    React.useEffect(() => {
        GetDeliveries()
    }, [])

    function filterDeliveries(date) {
        const test = Container.filter((item) => (new Date(item.createdAt).getDate() + "/" + new Date(item.createdAt).getMonth() === new Date(date).getDate() + "/" + new Date(date).getMonth()) && item.isCompleted == orderType)
        SetDeliveries(test)
    }
    function handleSingleItem(id) {
        const singleItem = Container.filter((item) => item._id === id)
        SetSingleOrder(singleItem)
        showModal()
    }
    return (
        <Header navigation={navigation} title="Delivery" icon={require("../../assets/DeliveryIcon.png")} >
            <Pressable onPress={() => navigation.navigate("AdvancedSettings")} style={{ paddingHorizontal: 22, height: 50, marginBottom: 30, justifyContent: "center", alignSelf: "center", alignItems: "center", borderRadius: 10, backgroundColor: "#F6F6F6", display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                <Octicons name="diff-added" color="#00B27A" size={25} />
                <Text style={{ fontWeight: "500", fontSize: 18, color: "#00B27A", marginLeft: 10 }}>Seleziona categorie</Text>
            </Pressable>


            <View style={{ alignSelf: "center", marginBottom: 30 }} >
                <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: 'row', backgroundColor: "#F7F7F7", borderRadius: 15 }}>
                    <Pressable onPress={() => {
                        SetOrderType(false)
                        SetActive(0)
                        HandleOrderTypeChange(false)

                    }} style={{ width: 140, height: 40, backgroundColor: isActive === 0 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: isActive !== 0 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                            Ordini in attesa
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        SetOrderType(true)
                        SetActive(1)
                        HandleOrderTypeChange(true)
                    }} style={{ width: 140, height: 40, backgroundColor: isActive === 1 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: isActive !== 1 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                            Cronologia
                        </Text>
                    </Pressable>
                </View>
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
                    elevation: 10, borderRadius: 15, marginVertical: 6, alignSelf: "center", backgroundColor: "white"
                }}>
                    <CalendarStrip

                        onDateSelected={(date) => {
                            filterDeliveries(date)
                            SetCurrentDate(date)
                        }}
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


            </View>
            {/* {Loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 30, alignSelf: 'center' }} />} */}
            {!Loading && DeliveriesList && DeliveriesList.length > 0 && <Text style={{ textAlign: "left", marginTop: 10, fontSize: 14, fontWeight: "500", color: "#A1A1A1", marginLeft: 10 }}>You have {DeliveriesList.length} order </Text>}

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={Loading}
                        tintColor="#00B27A"
                        colors={["#00B27A"]}
                        onRefresh={onRefresh}
                    />
                }
                style={{ width: "95%", alignSelf: "center", marginTop: 20, paddingBottom: 100 }} contentContainerStyle={{ paddingBottom: 90 }}>
                {!Loading && DeliveriesList && DeliveriesList.length === 0 && <Text style={{ alignSelf: "center", marginVertical: 30, fontSize: 20, fontWeight: "500", color: "#A1A1A1" }}>You have no orders </Text>}
                {!Loading && DeliveriesList && DeliveriesList.length > 0 && DeliveriesList.map((item) => {
                    return (
                        <DeliveryCard key={uuid.v4()} handleSingleItem={handleSingleItem} item={item} />
                    )
                })}
            </ScrollView>

            {SingleOrder && <UserModal visible={visible} hideModal={hideModal} SingleOrder={SingleOrder[0]} />}

        </Header>
    )
}

export default Delivery


