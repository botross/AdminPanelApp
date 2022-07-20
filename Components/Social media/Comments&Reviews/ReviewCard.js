import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {
    Entypo, AntDesign, FontAwesome
} from "react-native-vector-icons"
import { Rating } from 'react-native-ratings';
const ReviewCard = ({ review, replyDisabled, isReplying, onReplyClick }) => {
    const reviewerName = review?.reviewer?.isAnonymous ? "Anonymous" : review?.reviewer?.displayName;

    const renderIcon = () => {
        switch (review?.type) {
            case "gmb":
                return <AntDesign name="google" color="#4267B2" size={20} />
            case "fb":
                return <Entypo name="facebook" color="#4267B2" size={20} />
            default:
                return <FontAwesome name="comment" color="#4267B2" size={20} />
        }
    }

    const [rating, SetRating] = React.useState(0)
    React.useEffect(() => {

        switch (review.starRating) {
            case "ONE":
                SetRating(1);
                break;
            case "TWO":
                SetRating(2);
                break;
            case "THREE":
                SetRating(3);
                break;
            case "FOUR":
                SetRating(4);
                break;
            case "FIVE":
                SetRating(5);
                break;
            default:
                SetRating(0);
        }

    }, [])

    return (
        <View style={{ marginVertical: 15 }}>
            <View style={{ padding: 20, backgroundColor: "white", borderRadius: 15, marginBottom: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    {renderIcon()}
                    <Text style={{ fontWeight: "600", fontSize: 12, marginHorizontal: 10 }}>{reviewerName}</Text>
                    <Rating
                        ratingCount={5}
                        startingValue={rating}
                        imageSize={14}
                        readonly
                        style={{ paddingVertical: 10 }}
                    />
                </View>
                {review.comment &&
                    <Text style={{ color: '#AEAEAE', fontWeight: '300', fontSize: 10, marginTop: 10 }}>
                        {review.comment}
                    </Text>}
            </View>
            <Pressable disabled={replyDisabled} onPress={() => onReplyClick(review)} style={{ width: 140, height: 35, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: "#00B27A", alignSelf: "center", marginTop: 15 }}>
                <Text style={{ fontWeight: "600", fontSize: 14, color: "white" }}>
                    {isReplying ? 'Cancel' : 'Reply'}
                </Text>
            </Pressable>
        </View>
    )
}

export default ReviewCard