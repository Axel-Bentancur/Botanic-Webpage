import React from 'react';
import { itemCollection, CollectionContainer, CollectionH1, CollectionWrapper, CollectionCard, CollectionImgContainer, Img, CollectionH2, CollectionP } from './CollectionElements';
import Plant from '../../images/plant-1.jpg'
const Collection = () => {
    return (
        <CollectionContainer id='collection'>
            <CollectionH1> Plant Sushi Collections</CollectionH1>
            <CollectionWrapper>
                {itemCollection.map(({index, title, price})=>(
                    <CollectionCard key={index}>
                        <CollectionImgContainer>
                            <Img src={Plant}></Img>
                        </CollectionImgContainer>
                        <CollectionH2>{title}</CollectionH2>
                        <CollectionP>{price}</CollectionP>
                    </CollectionCard>
                ))}
            </CollectionWrapper>            
        </CollectionContainer>
    )
}

export default Collection

