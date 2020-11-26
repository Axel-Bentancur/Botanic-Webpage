import styled from 'styled-components';
import BackgroundImg from '../../images/bg.jpg';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%,
        transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.div`
    background-image: url(${BackgroundImg});
    background-size: cover;
    width: 100%;
    height: 100%;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto 0;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 50px;
    text-align: center;
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 40px
    }

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`