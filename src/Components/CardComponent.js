import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 450,
        padding: "8px",
        backgroundColor: "#E5E5E5",
    },
    media: {
        borderRadius: 12,
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
}));

const CardComponent = (props) => {
    const classes = useStyles();
    const { brand, variety } = props;
    return (
        <div
            className="cardStyles"
            style={{ padding: "20px", marginBottom: "25px" }}
        >
            <Grid container item xs={12} spacing={3}>
                <Card className={classes.root}>
                    <CardHeader
                        title={variety}
                        subheader={"~ By " + brand}
                        titleTypographyProps={{ variant: "h5" }}
                    />
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                        title="pic"
                    />
                </Card>
            </Grid>
        </div>
    );
};

export default CardComponent;

// foodStyle, country, stars, topTen
