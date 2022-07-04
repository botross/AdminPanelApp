import { View, Text, TextInput, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Reuseable/Header2'
import axios from "axios"
import { Fontisto } from "react-native-vector-icons"
const Register = ({ navigation }) => {
    const [name, SetName] = useState("")
    const [surname, SetSurname] = useState("")
    const [phone, SetPhone] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [isTouched, SetTouched] = useState({ name: false, surname: false, email: false, password: false, phone: false })
    const [Error, SetError] = useState("")
    const [loading, setLoading] = useState(false)
    const onBlurHandler = (field) => SetTouched((prevFields) => ({ ...prevFields, [field]: true }));
    const data =
    {
        "name": name,
        "lastname": surname,
        "email": email,
        "password": password,
        "phone_number": phone
    }
    async function handleRegister() {
        if (name.length > 3 && surname && phone.length > 8 && password.length > 4 && email.includes("@") && email.includes(".")) {
            setLoading(true)
            try {
                const res = await axios.post("https://auth.develop.unifarco.aigotsrl-dev.com/api/user/register", data)
                console.log(res)
                SetError("")
                if (res.status === 200) navigate("login")
            } catch (error) {
                console.log(error.response.data.Error)
                SetName("")
                SetSurname("")
                SetPhone("")
                SetEmail("")
                SetPassword("")
                SetTouched({ name: false, surname: false, email: false, password: false, phone: false })
                SetError(JSON.stringify(error.response.data.Error))
            }
            setLoading(false)
        } else {
            SetError("Please enter valid data")
        }
    }

    return (
        <View style={{ backgroundColor: "white", height: "100%", width: "100%" }}>
            <Header title="Register" />
            <ScrollView>

                <View style={{ display: "flex", flexDirection: "row", paddingLeft: 10 }} >

                    <Pressable style={{ borderWidth: 1, borderColor: "#00B27A", borderRadius: 100, margin: 10, width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                        <Fontisto name="google" color="#00B27A" size={30} />
                    </Pressable>
                </View>
                <View style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", paddingHorizontal: 10, marginBottom: 50 }}>

                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 5 }}>Name</Text>
                    <TextInput
                        value={name}
                        onChangeText={(e) => SetName(e)}
                        onBlur={() => onBlurHandler("name")}
                        style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", padding: 20, marginVertical: 5 }} />
                    {isTouched.name
                        &&
                        name.length < 3
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>Name should be at least 4 chars</Text>
                    }
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 5 }}>Surname</Text>
                    <TextInput
                        value={surname}
                        onChangeText={(e) => SetSurname(e)}
                        onBlur={() => onBlurHandler("surname")}
                        style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", padding: 20, marginVertical: 5 }} />
                    {isTouched.surname
                        &&
                        !surname
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>Surename is required</Text>
                    }
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 5 }}>Phone</Text>
                    <TextInput
                        value={phone}
                        keyboardType='numeric'
                        onChangeText={(e) => SetPhone(e)}
                        onBlur={() => onBlurHandler("phone")}
                        style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", padding: 20, marginVertical: 5 }} />
                    {isTouched.phone
                        &&
                        phone.length < 8
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>Enter a valid phone number</Text>
                    }
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 5 }}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={(e) => SetEmail(e)}
                        onBlur={() => onBlurHandler("email")}
                        style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", padding: 20, marginVertical: 5 }} />
                    {isTouched.email
                        &&
                        !email.includes("@")
                        &&
                        !email.includes(".")
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>Enter a valid Email</Text>
                    }
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 5 }}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={(e) => SetPassword(e)}
                        onBlur={() => onBlurHandler("password")}
                        secureTextEntry style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", padding: 20, marginVertical: 5 }} />
                    {isTouched.password
                        &&
                        password.length < 4
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>Password should be at least 4 chars</Text>
                    }
                    <Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>{Error}</Text>
                    {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 10 }} />}
                    <Pressable style={{
                        width: 240, height: 50, backgroundColor: "#00B27A", borderRadius: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderColor: "#00B27A", shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.21,
                        shadowRadius: 7.68,
                        elevation: 10, marginVertical: 10
                    }}>
                        <Text
                            onPress={() => handleRegister()}
                            style={{ color: "#ffff", fontWeight: "600", fontSize: 18 }}>
                            Sign up
                        </Text>
                    </Pressable>
                    <View style={{ borderBottomColor: "#00B27A", borderBottomWidth: 2, alignSelf: 'center', paddingBottom: 10, width: 40, alignItems: "center", marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "#414141" }} >
                            Or
                        </Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate("Login")} style={{
                        width: 240, height: 50, backgroundColor: "#fff", borderRadius: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'center',

                    }}>
                        <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 18 }}>
                            Already have an account ?
                        </Text>
                    </Pressable>

                </View>
            </ScrollView >
        </View >
    )
}

export default Register