import React, { useState} from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { HomeObjOne, HomeObjTwo } from '../Components/InfoSection/Data';
import SpecsSection from '../Components/DetoxifierSpecs';
import Collection from '../Components/Collections';
import CustomerSection from '../Components/CustomersSection';
import Footer from '../Components/Footer';


const Home = () => {
    
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...HomeObjOne}/>
            <SpecsSection/>
            <InfoSection {...HomeObjTwo}/>
            <Collection/>
            <CustomerSection/>
            <Footer/>
        </>
    )
}

export default Home
