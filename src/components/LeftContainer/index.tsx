import React from "react";
import { Container } from "./styles";

import Dash from "../../assets/icon/24/dasboard.svg";
import Trade from "../../assets/icon/24/trade.svg";
import Protocols from "../../assets/icon/24/protocols.svg";
import Deposits from "../../assets/icon/24/donate.svg";
import Settings from "../../assets/icon/24/setting.svg";
import Profile from "../../assets/icon/24/user.svg";
import IconOut from "../../assets/menu/logout-1 1.svg";

export const LeftContainer: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="logo"></div>
        <div className="list">
          <ul>
            <li>
              <img src={Dash} alt="" />
              Dashboard
            </li>
            <li>
              <img src={Trade} alt="" />
              Trade
            </li>
            <li>
              <img src={Deposits} alt="" />
              Deposits
            </li>
            <li>
              <img src={Protocols} alt="" />
              Protocols
            </li>
            <li>
              <img src={Settings} alt="" />
              Settings
            </li>
            <li>
              <img src={Profile} alt="" />
              Profile
            </li>
          </ul>
        </div>
        <div className="logout">
          <img src={IconOut} alt="" />
          Log Out
        </div>
      </div>
    </Container>
  );
};
