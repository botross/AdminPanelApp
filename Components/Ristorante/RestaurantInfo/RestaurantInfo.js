import { View, ScrollView, TextInput, Text, ActivityIndicator, Pressable } from 'react-native'
import uuid from 'react-native-uuid';
import React, { useContext } from 'react'
import DropDownCheckBox from './DropDownCheckBox';
import { MyContext } from '../../../AppContext';
import axios from "axios"

import { REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"

const RestaurantInfo = ({ SetActive }) => {
    const { userData, Token, SuccessToast, FailedToast } = useContext(MyContext)
    const url = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/gmb/LocationInformation`
    const patchUrl = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/gmb/LocationInformation`;
    const [patchData, setPatchData] = React.useState();
    const [localWorkingHoursData, setLocalWorkingHoursData] = React.useState();
    const [loading, Setloading] = React.useState(false)
    const days = [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
        "SUNDAY",
    ];
    class Day {
        constructor(dayName, isWorkDay = false, opening = []) {
            this.dayName = dayName;
            this.isWorkDay = isWorkDay;
            this.opening = opening;
        }

        /**
         * Creates an opening objects and pushes to opening array
         * @param {Object} openTime openTime of a session received from GMB endpoint
         * @param {Object} closeTime closeTime of a session received from GMB endpoint
         */
        createOpening(openTime, closeTime) {
            const newOpening = {
                openTime: {
                    hours: openTime.hours,
                    // hours: !openTime.hours || openTime.hours > 23 ? 9 : openTime.hours,
                    minutes: openTime.minutes,
                    // minutes: openTime.minutes || 0,
                },
                closeTime: {
                    hours: closeTime.hours,
                    // hours: !closeTime.hours || closeTime.hours > 23 ? 12 : closeTime.hours,
                    minutes: closeTime.minutes,
                    // minutes: closeTime.minutes || 0,
                },
            };
            this.opening.push(newOpening);
        }
        static toGMBSessions(data) {
            return data.opening.map((o) =>
                data.isWorkDay
                    ? {
                        closeDay: data.dayName,
                        closeTime: {
                            hours: o.closeTime.hours > 23 ? 0 : o.closeTime.hours,
                            minutes: o.closeTime.minutes,
                            // minutes: o.closeTime.minutes || 0,
                        },
                        openDay: data.dayName,
                        openTime: {
                            hours: o.openTime.hours,
                            // minutes: o.openTime.minutes || 0,
                            minutes: o.openTime.minutes,
                        },
                    }
                    : {
                        closeDay: data.dayName,
                        closeTime: {
                            hours: null,
                            minutes: null,
                        },
                        openDay: data.dayName,
                        openTime: {
                            hours: null,
                            minutes: null,
                        },
                    }
            );
        }
    }
    function mapToLocalWorkingHours(regularHours) {
        try {
            const mappedDays = days.map((day) => new Day(day));
            return regularHours.reduce((mappedDays, session) => {
                const thisDay = mappedDays.find((d) => d.dayName === session.openDay);
                if (thisDay.dayName === session.openDay) {
                    thisDay.isWorkDay = true;
                    thisDay.createOpening(session.openTime, session.closeTime);
                }
                return mappedDays;
            }, mappedDays);
        } catch (error) {
            console.error(error);
        }
        return [];
    }


    async function getRestaurantInfo() {
        Setloading(true)
        try {
            //redirect to social accounts to connect in case there is no location ID in userData
            if (!userData.socialAccounts?.gmbLocationResourceIdentifier) {
                SetActive(3)
            }
            //get the gmb user info
            await axios
                .get(url, { headers: { Authorization: `Bearer ${Token}` } })
                .then((res) => {

                    setLocalWorkingHoursData(
                        mapToLocalWorkingHours(res.data.data.regularHours).map((e) =>
                            !e.opening.length
                                ? {
                                    ...e,
                                    opening: [
                                        {
                                            openTime: { hours: 0, minutes: 0 },
                                            closeTime: { hours: 0, minutes: 0 },
                                        },
                                    ],
                                }
                                : e
                        )
                    );

                    setPatchData({
                        title: res.data.data?.name,
                        primaryCategory: {
                            primaryCategory: res.data.data.primaryCategory,
                            primaryCategoryDisplayName:
                                res.data.data.primaryCategoryDisplaName,
                        },
                        secondaryCategory: res.data.data.secondaryCategory
                            ? res.data.data.secondaryCategory.map((cat, i) => ({
                                secondaryCategory: cat,
                                secondaryCategoryDisplayName:
                                    res.data.data.secondaryCategoryDisplayName[i],
                            }))
                            : [],
                        address: res.data.data?.address,
                        serviceArea: res.data.data?.serviceArea,
                        phoneNumber: res.data.data?.primaryPhoneNumber,
                        description: res.data.data?.description,
                    });
                });
        } catch (err) {
            console.error("error", err);
        }
        Setloading(false)
    }
    React.useEffect(() => { getRestaurantInfo() }, [])


    async function handleSubmit() {
        Setloading(true)
        try {

            const periods = localWorkingHoursData.reduce((allHours, current) => {
                const sessions = Day.toGMBSessions(current);
                if (sessions) allHours.push(...sessions);
                return allHours;
            }, []);
            await axios
                .patch(
                    patchUrl,
                    {
                        title: patchData.title,
                        phoneNumber: patchData.phoneNumber,
                        address: patchData.address,
                        periods: periods,
                        description: patchData.description,
                        primaryCategory: patchData.primaryCategory.primaryCategory.replace(
                            "categories/",
                            ""
                        ),
                        secondaryCategory: patchData.secondaryCategory.map((secondaryCat) =>
                            secondaryCat.secondaryCategory.replace("categories/", "")
                        ),
                    },
                    {
                        headers: { Authorization: `Bearer ${Token}` },
                    }
                )
                .then(() => {
                    console.log("HEH")
                    SuccessToast("Sucessfully edited");
                });
        } catch (error) {
            console.error(error);
            FailedToast("Something went wrong")
        }
        Setloading(false)
    };

    function handleChange(name, text) {
        setPatchData({ ...patchData, [name]: text })
    }
    function handleChangeArrays(name, text) {
        setPatchData({ ...patchData, [name]: [].concat(text) })
    }
    return (



        <ScrollView style={{ marginBottom: 100 }}>
            {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />}
            {!loading &&
                <>
                    <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", paddingHorizontal: 15, justifyContent: "space-between", marginBottom: 10 }}>

                        <TextInput onChangeText={(text) => handleChange("title", text)} value={patchData?.title} style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Nome Ristorante" />
                        <TextInput onChangeText={(text) => handleChange("primaryCategory", text)} value={patchData?.primaryCategory?.primaryCategoryDisplayName} style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Categorie primarie" />
                        <TextInput onChangeText={(text) => handleChange("description", text)} value={patchData?.description} style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Categorie secondarie" />
                        <TextInput onChangeText={(text) => handleChangeArrays("address", text)} value={patchData?.address[0]} style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Indirizzo" />
                        <TextInput onChangeText={(text) => handleChange("serviceArea", text)} value={patchData?.serviceArea} style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Area di servizio" />
                        <TextInput onChangeText={(text) => handleChange("phoneNumber", text)} value={patchData?.phoneNumber} style={{ width: "48%", height: 50, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10 }} placeholder="Numero di telefono" />
                        <TextInput onChangeText={(text) => handleChange("description", text)} value={patchData?.description} style={{ width: "100%", height: 100, backgroundColor: "#F6F6F6", borderRadius: 10, paddingHorizontal: 10, marginBottom: 10, padding: 10 }} multiline placeholder="Descrivi il tuo Ristorante" />

                    </View>
                    <Text style={{ color: "#000", fontWeight: "600", fontSize: 20, padding: 12, marginBottom: 10 }}>L'apertura del tuo Ristorante</Text>
                    <View style={{
                        width: "95%", alignSelf: "center", backgroundColor: "white", shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.21,
                        shadowRadius: 7.68,
                        elevation: 10,
                        borderRadius: 10, marginBottom: 20,
                        paddingVertical: 10,

                    }}>
                        <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 20, padding: 12 }}>Imposta Orari di Consegna</Text>
                        {localWorkingHoursData?.map((item, index) => {
                            return (
                            
                                    <DropDownCheckBox opening={item.opening} isWorkDay={item.isWorkDay} title={item.dayName} key={uuid.v4()} />
                           
                            )
                        })}
                        {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />}
                        <Pressable onPress={() => handleSubmit()} style={{ width: 240, height: 40, backgroundColor: '#00B27A', borderRadius: 10, alignSelf: 'center', marginBottom: 40, justifyContent: "center", alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Salva</Text>
                        </Pressable>
                    </View>
                </>

            }
        </ScrollView>

    )
}

export default RestaurantInfo