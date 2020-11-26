import React, { useState } from 'react';
import { Button } from '../ButtonElements' 
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroBtnWrapper} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id='intro'>
            <HeroBg>
                <ImageBg />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Botanic naturally
                </HeroH1>
                <HeroH1>
                    purifies your air
                </HeroH1>
                <HeroBtnWrapper>
                    <Button to="detoxifiers" 
                    smooth={true}                                    
                    duration={500}                                    
                    spy={true}                                    
                    exact='true'                
                    offset={-80} 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    >About Botanic</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection