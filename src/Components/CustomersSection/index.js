import React from 'react';
import {CustomerList, CustomerContainer, CustomerH1, CustomerWrapper, CustomerCard, CustomerImg, CustomerSocialMedia, CustomerInfo, CustomerName, CustomerP} from './CustomerElements';
import {FaFacebook} from 'react-icons/fa';
const CustomerSection = () => {

    return (
        <>
            <CustomerContainer id='customers'>
                <CustomerH1>Our Customers Love Botanic</CustomerH1>
                <CustomerWrapper>
                    {CustomerList.map((customer, index)=>{
                      return(
                        <CustomerCard key={index}>
                            <CustomerInfo>
                                <CustomerImg src={customer.img}/>
                                <CustomerSocialMedia><FaFacebook/></CustomerSocialMedia>
                                <CustomerName>{customer.name}</CustomerName>
                                <CustomerP>{customer.info}</CustomerP>
                            </CustomerInfo>
                        </CustomerCard>  
                      )
                    })}
                </CustomerWrapper>
            </CustomerContainer>
        </>
    )
}

export default CustomerSection
