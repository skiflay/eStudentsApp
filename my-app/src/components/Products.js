import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

function Products({cat, filters, sort}) {
    //console.log(cat, filters, sort)
    const [products, setProducts]= useState([])
    const [filteredProducts, setFilteredProducts]= useState([])

    useEffect(() => {
        const getProducts = async ()=>{
            try{
            const res = await axios.get("http://localhost:5000/miu/products")
            console.log(res)
            } catch(err){
    
            }     
        }      
        getProducts()
    }, [cat])

    return (
        <Container>
            {popularProducts.map(item=>(
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products