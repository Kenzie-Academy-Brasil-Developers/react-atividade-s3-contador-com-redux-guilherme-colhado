import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, div, h1, button{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
`

export const Master = styled.div`
    background-color: #519fe2;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    div{
        display: flex;
        button{
            background-color:  #b4cc39;
            border-radius: 4px;
            margin: 10px;
            cursor: pointer;
            padding: 10px 25px;
            font-size: 2rem;
            border: none;
            &:active{
                background-color: #98b02d;
            }
        }
    }
`