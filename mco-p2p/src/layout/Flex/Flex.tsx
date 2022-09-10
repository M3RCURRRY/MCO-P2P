import styled from "styled-components";

type FlexProps = {
  direction: string,
}

const StyledFlex = styled.div<FlexProps>`
display: flex;
flex-direction: ${props => props.direction || "row"};
`

const Flex = (props: FlexProps) => {
  return <StyledFlex {...props} />
}

export default Flex;