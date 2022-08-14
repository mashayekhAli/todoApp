import styled from "styled-components";

export const CardTitle = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    color: ${props => props.isLight ? "#FFFFFF" : "#000000"};
    margin-bottom: 0;
`;

export const BigHeader = styled.h1`
    color: #3661ED;
    margin: 0;
`;