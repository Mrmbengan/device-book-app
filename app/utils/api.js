import axios from 'axios';

const API_BASE_URL = 'https://devies-reads-be.onrender.com';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
        console.log('register User:', response.data);
        return response.data;
    } catch (error) {
        console.error('error registering User:', error);
    }
};

export const fetchBooks = async (sort) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`, {
        params: {sort},
        });
        console.log('fetchBooks:', response.data);
        return response.data;
    } catch (error) {
         console.error('error fetching Books:', error);
        }
};

export const fetchBookById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${id}`);
        console.log('fetch Book ById:', response.data);
        return response.data;
    } catch (error) {
        console.error('error fetching Book by Id:', error);
    }
};