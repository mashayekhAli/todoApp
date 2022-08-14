import styled from 'styled-components';
import { Card } from '../CommonStyledComponents/Card';

export const TitleDiv = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`;

export const LeftContainer = styled(Card)`
  > ul {
    flex-grow: 1;
    overflow: auto;
  }
`;

export const SavedListsWrapper = styled.div`
  padding: 10px 30px 30px 30px;
  flex-grow: 1;
  overflow-y: auto;
`;

export const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 5vw;
  @media(min-width: 1440px){
    padding-right: 10vw;
    padding-left: 10vw;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-grow: 1;
  @media (max-width:960px){
    flex-direction: column;
  }
  > div{
    flex-basis: 50%;
    @media (max-width:960px){
      &.hide-on-mobile{
        display: none;
      }
      flex-basis: 100%;
    }
  }
  > div:first-child{
    margin-right: 30px;
    @media (max-width:960px){
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }
`;