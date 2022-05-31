import { Container, Loader, MainSection } from "./style"
import { TableData } from "./components/Table"
import { useFetchApi } from "../../Hooks/fetchApi"
import { Paginate } from "./components/Paginate"
import { useMediaQuery } from "../../Hooks/mediaQuery"

export const Content = () => {
    const { isLoading: loading, data, current, setCurrent, start, navigationList } = useFetchApi()
    const { dimensions: query } = useMediaQuery()
    // const allowableData = data.slice(start, end)
    return (
        <Container query={query}>
            <Loader>
                Page: {current}
                {loading && <div> Loading...</div>}
            </Loader>
            <MainSection>
              <TableData allowableData={data} start={start} query={query} />
            </MainSection>
           <Paginate  pageList={navigationList} current={current} setCurrent={setCurrent} />
        </Container>
    )
}
