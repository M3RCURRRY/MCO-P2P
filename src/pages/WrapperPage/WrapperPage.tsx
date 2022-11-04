import styled from "styled-components";
import Header from "../../layout/Header/Header";
import styles from "./WrapperPage.module.scss";

interface FigureProps {
  color: string;
  degree: number;
  size: number;
  fromRight?: number;
  fromLeft?: number;
  fromTop?: number;
  fromBottom?: number;
}

const Rectangle = styled.div<FigureProps>`
  position: absolute;
  background-color: ${(props) => props.color};
  transform: rotate(${(props) => props.degree}deg);
  width: calc(10px * ${(props) => props.size});
  height: calc(10px * ${(props) => props.size});
  right: ${(props) => (props.fromRight ? props.fromRight + "%" : "unset")};
  left: ${(props) => (props.fromLeft ? props.fromLeft + "%" : "unset")};
  top: ${props => props.fromTop ? props.fromTop + "%" : "unset"};
  bottom: ${props => props.fromBottom ? props.fromBottom + "%" : "unset"};
  -webkit-box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.2);
`;

const Circle = styled.div<FigureProps>`
  position: absolute;
  background-color: ${(props) => props.color};
  transform: rotate(${(props) => props.degree}deg);
  width: calc(10px * ${(props) => props.size});
  height: calc(10px * ${(props) => props.size});
  right: ${(props) => (props.fromRight ? props.fromRight + "%" : "unset")};
  left: ${(props) => (props.fromLeft ? props.fromLeft + "%" : "unset")};
  top: ${props => props.fromTop ? props.fromTop + "%" : "unset"};
  bottom: ${props => props.fromBottom ? props.fromBottom + "%" : "unset"};
  -webkit-box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 33px 13px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

const WrapperPage = () => {
  return (
    <>
      <div className={styles.backdrop}>
        <Circle color="#ff0151" degree={30} size={30} fromRight={-4} fromTop={1} />
        <Circle color="#ff0151" degree={11} size={29} fromRight={-2} fromBottom={-3} />
        <Circle color="#ff0151" degree={0} size={23} fromRight={-3} fromTop={37}/>
        <Circle color="#ff0151" degree={0} size={13} fromRight={1} fromBottom={28}/>
        <Circle color="#ff0151" degree={0} size={11} fromRight={8} fromTop={27}/>
        <Circle color="#ff0151" degree={0} size={11} fromRight={13} fromBottom={17}/>
        <Circle color="#ff0151" degree={0} size={8} fromRight={10} fromBottom={40}/>

        <Circle color="#ff0151" degree={30} size={30} fromLeft={-4} fromTop={1} />
        <Circle color="#ff0151" degree={11} size={29} fromLeft={-2} fromBottom={-3} />
        <Circle color="#ff0151" degree={0} size={23} fromLeft={-3} fromTop={37}/>
        <Circle color="#ff0151" degree={0} size={13} fromLeft={1} fromBottom={28}/>
        <Circle color="#ff0151" degree={0} size={11} fromLeft={8} fromTop={27}/>
        <Circle color="#ff0151" degree={0} size={11} fromLeft={13} fromBottom={17}/>
        <Circle color="#ff0151" degree={0} size={8} fromLeft={10} fromBottom={40}/>
      </div>
      <div className={`${styles.wrapper} backdrop-blur-lg`}>
        <Header/>
      </div>
    </>
  );
};

export default WrapperPage;
