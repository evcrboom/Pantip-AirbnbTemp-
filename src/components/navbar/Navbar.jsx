import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import PeopleIcon from "@mui/icons-material/People";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import underList from "./underlist";
import TuneIcon from "@mui/icons-material/Tune";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

function Navbar() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 15,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1240, min: 956 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 956, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__Top">
          <div className="Navbar__logo">
            <a href="/">
              <img
                className="pantip-logo"
                src={process.env.PUBLIC_URL + "/images/pantip-logo.png"}
                alt="Pantip-logo"
              />
            </a>
          </div>
          <div className="Navbar__explore">
            <ul className="Navbar__list">
              <li className="Home">
                <button>Home</button>
              </li>
              <li className="Myfeed">
                <button>Myfeed</button>
              </li>
              <li className="Pick">
                <button>Pantip Pick</button>
              </li>
              <li className="Hitz">
                <button>Pantip Hitz</button>
              </li>
              <li className="Explore">
                <button>Explore</button>
              </li>
            </ul>
          </div>
          <div className="Navbar__end">
            <div className="Navbar__point">
              <button className="Pantip-point">Pantip point</button>
              <button className="Language">
                <LanguageIcon />
              </button>
            </div>
            <div className="Navbar__user">
              <div className="user">
                <MenuIcon />
                <Avatar className="avartar" alt="avartar-user">
                  B
                </Avatar>
              </div>
            </div>
          </div>
        </div>
        <div className="Navbar__mid">
          <div className="mid__search mid">
            <AddCircleOutlinedIcon sx={{ color: "purple" }} />
            <input
              id="search"
              type="text"
              placeholder="Search for some post..."
            />
          </div>
          <div className="mid__createPost mid">
            <AddCircleOutlinedIcon sx={{ color: "purple" }} />
            <p>ตั้งกระทู้</p>
          </div>
          <div className="mid__community mid">
            <PeopleIcon sx={{ color: "purple" }} />
            <p>คอมมู</p>
          </div>
        </div>
      </div>
      <hr style={{ background: "#dddddd", border: "none", height: "1px" }} />
      <div className="Navbar__under">
        <div className="under__lists">
          <Carousel responsive={responsive} className="under__list">
            {underList.map((element, index) => {
              return (
                <div className="list__element" key={element.id}>
                  {element.logo} <p>{element.text}</p>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="under__filter">
          <div className="filter__box">
            <TuneIcon />
            filter
          </div>
        </div>
        <div className="under__lightmode">
          <FormControlLabel
            className="light__modeToggle"
            value="start"
            control={<Switch color="primary" />}
            label="Light-mode"
            labelPlacement="start"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
