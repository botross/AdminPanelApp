import { View, Text, Pressable, TextInput, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import Header from '../../Reuseable/Header2'
import { Fontisto } from "react-native-vector-icons"
import axios from "axios"
import { MyContext } from '../../AppContext'
const Login = ({ navigation }) => {

    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const { SetToken } = useContext(MyContext)
    const [Error, SetError] = useState("")
    const [isTouched, SetTouched] = useState({
        email: false, password: false
    })

    const onBlurHandler = (field) => SetTouched((prevFields) => ({ ...prevFields, [field]: true }));
    const data =
    {
        "email": email.toLocaleLowerCase(),
        "password": password,
    }
    const getUser = s => s.includes('=') && s.substr(s.lastIndexOf('=') + 1).split(' ')[0]
    async function handleLogin() {

        if (password.length >= 3 && email.includes("@") && email.includes(".")) {
            setLoading(true)
            SetError(true)
            SetEmail("")
            SetPassword("")
            SetTouched({ name: false, surname: false, email: false, password: false, phone: false })
            try {
                const ac = new AbortController();
                const res = await axios.post("https://auth.develop.rc.aigotsrl-dev.com/api/user/login", data)
                // SetToken(getUser(res.data.link))

                var regex = /[?&]([^=#]+)=([^&#]*)/g,
                    params = {},
                    match;
                while (match = regex.exec(res.data.link)) {
                    params[match[1]] = match[2];
                }
                if (params.token)
                    SetToken(params.token)

                return () => ac.abort();
            } catch (error) {
                console.log(error.response.data)
                SetError(JSON.stringify(error.response.data.Error))
            }
            setLoading(false)
        } else {
            setLoading(false)
            SetError("Please enter valid data")
        }
    }
    return (
        <View style={{ backgroundColor: "white", height: "100%", width: "100%" }} >
            <Header title="Login" />
            <ScrollView >


                <Text style={{ fontWeight: "400", fontSize: 20, color: "#4E4E4E", paddingLeft: 15, marginBottom: 10 }}>Login with:</Text>
                <View style={{ display: "flex", flexDirection: "row", paddingLeft: 10 }} >

                    <View style={{ borderWidth: 1, borderColor: "#00B27A", borderRadius: 100, margin: 10, width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                        <Fontisto name="facebook" color="#00B27A" size={30} />
                    </View>
                    <View style={{ borderWidth: 1, borderColor: "#00B27A", borderRadius: 100, margin: 10, width: 50, height: 50, justifyContent: "center", alignItems: "center" }}>
                        <Fontisto name="google" color="#00B27A" size={30} />
                    </View>
                </View>
                <View style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", marginBottom: 50 }}>

                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 10 }}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={(e) => SetEmail(e)}
                        onBlur={() => onBlurHandler("email")}
                        style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", paddingHorizontal: 20 }} />
                    {isTouched.email
                        &&
                        !email.includes("@")
                        &&
                        !email.includes(".")
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 10 }}>Enter a valid Email</Text>
                    }

                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#000000", paddingLeft: 15, marginVertical: 10 }}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={(e) => SetPassword(e)}
                        onBlur={() => onBlurHandler("password")}
                        secureTextEntry style={{ height: 50, width: "85%", backgroundColor: "#F9F9F9", borderRadius: 25, alignSelf: "center", paddingHorizontal: 20, marginVertical: 10 }} />
                    {isTouched.password
                        &&
                        password.length < 3
                        &&
                        < Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 10 }}>Password should be at least 4 chars</Text>
                    }
                    {loading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 10 }} />}
                    <Text style={{ fontSize: 14, fontWeight: '400', color: "red", textAlign: "center", marginVertical: 5 }}>{Error}</Text>
                    <Pressable
                        onPress={() => handleLogin()}
                        style={{
                            width: 240, height: 50, backgroundColor: "#00B27A", borderRadius: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderColor: "#00B27A", shadowColor: "#000000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.21,
                            shadowRadius: 7.68,
                            elevation: 10,
                            marginTop: 10
                        }}>
                        <Text style={{ color: "#ffff", fontWeight: "600", fontSize: 18 }}>
                            Login
                        </Text>
                    </Pressable>
                    <View style={{ borderBottomColor: "#00B27A", borderBottomWidth: 2, alignSelf: 'center', paddingBottom: 10, width: 40, alignItems: "center", marginVertical: 10 }}>
                        <Text style={{ fontSize: 16, fontWeight: "400", color: "#414141" }} >
                            Or
                        </Text>
                    </View>
                    <Pressable onPress={() => navigation.navigate("Register")} style={{
                        width: 240, height: 50, backgroundColor: "#fff", borderRadius: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderWidth: 1, borderColor: "#00B27A", shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.11,
                        shadowRadius: 7.68,
                        elevation: 10
                    }}>
                        <Text style={{ color: "#00B27A", fontWeight: "600", fontSize: 18 }}>
                            Create a new account
                        </Text>
                    </Pressable>

                </View>
            </ScrollView>
        </View >
    )
}

export default Login