import React from 'react';
import { Button } from '../ButtonElements';
import { items, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle, SubtitleTwo, DescriptionTwoText, Iconitem, List, ListItem, BtnWrap, ImgWrap, Img, InfoBox} from './InfoElements'

const InfoSection = ({id, to, imgStart, headLine, description, descriptionTwo, iconText, buttonLabel, img, alt, displayOn, displaySub, position}) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading >{headLine}</Heading>
                                <Subtitle >{description}
                                    <List displayOn={displayOn}>
                                    {items.map(({ id, body }) => (
                                        <ListItem key={id}>
                                            <i class="fas fa-check"></i>{body}
                                        </ListItem>
                                    ))}
                                    </List>
                                </Subtitle>
                                <SubtitleTwo displaySub={displaySub}>
                                    <DescriptionTwoText>{descriptionTwo}</DescriptionTwoText>
                                    <Iconitem><i class="fas fa-sync-alt"></i>{iconText}</Iconitem>
                                </SubtitleTwo>
                                <BtnWrap>
                                    <Button to={to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap >     
                                <Img src={img} alt={alt}></Img>
                                <InfoBox position={position}></InfoBox>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
