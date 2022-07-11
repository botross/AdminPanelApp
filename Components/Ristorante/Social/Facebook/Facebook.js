import { View, Text, ImageBackground, Pressable, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { MyContext } from '../../../../AppContext';
import * as Facebook from 'expo-facebook';
import axios from "axios"
import PagesBottomSheet from "./PagesBottomSheet"
import { REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"

const FacebookButton = () => {
    const { Token, userData } = useContext(MyContext)

    const [isConnected, setIsConnected] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [Pages, SetPages] = useState([])
    // const [Pages2, SetPages2] = useState([])
    const [fbTokenn, SetfbToken] = useState()


    const refRBSheet = React.useRef();

    async function logIn() {
        try {
            await Facebook.initializeAsync({
                appId: '537603187490942',
            });
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile'],
                });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                handleLoginAsync((await response.json()).id, token)
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            Alert.alert(`Facebook Login Error: ${message}`);
        }
    }

    async function handleLoginAsync(userID, FacebookToken) {
        const config = { headers: { Authorization: `Bearer ${Token}` } };
        setIsLoading(true);
        try {
            // const result1 = await axios.get(
            //     `https://admin.develop.unifarco.aigotsrl-dev.com/api/socials/facebook/exchangeToken?token=${FacebookToken}`,
            //     config
            // );
            // const fbToken = result1?.data?.token
            // SetfbToken(result1?.data?.token)
            // if (!result1.data || result1.Error || !fbToken)
            //     throw new Error(result1.Error);
            // console.log(result1)
            const result2 = await axios.get(
                `https://graph.facebook.com/${userID}/accounts?access_token=${FacebookToken}`,
                config
            );
            if (!result2.data || result2.Error) throw new Error(result2.Error);
            if (result2.data?.data?.length < 1)
                throw new Error("You do not have a page to connect.");

            if (result2.data.length !== []) {
                SetPages(result2.data?.data)
                //open the bottom sheet and show the pages
                refRBSheet.current.open()
            }
        } catch (error) {
            console.log(error);

        }
        setIsLoading(false);
    }



    async function handlePageChoose(id) {
        const config = { headers: { Authorization: `Bearer ${Token}` } };

        try {
            const idd = parseInt(id);
            const result3 = await axios.get(
                `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/socials/facebook/pageAccessToken?pageId=${idd}&token=${fbTokenn}`,
                config
            );
            // const result4 = await axios.get(
            //     `https://admin.develop.unifarco.aigotsrl-dev.com/api/socials/instagram/${fbTokenn}`,
            //     config
            // );
            // SetPages2(result4.data)

            userData.socialAccounts.facebookAuthToken = fbTokenn;
            userData.socialAccounts.facebookPageAuthToken = result3.data.pageToken;
            userData.socialAccounts.facebookPageResourceIdentifier = id;

            //update the userData in the Database
            setUserData(userData);
            setIsConnected(true);
        } catch (error) {
            console.log(error)
        }
    }


    const LogOutAlert = () =>
        Alert.alert(
            "Alert",
            "Are you sure?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => handleLogout() }
            ]
        );


    async function handleLogout() {
        const config = { headers: { Authorization: `Bearer ${Token}` } };

        setIsLoading(true);
        try {
            const body = {
                data: {
                    socialAccounts: {
                        facebookPageAuthToken: null,
                        facebookPageResourceIdentifier: null,
                        facebookAuthLongLiveToken: null,
                        instagramAccountResourceIdentifier: userData.socialAccounts.instagramAccountResourceIdentifier,
                        gmbLocationResourceIdentifier: userData.socialAccounts.gmbLocationResourceIdentifier,
                        locationPlaceId: userData.socialAccounts.locationPlaceId,
                        businessManagerId: userData.socialAccounts.businessManagerId,
                    },
                },
            };

            const result = await axios.patch(
                `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/user`,
                body,
                config
            );

            if (!result.data || result.Error || result.status !== 200)
                throw new Error(result.Error);

            userData.socialAccounts.facebookAuthToken = null;
            userData.socialAccounts.facebookPageAuthToken = null;
            userData.socialAccounts.facebookPageResourceIdentifier = null;
            setUserData(userData);
            setIsConnected(false);
            window.FB.logout();
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }


    return (
        <ImageBackground source={require("../../../../assets/FacebookBackground.png")} style={{ width: 300, height: 250, alignSelf: "center", borderRadius: 100, position: 'relative' }} resizeMode="contain">
            <View style={{ position: "absolute", bottom: 0, right: 0, margin: 20, alignItems: "center" }}>

                <Text style={{ fontSize: 20, fontWeight: "700", color: "white", marginBottom: 10 }}>Facebook</Text>
                <Pressable onPress={() => userData.socialAccounts.facebookPageAuthToken ? LogOutAlert() : logIn()} style={{ borderRadius: 10, justifyContent: "center", alignItems: 'center', backgroundColor: 'white', width: 160, height: 40 }}>
                    <Text style={{ fontSize: 14, color: "#4267B2", fontWeight: "600" }}>{userData.socialAccounts.facebookPageAuthToken ? "Dissconnect" : "Connesso"}</Text>
                </Pressable>
            </View>
            <PagesBottomSheet refRBSheet={refRBSheet} Pages={Pages} handlePageChoose={handlePageChoose} />
        </ImageBackground>
    )
}

export default FacebookButton