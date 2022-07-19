import { RefreshControl, View, Text } from 'react-native'
import React, { useContext } from 'react'
import CompletedCard from './CompletedCard'
import axios from "axios"
import { MyContext } from '../../../AppContext'
import { ScrollView } from 'react-native-gesture-handler'
import uuid from "react-native-uuid"
const Completed = () => {
    const { Token } = useContext(MyContext)
    const [CampagineList, SetList] = React.useState([])
    const [Loading, SetLoading] = React.useState(false)

    const getAuthConfig = () => ({
        headers: { authorization: `Bearer ${Token}` },
    });

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        SetLoading(true);
        wait(2000).then(() => getCampaigns());
    }, []);


    async function getCampaigns() {
        SetLoading(true)
        try {
            const url = `https://dashboard.develop.rc.aigotsrl-dev.com/api/socials/fb/campaigns?status=['ARCHIVED']`;
            const result = await axios.get(url, getAuthConfig());
            SetList(result.data)
        } catch (error) {
            console.log(error.response)
        }
        SetLoading(false)
    };
    React.useEffect(() => { getCampaigns() }, [])
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={Loading}
                    tintColor="#00B27A"
                    colors={["#00B27A"]}
                    onRefresh={onRefresh}
                />
            }
            style={{ marginTop: 30, marginBottom: 100 }}>

            {!Loading && CampagineList && CampagineList.length === 0 && <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "600" }}>You have 0 Camps</Text>}

            {!Loading && CampagineList && CampagineList?.length > 0 && CampagineList?.map((item) => {

                return (
                    <InProgressCard key={uuid.v4()} Camp={item} />
                )
            })}
        </ScrollView>
    )
}

export default Completed