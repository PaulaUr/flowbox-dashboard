import styled from "@emotion/styled";
import { layoutsObjectType } from "../../model/LayoutObjectType";

const cardStyle = () => {
  return `
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  grid-auto-rows: "22rem"
  `;
};
const gridStyle = () => {
  return `
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 25rem), 1fr));
  grid-auto-rows: "20rem"
  `;
};
const listStyle = () => {
  return `
  grid-template-columns:  75%;
  grid-auto-rows: minmax(auto, 300px);
  justify-content: center;
  `;
};
const carouselStyle = () => {
  return `
  grid-auto-flow: column;
  grid-gap:10px; 
  margin:30px;
  overflow:auto;
  `;
};

const applyLayoutToContainer = ({ layout }: { layout: string }) => {
  const ApplyLayout: layoutsObjectType = {
    GRID: () => gridStyle(),
    CARD: () => cardStyle(),
    LIST: () => listStyle(),
    CAROUSEL: () => carouselStyle(),
  };

  return ApplyLayout[layout];
};

export const LayoutContainerStyle = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  row-gap: 3rem;
  font-size: 16px;
  justify-content: space-between;
  margin-top: 30px;
  ${applyLayoutToContainer}
`;

export const CarouselContainerStyle = styled.div`
  margin: 10%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const applyLayoutToListCard = ({ layout }: { layout: string }) => {
  const ApplyLayout: layoutsObjectType = {
    GRID: () => "flex-direction: column; background-color: RGB(146, 168, 209)",
    CARD: () => "flex-direction: column; background-color: RGB(247, 202, 201)",
    LIST: () => "flex-direction: row; background-color: RGB(68, 184, 172);",
  };

  return ApplyLayout[layout];
};

export const CardContainerStyle = styled.div`
  display: flex;
  margin: 8px;
  padding: 18px;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(63, 81, 181, 0.6);

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  ${applyLayoutToListCard}
`;
