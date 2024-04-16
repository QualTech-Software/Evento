import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const StyledMainContainer = styled.div`
  width: 1312px;
  margin: auto;
  margin-top: 100px;
`;
export const SlidesContainer = styled.ul`
  display: block;
  position: relative;
  height: 500px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
`;
export const SlideInput = styled.input`
  display: none;
`;
export const SlideContainer = styled.li`
  display: block;
`;
export const SlideImage = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  opacity: ${({ checked }) => (checked ? "1" : "0")};
  transform: ${({ checked }) => (checked ? "scale(1)" : "scale(0)")};
  // transition: opacity 1s ease-in-out;
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
export const CarouselDots = styled.div`
  position: absolute;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 20px;
  z-index: 999;
  text-align: center;
  transform: translateX(10%);
`;
export const CarouselDot = styled.div`
  display: inline-block;
  width: 300px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ checked }) => (checked ? "#9747ff" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
`;
export const StyledIconButton = styled(IconButton)`
  position: relative !important;
  border-radius: 50%;
  margin: 16px 0px 0px 698px;
  z-index: 1;
  background-color: #ababab;
  width: 40px;
  height: 40px;
  &:hover {
    background-image: url("../../../assets/iconVector.png") !important;
  }
`;
export const StyledFirstContainer = styled.div`
  display: flex;
`;
