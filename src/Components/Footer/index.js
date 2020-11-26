import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebSiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {

    const toggleHome = ()=>{
        scroll.scrollToTop();
    };


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                            <FooterLinkTitle> Services</FooterLinkTitle>
                                <FooterLink to='/'>Membership</FooterLink>
                                <FooterLink to='/'>Products</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinkItems>
                                <FooterLinkTitle> Address</FooterLinkTitle>
                                <FooterLink to='/'>9845 Loren Creek SM.</FooterLink>
                                <FooterLink to='/'>SaintLow WT</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle> Email</FooterLinkTitle>
                                <FooterLink to='/'>info@botanic-plant.com</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Botanic
                        </SocialLogo>
                        <WebSiteRights> Botanic © {new Date().getFullYear()} All rights reserved.</WebSiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com' target='_blank' aria_label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com' target='_blank' aria_label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.youtube.com' target='_blank' aria_label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='https://twitter.com' target='_blank' aria_label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href='https://linkedin.com' target='_blank' aria_label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
