import styled from 'styled-components'

export const PageButton = styled.button`
    display: inline;
    background: none;
    border: 1px solid black;
    padding-block: .3rem;
    padding-inline: .5rem;
    border-radius: 2px;
    margin-inline-end: .3rem;
    cursor: pointer;

    :hover{
        background: rgba(0, 0, 0, .4);
        color: white;
    }

    &[data-active="active"]{
        background-color: black;
        color: white;
        cursor: default;
    }
`