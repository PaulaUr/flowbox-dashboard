import styled from "@emotion/styled";
import { layoutsObjectType } from "../../model/LayoutObjectType";

const cardStyleToCardImageWrapper = () => {
  return `
  text-align: center;
  width: calc(100% + 2rem);
  margin: 0 -1rem;
  &:hover {
    transform: scale(1.1);
    transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    & .content {
      opacity: 0.9;
    }
  }
  `;
};
const gridStyleToCardImageWrapper = () => {
  return `
  max-height: 100%
  `;
};
const listStyleToCardImageWrapper = () => {
  return `
  width: 50%;
  text-align: center
  `;
};

const cardStyleToCardImage = () => {
  return `
  max-width: 100%;
  height:150px;
  object-position: bottom;
  `;
};

const gridStyleToCardImage = () => {
  return `
  height: 100%;
  width: 100%;
  aspect-ratio: 4/3
  `;
};
const listStyleToCardImage = () => {
  return `
  width: auto;
  height: 100%;
  max-width: 100%;
  object-position: bottom;
  `;
};
const listStyleToCardBody = () => {
  return `
  width: 50%;
  font-size: larger;
  `;
};

const applyLayoutToCardBody = ({ layout }: { layout: string }) => {
  const layoutsObject: layoutsObjectType = {
    LIST: () => listStyleToCardBody(),
  };

  return layoutsObject[layout];
};
const applyLayoutToCardImageWrapper = ({ layout }: { layout: string }) => {
  const layoutsObject: layoutsObjectType = {
    GRID: () => gridStyleToCardImageWrapper(),
    CARD: () => cardStyleToCardImageWrapper(),
    LIST: () => listStyleToCardImageWrapper(),
    CAROUSEL: () => gridStyleToCardImageWrapper(),
  };

  return layoutsObject[layout];
};

const applyLayoutToCardImage = ({ layout }: { layout: string }) => {
  const layoutsObject: layoutsObjectType = {
    GRID: () => gridStyleToCardImage(),
    CARD: () => cardStyleToCardImage(),
    LIST: () => listStyleToCardImage(),
  };

  return layoutsObject[layout];
};

export const CardImgWrapperStyle = styled.div`
  display: block;
  ${applyLayoutToCardImageWrapper}
`;
export const CardImgStyle = styled.img`
  object-fit: cover;
  ${applyLayoutToCardImage}
`;
export const CardBodyStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 0.5rem;
  color: #303030;
  padding: 5px;
  text-align: center;

  ${applyLayoutToCardBody}
`;

export const CardTitleStyle = styled.div`
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const CardPriceStyle = styled.div`
  color: rgba(177, 33, 217, 0.99);
`;

export const CardDescriptionStyle = styled.p`
  margin: 0 0 8px;
  font-weight: bold;
  font-size: 13px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
