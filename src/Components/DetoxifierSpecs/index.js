import React from 'react';
import { SpecsContainer, SpecsWrapper, SpecsCard, SpecsIcon, SpecsP} from './DetoxifierElements';
import leafcicle from '../../images/leafCicle.svg';
import virusicon from '../../images/virusIcon.svg';
import virustarget from '../../images/virusTarget.svg';

const SpecsSection = () => {
    return (
        <SpecsContainer id='specs'>
            <SpecsWrapper>
                <SpecsCard>
                    <SpecsIcon src={virusicon}/>
                    <SpecsP>Volatile organic compounds (VOCs) are emitted as gases from certain solids or liquids.</SpecsP>
                </SpecsCard>
                <SpecsCard>
                    <SpecsIcon src={leafcicle}/>
                    <SpecsP>Botanic is an air purifier that focuses on environmental remediation.</SpecsP>
                </SpecsCard>
                <SpecsCard>
                    <SpecsIcon src={virustarget}/>
                    <SpecsP>Apart from removing the common contaminants such as dust and odour, Botanicaire can also target toxic gases known as Volatile Organic Compounds (VOCs.)</SpecsP>
                </SpecsCard>
            </SpecsWrapper>
        </SpecsContainer>
    )
}

export default SpecsSection
