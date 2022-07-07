import { View, Text, Image, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import axios from "axios"
import { MyContext } from '../../AppContext';
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
            const url = `https://admin.develop.unifarco.aigotsrl-dev.com/api/gmb/questions`;
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
            console.error(error);

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
            const url = `https://${process.env.REACT_APP_ADMIN_PREFIX}${process.env.REACT_APP_NODE_ENV}.${process.env.REACT_APP_PROJECT}.${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADMIN_API_PATH}/getGmbQuestions/${name}`;
            const config = {
                headers: { authorization: `Bearer ${userData.token}` }
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

            {questions && questions.length > 0 && questions.map((question, index) => {
                console.log(question.author.profilePhotoUri)
                return (
                    <View style={{ display: "flex", flexDirection: "row", width: "90%", alignSelf: "center", alignItems: "center", backgroundColor: "#F8F8F8", borderRadius: 8, paddingVertical: 20, paddingHorizontal: 2 }}>
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
                )
            })}


        </View>
    )
}

export default QA