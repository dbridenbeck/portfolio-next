import styled from 'styled-components';
import CircleAnimation from "../../animations/CircleAnimation";

const StyledCircle = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 50%;
  transition: ${({pageClickedOnce}) => pageClickedOnce ? "background-color 0.3s" : "" };
  background-color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")};
`;

interface CircleProps {
  currentPage: string;
  pageClickedOnce: boolean;
}

const Circle: React.FC<CircleProps> = ({ currentPage, pageClickedOnce }) => 
  <CircleAnimation
    currentPage={currentPage}
    pageClickedOnce={pageClickedOnce}
  >
    <StyledCircle 
      color={currentPage === "HELLO" ? "red" : "blue"} 
      pageClickedOnce={pageClickedOnce}
    />
  </CircleAnimation>

export default Circle;
