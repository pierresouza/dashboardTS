import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    overflow: hidden;
    background:#000000 ;
}

.container{
    display: flex;

.left-container{
    
    height: 100vh;
    width: 20vw;
    border: 2px solid red;

    .logo{
        color: white;
        border: 2px solid blue;
    }

    .list{
        color: white;
        border: 2px solid white;
    }

    .LogOut{
        color: white;
        border: 2px solid purple;
    }

}

.content{
    height: 100vh;
    width: 80vw;
    display: flex;
    border: 2px solid green;
}
}
`