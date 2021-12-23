import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {IPaymentAndShipping, IProduct} from "../redux/types";
import {useDispatch, useSelector} from "react-redux";
import {sendPaymentAndShippingAsync} from "../redux/paymentAndShipping";
import {Link, useHistory} from "react-router-dom";
import {RootState} from "../redux/store";


const useStyles = makeStyles({
    box:{
        padding: "0 0 30px 40px"
    },
    shippingAddress:{
        maxWidth: "30%"
    },
    button:{
        width: "592px",
        height: "56px",
        border: "solid",
        borderRadius:"3px",
        alignSelf: "center",
        textDecoration: "none"
    },
    grid: {
        display: "flex",
        flexDirection: "column"
    }
})


const PaymentAndShipping = () => {

    const classes = useStyles();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const[address, setAddress] = useState("")
    const[city, setCity] = useState("")
    const[country, setCountry] = useState("")
    const[regionState, setRegionState] = useState("")
    const[postalCode, setPostalCode] = useState("")

    const[cardNumber, setCardNumber] = useState<any>()
    const[expirationDate, setExpirationDate] = useState("")
    const[securityCode, setSecurityCode] = useState<any>()

    const dispatch = useDispatch();

    const selectedProduct: IProduct = useSelector((state: RootState) => state.selectedProduct)
    const paymentAndShipping: IPaymentAndShipping = useSelector((state: RootState) => state.paymentAndShipping)

    const history = useHistory();

    const handleCompleteClick = () =>{
        const paymentAndShipingDetail: IPaymentAndShipping = {
            firstName,
            lastName,
            email,
            address,
            city,
            country,
            regionState,
            postalCode,
            cardNumber,
            expirationDate,
            securityCode
        };
        dispatch(sendPaymentAndShippingAsync({paymentAndShipingDetail}))

        if (selectedProduct !== undefined){
            history.push('/secondaryPage')
        }else{
            history.push('/')
        }
    }






    return (
        <Grid item className={classes.grid}>
            <Box className={classes.box}>
                <Typography>Customer information</Typography>
                <Typography>Fields marked as (*) are required</Typography>
                <TextField required style={{maxWidth: "50%", paddingRight:"45px"}} fullWidth value={firstName} onChange={(e) =>{setFirstName(e.target.value)}} label="First name" />
                <TextField required style={{maxWidth: "50%"}} fullWidth value={lastName} onChange={(e) =>{setLastName(e.target.value)}} label="Last name"/>
                <TextField required fullWidth value={email} onChange={(e) =>{setEmail(e.target.value)}} label="Email"/>
            </Box>
            <Box className={classes.box}>
                <Typography>Shipping Address</Typography>
                <TextField fullWidth required value={address} onChange={(e) =>{setAddress(e.target.value)}} label="Address"/>
                <TextField fullWidth required value={city} onChange={(e) =>{setCity(e.target.value)}} label="City"/>
                <TextField fullWidth className={classes.shippingAddress} required value={country} onChange={(e) =>{setCountry(e.target.value)}} label="Country"/>
                <TextField fullWidth style={{margin: "0 30px 0 30px"}} className={classes.shippingAddress} required value={regionState} onChange={(e) =>{setRegionState(e.target.value)}} label="Region/State"/>
                <TextField fullWidth className={classes.shippingAddress} required value={postalCode} onChange={(e) =>{setPostalCode(e.target.value)}} label="Postal code"/>
            </Box>
            <Box className={classes.box}>
                <Typography>Payment method</Typography>
                <Typography>All Transactions are secure and encrypted</Typography>
                <TextField type="number" fullWidth required value={cardNumber} onChange={(e) =>{setCardNumber(e.target.value)}} label="Card number"/>
                <TextField fullWidth style={{maxWidth: "15%", paddingRight: "45px"}} required value={expirationDate} onChange={(e) =>{setExpirationDate(e.target.value)}} label="MM/YY"/>
                <TextField type="number" fullWidth style={{maxWidth: "15%"}} required value={securityCode} onChange={(e) =>{setSecurityCode(e.target.value)}} label="CVV"/>
            </Box>
            <Button onClick={handleCompleteClick} className={classes.button}>COMPLETE ORDER</Button>
        </Grid>
    );
};

export default PaymentAndShipping;