import React from 'react';
import {Container, CssBaseline, Grid, makeStyles, Typography} from "@material-ui/core";
import ProductsList from "../componnets/productsList";
import PaymentAndShipping from "../componnets/paymentAndShipping";

const useStyles = makeStyles({
    headings:{
        color: "#DC624E",
        padding: "15px"
    }
})

const MainPage = () => {

    const classes = useStyles();


    return (
        <CssBaseline>
            <Container maxWidth="lg">
                <Grid container justifyContent="center" direction="column" spacing={2}>
                    <Typography className={classes.headings}>VARIANTS</Typography>
                    <ProductsList/>
                    <Typography className={classes.headings}>PAYMENT AND SHIPPING</Typography>
                    <PaymentAndShipping/>
                </Grid>
            </Container>
        </CssBaseline>
    );
};

export default MainPage;