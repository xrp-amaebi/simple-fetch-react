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

    .result-shell {
        width: 100%;
        display: grid;
        border-bottom: 1px solid rgb(0, 0, 0, .2);

        .result-header {
            font-family: monospace;
            font-size: .9rem;
            padding-block: 1rem;
            padding-inline: .5rem;
            border-bottom: 1px solid #ebebeb;
            margin-block-end: .3rem;

            width: 100%;
            display: grid;
            grid-template-columns: repeat(10, 10%);
            font-weight: bold;
            text-align: center;

            .header-serial{
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
        }

        .result-value {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(10, 10%);
            font-weight: bold;
            text-align: center;
            font-weight: 400;
            padding-block: 1rem;
            padding-inline: .5rem;
            border-bottom: 1px solid #ebebeb;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            font-family: monospace;
            height: 1.2rem;

            div {
                overflow: hidden;
            }

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

            .item-terrain{
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
                background-color: rgba(11, 11, 11, .15);
            }
        }
    
    }
`

export const Loader = styled.div`
    font-family: monospace;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`