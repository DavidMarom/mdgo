import Axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/'

var axios = Axios.create({ withCredentials: true });

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data);
    }
}

async function ajax(endpoint, method = 'get', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data
        });
        return res;
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`);
        console.dir(err);
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/login');
        }
        throw err;
    }
}