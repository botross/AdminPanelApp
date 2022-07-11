import { View, Text, Pressable, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons"
const Post = ({ post }) => {
    const [isShowingComment, setIsShowingComment] = useState(false);
    const comments = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    ];

    useEffect(() => {
        console.log("post.permalink_url", post);
        return () => { };
    }, []);


    return (
        <View className="my-6 w-[80%] lg:max-w-full lg:flex">
            <View style={{ borderWidth: 4, borderColor: "gray", borderRadius: 10 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", borderRadius: 10, marginVertical: 10, borderWidth: 4, borderColor: "blue", width: 96, height: 96 }} >
                    <MaterialCommunityIcons name="post" color="blue" size={25} style={{ marginRight: 10 }} />
                </View>
                <View style={{ marginBottom: 10, width: "100%", display: "flex", flexDirection: "column" }} >
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
                        <Text style={{ color: "gray" }}>{post?.message}</Text>
                        <Pressable onPress={() => Linking.openURL(post?.permalink_url)}>
                            <Text>
                                Link
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }} >
                        <Text style={{ color: "gray", display: "flex", flexDirection: "row", alignItems: "center" }} className="text-sm text-gray-600 flex items-center cursor-pointer">
                            <AntDesign name="like1" color="blue" size={25} style={{ marginRight: 10 }} />
                            # {post?.likes.summary.total_count} likes
                        </Text>
                        <Text
                            style={{ color: "gray", display: "flex", flexDirection: "row", alignItems: "center" }}
                            onClick={() => setIsShowingComment(!isShowingComment)}>
                            <FontAwesome name="comment-o" color="black" size={25} style={{ marginRight: 10 }} />
                            #{post?.comments.summary.total_count} comments
                        </Text>
                    </View>
                    <View style={{ marginTop: 5, alignSelf: "center", width: "100%" }}>
                        {isShowingComment &&
                            post.comments.data.length > 0 &&
                            post?.comments.data.map((comment) => (
                                <View style={{ display: "flex", flexDirection: "column" }} >
                                    <Text >by {comment.from.name}</Text>
                                    <View style={{ backgroundColor: "#f8f9fa", borderWidth: 2, borderColor: "black", borderRadius: 10, marginVertical: 5, width: "100%" }}>
                                        <Text style={{ padding: 4, textAlign: 'left', width: "90%" }} >
                                            {comment.message}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        {isShowingComment && !post?.comments.data.length && (
                            <Text>no comment to display</Text>
                        )}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Post