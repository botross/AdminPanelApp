import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from "axios"
import { MyContext } from '../../../AppContext';
import { TextInput } from 'react-native-gesture-handler';
import { REACT_APP_DASHBOARD_PREFIX ,REACT_APP_NODE_ENV ,REACT_APP_PROJECT ,REACT_APP_BASE_URL ,REACT_APP_DASHBOARD_API_PATH} from "@env"
const getLocationFromName = name => {
    try {
        return name
            .match(/locations\/.*\/question/)[0]
            .slice(0, name.indexOf("/question"))
    } catch (error) {
        return null;
    }
};
const QA = () => {
    let [questions, setQuestions] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [answerText, setAnswerText] = useState("");
    let [answerError, setAnswerError] = useState("");
    let [answeringIndex, setAnsweringIndex] = useState(null);
    const { Token, userData } = useContext(MyContext)

 


    const getQuestions = async () => {
        setIsLoading(true);
        try {
            const url = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/gmb/questions`;
            const config = {
                headers: { authorization: `Bearer ${Token}` }
            };
            const result = await axios.get(url, config);

            if (!result.data || result.data?.Error || result.data?.error || result.status !== 200)
                throw new Error(result.data?.Error || result.data?.message);

            // setQuestions(result.data.questions);
            setQuestions(result.data?.data?.questions);
            console.log("resule", result.data.data.questions)
        } catch (error) {
            console.error(error.message);

        }
        setIsLoading(false);
    };
    const [btnText, SetBtnText] = useState("Guarda")
    const answerQuestionAt = index => {
        SetBtnText("Chiudi ")
        setAnswerText("");
        setAnswerError(null);
        setAnsweringIndex(answeringIndex === index ? null : index);
        if (answeringIndex === index) {
            SetBtnText("Guarda")
        }
    };
    const postAnswer = async question => {

        setIsLoading(true);
        try {
            const answerIndex = question.name.indexOf("/answers");
            const name = question.name.slice(
                question.name.indexOf("questions/") + "questions/".length,
                answerIndex !== -1 ? answerIndex : question.name.length
            );
            const url = `https:${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/getGmbQuestions/${name}`;
            const config = {
                headers: { authorization: `Bearer ${Token}` }
            };
            const data = { text: answerText };
            const result = await axios.post(url, data, config);

            if (!result.data || result.data?.Error || result.data?.error || result.status !== 200)
                throw new Error(result.data?.message || result.data?.Error || result.data?.error);

            const index = questions.indexOf(question);
            const updatedQuestions = JSON.parse(JSON.stringify(questions));

            // if answer already exists, modify it, otherwise show answer's "semi-fake" data
            // another option is to wait 1-2 seconds for gmb to update itself, then getQuestions from it
            const existingAnswer = updatedQuestions[index].topAnswers.find(
                answer =>
                    getLocationFromName(answer.name) === userData?.socialAccounts?.gmbLocationResourceIdentifier
            );
            if (existingAnswer) {
                existingAnswer.updateTime = new Date(Date.now()).toISOString();
                existingAnswer.text = answerText;
            }
            else {
                const newAnswer = {
                    author: {
                        displayName: `${userData.name} ${userData.lastName}`,
                    },
                    createTime: new Date(Date.now()).toISOString(),
                    updateTime: new Date(Date.now()).toISOString(),
                    text: answerText
                };
                updatedQuestions[index].topAnswers.push(newAnswer);
            }

            setQuestions(updatedQuestions);
            setAnsweringIndex(null);

        } catch (error) {
            console.error(error);

        }
        setIsLoading(false);
    };

    React.useEffect(() => {
        const abortController = new AbortController();

        if (!userData?.socialAccounts?.gmbLocationResourceIdentifier)
            return
        else
            getQuestions();

        return () => abortController.abort();
    }, []);
    return (
        <View>
            {isLoading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />}

            {!isLoading &&
                (
                    !questions ||
                    questions.length === 0) && (
                    <Text style={{ alignSelf: "center" }} className="font-normal text-black text-md">
                        No questions to display.
                    </Text>
                )}

            {!isLoading && questions && questions.length > 0 && questions.map((question, index) => {

                return (
                    <>
                        <View style={{ display: "flex", flexDirection: "row", width: "90%", alignSelf: "center", alignItems: "center", backgroundColor: "#F8F8F8", borderRadius: 8, paddingVertical: 20, paddingHorizontal: 12 }}>
                            <Image
                                onLoad={() => console.log(true)}
                                source={{ uri: `https:${question.author.profilePhotoUri}`, width: 28, height: 28, }} style={{ width: 70, height: 70, borderRadius: 100, marginRight: 10 }} />
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: "600", color: "#00B27A", marginBottom: 3 }}>{question.author.displayName}</Text>
                                <Text style={{ fontSize: 16, fontWeight: "700", color: "black", marginBottom: 3 }}>{question.text}</Text>
                                <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>upvotes: {question.upVoteCount || "0"}</Text>
                                <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>Created:  {new Date(question.createTime).toDateString()}</Text>
                                <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>Update: {new Date(question.updateTime).toDateString()}</Text>
                                <Text style={{ fontSize: 12, fontWeight: "300", color: "black", marginBottom: 3 }}>total answers: {question.totalAnswerCount}</Text>
                            </View>
                            <Pressable onPress={() => answerQuestionAt(index)} style={{ width: 60, height: 30, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginLeft: "auto", marginRight: 15 }}>
                                <Text style={{ fontWeight: "600", fontSize: 12, color: "white" }}>
                                    {btnText}
                                </Text>
                            </Pressable>
                        </View>
                        {
                            answeringIndex !== null && answeringIndex === index && (
                                <View style={{ width: "90%", alignSelf: "center", backgroundColor: "#F8F8F8", display: "flex", flexDirection: "column", paddingHorizontal: 15 }} className='flex flex-col bg-[] px-5 py-7 gap-y-2  rounded-b-lg'>
                                    <View style={{ display: "flex", flexDirection: 'row', alignItems: "center", justifyContent: "space-between", width: "100%" }} className='flex flex-row items-center justify-between' >
                                        <View style={{ display: "flex", flexDirection: "column", width: "80%", alignSelf: "center" }} className='flex flex-col w-5/6 gap-y-2 '>
                                            <TextInput value={answerText} style={{ width: "95%", height: 100, borderRadius: 10, padding: 5, backgroundColor: "white" }} placeholder="Aggiungi testo qui.." onChangeText={(text) => { setAnswerText(text) }} />

                                            {answerError !== null && <Text style={{ color: "red" }} >{answerError}</Text>}
                                        </View>
                                        <Pressable onPress={() => postAnswer(question)} style={{ width: 60, height: 30, borderRadius: 18, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center" }}>
                                            <Text style={{ fontWeight: "600", fontSize: 12, color: "white" }}>
                                                Rispondi
                                            </Text>
                                        </Pressable>
                                    </View>

                                    {question.topAnswers.map(answer => (
                                        <View key={answer.name} style={{ display: "flex", alignItems: "center", marginVertical: 16, flexDirection: "row" }} className='flex gap-x-4 items-center mt-3'>
                                            <Image
                                                onLoad={() => console.log(true)}
                                                source={{ uri: `https:${answer?.author?.profilePhotoUri}`, width: 28, height: 28, }} style={{ width: 60, height: 60, borderRadius: 100, marginRight: 16 }} />

                                            <View style={{ display: "flex", flexDirection: "column" }}>
                                                <Text style={{ color: "#3366BB" }}>{answer?.author?.displayName}</Text>
                                                <Text style={{ fontSize: 12, fontWeight: "600", color: "black" }} className='text-sm font-bold text-black tracking-wide'>{answer?.text}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            )
                        }
                    </>

                )
            })}


        </View>
    )
}

export default QA