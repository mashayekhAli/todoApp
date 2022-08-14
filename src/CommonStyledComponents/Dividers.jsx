import styled from "styled-components";

export const Divider = styled.div`
    width: 100%;
    margin-top: ${props => props.margin || "1.3rem"};  
    margin-bottom: ${props => props.margin || "1.3rem"};  
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-color: ${props => props.color || "rgba(0, 0, 0, 0.1)"};
`;