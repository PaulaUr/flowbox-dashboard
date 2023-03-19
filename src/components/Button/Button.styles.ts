import styled from "@emotion/styled";

export const CustomButton = styled.button<{ isActive?: boolean }>`
  background-color: ${({ isActive }) =>
    isActive ? "rgba(246,95,13,1)" : "transparent"};
`;
