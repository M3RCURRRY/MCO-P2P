import { useEffect, useState } from "react";

import styles from "./IndexPage.module.scss";
import Button from "../../components/Button/Button";
import Tile from "../../components/Tile/Tile";

import guide from "./../../assets/guide.png";
import botania from "./../../assets/botania.png";
import { userData } from "./../../utils/mockdata";
import Card from "../../components/Card/Card";

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
      <section className="container mx-auto grid grid-cols-5 gap-4 w-full">
        <section
          className={`${styles.statsBg} row-start-1 col-start-1 col-end-6 grid-rows-2 h-fit rounded-2xl flex flex-col`}
        >
          <h2 className="text-center my-5 text-rose-600 font-semibold text-4xl">
            Current statistics
          </h2>
          <div className="flex flex-row">
            <Tile width={"w-1/3"} data="15 guides">
              Guides
            </Tile>
            <Tile width={"w-1/3"} data="4 authors">
              Authors
            </Tile>
            <Tile width={"w-1/3"} data="10 mods">
              Captured mods
            </Tile>
          </div>
        </section>
        <div className="row-start-2 col-start-2 col-end-5 flex flex-col">
          <h2 className="text-center my-5 text-white font-semibold text-4xl">
            Maintained mods
          </h2>
          <div className="flex flex-row">
            <Tile
              isSquare={true}
              hasShadow={true}
              hasHover={true}
              icon={botania}
            >
              <span className="text-xl font-normal">Botania</span>
            </Tile>
            <Tile
              isSquare={true}
              hasShadow={true}
              hasHover={true}
              icon={botania}
            >
              <span className="text-xl font-normal">Thaumcraft</span>
            </Tile>
            <Tile
              isSquare={true}
              hasShadow={true}
              hasHover={true}
              icon={botania}
            >
              <span className="text-xl font-normal">Tinker's Construct</span>
            </Tile>
            <Tile
              isSquare={true}
              hasShadow={true}
              hasHover={true}
              icon={botania}
            >
              <span className="text-xl font-normal">DivineRPG</span>
            </Tile>
          </div>
        </div>
        <div className="row-start-3 col-start-2 col-end-5 flex flex-row">
          <Tile isSquare={true} hasShadow={true} hasHover={true} icon={botania}>
            <span className="text-xl font-normal">Erebus</span>
          </Tile>
          <Tile isSquare={true} hasShadow={true} hasHover={true} icon={botania}>
            <span className="text-xl font-normal">Twilight Forest</span>
          </Tile>
          <Tile isSquare={true} hasShadow={true} hasHover={true} icon={botania}>
            <span className="text-xl font-normal">Magical Network</span>
          </Tile>
          <Tile isSquare={true} hasShadow={true} hasHover={true} icon={botania}>
            <span className="text-xl font-normal">Alfheim</span>
          </Tile>
        </div>
        <div className="row-start-4 col-start-1 col-end-6 w-full h-2 rounded-full bg-[#18191d] my-10"></div>
      </section>
      <section className="container flex flex-col w-full mx-auto">
        <h2 className="">
          123
        </h2>
        <div className="flex flex-row align-middle justify-between">
          {
            userData.map((item, index) => {
              return <Card width="w-1/4" userdata={item} img={guide}/>
            })
          }
        </div>
      </section>
    </>
  );
};

export default IndexPage;
