import styled from "styled-components";

type FlexProps = {
  direction?: string,
  align?: string,
  justify?: string, 
  children: React.ReactElement[];
}

const Flex = styled.div<FlexProps>`
display: flex;
flex-direction: ${props => props.direction || "row"};
align-items: ${props => props.align || "flex-start"};
jusitfy-content: ${props => props.justify || "flex-start"};
`

export default Flex;