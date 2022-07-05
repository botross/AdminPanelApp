import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MyContext } from '../../../AppContext';
import axios from "axios"
const Aggiuntive = ({ SetActive }) => {
  const { userData, Token } = useContext(MyContext)
  const [attributeValues, setAttributeValues] = useState([]);

  const [loading, Setloading] = React.useState(true)
  const [dataName, setDataName] = useState("");

  const url = "https://admin.develop.unifarco.aigotsrl-dev.com/api/gmb/labels"

  function getLables() {

    try {
      if (!userData.socialAccounts.gmbLocationResourceIdentifier) {
        SetActive(3)
      }
      axios
        .get(url, { headers: { Authorization: `Bearer ${Token}` } })
        .then((res) => {
          if (Array.isArray(res.data.attributesValue))
            setAttributeValues(res.data.attributesValue);
          setDataName(res.data.name);
          Setloading(false)
        });
    } catch (error) {
      console.error(error);
      Setloading(false)
    }

  }


  React.useEffect(() => { getLables() }, [])
  const handleSubmit = () => {
    axios
      .patch(
        url,
        {
          attributesValue: attributeValues,
          name: dataName,
          eTag: null,
        },
        { headers: { Authorization: `Bearer ${Token}` } }
      )
      .then((res) => console.log("response", res))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (name, checked) => {
    setAttributeValues(
      attributeValues.map((element) =>
        element["name"] === name
          ? { ...element, values: [checked] }
          : element
      )
    );
  };
  console.log(loading)

  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: "600", color: "#323232", paddingLeft: 15 }}>Seleziona servizi</Text>
      {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />}

      {!loading && attributeValues.map((attributeValue, idx) => (
        <View

          style={{ width: 500, marginTop: 20 }}
          key={idx}
        >
          <View className="flex-1">
            <Text style={{ fontSize: 14, fontWeight: "400", color: "#323232", paddingLeft: 20, marginVertical: 8 }}>
              {attributeValue.name && (
                <Text>
                  {/*trimming the attribute name */}
                  {attributeValue.name
                    .toUpperCase()
                    .replace(/_/g, " ")
                    .replace("ATTRIBUTES/", "")
                    .split("attributes/")}
                </Text>
              )}
            </Text>

            {attributeValue.values && (
              <>
                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", paddingLeft: 20, marginRight: 50, marginBottom: 10 }}>
                  <BouncyCheckbox
                    size={25}
                    fillColor="#00B27A"
                    unfillColor="#FFFFFF"
                    iconStyle={{ borderColor: "#00B27A", borderRadius: 5 }}
                    textStyle={{}}
                    isChecked={attributeValue.values[0]
                      ? attributeValue.values[0]
                      : false}
                    onPress={(isChecked) => { handleChange(attributeValue.name, isChecked) }}
                  />
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#AEAEAE", marginVertical: 8 }}>
                    {attributeValue.name
                      .replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                        return g1.toUpperCase() + g2.toLowerCase();
                      })
                      .replace("Attributes/", "")
                      .replace(/_/g, " ")
                      .split("attributes/")}
                  </Text >

                </View>
              </>


            )}



          </View>
        </View>
      ))}


      {!loading &&
        <TouchableOpacity onPress={() => handleSubmit()} style={{ width: 240, height: 50, backgroundColor: '#00B27A', borderRadius: 10, alignSelf: 'center', justifyContent: "center", alignItems: 'center', marginTop: 20, marginBottom: 150 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Salva</Text>
        </TouchableOpacity>}

    </ScrollView>
  )
}

export default Aggiuntive