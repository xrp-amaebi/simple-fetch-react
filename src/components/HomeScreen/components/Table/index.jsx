import React from "react";
import { Shell, ShellContent, ShellHeader, Card, CardHeader, CardBody, Content, Index } from "./style";

export const TableData = (props) => {
    const { allowableData, query } = props

    return allowableData.map((content, int) => {
        const last = int === allowableData.length - 1 ? "last" : ''
        const parsedHead = Object.keys(content).map((header, index) => {
            return <div className={`header-${header}`} key={index}>{header.toLowerCase()}</div>
        })

        const parsedValues = Object.keys(content).map((header, index) => {
            return <div className={`item-${header}`} key={index}>{content[header]}</div>
        })

        const header = int === 0 ? 
            <ShellHeader>
                {parsedHead}
            </ShellHeader> 
        : null

        const value = (
            <ShellContent data-last={last}>
                {parsedValues}
            </ShellContent>
        )
        
        const cardContent = Object.entries(content).map((item, index) => {
            const [header, body] = item
            const first = index === 0;
            const edited = header === "edited" ? Date.parse(body) : body
            
            return (
                first ? 
                    <Content key={index} className={`first`}>
                        <Index className={`card-slot-${header}`}>{body}</Index>
                    </Content>
                :
                    <Content key={index} className={`card-slot-{header}`}>
                        <CardHeader>{header}</CardHeader>
                        <CardBody>{edited}</CardBody>
                    </Content>
            )
        })

        return(
            query.isMobile | query.isSmallTablet ? 
                <Card key={int}>
                    {cardContent}
                </Card>
            
            :
                <Shell key={int}>
                    {header}
                    {value}
                </Shell>
        )
    })
}


{/* <Jcontent>
    <div key={int} className="inner">
        <div className="num"> {content.serial} </div>
        <div className="right">
            <div className="one"> 
                <div className="r1"> {content.name} </div>
                <div className="r2"> {content.diameter} </div>
                <div className="r3"> {content.terrain} </div>
            </div>
            <div className="one">
            <div className="r1"> {content.gravity} </div>
                <div className="r2"> {content.population } </div>
                <div className="r3"> {content.climate} </div>
            </div>
            <div className="one">
            <div className="r1 kit"> {content.edited} </div>
            </div>
        </div>
    </div>
</Jcontent> */}