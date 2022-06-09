import React from 'react'
import { View, Text, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from "../Components/Home/Home"
import Delivery from "../Components/Delivery/Delivery"
import Marketing from "../Components/Marketing/Marketing"
import FidelityCard from "../Components/FidelityCard/FidelityCard"
import Notifications from "../Components/Notifications/Notifications"
import Prodotti from "../Components/Prodotti/Prodotti"
import CreateMainCategorie from "../Components/Prodotti/CreateMainCategorie"
import SubCategories from "../Components/Prodotti/SubCategories"
import CreateSubCategorie from "../Components/Prodotti/CreateSubCategorie"
import AllProducts from "../Components/Prodotti/AllProducts"
import EditProduct from "../Components/Prodotti/EditProduct"
import CreateProduct from "../Components/Prodotti/CreateProduct"
import Reservation from "../Components/Reservation/Reservation"
import Ristorante from "../Components/Ristorante/Ristorante"
import SocialMedia from "../Components/Social media/SocialMedia"
import Support from "../Components/Support/Support"
import SingleTicket from "../Components/Support/SingleTicket"
import MarketingCamps from '../Components/Marketing/MarketingCamps';
import PersonalizeCamp from '../Components/Marketing/PersonalizeCamp';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
function ProdottiStackk() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainCategories" component={Prodotti} />
            <Stack.Screen name="CreateMainCategorie" component={CreateMainCategorie} />
            <Stack.Screen name="SubCategories" component={SubCategories} />
            <Stack.Screen name="CreateSubCategorie" component={CreateSubCategorie} />
            <Stack.Screen name="AllProducts" component={AllProducts} />
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
function MyDrawer() {
    return (
        <Drawer.Navigator >

            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Home" component={Home} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Ristorante" component={Ristorante} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Prodotti" component={ProdottiStackk} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Delivery" component={Delivery} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Reservation" component={Reservation} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Social media" component={SocialMedia} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Marketing" component={MarketingStack} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Support" component={SupportStack} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="FidelityCard" component={FidelityCard} />
            <Drawer.Screen options={{ headerShown: false, drawerActiveTintColor: "#00B27A" }} name="Notifications" component={Notifications} />
        </Drawer.Navigator>
    );
}


export default function Navigation({ navigation }) {

    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer >
    );
}
