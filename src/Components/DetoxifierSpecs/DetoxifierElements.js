import styled from 'styled-components';

export const SpecsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #22332f;
`

export const SpecsWrapper = styled.div`
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const SpecsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;
`
export const SpecsIcon = styled.img`
    height: 80px;
    width: 160px;
    margin-bottom: 10px;
`
export const SpecsP = styled.p`
    font-size: 1rem;
    text-align: center;
    max-width: 400px;
    color: #fff;
`