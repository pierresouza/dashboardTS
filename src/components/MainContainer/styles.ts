import styled from "styled-components";

export const Container = styled.div`
  .container {
    height: 100vh;
    width: 80vw;
    header {
      display: flex;
      padding: 24px 0 0 0;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 64px;

      p {
        color: white;
        font-size: 24px;
      }

      .main-input {
        display: flex;
        input {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 12px 80px 12px 16px;
          background: rgba(28, 31, 37, 0.6);
          border-radius: 16px;
          color: white;

          &::placeholder{
            color: #A0A0A0;
          }
        }

        img{
          cursor: pointer;
        }
      }

      .profile {
        display: flex;
        align-items: center;
        img {
          padding: 0 24px 0 24px;
        }
        > p {
          font-size: 16px;
        }
      }
    }
    .content {
      width: 55vw;
      background: #1c1c1c;
      opacity: 0.6;
      backdrop-filter: blur(20px);
      border-radius: 16px;

      .info {
        display: flex;
        height: 10vh;
        width: 55vw;
        padding: 16px;
        color: white;
        justify-content: space-around;
        margin-bottom: 20px;

        .item {
          display: flex;

          img {
            background: rgba(176, 176, 176, 0.1);
            border-radius: 13.7544px;
            padding: 8px;
            height: 60px;
          }

          .data {
            display: flex;
            flex-direction: column;
            padding: 8px;
          }
        }
      }

      .graph {
        img {
          width: 100%;
          height: 50vh;
        }
      }
    }
    .table {
      color: white;
      background: #1c1c1c;
      opacity: 0.6;
      backdrop-filter: blur(20px);
      border-radius: 16px;
      margin-top: 20px;
      height: 20vh;
      width: 55vw;
      padding: 16px 24px 8px 56px;

      .token {
        padding-bottom: 16px;
        font-weight: 600;
        font-size: 24px;
      }

      .names {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-bottom: 16px;
      }

      .table-data {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-bottom: 16px;

        .trade {
          border: 0;
          outline: 0;
          background: #2c2c2c;
          border-radius: 6px;
        }
      }
    }
  }
`;
