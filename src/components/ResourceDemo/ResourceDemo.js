import styles from "./ResourceDemo.module.css";
import { Link } from "react-router-dom";
import Wrapper from "../Wrapper";
import wrapperStyles from "../Wrapper.module.css";
import { useEffect, useState } from "react/cjs/react.development";

function ResourceDemoComponent() {
  //.....Resource States.........................................................................................
  const [sticksCount, setSticksCount] = useState(0);
  const [lumberCount, setLumberCount] = useState(220);
  const [lumberAvailability, setLumberAvailability] = useState(false);
  const [stonesCount, setStonesCount] = useState(220);
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
  const [steelCount, setSteelCount] = useState(0);
  const [steelAvailability, setSteelAvailability] = useState(false);

  //.....Tool States.........................................................................................
  const [axeCount, setAxeCount] = useState(0);
  const [axeAvailability, setAxeAvailability] = useState(false);
  const [woodPickaxeCount, setWoodPickaxeCount] = useState(0);
  const [woodPickaxeAvailability, setWoodPickaxeAvailability] = useState(false);
  const [hammerCount, setHammerCount] = useState(220);
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

  //.....Resources.........................................................................................
  const userResources = [
    {
      id: 100,
      name: "sticks",
      count: sticksCount,
      availability: true,
    },
    {
      id: 101,
      name: "lumber",
      count: lumberCount,
      availability: lumberAvailability,
      requirements: "axe",
    },
    {
      id: 102,
      name: "stones",
      count: stonesCount,
      availability: stonesAvailability,
      requirements: "wood pickaxe",
    },
    {
      id: 103,
      name: "coal",
      count: coalCount,
      availability: coalAvailability,
      requirements: "stone pickaxe",
    },
    {
      id: 104,
      name: "copper",
      count: copperCount,
      availability: copperAvailability,
      requirements: "stone pickaxe",
    },
    {
      id: 105,
      name: "tin",
      count: tinCount,
      availability: tinAvailability,
      requirements: "copper pickaxe",
    },
    {
      id: 106,
      name: "bronze",
      count: bronzeCount,
      availability: bronzeAvailability,
      requirements: "smelter, 1 copper, 1 tin",
    },
    {
      id: 107,
      name: "iron",
      count: ironCount,
      availability: ironAvailability,
      requirements: "bronze pickaxe",
    },
    {
      id: 108,
      name: "steel",
      count: steelCount,
      availability: steelAvailability,
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
      requirements: "6 sticks",
    },
    {
      id: 201,
      name: "wood pickaxe",
      count: woodPickaxeCount,
      availability: woodPickaxeAvailability,
      requirements: "3 sticks, 2 lumber",
    },
    {
      id: 202,
      name: "hammer",
      count: hammerCount,
      availability: hammerAvailability,
      requirements: "1 stick, 1 stone",
    },
    {
      id: 203,
      name: "stone pickaxe",
      count: stonePickaxeCount,
      availability: stonePickaxeAvailability,
      requirements: "3 sticks, 2 stones",
    },
    {
      id: 204,
      name: "copper pickaxe",
      count: copperPickaxeCount,
      availability: copperPickaxeAvailability,
      requirements: "3 sticks, 2 copper",
    },
    {
      id: 205,
      name: "bronze pickaxe",
      count: bronzePickaxeCount,
      availability: bronzePickaxeAvailability,
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
      requirements: "20 lumber, 30 stones, 1 hammer",
    },
    {
      id: 301,
      name: "quarry",
      count: quarryCount,
      availability: quarryAvailability,
      requirements: "40 lumber, 60 stones, 1 hammer",
    },
    {
      id: 302,
      name: "mine",
      count: mineCount,
      availability: mineAvailability,
      requirements: "80 lumber, 120 stones, 1 hammer",
    },
    {
      id: 303,
      name: "smelter",
      count: smelterCount,
      availability: smelterAvailability,
      requirements: "160 lumber, 240 stones, 1 hammer",
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
      if (lumberCount >= 160 && stonesCount >= 240 && hammerCount >= 1) {
        setSmelterCount(smelterCount + 1);
        setLumberCount(lumberCount - 160);
        setStonesCount(stonesCount - 240);
        setHammerCount(hammerCount - 1);
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
    if (lumberCount >= 160 && stonesCount >= 240 && hammerCount >= 1) {
      setSmelterAvailability(true);
    } else {
      setSmelterAvailability(false);
    }

    //...Structures Functions.........................
    const interval = setInterval(() => {
      if (sawmillCount >= 1) {
        setLumberCount(lumberCount + sawmillCount);
      }
      if (quarryCount >= 1) {
        setStonesCount(stonesCount + quarryCount);
      }
      if (mineCount >= 1) {
        setCoalCount(coalCount + mineCount);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.resourceDemo}>
      <div className="row">
        <div className="col">
          <h1 className={styles.title}>Resource Rally</h1>
          <p className={styles.subtitle}>
            Gather resources, craft tools, and build structures in order to
            create the golden chalice and win the game!
          </p>
        </div>
      </div>
      <hr className={styles.separator} />
      <div className={[styles.allItems, "row"].join(" ")}>
        <div className={[styles.itemBox, "col"].join(" ")}>
          <h4 className={styles.sectionTitle}>Resources:</h4>
          <div className={styles.resources}>
            {userResources.map(
              ({ id, name, count, availability, requirements }) => {
                return (
                  <div
                    key={id}
                    className={[
                      availability ? styles.available : styles.unavailable,
                      styles.userItem,
                    ].join(" ")}
                  >
                    <h5>{name}</h5>
                    <p>{count}</p>
                    <button onClick={() => gather(name)}>Gather</button>
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
                ({ id, name, count, availability, requirements }) => {
                  return (
                    <div
                      key={id}
                      className={[
                        availability ? styles.available : styles.unavailable,
                        styles.userItem,
                      ].join(" ")}
                    >
                      <p>{name}</p>
                      <p>{count}</p>
                      <button onClick={() => craft(name)}>Craft</button>
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
        <div className={[styles.allItems, "row"].join(" ")}>
          <div className={[styles.itemBox, "col"].join(" ")}>
            <h4 className={styles.sectionTitle}>Structures:</h4>
            <div className={styles.structures}>
              {userStructures.map(
                ({ id, name, count, availability, requirements }) => {
                  return (
                    <div
                      key={id}
                      className={[
                        availability ? styles.available : styles.unavailable,
                        styles.userItem,
                      ].join(" ")}
                    >
                      <p>{name}</p>
                      <p>{count}</p>
                      <button onClick={() => build(name)}>Build</button>
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
