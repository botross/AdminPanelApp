import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../Components/Home/Home"
import Delivery from "../Components/Delivery/Delivery"
import AdvancedSettings from "../Components/Delivery/AdvancedSettings"
import Marketing from "../Components/Marketing/Marketing"
import FidelityCard from "../Components/FidelityCard/FidelityCard"
import Notifications from "../Components/Notifications/Notifications"
import Prodotti from "../Components/Prodotti/Prodotti"
import CreateMainCategorie from "../Components/Prodotti/CreateCatalogBottomSheet"
import SubCategories from "../Components/Prodotti/Categories/SubCategories"

import AllProducts from "../Components/Prodotti/Products/AllProducts"
import EditProduct from "../Components/Prodotti/Products/EditProduct"
import CreateProduct from "../Components/Prodotti/Products/CreateProduct"
import Reservation from "../Components/Reservation/Reservation"
import ReservationSettings from "../Components/Reservation/ReservationSettings"
import Ristorante from "../Components/Ristorante/Ristorante"
import SocialMedia from "../Components/Social media/SocialMedia"
import Support from "../Components/Support/Support"
import SingleTicket from "../Components/Support/SingleTicket"
import MarketingCamps from '../Components/Marketing/MarketingCamps';
import PersonalizeCamp from '../Components/Marketing/PersonalizeCamp';
import { Ionicons, Entypo, MaterialIcons, FontAwesome, Feather, AntDesign } from "react-native-vector-icons"
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import { MyContext } from '../AppContext';
import Toast from 'react-native-toast-message';
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();




function ProdottiStackk() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainCategories" component={Prodotti} />
            <Stack.Screen name="CreateMainCategorie" component={CreateMainCategorie} />
            <Stack.Screen name="SubCategories" component={SubCategories} />

            <Stack.Screen name="AllProducts" component={AllProducts}  />
            <Stack.Screen name="EditProduct" component={EditProduct} />
            <Stack.Screen name="CreateProduct" component={CreateProduct} />
        </Stack.Navigator>
    );
}

function SupportStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TicketsMain" component={Support} />
            <Stack.Screen name="SingleTicket" component={SingleTicket} />
        </Stack.Navigator>
    )
}
function MarketingStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MarketingMain" component={Marketing} />
            <Stack.Screen name="MarketingCamps" component={MarketingCamps} />
            <Stack.Screen name="PersonalizeCamp" component={PersonalizeCamp} />
        </Stack.Navigator>
    )
}
function DeliveryStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DeliveryMain" component={Delivery} />
            <Stack.Screen name="AdvancedSettings" component={AdvancedSettings} />
        </Stack.Navigator>
    )
}
function ReservationStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ReservationCalendar" component={Reservation} />
            <Stack.Screen name="ReservationSettings" component={ReservationSettings} />
        </Stack.Navigator>
    )
}
function MyDrawer() {
    return (
        <Drawer.Navigator  >

            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-home"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Home" component={Home} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A", drawerInactiveTintColor: "#ccc"
                , drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="restaurant"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Ristorante" component={Ristorante} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A", unmountOnBlur: true
                , drawerIcon: ({ focused, size }) => (
                    <Entypo
                        name="archive"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Prodotti" component={ProdottiStackk} />
            <Drawer.Screen

                options={{
                    headerShown: false, drawerActiveTintColor: "#00B27A", unmountOnBlur: true
                    , drawerIcon: ({ focused, size }) => (
                        <MaterialIcons
                            name="delivery-dining"
                            size={size}
                            color={focused ? '#00B27A' : '#ccc'}
                        />
                    ),
                }} name="Delivery" component={DeliveryStack} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <FontAwesome
                        name="book"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Reservation" component={ReservationStack} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="share-social"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),

            }} name="Social media" component={SocialMedia} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <Feather
                        name="trending-up"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Marketing" component={MarketingStack} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <MaterialIcons
                        name="support-agent"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Support" component={SupportStack} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <AntDesign
                        name="creditcard"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="FidelityCard" component={FidelityCard} />
            <Drawer.Screen options={{
                headerShown: false, drawerActiveTintColor: "#00B27A"
                , drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="notifications"
                        size={size}
                        color={focused ? '#00B27A' : '#ccc'}
                    />
                ),
            }} name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}
function SignUpStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    const { Token } = useContext(MyContext)
    return (
        <NavigationContainer>
            {!Token ? <SignUpStack /> : <MyDrawer />}

            <Toast />
        </NavigationContainer >
    );
}
