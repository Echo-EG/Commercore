import React, {useEffect, useState} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Grid, makeStyles, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "../redux/types";
import {RootState} from "../redux/store";
import {getProductsAsync} from "../redux/productSlice";
import {selectedAction} from "../redux/selectedProductSlice";
import clsx from "clsx";

const useStyles = makeStyles({
    cardContent:{
        display: "flex",
        justifyContent: "space-between",
        flex: "1 0 auto"
    },
    cardImg:{
        maxWidth: "40px",
        maxHeight: "40px",
        margin: "auto 25px",
        border: "solid"
    },
    productPrice: {
        // display:"flex",
        // justifyContent: "space-between",
        // flex: "1, 0"
    },
    card:{
        display:"flex",
        margin: "5px"
    },
    button:{
        display: "inline-block",
        width: "203px",
        height: "48px",
        border:"solid",
        borderRadius: "3px",
        float: "right",
    },
    smth:{
        border: "solid"
    }
})


const ProductsList = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const productList: IProduct[] = useSelector((state: RootState) => state.product)
    const selectedProduct: IProduct = useSelector((state: RootState) => state.selectedProduct)

    const [checked, setChecked] = useState(true);


    const handleAddClick = (newProductList: IProduct) =>{
        dispatch(selectedAction(newProductList))
        setChecked(false);
    }

    const handleSaveChanges = () =>{

    }

    useEffect(() =>{
        dispatch(getProductsAsync())
    }, [])

    if (checked){
        return (
            <Grid item  >

                {productList.map((newProductList:IProduct, key:number)=>{
                    return <Card onClick={() => handleAddClick(newProductList)}
                                 id={newProductList.id}
                                 key={newProductList.id}
                                 className={classes.card}>
                        <CardMedia className={classes.cardImg}
                                   component="img"
                                   src="../img/ProductImg.png"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.productPrice} >{newProductList.product_name}</Typography>
                            <Typography >${newProductList.price}</Typography>
                        </CardContent>
                    </Card>
                })}
                <Button className={classes.button}>SAVE CHANGES</Button>
            </Grid>

        );
    }
    return (
        <Grid item  >
            <Card className={clsx(classes.card, classes.smth)}>
                <CardMedia className={classes.cardImg}
                           component="img"
                           src="../img/ProductImg.png"/>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.productPrice} >{selectedProduct.product_name}</Typography>
                    <Typography >${selectedProduct.price}</Typography>
                </CardContent>
            </Card>
            {productList.map((newProductList:IProduct, key:number)=>{
                return <Card onClick={() => handleAddClick(newProductList)}
                             id={newProductList.id}
                             key={newProductList.id}
                             className={classes.card}>
                    <CardMedia className={classes.cardImg}
                        component="img"
                        src="../img/ProductImg.png"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.productPrice} >{newProductList.product_name}</Typography>
                        <Typography >${newProductList.price}</Typography>
                    </CardContent>
                </Card>
            })}
            <Button className={classes.button}>SAVE CHANGES</Button>
        </Grid>

    );
};

export default ProductsList;