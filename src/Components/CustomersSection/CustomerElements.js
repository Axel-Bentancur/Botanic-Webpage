import styled from 'styled-components';
import Andrea from '../../images/andrea.jpg';
import Craig from '../../images/craig.jpg';
import Daniela from '../../images/daniela.jpg';

export const CustomerList = [
    {
        img: Andrea,
        name: 'Andrea Piacquadio',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam?'
    },
    {
        img: Craig,
        name: 'Craig Mckay',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam?'
    },
    {
        img: Daniela,
        name: 'Daniela Xavier',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, aliquam?'
    },
]


export const CustomerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 50px 0;
`

export const CustomerH1 = styled.h1`
    font-size: 2.5rem;
    color: #000;
    margin-bottom: 100px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const CustomerWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 60px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`
export const CustomerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    max-height: 340px;
    width: 250px;
`
export const CustomerImg = styled.img`
    position: absolute;
    height: 80px;
    width: 80px;
    top: 0;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid #fff;
`
export const CustomerSocialMedia = styled.div`
    position: absolute;
    background: #fff;
    top: 0;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    border: 3px solid #fff;
    height: 30px;
    width: 30px;
    font-size: 24px;
    color: #3b5998;
`
export const CustomerInfo = styled.div`
    position: relative;
    border-radius: 10px;
    background: #4949492e;
    width: 100%;
    height: 100%;
    padding: 15px;
    padding-top: 70px;
`
export const CustomerName = styled.h1`
    text-align: center;
    font-size: 1rem;
    margin-bottom: 10px;
`
export const CustomerP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
`