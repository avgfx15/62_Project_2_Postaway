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
            const userAlreadyCommentedIndex = comments.findIndex((comment) => comment.userId === userId);
            if (userAlreadyCommentedIndex <= 0) {
                comments.push(newComment);
            } else {
                comments[userAlreadyCommentedIndex].content = content;
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
}

const comments = [];