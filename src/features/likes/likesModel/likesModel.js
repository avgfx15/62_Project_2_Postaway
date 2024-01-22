import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import PostModel from "../../posts/postModels/postModel.js";

export default class LikesModel {
    constructor(userId, postId, id) {
        this.userId = userId;
        this.postId = postId;
        this.id = id;
    }

    //+ Post Likes or dislike
    static toggleLikesForPostByIdModel(userId, postId) {
        const likeExistsByUserIdIndex = likes.findIndex((like) => like.userId === userId && like.postId === postId);
        const postExists = PostModel.getAllPostModel().find((post) => post.id === postId);
        // const postExistsIndex = PostModel.getAllPostModel().find((post) => post.id === postId);

        // ? Direct in Likes Model
        if (likeExistsByUserIdIndex < 0) {

            likes.push({ userId: userId, postId: postId, id: likes.length + 1 })
        } else {
            likes.splice(likeExistsByUserIdIndex, 1);
        }

        // ? Post with likes Array
        if (!postExists) {
            throw new customErrorHandler(401, "Post not found");
        } else {
            if (!postExists.likes) {
                postExists.likes = [];
                postExists.likes.push({
                    userId: userId, postId: postId, id: postExists.likes.length + 1
                })
            } else {
                const likeExistIndex = postExists.likes.findIndex((like) => like.userId == userId && like.postId === postId);

                if (likeExistIndex < 0) {
                    postExists.likes.push({
                        userId: userId, postId: postId, id: postExists.likes.length + 1
                    })
                } else {
                    postExists.likes.splice(likeExistIndex, 1);
                }
            }
        }
        return { likes: likes, postExists: postExists };
    }

    // @ GET Fiter Likes By PostId
    static filterLikesByPostIdModel(postId) {
        const filterLikesByPostId = likes.filter((like) => like.postId === postId);
        return filterLikesByPostId;
    }
    // @ GET All Likes
    static getAllLikes() {
        return likes;
    }

}

const likes = [
    {
        "userId": 2,
        "postId": 1,
        "id": 1
    },
    {
        "userId": 1,
        "postId": 1,
        "id": 2
    },
    {
        "userId": 3,
        "postId": 1,
        "id": 3
    },
    {
        "userId": 2,
        "postId": 2,
        "id": 4
    },
    {
        "userId": 1,
        "postId": 3,
        "id": 5
    },
    {
        "userId": 3,
        "postId": 3,
        "id": 6
    }
];