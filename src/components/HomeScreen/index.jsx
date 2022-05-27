import { Container, Loader, MainSection } from "./style"
import TableData from "./components/tableData"
import { useFetchApi } from "../../Hooks/fetchApi"
import { Paginate } from "./components/Paginate"

export const Content = () => {
    // const [current, setCurrent] = useState(1)
    const { isLoading: loading, data, current, setCurrent, start, navigationList, paginationData} = useFetchApi()
    // const allowableData = data.slice(start, end)
    return (
        <Container>
            <Loader>
                Page: {current}
                {loading && <div> Loading...</div>}
            </Loader>
            <MainSection>
              <TableData allowableData={data} start={start} />
            </MainSection>
           <Paginate  pageList={navigationList} current={current} setCurrent={setCurrent} data={paginationData} />
        </Container>
    )
}
