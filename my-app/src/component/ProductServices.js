import axios from "axios";

const API_URL = 'http://localhost:8080/product';

export async function saveContact(product) {
    return await axios.post(API_URL, contact);
}

export async function getProduct(page = 0, size = 10) {
    return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function getProduct(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function udpateProduct(product) {
    return await axios.post(API_URL, product);
}


export async function deleteProduct(id) {
    return await axios.delete(`${API_URL}/${id}`);
}