import styled from "styled-components/macro"

export const Shell = styled.div`
    display: grid;
`
export const ShellHeader = styled.div`
    background-color: rgba(101, 101, 101, 1);
    color: white;
    font-family: monospace;
    font-size: .9rem;
    padding-block: 1rem;
    padding-inline: .5rem;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    margin-block-start: .3rem;
    margin-block-end: .3rem;
    text-align: center;
    border-radius: 16px 16px 0 0;

    display: grid;
    grid-template-columns: repeat(10, 10%);
    .header-serial {
        grid-column: 1 / span 1;
    }

    .header-name{
        grid-column: 2 / span 1;
    }

    .header-diameter{
        grid-column: 3 / span 1;
    }

    .header-gravity {
        grid-column: 4 / span 1;

    }

    .header-terrain{
        grid-column: 5 / span 2;
    }
    
    .header-edited{
        grid-column: 7 / span 1;
    }

    .header-climate{
        grid-column: 8 / span 2;

    }

    .header-population{
        grid-column: 10 / span 1;

    }

`

export const ShellContent = styled.div`
    font-weight: bold;
    text-align: center;
    font-weight: 400;
    padding-block: 1rem;
    padding-inline: .5rem;
    // margin-block: .1rem;
    border-bottom: 1px solid #ebebeb;
    cursor: default;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    border-bottom: 1px solid rgb(0, 0, 0, .1);
    // border-radius: 16px 16px 16px 16px;
    height: 1.2rem;

    &[data-last="last"]{
        // background-color: blue;
        border-radius: 0 0 16px 16px;
        border-bottom: 1px solid rgba(110, 110, 110, .5);
    }

    div {
        overflow-y: hidden;
    }

    display: grid;
    grid-template-columns: repeat(10, 10%);

    .item-serial {
        font-weight: 600;
        grid-column: 1 / span 1;
    }

    .item-name {
        grid-column: 2 / span 1;
    }

    .item-diameter{
        grid-column: 3 / span 1;

    }

    .item-gravity {
        grid-column: 4 / span 1;

    }

    .item-terrain {
        grid-column: 5 / span 2;
    }
    
    .item-edited{
        grid-column: 7 / span 1;
        overflow-x: hidden;
    }

    .item-climate{
        grid-column: 8 / span 2;
    }

    .item-population{
        grid-column: 10 / span 1;
    }

    :hover{
        background-color: rgba(101, 101, 101, .15);
    }

`