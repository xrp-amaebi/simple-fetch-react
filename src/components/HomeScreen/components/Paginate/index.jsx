import { Button } from "../Button"
import { PageList, NavButton } from "./style"


export const Paginate = (props) => {
    const { pageList, current, setCurrent } = props
    const next = current < pageList.length ? current + 1 : pageList.length 
    const prev = current < 2 ? 1 : current - 1 

    function handlePageChange(page){
        const max = pageList.length + 1
        if(page === max + 1) return
        if(current === page) return
        setCurrent(page)
    } 
    
    const tableItems = pageList.map((item, int) => {
        const active = current === item ? "active" : ''
        return (
            <Button 
                current={current}
                active={active}
                index={int}
                item={item}
                setCurrent={setCurrent}
                key={int}
            />
        )
    })

    return (
        <PageList>
            <NavButton onClick={() => handlePageChange(prev)}>Prev</NavButton>
            {tableItems}
            <NavButton onClick={() => handlePageChange(next)}>Next</NavButton>
        </PageList>
    )
}