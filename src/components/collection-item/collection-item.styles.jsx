import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;
  transition: opacity 0.3s ease, background 0.15s ease;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  transition: opacity 0.3s ease;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    ${BackgroundImage} {
      opacity: 0.8;
    }

    ${AddButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
