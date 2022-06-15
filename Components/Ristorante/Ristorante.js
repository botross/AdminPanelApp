import { Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../Reuseable/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'

import RestaurantInfo from './RestaurantInfo/RestaurantInfo';
import Aggiuntive from './Aggiuntive/Aggiuntive';
import Fatturazione from './Fatturazione/Fatturazione';
import SocialMain from './Social/SocialMain';
import Payments from './Payments/Payments';
import Personale from './Personale/PersonaleMain';

const Ristorante = ({ navigation }) => {
    const [isActive, SetActive] = React.useState(0)


    const Buttons =
        [
            {
                id: 0,
                name: "Info Ristorante",
            },
            {
                id: 1,
                name: "Info Aggiuntive",
            },
            {
                id: 2,
                name: "Dati Fatturazione",
            },
            {
                id: 3,
                name: "Account Social",
            },
            {
                id: 4,
                name: "Metodo di Pagamento",
            },
            {
                id: 5,
                name: "Personale",
            }
        ]

    return (
        <Header navigation={navigation} title="Ristorante" icon={require("../../assets/RistoranteIcon.png")}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginBottom: 10, maxHeight:80,  minHeight:80 }} >
                {Buttons.map((btn, index) => {
                    return (
                        <TouchableOpacity onPress={() => SetActive(btn.id)} key={index} style={{ padding: 20, borderBottomWidth: 2, borderBottomColor: isActive === btn.id ? "#00B27A" : "#AEAEAE", width: 220, alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "700", color: isActive === btn.id ? "#00B27A" : "#AEAEAE" }}>{btn.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>

            {isActive === 0 && <RestaurantInfo />}
            {isActive === 1 && <Aggiuntive />}
            {isActive === 2 && <Fatturazione />}
            {isActive === 3 && <SocialMain />}
            {isActive === 4 && <Payments />}
            {isActive === 5 && <Personale />}
        </Header>
    )
}

export default Ristorante
