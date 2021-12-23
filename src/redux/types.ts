export interface IProduct{
    id: string,
    product_name: string,
    price: number
}

export interface IPaymentAndShipping{
    firstName: string,
    lastName: string,
    email:string,
    address: string,
    city: string,
    country: string,
    regionState: string,
    postalCode: string,
    cardNumber: number,
    expirationDate: string,
    securityCode: number

}