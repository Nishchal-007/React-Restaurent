import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
    const { variety } = useParams();
    const [lt, setlt] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let req = await axios.get(
                "https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
            );
            setlt(req.data);
        }
        fetchData();
    }, []);

    const newLt =
        lt.length != 0 ? lt.filter((x) => x.Variety === variety) : null;
    // console.log(newLt[0]["Brand"]);
    return (
        <div>
            <h1>Hello - {variety} </h1>
            <br />
            <p>{newLt == null ? "Loading" : newLt[0]["Brand"]}</p>
            <br />
            <p>{newLt == null ? "Loading" : newLt[0]["Style"]}</p>
            <br />
            <p>{newLt == null ? "Loading" : newLt[0]["Country"]}</p>
            <br />
            <p>
                {newLt == null
                    ? "Loading"
                    : newLt[0]["Stars"] === "NaN"
                    ? "Not Rated"
                    : newLt[0]["Stars"]}
            </p>
            <br />
            <p>
                {newLt == null
                    ? "Loading"
                    : newLt[0]["Top Ten"] === "NaN"
                    ? "Not Ranked"
                    : newLt[0]["Top Ten"]}
            </p>
        </div>
    );
};

export default Details;
