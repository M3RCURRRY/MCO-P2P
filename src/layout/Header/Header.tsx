import { useState, useEffect } from "react";

import logo from "./../../assets/logo.png";
import styles from "./Header.module.scss";
import modlist from "../../data/modlist";

type Topic = {
  themeName: string;
  modlist: string[];
  keywords: string[];
};

interface ITopicList {
  [key: number]: Topic;
}

const themes: Topic[] = [
  {
    themeName: "Botania farm",
    modlist: ["Thaumcraft", "Botania", "Tinker's Construct", "OpenBlocks"],
    keywords: ["farm", "botania", "thaumcraft", "automated"],
  },
  {
    themeName: "Divine Bosses",
    modlist: ["DivineRPG"],
    keywords: ["boss", "divine", "divinerpg"],
  },
];

const filter = (req: string, topics: Topic[] | undefined) => {
  const highPriority: Topic[] = [];
  const mediumPriority: Topic[] = [];
  const lowPriority: Topic[] = [];

  if (!req) return [];

  topics?.forEach((item) => {
    if (~item.themeName.toLowerCase().indexOf(req.toLocaleLowerCase())) {
      highPriority.push(item);
      return;
    } else {
      let isFound = false;
      for (let mod of item.modlist) {
        if (~mod.toLocaleLowerCase().indexOf(req.toLocaleLowerCase())) {
          mediumPriority.push(item);
          isFound = true;
          break;
        }
      }

      if (!isFound) {
        for (let key of item.keywords) {
          if (~key.toLocaleLowerCase().indexOf(req.toLocaleLowerCase())) {
            lowPriority.push(item);
            break;
          }
        }
      }
    }
  });

  return highPriority.concat(mediumPriority).concat(lowPriority);
};

const Matches = (matches: ITopicList) => {
  console.log(matches);

  return (
    <div className="absolute mt-7 flex flex-col rounded-sm p-1 text-white font-medium text-center">
      <span>Результаты поиска</span>
      {Object.values(matches).length === 0 ? (
        <span className="font-normal">No result</span>
      ) : (
        Object.values(matches).map((matched: Topic) => {
          return (
            <div className="flex flex-col rounded-md bg-gray-800 m-1 text-white p-2 w-72 text-left">
              <div className="flex justify-between w-full mb-3">
                <span className="font-medium">{matched.themeName}</span>
                <span className="font-light">
                  <a href="#">Go to guide</a>
                </span>
              </div>

              <div className="flex flex-col flex-wrap">
                <span className="font-normal text-sm ml-1">Used mods</span>
                <div className="flex flex-row flex-wrap">
                  {matched.modlist.map((item: string, index: number) => {
                    return (
                      <span
                        key={index}
                        className="text-white bg-rose-600 h-fit w-fit rounded-full text-sm pl-1 pr-1 m-1"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

function Header() {
  const [toggled, setToggled] = useState(false);
  const [topics, setTopics] = useState<Topic[]>();
  const [userReq, setUserReq] = useState<string>("");

  useEffect(() => {
    setTopics(themes);
  }, []);

  const focusHandler = (value: boolean) => {
    setToggled(value);
  };

  return (
    <header className="container mx-auto flex flex-row items-center justify-around">
      <img src={logo} className="h-20"></img>
      <div className="relative flex flex-row justify-around">
        <input
          id="theme-search"
          onChange={(e) => setUserReq(e.target.value)}
          onFocus={() => focusHandler(true)}
          onBlur={() => focusHandler(false)}
          className={`w-100 rounded-full ${styles.styledInput}`}
        ></input>
        {toggled && <Matches {...filter(userReq, topics)} />}
      </div>
    </header>
  );
}

export default Header;
