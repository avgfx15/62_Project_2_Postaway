export default class UserModel {
    constructor(name, email, password, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = id;
    }

    // @ GET All users
    static getAllUsersModel() {
        return users;
    }

    // + Signup User Model
    static signUpUserModel(name, email, password) {

        const newUserModel = new UserModel(name, email, password);
        newUserModel.id = users.length + 1;
        users.push(newUserModel);
        return newUserModel;
    }
}

const users = [
    {
        name: "Dhvani",
        email: "1a@gmail.com",
        password: "aaaaaa",
        id: 1
    },
    {
        "name": "Ajay",
        "email": "2a@gmail.com",
        "password": "aaaaaa",
        id: 2
    },
    {
        "name": "Hitesh",
        "email": "3a@gmail.com",
        "password": "aaaaaa",
        id: 3
    }
]