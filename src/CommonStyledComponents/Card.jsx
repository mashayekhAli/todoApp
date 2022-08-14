import styled from "styled-components";

export const Card = styled.div`
    background: ${props => props.bgColor ? "#323435" : "#FFFFFF"};
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.01);
    border-radius: 34px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    padding: 3vh 3vw;
`;