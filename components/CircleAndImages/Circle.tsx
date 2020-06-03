import styled from 'styled-components';
import CircleAnimation from "../../animations/CircleAnimation";

const StyledCircle = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  border-radius: 50%;
  transition: all 0.3s;
  background-color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")};
`;

interface CircleProps {
  onHelloPage: boolean;
  pageClickedOnce: boolean;
}

const Circle: React.FC<CircleProps> = ({ onHelloPage, pageClickedOnce }) => 
  <CircleAnimation
    onHelloPage={onHelloPage}
    pageClickedOnce={pageClickedOnce}
  >
    <StyledCircle color={onHelloPage ? "red" : "blue"}></StyledCircle>
  </CircleAnimation>

export default Circle;
