import styled from 'styled-components'

export const PageButton = styled.button`
    display: inline;
    background: none;
    border: 1px solid rgba(110, 110, 110, .3);
    padding-block: .3rem;
    padding-inline: .5rem;
    min-height: 25px;
    border-radius: 2px;
    margin-inline-end: .3rem;
    cursor: pointer;

    :hover {
        background-color: rgba(110, 110, 110, .3);
        color: white;
    }

    &[data-active="active"]{
        background-color: rgba(0, 0, 0, .6);
        color: white;
        cursor: default;
    }
`