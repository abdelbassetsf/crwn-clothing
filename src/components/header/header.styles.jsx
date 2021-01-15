import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export const HeaderContainer = Styled.div` 
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = Styled(Link)`
  height: 100%;
  width: 70px;
  padding-left: 10px
`;

export const StyledLogo = Styled(Logo)`
  height: 100%;
  width: 100%;
`;

export const OptionsContainer = Styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end; 
`;

export const OptionLink = Styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  transition: border-bottom 0.2s ease;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #979494;
  }
`;
