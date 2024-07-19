import axios from 'axios';

const API_BASE_URL = 'https://devies-reads-be.onrender.com';

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
};

export const fetchBooks = async (sort) => {
    const response = await axios.get(`${API_BASE_URL}/books?sort=${sort}`);
    return response.data;
};

export const fetchBookById = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/books/${id}`);
    return response.data;
};