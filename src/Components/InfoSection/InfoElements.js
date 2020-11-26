import styled from 'styled-components';

export const items = [
    {
    body:'12 Naturally-Occuring Probiotics'
    },
    {
    body:'Proven efficacy of removing harmful VOCs'
    },
    {
    body:'Remove dust particles'
    },
    {
    body:'Remove odour'
    },
]

export const InfoContainer = styled.div`
    color:#fff;
    background: #e5f1e7;

    @media screen and (max-width:768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    

    @media screen and (max-width: 768px){
        height: 1000px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    background: #e5f1e7;

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 30px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Heading = styled.h1`
    margin-top: 40px;
    margin-bottom: 42px;
    font-size: 48px;
    height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin: 36px 0;
    font-size: 18px;
    line-heigth: 245px;
    color: #010606;
`
export const SubtitleTwo = styled.p`
    display: ${({displaySub}) => (displaySub ? 'block': 'none')};
    color: #000;
`

export const List = styled.ul`
    display: ${({displayOn}) => (displayOn ? '': 'none')};
    list-style: none;
    margin-top: 30px;
`

export const ListItem = styled.li`
    margin-bottom:10px;
    i{
        margin-right: 15px
    }
`
export const Iconitem = styled.p`
    margin-bottom: 30px;    
    color: #000;
    i{
        margin-right: 15px
    }
`

export const DescriptionTwoText = styled.p`
    margin-bottom: 30px;
`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const ImgWrap = styled.div`
    position: relative;
    max-width: 555px;
    height: 100%;
`

export const InfoBox = styled.div`
    position: absolute;
    border: 3px solid black;
    width: 100%;
    height: 100%;
    bottom:15px;
    left: ${({position}) => (position ? '15px': '-15px')};
`

export const Img = styled.img`
    width: 100%;
    padding-right: 0;
`