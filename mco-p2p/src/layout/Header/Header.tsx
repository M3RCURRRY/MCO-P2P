import styled from "styled-components"
import swords from "./../../resources/images/sword.png";

const StyledHeader = styled.header`
width: 100%;
height: fit-content;

padding: 10px;
margin-bottom: 10px;

background-color: #4040a1;
color: #fff;
box-shadow: 0px 8px 14px 0px rgba(129, 129, 129, 0.5);
border-bottom: 4px solid #252559;
`

export default function Header() {
  return(
    <StyledHeader>
      <img src={swords}></img>
      <h2>RPG Utils</h2>
    </StyledHeader>
  )
}