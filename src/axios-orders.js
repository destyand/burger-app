import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-69199.firebaseio.com'
});

export default instance;