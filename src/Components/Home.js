import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import CardComponent from "./CardComponent";
import imgs from "../images/food.png";
import Grid from "@material-ui/core/Grid";

export const Home = (props) => {
    const [lt, setlt] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let req = await axios.get("/mockData.json");
            setlt(req.data);
        }
        fetchData();
    }, []);
    console.log(lt);
    return (
        <div className="container">
            <div className="Home">
                <div
                    style={{
                        color: "#e74c3c",
                    }}
                >
                    <center>
                        <h1>Le Bistro</h1>
                    </center>
                </div>
            </div>
            <div className="cardHome">
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                >
                    {lt.map((data, key) => {
                        return (
                            <Link key={key} to={data.Variety}>
                                <CardComponent
                                    key={key}
                                    brand={data.Brand}
                                    variety={data.Variety}
                                    // foodStyle={data.Style}
                                    // country={data.Country}
                                    // stars={
                                    //     data.Stars === "NaN"
                                    //         ? "Not Rated"
                                    //         : data.Stars
                                    // }
                                    // topTen={
                                    //     data["Top Ten"] === "NaN"
                                    //         ? "Not Ranked"
                                    //         : data["Top Ten"]
                                    // }
                                    image={imgs}
                                />
                            </Link>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};

// axios
//     .get(
//         "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json"
//     )
//     .then((req) => console.log(req.data))
//     .catch((err) => console.log(err));

// axios.get("/he-public-data/TopRamen8d30951.json")
//     .then((req) => {
//         console.log(req.data);
//         setlt(req.data);
//     })
//     .catch((err) => console.log(err));
