
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Add, Remove} from '@material-ui/icons'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useSelector} from 'react-redux'
import { useHistory } from "react-router";
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'


const KEY = process.env.REACT_APP_STRIPE
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`
const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
    margin-top: 20px;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

function Cart() {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory();
   
    const onToken = (token)=>{
        console.log(token)
        setStripeToken(token)
    }
   
    useEffect(()=>{
       const makeRequest = async ()=>{
           try{
            const res = await axios.post('http://localhost:5000/miu/checkout/payment',{
                tokenId: stripeToken.id,  
                amount: cart.total
            })
            console.log(res.data)
             history.push('/success', {data: res.data, products: cart})
           }catch(err){
                console.log(err)
           }
       } 
       makeRequest()
    }, [stripeToken, cart.total, history])
    

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product=>(
                            <Product key= {product._id}>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><b>Product:</b> {product.title} </ProductName>
                                    <ProductId><b>Id:</b> {product._id}</ProductId>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>${product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>

                        ))}
                        
                        <hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="MIU Online Shoping"
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 10000}
                            token={onToken}
                            stripeKey={KEY}
                            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
