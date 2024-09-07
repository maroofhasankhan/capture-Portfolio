import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lobster&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: #1b1b1b;
        font-family: 'Inter',sans-serif;
        overflow-x: hidden;

    }
    html{
        @media (max-width: 1700px) {
            font-size: 75%;
        }
        @media (max-width: 1300px) {
            
        }
    }
    button{
                font-family: 'Inter',sans-serif;

        font-weight:  bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: white;
        }
        
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        /* padding:3rem; */
        color:white;
    }
    h4{
        font-weight: bold;
        color: #23d997;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #23d994;
        /* color: black; */
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;