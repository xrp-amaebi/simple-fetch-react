import { Shell, ShellContent, ShellHeader } from "./style";

const TableData = (props) => {
    const { allowableData } = props;

    return allowableData.map((content, int) => {
        const last = int === allowableData.length - 1 ? "last": ''
        // const serial = start + (int + 1)
        const parsedHead = Object.keys(content).map((header, index) => {
            return <div className={`header-${header}`} key={index}>{header.toLowerCase()}</div>
        })

        const parsedValues = Object.keys(content).map((header, index) => {
            return <div className={`item-${header}`} key={index}>{content[header]}</div>
        })

        const header = int === 0 ? 
            <ShellHeader>
                {/* <div className={`header-serial`}>s/n</div> */}
                {parsedHead}
            </ShellHeader> 
        : null

        const value = (
            <ShellContent data-last={last}>
                {/* <div className={`item-serial`}>{serial}</div> */}
                {parsedValues}
            </ShellContent>
        )

        return (
            <Shell key={int}>
                {header}
                {value}
            </Shell>
        )
    })
}


export default TableData;