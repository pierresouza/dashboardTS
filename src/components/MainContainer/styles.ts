import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  height: 100vh;

  header {
    display: flex;
    width: 100%;
    height: 6vh;
    padding: 8px;
    align-items: center;
    .left-header {
      width: 90%;
      display: flex;

      p{
        color: white;
      align-items: center;
      display: flex;

      }

      input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 80px 12px 16px;
        background: rgba(28, 31, 37, 0.6);
        border-radius: 16px;
      }
    }
    .profile-header {
      display: flex;
      color: white;
      align-items: center;
      width: 10%;
      padding-left: 20px;
    }
  }

  .Main-container {
    display: grid;
    height: 90vh;
    padding: 8px;

    .content {
      color: antiquewhite;
      display: flex;
      justify-content: space-between;
      

      .left-content{
        background: #2b2b2b;
        border-radius: 16px;
        height: 60vh;
        width: 60vw;
       
        .top-content{
          height: 60vh;


          .item1{
            display: flex;
            justify-content: space-around;
            height: 8vh;
            padding: 16px;
            width: 100%;
            
            .identificators{
              display: flex;
              width: 15vw;
              align-items: center;
              justify-content: center;

              img{
                margin-right: 20px;
                height: 100%;
                
              }
            }
            
          }
        }

        .graph{
          height: 50vh;
          img{
            height: 100%;
          width: 100%;
          background-size: cover;
          }
        }
        
      }
 
    
      }
    }

        .bottom-content{
          padding: 24px;
          margin-top: 30px;
          border-radius: 16px;
          height: 25vh;
          background: #2b2b2b;

        }
        
      
      
      .right-content{
        border: 1px solid white;
        width: 18vw;
        border-radius: 16px;
        padding: 16px;
       
      }

    
  
`;
