import axios from "axios";

const url = "http://smart-LoadB-C9OS8SWRFGUW-2ad6b9e4e4391bc3.elb.us-east-1.amazonaws.com:3000/users/";

export function getAll() {
    var token = sessionStorage.getItem('token').replace(/['"]+/g, '').toString();
    var headers = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return axios.get(url, headers);
}

export async function create(data) {
    var token = sessionStorage.getItem('token').replace(/['"]+/g, '').toString();
    var headers = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return axios.post(url, data, headers);

}

export async function update(id, data) {
    var token = sessionStorage.getItem('token').replace(/['"]+/g, '').toString();
    var headers = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return await axios.put(url + id, data, headers);
}

export async function remove(id) {
    var token = sessionStorage.getItem('token').replace(/['"]+/g, '').toString();
    var headers = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    return await axios.delete(url + id, headers);
}