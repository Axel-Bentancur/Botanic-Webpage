import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 8px;
    background: #22332f;
    white-space: nowrap;
    padding: 12px 30px;
    color: #d1dad5;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .2s ease-in-out;

    &:hover{
        transition: all .2s ease-in-out;
        background: #60988b; 
        color: #d1dad5;
    }
`