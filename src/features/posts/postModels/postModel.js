import { customErrorHandler } from "../../../errorHandler/errorHandler.js";

export default class PostModel {
    constructor(caption, imageUrl, userId, id) {
        // this.title = title;
        // this.description = description;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.userId = userId;
        this.id = posts.length + 1;
    }

    // @ GET All Post
    static getAllPostModel() {
        return posts;
    }

    // @ GET Post By Id
    static getPostByIdModel(id) {

        const postExists = posts.find((post) => post.id === id);
        if (!postExists) {
            throw new customErrorHandler(400, 'Post not found');
        } else {
            return postExists;
        }
    }
    // @ GET Posts Created By User By userId
    static getPostsCreatedByUserByUserIdModel(userId) {

        const getPostsByUser = posts.filter((post) => {
            return post.userId === userId;
        });
        console.log(getPostsByUser);
        if (!getPostsByUser) {
            throw new customErrorHandler(400, 'User have not posted any post');
        } else {
            return getPostsByUser;
        }
    }

    // + Create New Post
    static createNewPostModel(postObj) {
        posts.push(postObj);
        postObj.id = posts.length + 1;
        return posts;
    }

    // * UPDATE Post By Owner 
    static updatePostByPostOwnerModel(userId, postId, postObj) {
        const postExistsIndex = posts.findIndex((post) => post.userId === userId && post.id === postId);
        if (!postExistsIndex) {
            throw new customErrorHandler(400, 'You are not allowed to update');
        }
        posts[postExistsIndex] = postObj;
        return posts[postExistsIndex];
    }

    // - DELETE Post By Post Owner
    static deletePostByOwnerModel(userId, postId) {
        const postExist = posts.find((post) => post.userId === userId && post.id === postId);
        if (!postExist) {
            throw new customErrorHandler(400, 'Post is not found');
        } else {
            const postExistsIndex = posts.findIndex((post) => post.userId === userId && post.id === postId);
            if (!postExistsIndex) {
                throw new customErrorHandler(401, 'You are not authorizerd to delete post')
            }
            posts.splice(postExistsIndex, 1);
            return postExist;
        }
    }

    // @ GET Post By Search Filter
    static getPostBySearchFilterModel(searchText) {
        const searchResult = posts.filter((post) => post.caption.includes(searchText));
        return searchResult;
    }

    // @ GET Sorting Post By userId
    static getSortedPostByUserIdModel() {
        const sortQueryResult = posts.sort((a, b) => a.userId > b.userId ? 1 : ((b.userId > a.userId) ? -1 : 0));
        if (!sortQueryResult) {
            throw new customErrorHandler(401, 'Something went wrong')
        }
        return sortQueryResult;
    }

}

const posts = [
    {
        caption: 'Fast Casual Restaurants',
        imageUrl: 'https://cdn.create.vista.com/downloads/e9fae59c-a48d-4c6e-914b-d3c1188d8229_1024.jpeg',
        userId: 1,
        id: 1
    },
    {
        caption: 'Young Blonde Woman Recommends Marketing Agency Services ',
        imageUrl: 'https://cdn.create.vista.com/downloads/8270d38d-0ee2-487c-8e00-902b73bc9f7d_1024.jpeg',
        userId: 1,
        id: 2
    },
    {
        caption: 'Fresh Ocean Products',
        imageUrl: 'https://cdn.create.vista.com/downloads/a491578d-d3a5-4c1a-9268-f34e5f293e76_1024.jpeg',
        userId: 2,
        id: 3
    },
    {
        caption: "Special Valentine's Offer with Red Gifts",
        imageUrl: 'https://cdn.create.vista.com/downloads/81047bb1-ed6d-478b-b572-c6739c2a06ac_1024.jpeg',
        userId: 3,
        id: 4
    },
    {
        caption: 'Young Brotherhood Products',
        imageUrl: 'https://cdn.create.vista.com/downloads/8270d38d-0ee2-487c-8e00-902b73bc9f7d_1024.jpeg',
        userId: 1,
        id: 5
    },
]