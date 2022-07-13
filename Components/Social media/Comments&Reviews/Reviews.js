import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import ReviewCard from "./ReviewCard"
import axios from "axios"
import { MyContext } from '../../../AppContext';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Post from "./Post"
import { REACT_APP_DASHBOARD_PREFIX ,REACT_APP_NODE_ENV ,REACT_APP_PROJECT ,REACT_APP_BASE_URL ,REACT_APP_DASHBOARD_API_PATH} from "@env"
const Reviews = () => {
    const { userData, Token } = useContext(MyContext)
    const [reviewsOrComments, setReviewsOrComments] = useState("reviews");
    let [reviewsData, setReviewsData] = useState(null);
    let [isLoading, setIsLoading] = useState(false);
    let [replyText, setReplyText] = useState("");
    let [replyError, setReplyError] = useState("");
    let [replyingIndex, setReplyingIndex] = useState(null);
    const [posts, setPosts] = useState(null);
console.log(REACT_APP_PROJECT)
    const getReviews = async (nextPageToken) => {
        setIsLoading(true);
        try {
            let url = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.Unifarco.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/gmb/reviews`;
            if (nextPageToken) url += `?nextPageToken=${nextPageToken}`;

            const config = {
                headers: { Authorization: `Bearer ${Token}` },
            };
            const result = await axios.get(url, config);

            if (
                !result.data ||
                result.data?.Error ||
                result.data?.error ||
                result.status !== 200
            )
                throw new Error(result.data?.Error || result.data?.message);

            setReviewsData(result.data.reviews);
        } catch (error) {
            console.log(error.response);
            // console.error("Failed to retrieve reviews." + error.message);
        }
        setIsLoading(false);
    };
    const getPosts = async () => {
        try {
            const getFacebookPosts = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/fb/post`;
            const config = {
                headers: { authorization: `Bearer ${Token}` },
            };
            const res = await axios.get(getFacebookPosts, config);
            console.log("res.data", res.data.data);
            setPosts(res.data.data);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const postReply = async (review) => {


        setIsLoading(true);
        try {
            const url = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/getGmbReviews/${encodeURIComponent(review.name)}`;
            const config = {
                headers: { authorization: `Bearer ${Token}` },
            };
            const body = { text: replyText };
            const result = await axios.post(url, body, config);

            if (
                !result.data ||
                result.data?.Error ||
                result.data?.error ||
                result.status !== 200
            )
                throw new Error(result.data?.Error || result.data?.message);

            // create a reply and updatewith "semi-fake" data
            // another option is to wait 1-2 seconds for gmb to update itself, then getReviews from it
            const index = reviewsData.reviews.indexOf(review);
            const updatedData = JSON.parse(JSON.stringify(reviewsData));
            const newReply = result.data.reviews;
            updatedData.reviews[index].reviewReply = newReply;
            setReviewsData(updatedData);

            setReplyingIndex(null);

        } catch (error) {
            console.error(error);

        }
        setIsLoading(false);
    };

    const handleReplyAt = async (review, index) => {
        setReplyingIndex(review);
        setReplyText("");
        setReplyError(null);
        setReplyingIndex(replyingIndex === index ? null : index);
    };

    // when page loads, check if user has connected GMB account
    useEffect(() => {
        const abortController = new AbortController();
        !userData?.socialAccounts?.gmbLocationResourceIdentifier &&
            Alert.alert("ADD UR GOOGLE")

        getReviews();

        // getPosts();

        return () => abortController.abort();
    }, []);

    const handleNextClick = async () => {
        setReviewsData(null);
        await getReviews(reviewsData.nextPageToken);
    };
    return (

        <ScrollView style={{ marginBottom: 100, width: "90%", alignSelf: 'center', backgroundColor: "#FBFBFB", paddingHorizontal: 15, borderRadius: 10, paddingTop: 20, paddingBottom: 100 }}>


            <View style={{ alignSelf: "center", marginBottom: 30 }} >
                <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: 'row', backgroundColor: "#F7F7F7", alignSelf: "flex-start", borderRadius: 15 }}>
                    <Pressable onPress={() => setReviewsOrComments("comments")} style={{ width: 140, height: 40, backgroundColor: reviewsOrComments === "comments" ? "#00B27A" : "#F7F7F7", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: reviewsOrComments === "comments" ? "white" : "black", fontWeight: "600" }}>
                            Comments
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => setReviewsOrComments("reviews")} style={{ width: 140, height: 40, backgroundColor: reviewsOrComments === "reviews" ? "#00B27A" : "white", borderRadius: 15, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: reviewsOrComments === "reviews" ? "white" : "black", fontWeight: "600" }}>
                            Reviews
                        </Text>
                    </Pressable>
                </View>
            </View>

            {isLoading && <ActivityIndicator size="large" color="#00B27A" style={{ marginVertical: 100, }} />}

            {posts?.length && reviewsOrComments.includes("Comments".toLowerCase())
                ? posts.map((post, idx) => <Post post={post} />)
                : reviewsOrComments.includes("Comments".toLowerCase()) && (
                    <Text style={{ alignSelf: "center", fontSize: 18, fontWeight: "600" }}>Nothing to display</Text>
                )}

            {reviewsData !== null &&
                reviewsData?.reviews &&
                reviewsOrComments.includes("Reviews".toLowerCase()) && (
                    <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                        <Text style={{ marginRight: 15 }} >
                            Average rating: {reviewsData.averageRating}
                        </Text>
                        <Text>
                            Total reviews: {reviewsData.totalReviewCount}
                        </Text>
                    </View>
                )}

            {!isLoading &&
                (!reviewsData ||
                    !reviewsData?.reviews ||
                    reviewsData?.reviews?.length === 0) && (
                    <Text style={{ alignSelf: "center" }} className="font-normal text-black text-md">
                        No reviews to display.
                    </Text>
                )}

            {reviewsData &&
                reviewsData?.reviews?.length > 0 &&
                reviewsOrComments.includes("Reviews".toLowerCase()) &&
                reviewsData.reviews.map((review, index) => (
                    <View  key={review.reviewId}>
                        <ReviewCard
                           
                            review={review}
                            onReplyClick={() => handleReplyAt(review, index)}
                            replyDisabled={isLoading}
                            isReplying={index === replyingIndex}
                        />
                        <View style={{ display: "flex", flexDirection: "column", marginBottom: 10 }} className="flex flex-col mb-5">
                            {replyingIndex !== null && replyingIndex === index && (
                                <View style={{ display: "flex", flexDirection: 'column', backgroundColor: "white", borderBottomEndRadius: 10, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 15 }}>
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
                                        <View style={{ display: "flex", flexDirection: "column", width: "75%" }} className="flex flex-col w-5/6 gap-y-2 ">
                                            <TextInput style={{ width: "100%", backgroundColor: "#F6F6F6", borderRadius: 10, height: 80, padding: 10 }} disabled={isLoading} placeholder="Type your reply..." onChangeText={(text) => { setReplyText(text) }} value={replyText} />
                                            {replyError !== null && (
                                                <Text style={{ color: "red" }}>{replyError}</Text>
                                            )}
                                        </View>
                                        <Pressable onPress={() => postReply(review)} style={{ width: 70, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center" }}>
                                            <Text style={{ fontWeight: "600", fontSize: 12, color: "white" }}>
                                                Rispondi
                                            </Text>
                                        </Pressable>
                                    </View>

                                    {review?.reviewReply?.comment &&
                                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 5 }} >
                                            {/* <img src={answer.author.profilePhotoUri} className="w-10 h-10 rounded-full" alt="someone's face" /> */}
                                            <View style={{ display: "flex", flexDirection: "column", marginLeft: 5 }} >
                                                <Text style={{ color: "#3366BB", textAlign: "left", fontSize: 18, marginBottom: 2 }} >
                                                    {review?.reviewReply?.comment}
                                                </Text>
                                                <Text style={{ color: "#3366BB", textAlign: "left", fontSize: 10 }} >
                                                    {review?.reviewReply?.updateTime}
                                                </Text>
                                                {/* <p className='text-sm font-bold text-black tracking-wide'>{answer.text}</p> */}
                                            </View>
                                        </View>}
                                </View>
                            )}
                        </View>
                    </View>
                ))}
        </ScrollView>


    )
}

export default Reviews