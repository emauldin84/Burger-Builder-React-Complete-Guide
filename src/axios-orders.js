import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-d703d.firebaseio.com/'
})

export default instance