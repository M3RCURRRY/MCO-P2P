import { useMedia } from "../../hooks/useMedia";

import Flex from "../Flex/Flex";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./Header.module.scss";

import swords from "./../../resources/images/sword.png";

type MediaQueries = { [k: string] : boolean};

export default function Header() {
  const {isPortraitMobile, isLandscapeMobile, ...isOther}: MediaQueries = useMedia();
  const isMobile = isPortraitMobile || isLandscapeMobile;

  return (
    <Flex direction="column">
      <header className={styles.styledHeader}>
        <Flex direction={isMobile ? "row" : "column" } align="center" justify="center">
          <img style={{ width: "64px" }} src={swords}></img>
          <h3>RPG Utils</h3>
          <>  
            {!isMobile && <h6>Simplest utility</h6>}
          </>
        </Flex>
      </header>
      <NavigationBar/>
    </Flex>
  );
}
