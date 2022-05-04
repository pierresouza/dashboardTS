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
      <div className="container">
        <header>
          <p className="text">Welcome Back,Arkhan!</p>
          <div className="main-input">
            <input type="text" placeholder="Campo de Pesquisa" />
            <img src={Notification} alt="notification" />
          </div>
          <div className="profile">
            <p>Evano</p>
            <img src={Picture} alt="" />
          </div>
        </header>
        <div className="content">
          <div className="info">
            <div className="item">
              <img src={Money} alt="" />
              <div className="data">
                <div>Total assets</div>
                <div>$ 87.743</div>
              </div>
            </div>
            <div className="item">
              <img src={Wallet} alt="" />
              <div className="data">
                <div>Total Deposits</div>
                <div>$ 78,342</div>
              </div>
            </div>
            <div className="item">
              <img src={graphAPY} alt="" />
              <div className="data">
                <div>APY</div>
                <div> + 12.3%</div>
              </div>
            </div>
          </div>
          <div className="graph">
            <img src={Graph} alt="" />
          </div>
        </div>

        <div className="table">
          <div className="token">Tokens</div>
          <div className="names">
            <div>Name</div>
            <div>Balance</div>
            <div>Total Value</div>
            <div>Trade</div>
          </div>
          <div className="table-data">
            <div>
              <img src={Bitcoin} alt="" />
              Bitcon
            </div>
            <div>0,04321</div>
            <div>$2,340.32</div>
            <button className="trade">Trade</button>
          </div>
          <div className="table-data">
            <div>
              <img src={Etherium} alt="" />
            </div>
            <div>32,234</div>
            <div>$5,340.32</div>
            <button className="trade">Trade</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
