import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Aggiuntive = () => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#323232", paddingLeft: 15 }}>Seleziona servizi</Text>


      <Text style={{ fontSize: 14, fontWeight: "400", color: "#323232", paddingLeft: 20, marginVertical: 15 }}>Ambiente</Text>
      <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', }}>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", paddingLeft: 20, marginRight: 50 }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"

            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#AEAEAE", marginVertical: 15 }}>Accogliente</Text>

        </View>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"
            style={{ borderRadius: 10 }}
            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#AEAEAE", marginVertical: 15 }}>Informale</Text>
        </View>
      </View>



      <Text style={{ fontSize: 14, fontWeight: "400", color: "#323232", paddingLeft: 20, marginVertical: 15 }}>Pagamenti</Text>
      <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', }}>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", paddingLeft: 20, marginRight: 46 }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"

            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#AEAEAE", marginVertical: 15 }}>Carte di debito</Text>

        </View>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"
            style={{ borderRadius: 10 }}
            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#AEAEAE", marginVertical: 15 }}>Dispositivo mobile NFC</Text>
        </View>
      </View>





      <Text style={{ fontSize: 14, fontWeight: "400", color: "#323232", paddingLeft: 20, marginVertical: 15 }}>Opzioni di servizio</Text>
      <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', }}>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", paddingLeft: 20, marginRight: 8 }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"

            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#AEAEAE", marginVertical: 15 }}>Consegna a domicilio</Text>

        </View>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"
            style={{ borderRadius: 10 }}
            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#AEAEAE", marginVertical: 15 }}>Ritiro sul posto</Text>
        </View>
      </View>





      <Text style={{ fontSize: 14, fontWeight: "400", color: "#323232", paddingLeft: 20, marginVertical: 15 }}>Accessibilità</Text>
      <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', }}>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", paddingLeft: 20, marginRight: 16 }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"

            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#AEAEAE", marginVertical: 15, width: 120 }}>Ingresso accessibile in sedia a rotelle</Text>

        </View>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", }}>
          <BouncyCheckbox
            size={25}
            fillColor="#00B27A"
            style={{ borderRadius: 10 }}
            unfillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
            textStyle={{}}
            onPress={(isChecked) => { }}
          />
          <Text style={{ fontSize: 12, fontWeight: "400", color: "#AEAEAE", marginVertical: 15, width: 150 }}>Parcheggio accessibile
            in sedia a rotelle</Text>
        </View>
      </View>

      <TouchableOpacity style={{ width: 240, height: 50, backgroundColor: '#00B27A', borderRadius: 10, alignSelf:'center', justifyContent: "center", alignItems: 'center' , marginTop:20}}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Salva</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Aggiuntive