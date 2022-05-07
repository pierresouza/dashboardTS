import React from "react";
import { Container } from "./styles";

import Notification from "../../assets/icon/24/Notificationspush.svg";
import Picture from "../../assets/icon/24/Ellipse 1foto.svg";

import Money from "../../assets/menu/moneys .svg";
import Wallet from "../../assets/menu/wallet-money.svg";
import graphAPY from "../../assets/menu/chart-square.svg";

import Graph from "../../assets/graph.svg";

import Bitcoin from "../../assets/logo/24/bitcon.svg";
import Etherium from "../../assets/Crypto/Etherium.svg";

export const MainContainer: React.FC = () => {
  return (
    <Container>
      <header>
        <div className="left-header">
          <p>Welcome Back, Arkhan!</p>
          <input type="text" placeholder="Search" />
          <img src={Notification} alt="" />
        </div>
        <div className="profile-header">
          <p>Evano</p>
          <img src={Picture} alt="" />
        </div>
      </header>
      <div className="Main-container">
        <div className="content">
          <div className="left-content">  
          <div className="top-content">
              <div className="item1">
                <div className="identificators">
                  <img src={Wallet} alt="" />
                  Total Assets
                </div>
                <div className="identificators">
                  <img src={Money} alt="" />
                  Total Deposits
                </div>
                <div className="identificators">
                  <img src={graphAPY} alt="" />
                  APY
                </div>
              </div>
         

            <div className="graph">
              <img src={Graph} alt="" />
            </div>
            </div>

            <div className="bottom-content">
            <div className="item2">table container</div>
          </div>
          </div>


          <div className="right-content">
            <div className="item">progress container</div>
            <div className="item">end container </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
