import styles from "./ResourceDemo.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import wrapperStyles from "../Wrapper.module.css";
import { useEffect, useState } from "react";
import axeImg from "../../images/resource rally/axe.png";
import bronzeImg from "../../images/resource rally/bronze.png";
import bronzePickaxeImg from "../../images/resource rally/bronze pickaxe.png";
import coalImg from "../../images/resource rally/coal.png";
import copperImg from "../../images/resource rally/copper.png";
import copperPickaxeImg from "../../images/resource rally/copper pickaxe.png";
import hammerImg from "../../images/resource rally/hammer.png";
import ironImg from "../../images/resource rally/iron.png";
import lumberImg from "../../images/resource rally/lumber.png";
import mineImg from "../../images/resource rally/mine.png";
import quarryImg from "../../images/resource rally/quarry.png";
import sawmillImg from "../../images/resource rally/sawmill.png";
import smelterImg from "../../images/resource rally/smelter.png";
import steelImg from "../../images/resource rally/steel.png";
import sticksImg from "../../images/resource rally/sticks.png";
import stonePickaxeImg from "../../images/resource rally/stone pickaxe.png";
import stonesImg from "../../images/resource rally/stones.png";
import tinImg from "../../images/resource rally/tin.png";
import woodPickaxeImg from "../../images/resource rally/wood pickaxe.png";
import swordImg from "../../images/resource rally/sword.png";

function ResourceDemoComponent() {
  //.....Resource States.........................................................................................
  const [sticksCount, setSticksCount] = useState(2);
  const [lumberCount, setLumberCount] = useState(0);
  const [lumberAvailability, setLumberAvailability] = useState(false);
  const [stonesCount, setStonesCount] = useState(0);
  const [stonesAvailability, setStonesAvailability] = useState(false);
  const [coalCount, setCoalCount] = useState(0);
  const [coalAvailability, setCoalAvailability] = useState(false);
  const [copperCount, setCopperCount] = useState(0);
  const [copperAvailability, setCopperAvailability] = useState(false);
  const [tinCount, setTinCount] = useState(0);
  const [tinAvailability, setTinAvailability] = useState(false);
  const [bronzeCount, setBronzeCount] = useState(0);
  const [bronzeAvailability, setBronzeAvailability] = useState(false);
  const [ironCount, setIronCount] = useState(0);
  const [ironAvailability, setIronAvailability] = useState(false);
  const [steelCount, setSteelCount] = useState(7);
  const [steelAvailability, setSteelAvailability] = useState(false);

  //.....Tool States.........................................................................................
  const [axeCount, setAxeCount] = useState(0);
  const [axeAvailability, setAxeAvailability] = useState(false);
  const [woodPickaxeCount, setWoodPickaxeCount] = useState(0);
  const [woodPickaxeAvailability, setWoodPickaxeAvailability] = useState(false);
  const [hammerCount, setHammerCount] = useState(0);
  const [hammerAvailability, setHammerAvailability] = useState(false);
  const [stonePickaxeCount, setStonePickaxeCount] = useState(0);
  const [stonePickaxeAvailability, setStonePickaxeAvailability] =
    useState(false);
  const [copperPickaxeCount, setCopperPickaxeCount] = useState(0);
  const [copperPickaxeAvailability, setCopperPickaxeAvailability] =
    useState(false);
  const [bronzePickaxeCount, setBronzePickaxeCount] = useState(0);
  const [bronzePickaxeAvailability, setBronzePickaxeAvailability] =
    useState(false);

  //.....Structure States.........................................................................................
  const [sawmillCount, setSawmillCount] = useState(0);
  const [sawmillAvailability, setSawmillAvailability] = useState(false);
  const [quarryCount, setQuarryCount] = useState(0);
  const [quarryAvailability, setQuarryAvailability] = useState(false);
  const [mineCount, setMineCount] = useState(0);
  const [mineAvailability, setMineAvailability] = useState(false);
  const [smelterCount, setSmelterCount] = useState(0);
  const [smelterAvailability, setSmelterAvailability] = useState(false);

  //.....Sword States.........................................................................................
  const [swordCount, setSwordCount] = useState(0);
  const [swordAvailability, setSwordAvailability] = useState(false);

  //.....Resources.........................................................................................
  const userResources = [
    {
      id: 100,
      name: "sticks",
      count: sticksCount,
      availability: true,
      icon: sticksImg,
    },
    {
      id: 101,
      name: "lumber",
      count: lumberCount,
      availability: lumberAvailability,
      icon: lumberImg,
      requirements: "axe",
    },
    {
      id: 102,
      name: "stones",
      count: stonesCount,
      availability: stonesAvailability,
      icon: stonesImg,
      requirements: "wood pickaxe",
    },
    {
      id: 103,
      name: "coal",
      count: coalCount,
      availability: coalAvailability,
      icon: coalImg,
      requirements: "stone pickaxe",
    },
    {
      id: 104,
      name: "copper",
      count: copperCount,
      availability: copperAvailability,
      icon: copperImg,
      requirements: "stone pickaxe",
    },
    {
      id: 105,
      name: "tin",
      count: tinCount,
      availability: tinAvailability,
      icon: tinImg,
      requirements: "copper pickaxe",
    },
    {
      id: 106,
      name: "bronze",
      count: bronzeCount,
      availability: bronzeAvailability,
      icon: bronzeImg,
      requirements: "smelter, 1 copper, 1 tin",
    },
    {
      id: 107,
      name: "iron",
      count: ironCount,
      availability: ironAvailability,
      icon: ironImg,
      requirements: "bronze pickaxe",
    },
    {
      id: 108,
      name: "steel",
      count: steelCount,
      availability: steelAvailability,
      icon: steelImg,
      requirements: "smelter, 1 coal, 1 iron",
    },
  ];

  //.....Tools.........................................................................................
  const userTools = [
    {
      id: 200,
      name: "axe",
      count: axeCount,
      availability: axeAvailability,
      icon: axeImg,
      description: "collects 1 lumber for each axe crafted",
      requirements: "6 sticks",
    },
    {
      id: 201,
      name: "wood pickaxe",
      count: woodPickaxeCount,
      availability: woodPickaxeAvailability,
      icon: woodPickaxeImg,
      description: "collects 1 stone for each wood pickaxe crafted",
      requirements: "3 sticks, 2 lumber",
    },
    {
      id: 202,
      name: "hammer",
      count: hammerCount,
      availability: hammerAvailability,
      icon: hammerImg,
      description: "allows the construction of structures",
      requirements: "1 stick, 1 stone",
    },
    {
      id: 203,
      name: "stone pickaxe",
      count: stonePickaxeCount,
      availability: stonePickaxeAvailability,
      icon: stonePickaxeImg,
      description: "collects 1 coal or copper for each stone pickaxe crafted",
      requirements: "3 sticks, 2 stones",
    },
    {
      id: 204,
      name: "copper pickaxe",
      count: copperPickaxeCount,
      availability: copperPickaxeAvailability,
      icon: copperPickaxeImg,
      description: "collects 1 tin for each copper pickaxe crafted",
      requirements: "3 sticks, 2 copper",
    },
    {
      id: 205,
      name: "bronze pickaxe",
      count: bronzePickaxeCount,
      availability: bronzePickaxeAvailability,
      icon: bronzePickaxeImg,
      description: "collects 1 iron for each bronze pickaxe crafted",
      requirements: "3 sticks, 2 bronze",
    },
  ];

  //.....Structures.........................................................................................
  const userStructures = [
    {
      id: 300,
      name: "sawmill",
      count: sawmillCount,
      availability: sawmillAvailability,
      icon: sawmillImg,
      description: "collects 5 lumber every second for each sawmill built",
      requirements: "20 lumber, 30 stones, 1 hammer",
    },
    {
      id: 301,
      name: "quarry",
      count: quarryCount,
      availability: quarryAvailability,
      icon: quarryImg,
      description: "collects 5 stone every second for each quarry built",
      requirements: "40 lumber, 60 stones, 1 hammer",
    },
    {
      id: 302,
      name: "mine",
      count: mineCount,
      availability: mineAvailability,
      icon: mineImg,
      description: "collects 5 coal every second for each mine built",
      requirements: "80 lumber, 120 stones, 1 hammer",
    },
    {
      id: 303,
      name: "smelter",
      count: smelterCount,
      availability: smelterAvailability,
      icon: smelterImg,
      description:
        "allows the gathering of bronze and steel, only 1 smelter is required",
      requirements: "160 lumber, 240 stones, 1 hammer",
    },
  ];

  //.....Sword.........................................................................................
  const userSword = [
    {
      id: 400,
      name: "sword",
      count: swordCount,
      availability: swordAvailability,
      icon: swordImg,
      requirements: "2 sticks, 7 steel",
    },
  ];

  //.....Gather Resources.........................................................................................
  const gather = (name) => {
    if (name == "sticks") {
      setSticksCount(sticksCount + 1);
    }
    if (name == "lumber") {
      setLumberCount(lumberCount + axeCount);
    }
    if (name == "stones") {
      setStonesCount(stonesCount + woodPickaxeCount);
    }
    if (name == "coal") {
      setCoalCount(coalCount + stonePickaxeCount);
    }
    if (name == "copper") {
      setCopperCount(copperCount + stonePickaxeCount);
    }
    if (name == "tin") {
      setTinCount(tinCount + copperPickaxeCount);
    }
    if (name == "bronze") {
      if (copperCount >= 1 && tinCount >= 1 && smelterCount >= 1) {
        setBronzeCount(bronzeCount + 1);
        setCopperCount(copperCount - 1);
        setTinCount(tinCount - 1);
      }
    }
    if (name == "iron") {
      setIronCount(ironCount + bronzePickaxeCount);
    }
    if (name == "steel") {
      if (coalCount >= 1 && ironCount >= 1 && smelterCount >= 1) {
        setSteelCount(steelCount + 1);
        setCoalCount(coalCount - 1);
        setIronCount(ironCount - 1);
      }
    }
  };

  //.....Craft Tools.........................................................................................
  const craft = (name) => {
    if (name == "axe") {
      if (sticksCount >= 6) {
        setAxeCount(axeCount + 1);
        setSticksCount(sticksCount - 6);
      }
    }
    if (name == "wood pickaxe") {
      if (sticksCount >= 3 && lumberCount >= 2) {
        setWoodPickaxeCount(woodPickaxeCount + 1);
        setSticksCount(sticksCount - 3);
        setLumberCount(lumberCount - 2);
      }
    }
    if (name == "hammer") {
      if (sticksCount >= 1 && stonesCount >= 1) {
        setHammerCount(hammerCount + 1);
        setSticksCount(sticksCount - 1);
        setStonesCount(stonesCount - 1);
      }
    }
    if (name == "stone pickaxe") {
      if (sticksCount >= 3 && stonesCount >= 2) {
        setStonePickaxeCount(stonePickaxeCount + 1);
        setSticksCount(sticksCount - 3);
        setStonesCount(stonesCount - 2);
      }
    }
    if (name == "copper pickaxe") {
      if (sticksCount >= 3 && copperCount >= 2) {
        setCopperPickaxeCount(copperPickaxeCount + 1);
        setSticksCount(sticksCount - 3);
        setCopperCount(copperCount - 2);
      }
    }
    if (name == "bronze pickaxe") {
      if (sticksCount >= 3 && bronzeCount >= 2) {
        setBronzePickaxeCount(bronzePickaxeCount + 1);
        setSticksCount(sticksCount - 3);
        setBronzeCount(bronzeCount - 2);
      }
    }
  };

  //.....Build Structures.........................................................................................
  const build = (name) => {
    if (name == "sawmill") {
      if (lumberCount >= 20 && stonesCount >= 30 && hammerCount >= 1) {
        setSawmillCount(sawmillCount + 1);
        setLumberCount(lumberCount - 20);
        setStonesCount(stonesCount - 30);
        setHammerCount(hammerCount - 1);
      }
    }
    if (name == "quarry") {
      if (lumberCount >= 40 && stonesCount >= 60 && hammerCount >= 1) {
        setQuarryCount(quarryCount + 1);
        setLumberCount(lumberCount - 40);
        setStonesCount(stonesCount - 60);
        setHammerCount(hammerCount - 1);
      }
    }
    if (name == "mine") {
      if (lumberCount >= 80 && stonesCount >= 120 && hammerCount >= 1) {
        setMineCount(mineCount + 1);
        setLumberCount(lumberCount - 80);
        setStonesCount(stonesCount - 120);
        setHammerCount(hammerCount - 1);
      }
    }
    if (name == "smelter") {
      if (
        lumberCount >= 160 &&
        stonesCount >= 240 &&
        hammerCount >= 1 &&
        smelterCount < 1
      ) {
        setSmelterCount(smelterCount + 1);
        setLumberCount(lumberCount - 160);
        setStonesCount(stonesCount - 240);
        setHammerCount(hammerCount - 1);
      }
    }
  };

  //.....Forge Sword.........................................................................................
  const forge = (name) => {
    if (name == "sword") {
      if (sticksCount >= 2 && steelCount >= 7) {
        setSwordCount(swordCount + 1);
        setSticksCount(sticksCount - 2);
        setSteelCount(steelCount - 7);
        setSectionVisibility(!sectionVisibility);
      }
    }
  };

  //.....Update Item Availability.........................................................................................
  useEffect(() => {
    //...Resources....................................
    if (axeCount > 0) {
      setLumberAvailability(true);
    } else {
      setLumberAvailability(false);
    }
    if (woodPickaxeCount >= 1) {
      setStonesAvailability(true);
    } else {
      setStonesAvailability(false);
    }
    if (stonePickaxeCount >= 1) {
      setCoalAvailability(true);
    } else {
      setCoalAvailability(false);
    }
    if (stonePickaxeCount >= 1) {
      setCopperAvailability(true);
    } else {
      setCopperAvailability(false);
    }
    if (copperPickaxeCount >= 1) {
      setTinAvailability(true);
    } else {
      setTinAvailability(false);
    }
    if (copperCount >= 1 && tinCount >= 1 && smelterCount >= 1) {
      setBronzeAvailability(true);
    } else {
      setBronzeAvailability(false);
    }
    if (bronzePickaxeCount >= 1) {
      setIronAvailability(true);
    } else {
      setIronAvailability(false);
    }
    if (coalCount >= 1 && ironCount >= 1 && smelterCount >= 1) {
      setSteelAvailability(true);
    } else {
      setSteelAvailability(false);
    }

    //...Tools........................................
    if (sticksCount >= 6) {
      setAxeAvailability(true);
    } else {
      setAxeAvailability(false);
    }
    if (sticksCount >= 3 && lumberCount >= 2) {
      setWoodPickaxeAvailability(true);
    } else {
      setWoodPickaxeAvailability(false);
    }
    if (sticksCount >= 1 && stonesCount >= 1) {
      setHammerAvailability(true);
    } else {
      setHammerAvailability(false);
    }
    if (sticksCount >= 3 && stonesCount >= 2) {
      setStonePickaxeAvailability(true);
    } else {
      setStonePickaxeAvailability(false);
    }
    if (sticksCount >= 3 && copperCount >= 2) {
      setCopperPickaxeAvailability(true);
    } else {
      setCopperPickaxeAvailability(false);
    }
    if (sticksCount >= 3 && bronzeCount >= 2) {
      setBronzePickaxeAvailability(true);
    } else {
      setBronzePickaxeAvailability(false);
    }

    //...Structures...................................
    if (lumberCount >= 20 && stonesCount >= 30 && hammerCount >= 1) {
      setSawmillAvailability(true);
    } else {
      setSawmillAvailability(false);
    }
    if (lumberCount >= 40 && stonesCount >= 60 && hammerCount >= 1) {
      setQuarryAvailability(true);
    } else {
      setQuarryAvailability(false);
    }
    if (lumberCount >= 80 && stonesCount >= 120 && hammerCount >= 1) {
      setMineAvailability(true);
    } else {
      setMineAvailability(false);
    }
    if (
      lumberCount >= 160 &&
      stonesCount >= 240 &&
      hammerCount >= 1 &&
      smelterCount < 1
    ) {
      setSmelterAvailability(true);
    } else {
      setSmelterAvailability(false);
    }

    //...Sword...................................
    if (sticksCount >= 2 && steelCount >= 7) {
      setSwordAvailability(true);
    } else {
      setSwordAvailability(false);
    }

    //...Structures Logic............................
    const interval = setInterval(() => {
      if (sawmillCount >= 1) {
        setLumberCount(lumberCount + sawmillCount * 5);
      }
      if (quarryCount >= 1) {
        setStonesCount(stonesCount + quarryCount * 5);
      }
      if (mineCount >= 1) {
        setCoalCount(coalCount + mineCount * 5);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  //.....Winner Modal Visibility.........................................................................................
  const [sectionVisibility, setSectionVisibility] = useState(false);
  function toggleSection() {
    setSectionVisibility(!sectionVisibility);
  }

  return (
    <div className={styles.resourceDemo}>
      {sectionVisibility ? (
        <div className={styles.winner}>
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <h2 className={styles.winnerTitle}>
                Congratulations!
                {userSword.map(({ icon }) => {
                  return <img src={icon} alt="" className={styles.icon} />;
                })}
              </h2>
              <p className={styles.winnerSubtitle}>
                You've crafted a steel sword and finished the game but feel free
                to close this window and keep on clickin'!
              </p>
              <button
                className={[styles.btn, styles.winnerBtn].join(" ")}
                onClick={toggleSection}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="row">
        <div className="col">
          <h1 className={styles.title}>Resource Rally</h1>
          <p className={styles.subtitle}>
            Gather resources, craft tools, and build structures in order to
            forge the steel sword and win the game!
          </p>
        </div>
        <div className="col">
          <div className={styles.sword}>
            {userSword.map(
              ({ id, name, count, availability, icon, requirements }) => {
                return (
                  <div
                    key={id}
                    className={[
                      availability ? styles.available : styles.unavailable,
                      styles.userItem,
                    ].join(" ")}
                  >
                    <img src={icon} alt="" className={styles.icon} />
                    <h5>{name}</h5>
                    <p>{count}</p>
                    <button onClick={() => forge(name)} className={styles.btn}>
                      Forge
                    </button>
                    <br />
                    <br />
                    <h6>Requirements:</h6>
                    <p>{requirements}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
      <hr className={styles.separator} />
      <div className={[styles.allItems, "row"].join(" ")}>
        <div className={[styles.itemBox, "col"].join(" ")}>
          <h4 className={styles.sectionTitle}>Resources:</h4>
          <div className={styles.resources}>
            {userResources.map(
              ({ id, name, count, availability, icon, requirements }) => {
                return (
                  <div
                    key={id}
                    className={[
                      availability ? styles.available : styles.unavailable,
                      styles.userItem,
                    ].join(" ")}
                  >
                    <img src={icon} alt="" className={styles.icon} />
                    <h5>{name}</h5>
                    <p>{count}</p>
                    <button onClick={() => gather(name)} className={styles.btn}>
                      Gather
                    </button>
                    <br />
                    <br />
                    <h6>Requirements:</h6>
                    <p>{requirements}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className={[styles.allItems, "row"].join(" ")}>
          <div className={[styles.itemBox, "col"].join(" ")}>
            <h4 className={styles.sectionTitle}>Tools:</h4>
            <div className={styles.tools}>
              {userTools.map(
                ({
                  id,
                  name,
                  count,
                  availability,
                  icon,
                  description,
                  requirements,
                }) => {
                  return (
                    <div
                      key={id}
                      className={[
                        availability ? styles.available : styles.unavailable,
                        styles.userItem,
                      ].join(" ")}
                    >
                      <img src={icon} alt="" className={styles.icon} />
                      <p>{name}</p>
                      <p>{count}</p>
                      <button
                        onClick={() => craft(name)}
                        className={styles.btn}
                      >
                        Craft
                      </button>
                      <br />
                      <br />
                      <h6>Description:</h6>
                      <p className={styles.description}>{description}</p>
                      <h6>Requirements:</h6>
                      <p>{requirements}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <div className={[styles.allItems, "row"].join(" ")}>
          <div className={[styles.itemBox, "col"].join(" ")}>
            <h4 className={styles.sectionTitle}>Structures:</h4>
            <div className={styles.structures}>
              {userStructures.map(
                ({
                  id,
                  name,
                  count,
                  availability,
                  icon,
                  description,
                  requirements,
                }) => {
                  return (
                    <div
                      key={id}
                      className={[
                        availability ? styles.available : styles.unavailable,
                        styles.userItem,
                      ].join(" ")}
                    >
                      <img src={icon} alt="" className={styles.icon} />
                      <p>{name}</p>
                      <p>{count}</p>
                      <button
                        onClick={() => build(name)}
                        className={styles.btn}
                      >
                        Build
                      </button>
                      <br />
                      <br />
                      <h6>Description:</h6>
                      <p className={styles.description}>{description}</p>
                      <h6>Requirements:</h6>
                      <p>{requirements}</p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <Link to="/react-demo/chat-with-seb" className={wrapperStyles.previous}>
          Previous
        </Link>
        <Link to="/react-demo/" className={wrapperStyles.next}>
          Next
        </Link>
      </Wrapper>
    </div>
  );
}

export default ResourceDemoComponent;
