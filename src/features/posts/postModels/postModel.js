import { customErrorHandler } from "../../../errorHandler/errorHandler.js";

export default class PostModel {
    constructor(caption, imageUrl, userId, id) {
        // this.title = title;
        // this.description = description;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.userId = userId;
        this.id = id;
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
]