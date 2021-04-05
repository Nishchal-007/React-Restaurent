import axios from "axios";

const instance = axios.create({
    baseURL: "https://mockapidata.s3.us-east-2.amazonaws.com/mockData.json",
    headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
});

export default instance;
