import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=TESTKEY1234'

export const FETCH_POSTS_ACTION = "fetch_posts";
export const CREATE_POST = "create_post";

export function fetchPosts() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS_ACTION,
        payload: request
    };
}

export function createPost(values, callback) {

    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

