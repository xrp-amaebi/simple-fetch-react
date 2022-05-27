const TableData = (props) => {
    const { allowableData } = props;

    return allowableData.map((content, int) => {
        // const serial = start + (int + 1)
        const parsedHead = Object.keys(content).map((header, index) => {
            return <div className={`header-${header}`} key={index}>{header.toLowerCase()}</div>
        })

        const parsedValues = Object.keys(content).map((header, index) => {
            return <div className={`item-${header}`} key={index}>{content[header]}</div>
        })

        const header = int === 0 ? <div className="result-header">
            {/* <div className={`header-serial`}>s/n</div> */}
            {parsedHead}
        </div> : null

        const value = <div className="result-value">
            {/* <div className={`item-serial`}>{serial}</div> */}
            {parsedValues}
        </div>

        return (
            <div className="result-shell" key={int}>
                {header}
                {value}
            </div>
        )
    })
}


export default TableData;