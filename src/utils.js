import axios from "axios";

const instance = axios.create({
    baseURL: "https://s3-ap-southeast-1.amazonaws.com/he-public-data/",
    headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
});

export default instance;
