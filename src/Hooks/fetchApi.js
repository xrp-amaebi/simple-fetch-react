import { useState, useEffect } from "react"
import axios from "axios"

export const useFetchApi = (page=1) => {
    const [isLoading, setLoading] = useState(false)
    const [current, setCurrent] = useState(page)
    const [data, setData] = useState([])
    const [paginationData, setPaginationData] = useState({})
    const [dataLength, setLength] = useState(10)
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    
    const api = `https://swapi.dev/api/planets/?page=${current}`
    const image = ["serial", "name", "diameter", "gravity", "terrain", "edited", "climate", "population"]
    const limit = 10
    const navigationList = Array(Math.ceil(dataLength / limit)).fill(null).map((_, i) => i+=1)
    const start = current === 1 ? 0 : ((limit * current) - limit)
    const end = limit * current

    const prevPage = current < 2 ? 1 : current - 1 
    const nextPage = current === navigationList.length ? current : current + 1


    useEffect(() => {
        async function fetchPageProps(data={}) {
            async function getPrev() {
                try {
                    if(!prev) return
                    const start = prevPage === 1 ? 0 : ((limit * prevPage) - limit)
                    const payload = await axios.get(prev)
                    const preprocessor = payload.data.results.map((item, int) => {
                        const payload = {}
                        image.forEach(element => {
                            payload[element] = item[element]
                            payload["serial"] = start + (int + 1)
                        });
                        return payload
                    })

                    // console.log({ prevPage, current, nextPage, paginationData })
                    return preprocessor
                } catch (error) {
                    console.clear()
                    console.error({error})
                }
            }
        
            async function getNext() { 
                try {
                    if(!next) return
                    const start = nextPage === 1 ? 0 : ((limit * nextPage) - limit)
                    const payload = await axios.get(next)
                    const preprocessor = payload.data.results.map((item, int) => {
                        const payload = {}
                        image.forEach(element => {
                            payload[element] = item[element]
                            payload["serial"] =  start + (int + 1)
                        });
                        return payload
                    })
                    return preprocessor
                } catch (error) {
                    console.error({error})
                }
                
            }

            const functions = [getPrev(), getNext()]
            await Promise.all(functions)
            .then((results) => {
                setPaginationData({ ...paginationData, [prevPage]: results[0], [nextPage]: results[1] })
            })
        }

        fetchPageProps()
    }, [prev, next])

    useEffect(() => {
        async function fetchData(){
            if(paginationData[current]) {
                const nextApi = `https://swapi.dev/api/planets/?page=${nextPage}`
                const prevApi = `https://swapi.dev/api/planets/?page=${prevPage}`

                if(paginationData[prevPage] && paginationData[nextPage]){
                    setData(paginationData[current])
                    return
                }

                setNext(nextApi)
                setPrev(prevApi)
                console.log("trigger")
                setData(paginationData[current])
                return
            }

            try {
                setLoading(true)
                await axios.get(api).then(res => {
                    if(!res.status === 200) return
                    setLength(res.data.count)
                    setNext(res.data.next)
                    setPrev(res.data.previous)
                    const preprocessor = res.data.results.map((item, int) => {
                        const payload = {}
                        image.forEach(element => {
                            payload[element] = item[element]
                            payload["serial"] =  start + (int + 1)
                        });
                        return payload
                    })

                    setLoading(false);
                    setData(preprocessor);
                    setPaginationData({ ...paginationData, [current]: preprocessor })
                })
            } catch(e){
                console.clear()
                console.log({ message: e.message })
            }
        }

        fetchData()
    },[current])

    console.log({ paginationData })

    return { isLoading, data, paginationData, length: dataLength, limit, current, setCurrent, navigationList, end, start }
}