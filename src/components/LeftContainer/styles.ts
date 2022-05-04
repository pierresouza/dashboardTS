import styled from "styled-components";

import Logo from "../../assets/LogoCrypfest.svg";

export const Container = styled.div`
  .container {
    height: 100vh;
    width: 20vw;

    .logo {
      background-image: url(${Logo});
      background-repeat: no-repeat;
      background-position: 30px;
      height: 10vh;
    }

    .list {
      color: white;
      height: 60vh;
      padding: 32px;

      ul {
        height: 40vh;
        padding: 16px;

        li {
          margin-bottom: 20px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          padding: 16px 8px;
          font-size: 24px;
          &:hover {
            background: linear-gradient(
              101.05deg,
              #1f2fbe -5.36%,
              #440495 29.46%,
              #180495 56.03%,
              #b102cd 81.92%
            );
          }

          img {
            padding-right: 16px;
          }

          &:nth-child(1) {
            background: linear-gradient(
              101.05deg,
              #1f2fbe -5.36%,
              #440495 29.46%,
              #180495 56.03%,
              #b102cd 81.92%
            );
            border-radius: 12px;
          }
        }
      }
    }
    .logout {
      color: white;
      display: flex;
      align-items: center;
      padding: 8px 8px;
      padding-left: 48px;
      padding-top: 232px;

      img {
        padding-right: 16px;
      }
    }
  }
`;
