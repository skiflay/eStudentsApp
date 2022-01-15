import React from 'react'
import { Instagram, Twitter, Facebook, Room, Phone, MailOutline } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.div`
    margin: 20px 0px
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    padding: 20px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;   
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.div`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`


function Footer() {
    return (
        <Container>
            <Left>
            <Logo>MIU</Logo>
            <Desc>This is the best MIU platform that 
                helps students to help eachother by posting and buying used products
            </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                       <Facebook /> 
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                       <Instagram /> 
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                       <Twitter /> 
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man</ListItem>
                    <ListItem>Woman</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room /> 1000 N 4th St, Fairfield, IA 52557</ContactItem>
                <ContactItem> <Phone /> +1 202 446 7856</ContactItem>
                <ContactItem> <MailOutline /> skiflay@miu.edu</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
