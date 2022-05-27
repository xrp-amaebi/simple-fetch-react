import { PageButton } from "./style"

export const Button = (props) => {
    const { item, active, current, setCurrent, index } = props

    function handlePageChange(){
        const page = Number(item)
        if(current === page) return
        setCurrent(page)
    } 

    return (
        <PageButton onClick={handlePageChange} key={index} data-active={active}>{item}</PageButton>
    )
}