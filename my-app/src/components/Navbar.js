import React from 'react'
import {Badge} from '@material-ui/core'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const SerachContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`
const Left = styled.div`
    flex: 1;
    display: flex;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h5`
     font-weight: bold;
    
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center; 
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
function Navbar() {
    const quantity = useSelector(state=> state.cart.quantity)
    //console.log(quantity)
    return (
        <Container>
          <Wrapper>
              <Left>
                  <SerachContainer>
                      <Input placeholder="Search"/>
                    <Search  style={{color:"gray", fontSize:16}}/>
                  </SerachContainer>
                   </Left>
              <Center><Logo>MIU</Logo></Center>
              <Right>
                  <MenuItem>REGISTER</MenuItem>
                  <MenuItem>SIGN IN</MenuItem>
                  <Link to="/cart" >
                  <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                  </MenuItem>
                  </Link>
              </Right>
          </Wrapper>  
        </Container>
    )
}

export default Navbar
