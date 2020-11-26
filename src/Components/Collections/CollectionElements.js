import styled from 'styled-components';

export const itemCollection = [

    {
        title: 'Green Fittonia',
        price: 'Price: $400'
    },
    {
        title: 'Red Fittonia',
        price: 'Price: $500'
    },
    {
        title: 'Syngonium',
        price: 'Price: $600'
    },
    {
        title: 'Spider Plant',
        price: 'Price: $300'
    },
    {
        title: 'Spider Blue',
        price: 'Price: $200'
    }
]

export const CollectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f3f7f8;
    padding: 50px 0;
    
`
export const CollectionH1 = styled.h1`
    font-size: 2.5rem;
    color: #010606;
    margin-bottom: 64px;
    text-align: center;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const CollectionWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
    }
`
export const CollectionCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    border-radius: 10px;
    max-height: 340px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all .2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const CollectionH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`
export const CollectionP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;
    color: blue;
`

export const CollectionImgContainer = styled.div`
    height: 150px;
    width: 150px;
`

export const Img = styled.img`
    width: 100%;
`