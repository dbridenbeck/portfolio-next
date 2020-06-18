import styled from "styled-components";

const PillContainer = styled.div`
  height: 1.75em;
  padding: 0.133em 0.825em;
  margin: ${({ setMargin }) => setMargin ? setMargin : "0 0 0 0" };
  color: #584d4d;
  background-color: #f2f2f2;
  border-radius: 1000px;
  font-size: 0.825em;
`;

interface PillProps {
  children: string;
  setMargin: string;
}

const Pill: React.FC<PillProps> = ({ children, setMargin }) => (
  <PillContainer setMargin={setMargin}>
    {children}
  </PillContainer>
);

export default Pill;
