

import React from 'react'
import styled from 'styled-components'
import {Remove, Add} from '@material-ui/icons'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


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
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.div`
    font-weight: 200;
`
const Desc = styled.div`
    margin: 20px 0px;
`
const Price = styled.div`
    font-weight: 200;
    font-size: 40px;
`
// const FilterContainer = styled.div`
// `
// const Filter = styled.div`
// `
// const FilterTitle = styled.span`
// `
// const FilterColor = styled.div`
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
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://th.bing.com/th/id/R.32d1c9173420bec1ea594e5fbfc228cd?rik=%2brGoIZ4ZKLW56A&riu=http%3a%2f%2f4.bp.blogspot.com%2f-UNpoIrPZgtY%2fU9bAHZpEliI%2fAAAAAAAAm_U%2fuCHhdilxa7U%2fs1600%2fphoto%2b(22).JPG&ehk=Whnd8ITQuh4PXaUlZbEgKlFuFzsWlh6NG6eUjkyxMoM%3d&risl=&pid=ImgRaw&r=0" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Toyota Cars</Title>
                    <Desc>This is Beautful .....</Desc>
                    <Price> $5400</Price>
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
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button> ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer />
        </Container>
    )
}

export default Product
