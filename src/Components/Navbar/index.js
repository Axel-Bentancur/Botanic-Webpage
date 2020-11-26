import React, {useEffect, useState}from 'react';
import { FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';


const Navbar = ({ toggle }) => {

    const [scrollNav, setscrollNav] = useState(false);

    const changeNav = () =>{
        if(window.scrollY >=80) {
            setscrollNav(true)
        } else {
            setscrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        Botanic™
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='intro'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>botanic intro</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='detoxifiers'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>air detoxifiers</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='sushis'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>plant sushis</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='customers'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>more</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
