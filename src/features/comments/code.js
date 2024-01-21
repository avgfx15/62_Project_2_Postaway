// $ Check Post already have comments

// $ If no comments on post then create
if (!postExists.comments || postExists.comments.length <= 0 || postExists.comments == undefined) {
    console.log('No Comments : ', postExists);
    postExists.comments = [];
    // // Push Comments in to PostModel
    postExists.comments.push({ userId: userId, comment: content, id: comments.length + 1 });
    // newComment.id = commsnts.length + 1;
    console.log("1 : ", postExists);
} else {

    // $ Check user already has comment on post then update comment

    const checkUserAlreadyHasCommentedIndex = postExists.comments.findIndex((comment) => comment.userId === userId);
    if (checkUserAlreadyHasCommentedIndex >= 0) {
        postExists[checkUserAlreadyHasCommentedIndex] = { userId: userId, comment: content }
        console.log("2 : ", postExists);
    } else {

        // $ If User commented first time then

        postExists.comments.push({ userId: userId, comment: content, id: comments.length + 1 })
        newComment.id = commsnts.length + 1;
        console.log("3 : ", postExists);
    }
}


console.log('line 18');
if (!postExists) {
    throw new customErrorHandler(400, 'Post is not found');
} else {
    console.log("Line 22");
    // ? Comments In Commnets Model

    const checkCommentByUser = commsnts.find((comment) => comment.userId === userId && comment.postId === postId);
    console.log(checkCommentByUser);
    if (!checkCommentByUser) {
        console.log("Line 27");
        comments.push(newComment);
        newComment.id = commsnts.length + 1;
        console.log('Comment not sent by user');
    } else {
        console.log("Line 32");
        console.log('Already Sent');
        const findIndexOfCommentByUser = comments.findIndex((comment) => comment.userId === userId && comment.postId === postId);
        commsnts[findIndexOfCommentByUser].content = content;

    }
    console.log(comments);
    // console.log(postExists);
}
return { comments: comments, post: postExists };