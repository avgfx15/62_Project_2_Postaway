import { customErrorHandler } from "../../../errorHandler/errorHandler.js";
import PostModel from "../../posts/postModels/postModel.js";

export default class CommentModel {
    constructor(postId, userId, content, id) {
        this.postId = postId;
        this.userId = userId;
        this.content = content;
        this.id = id;
    }


    // + Add Comments For Post By PostId
    static addCommentByPostIdModel(postId, userId, content) {

        const newComment = new CommentModel(postId, userId, content, comments.length + 1);

        //// Add Comments in Post Model
        const postExists = PostModel.getAllPostModel().find((post) => post.id === postId);
        if (!postExists) {
            throw new customElements(401, 'Post not found');
        } else {
            const userAlreadyCommentedIndex = comments.findIndex((comment) => comment.userId === userId && comment.postId === postId);
            if (userAlreadyCommentedIndex < 0) {
                comments.push(newComment);
            } else {
                // comments[userAlreadyCommentedIndex].content = content;
                throw new customErrorHandler(401, "User already comment on this post for correction click on update comment");
            }
            //// Comments added to Post Model

            if (!postExists.comments) {
                postExists.comments = [];
                postExists.comments.push({ userId: userId, comment: content, id: postExists.comments.length + 1 })

            } else {
                const findUserCommentIndex = postExists.comments.findIndex((comment) => comment.userId === userId);
                if (findUserCommentIndex <= 0) {
                    postExists.comments.push({ userId: userId, comment: content, id: postExists.comments.length + 1 })
                } else {
                    postExists.comments[findUserCommentIndex].content = content;
                }
            }
        }
        return { comments: comments, postExists: postExists };
    }

    // * Update Comment By user on Post
    static updateCommentOnPostByUserModel(userId, postId, content) {
        const userAlreadyCommentedIndex = comments.findIndex((comment) => comment.userId === userId && comment.postId === postId);
        console.log(userAlreadyCommentedIndex);
        if (userAlreadyCommentedIndex < 0) {
            throw new customErrorHandler(401, "No comments on this post by user ")
        } else {
            comments[userAlreadyCommentedIndex].content = content;
            return comments[userAlreadyCommentedIndex];
        }
    }

    // - Delete Comment By User
    static deleteCommentByOwnedUserModel(userId, postId) {
        console.log(userId, postId);

        const findCommentIndex = comments.findIndex((comment) => comment.userId === userId && comment.postId === postId);
        console.log(findCommentIndex);
        if (findCommentIndex < 0) {
            throw new customErrorHandler(401, 'No comment by user for this post')
        }
        comments.splice(findCommentIndex, 1);
        return comments;
    }

    // - Delete CommentBy commentId
    static deleteCommentByCommentIdModel(commentId, userId) {
        const findIndexOfCommentByUser = comments.findIndex((comment) => comment.id === commentId && comment.userId === userId);

        if (findIndexOfCommentByUser < 0) {
            throw new customErrorHandler(401, 'No comment by user');
        }
        comments.splice(findIndexOfCommentByUser, 1);
        return comments;
    }

    // @ GET All Comments
    static getAllCommentsModel() {
        return comments;
    }
}

const comments = [
    {
        "postId": 3,
        "userId": 1,
        "content": "User 1 sent comment to product 2",
        "id": 1
    },
    {
        "postId": 1,
        "userId": 2,
        "content": "User 1 sent comment to product 2",
        "id": 2
    },
    {
        "postId": 2,
        "userId": 1,
        "content": "User 1 sent comment to product 2",
        "id": 3
    },
    {
        "postId": 3,
        "userId": 2,
        "content": "User 1 sent comment to product 2",
        "id": 4
    },
    {
        "postId": 1,
        "userId": 1,
        "content": "User 1 sent comment to product 2",
        "id": 5
    },
    {
        "postId": 2,
        "userId": 2,
        "content": "User 1 sent comment to product 2",
        "id": 6
    }
];