import styled from "styled-components/macro"

export const Container = styled.div`
    min-height: 100vh;
    background-color: #EBEBEB;
    padding-block: 2rem;
    padding-inline: 3rem;
        
`

export const MainSection = styled.div`
    width: 100%;
    min-height: 50vh;
    grid-template-columns: repeat(10, 10%);
`

export const Loader = styled.div`
    font-family: monospace;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`