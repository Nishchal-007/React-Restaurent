import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FoodImage from "../images/foodSmall.jpg";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Details = () => {
    const classes = useStyles();

    const { variety } = useParams();
    const [lt, setlt] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let req = await axios.get("/mockData.json");
            setlt(req.data);
        }
        fetchData();
    }, []);

    const newLt =
        lt.length !== 0 ? lt.filter((x) => x.Variety === variety) : null;
    return (
        <div>
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
            </div>

            <div className="dishContainer">
                <div className="dishDetails">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <h1>{variety} </h1>
                            <br />
                            <p>
                                Brand:{" "}
                                {newLt === null ? "Loading" : newLt[0]["Brand"]}
                            </p>
                            <br />
                            <p>
                                Style:{" "}
                                {newLt === null ? "Loading" : newLt[0]["Style"]}
                            </p>
                            <br />
                            <p>
                                Country:{" "}
                                {newLt === null
                                    ? "Loading"
                                    : newLt[0]["Country"]}
                            </p>
                            <br />
                            <p>
                                Stars:{" "}
                                {newLt === null
                                    ? "Loading"
                                    : newLt[0]["Stars"] === "NaN"
                                    ? "Not Rated"
                                    : newLt[0]["Stars"]}
                            </p>
                            <br />
                            <p>
                                Top Ten Ranking:{" "}
                                {newLt === null
                                    ? "Loading"
                                    : newLt[0]["Top Ten"] === "NaN"
                                    ? "Not Ranked"
                                    : newLt[0]["Top Ten"]}
                            </p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={FoodImage}
                                width="auto"
                                height="auto"
                                style={{ borderRadius: 25 }}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default Details;
