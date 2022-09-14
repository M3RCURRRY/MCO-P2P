import styled from "styled-components";
import Flex from "../Flex/Flex";
import swords from "./../../resources/images/sword.png";

const StyledHeader = styled.header`
  width: 100%;
  height: fit-content;

  padding: 10px;

  background-color: #4040a1;
  color: #fff;
`;

const StyledNavBar = styled.nav`
  width: 100%;
  height: 50px;

  padding: 10px;
  margin-bottom: 10px;

  background-color: #252559;
  
  box-shadow: 0px 8px 14px 0px rgba(129, 129, 129, 0.5);
`;

export default function Header() {
  return (
    <Flex direction="column">
      <StyledHeader>
        <Flex direction="column" align="center" justify="center">
          <img style={{ width: "64px" }} src={swords}></img>
          <h2>RPG Utils</h2>
        </Flex>
      </StyledHeader>
      <StyledNavBar></StyledNavBar>
    </Flex>
  );
}
