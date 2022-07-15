import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useContext } from 'react'
import Header from '../../Reuseable/Header'
import { Octicons } from "react-native-vector-icons"
import UserModal from './UserModal';
import { Table, Row, Rows } from 'react-native-table-component';
import { getPendingDeliveries } from "./DeliveryServices"
import { MyContext } from '../../AppContext';
import CalendarStrip from 'react-native-calendar-strip';
import axios from "axios"
import { Calendar } from 'react-native-big-calendar'
import DeliveryCard from './DeliveryCard';
const Delivery = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const { Token } = useContext(MyContext)
    const [Container, SetContainer] = React.useState([])
    const [DeliveriesList, SetDeliveries] = React.useState([])
    const [SingleOrder, SetSingleOrder] = React.useState([])

    const [CurrentDate, SetCurrentDate] = React.useState(new Date())




    const [isActive, SetActive] = React.useState(0)

    function HandleOrderTypeChange(deliveryStatus) {
        const filterd = Container.filter((item) => item.isCompleted === deliveryStatus)
        SetDeliveries(filterd)
    }


    async function GetDeliveries() {
        const Deliveries = await getPendingDeliveries(Token)
        // console.log(Deliveries)
        const today = Deliveries.data.filter((item) => item.deliveryTime === ("Il prima possibile" || new Date()))
        SetDeliveries(today)
        SetContainer(Deliveries.data)
    }

    React.useEffect(() => {
        GetDeliveries()
    }, [])

    function filterDeliveries(date) {
        const test = Container.filter((item) => (new Date(item.deliveryTime).getDate() + "/" + new Date(item.deliveryTime).getMonth() === new Date(date).getDate() + "/" + new Date(date).getMonth()) || item.deliveryTime === "Il prima possibile")
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
                <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: 'row', backgroundColor: "#F7F7F7", alignSelf: "flex-start", borderRadius: 15 }}>
                    <Pressable onPress={() => {
                        SetActive(0)
                        HandleOrderTypeChange(false)
                    }} style={{ width: 140, height: 40, backgroundColor: isActive === 0 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: isActive !== 0 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                            Ordini in attesa
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => {
                        SetActive(1)
                        HandleOrderTypeChange(true)
                    }} style={{ width: 140, height: 40, backgroundColor: isActive === 1 ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: isActive !== 1 ? "#A1A1A1" : "white", fontWeight: "600" }}>
                            Cronologia
                        </Text>
                    </Pressable>
                </View>
            </View>

            {/* {DeliveriesList?.NumOrders && DeliveriesList?.NumOrders.length !== 0 && <Text style={{ marginLeft: 10, fontWeight: "500", fontSize: 18 }}>Number of Orders: {DeliveriesList?.NumOrders}</Text>} */}

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
            <ScrollView style={{ width: "95%", alignSelf: "center", marginTop: 20, paddingBottom: 100 }} contentContainerStyle={{ paddingBottom: 90 }}>
                {DeliveriesList.map((item) => {
                    return (
                        <DeliveryCard handleSingleItem={handleSingleItem} item={item} />
                    )
                })}
            </ScrollView>
            <UserModal visible={visible} hideModal={hideModal} SingleOrder={SingleOrder[0]} />

        </Header>
    )
}

export default Delivery


