import styled, { css } from 'styled-components';
import Tooltip from "../Tooltip";

interface ContainerProps {
    isFocused: boolean;
    isFillded: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    
    border: 2px solid #232129;
    color: #666360;

    padding: 16px;
    width: 100%;
    
    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${props => props.isErrored && css`
        border-color: #c53030;
    `}

    ${props => props.isFocused && css`
        color: #ff9000;
        border-color: #ff9000;
    `}

    ${props => props.isFillded && css`
        color: #ff9000;
    `}
    
 input{
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;

    &::placeholder{
        color: #666360;
    }
 }
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin-right: 0;
    }

    span{
        color: #FFF;
        background: #c53030;
    
        &::before{
            border-color: #c53030 transparent;
        }
    }
`;
