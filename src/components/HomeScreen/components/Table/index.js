import { Shell, ShellContent, ShellHeader } from "./style";

export const TableData = (props) => {
    const { allowableData } = props;

    return allowableData.map((content, int) => {
        const last = int === allowableData.length - 1 ? "last": ''
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

        return (
            <Shell key={int}>
                {header}
                {value}
            </Shell>
        )
    })
}