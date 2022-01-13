import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'
import Product from '../Pages/Product'

function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <Categories />
            <Newsletter />
            <Footer />
            <Product />
        </div>
    )
}

export default Home
