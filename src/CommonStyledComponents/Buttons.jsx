import styled from "styled-components";

const DefaultButton = styled.button`
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
    color: #ffffff;
    border-radius: 5px;
    :disabled{
        cursor: not-allowed;
        opacity: 0.75;
    }
`;

export const TabButton = styled(DefaultButton)`
    background-color: #1d9538;
    @media(min-width:961px){
    display: none;}
`;

export const AddButton = styled(DefaultButton)`
    color: #fff;
    background-color: #007bff;
    font-size: 1rem;
    white-space: nowrap;
`;

export const DeleteListButton = styled(DefaultButton)`
  margin : 0.5rem 1rem;
  background: #de350b;
  padding: 0.75rem 1.2rem;
  color: ${props => props.textColor || "#FFFFFF"};
`;

export const ActionButtons = styled(DefaultButton)`
  height: 55px;
  min-width: 160px;
  background-color: ${props => props.backgroundColor || "#3661ED"};
  color: ${props => props.textColor || "#FFFFFF"};
`;