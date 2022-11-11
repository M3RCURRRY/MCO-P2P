import { useEffect, useState } from "react";

import styles from "./IndexPage.module.scss";
import guide from "./../../assets/guide.png";
import Button from "../../components/Button/Button";
import Tile from "../../components/Tile/Tile";

const IndexPage = () => {
  const [activeTile, setActiveTile] = useState<number>(0);
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => setActiveTile((activeTile + 1) % 3));
  }, []);

  return (
    <>
      <div className="container mx-auto flex flex-row w-full">
        <div className="text-white my-1 leading-normal col-span-3 row-start-1 row-end-2 flex flex-col w-3/5 align-middle justify-center">
          <h1
            className={`${styles.shadow} ${styles.headerFont} text-7xl mb-10 block`}
          >
            Flexible guide publishing platform
          </h1>
          <h6 className={`${styles.plainFont} text-white text-2xl mb-10`}>
            An easy-to-use forum for creating guides with an intuitive
            interface. A new level of publishing guides, which is available to
            everyone!
          </h6>
          <div className="flex flex-row w-full">
            <Button btnType="filled">Start now!</Button>
            <Button btnType="transparent">How to join</Button>
          </div>
        </div>
        <div className={`${styles.headerIcon} text-md my-20 col-span-2`}>
          <img src={guide} alt="Guide icon" className="max-w-xl"></img>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-5 gap-4 w-full">
        <section
          className={`${styles.statsBg} row-start-2 col-start-1 col-end-6 grid-rows-2 h-fit rounded-2xl flex flex-col`}
        >
          <h2 className="text-center my-5 text-rose-600 font-semibold text-4xl">
            Current statistics
          </h2>
          <div className="flex flex-row">
            <Tile hasShadow={true} width={"w-1/3"} data="15 guides">
              Guides
            </Tile>
            <Tile hasShadow={true} width={"w-1/3"} data="4 authors">
              Authors
            </Tile>
            <Tile hasShadow={true} width={"w-1/3"} data="10 mods">
              Captured mods
            </Tile>
          </div>
        </section>
        <section className="row-start-3 col-start-2 col-end-5 flex flex-col">
          <h2 className="text-center my-5 text-white font-semibold text-4xl">Maintained mods</h2>
          <div className="flex flex-row">
            <Tile isSquare={true}></Tile>
            <Tile isSquare={true}></Tile>
            <Tile isSquare={true}></Tile>
            <Tile isSquare={true}></Tile>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndexPage;
