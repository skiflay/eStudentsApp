

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Remove, Add} from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import axios from 'axios'
import { addProduct } from '../redux/cartRedux'
import {useDispatch} from 'react-redux'


const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: fit;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.div`
    font-weight: 200;
    font-size: 30px;
`
const Desc = styled.div`
    margin: 20px 0px;
    font-size: 18px;
`
const Price = styled.div`
    font-weight: 200;
    font-size: 40px;
`
// const FilterContainer = styled.div`
//     width: 50%;
//     margin: 30px 0px;
//     display: flex;
//     justify-content: space-between;
// `
// const Filter = styled.div`
//     display: flex;
//     align-item: center;
// `
// const FilterTitle = styled.span`
//     font-size: 20px;
//     font-weight: 200;
// `
// const FilterColor = styled.div`
//     with: 20px;
//     height: 20px;
// `

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 5px;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
`

function Product() {
    const location = useLocation()
    const id = location.pathname.split('/')[2]

const [product, setProduct] = useState({})
const [quantity, setQuantity] = useState(1)
const dispatch = useDispatch()
useEffect(()=>{
    const getProduct = async ()=>{
        try{
            const res = await axios.get(`http://localhost:5000/miu/products/${id}`)
            setProduct(res.data)
        } catch(err){

        }
    }
    getProduct()
    console.log('Product', product)
}, [id])

const handleQuantity = (type)=>{
    if(type==='dec'){
        quantity>1 && setQuantity(quantity -1)
    } else {
        setQuantity(quantity +1)
    }
}

const handleClick = ()=>{
   dispatch(addProduct({...product, quantity})) 
}

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc> {product.desc}</Desc>
                    <Price>${product.price}</Price>
                   {/* <FilterContainer>
                       <Filter>
                         <FilterTitle>Color</FilterTitle>
                         <FilterColor color="black" />  
                         <FilterColor color="darkblue" /> 
                         <FilterColor color="gray" /> 
                       </Filter>
                    </FilterContainer>  */}
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={()=>handleQuantity('dec')} />
                            <Amount>{quantity}</Amount>
                            <Add  onClick={()=>handleQuantity('inc')} />
                        </AmountContainer>
                        <Button onClick={handleClick}> ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer />
        </Container>
    )
}

export default Product
