import { useEffect, useState } from "react"
import type { CardT, DataT } from "../typings"
import { URL } from "../constants"

export const useCards = () => {
    const [data, setData] = useState<DataT>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [filters, setFilters] = useState<string[]>([])
    
    const getCards = async () => {
        setLoading(true)
        try {
            const response = await fetch(URL)
            const result = await response.json()
            setData(result)
            
            let filterArr: string[] = []
            result.cards.map((card: CardT) => card.tags.map(tag => filterArr.push(tag)))
            const uniqueFilters = filterArr.filter((element: string, index: number) => filterArr.indexOf(element) === index).sort()

            setFilters(uniqueFilters)
        } catch (error) {
            console.error('Error while getting cards information through API', error)
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        getCards()
    }, [])

    return { data, loading, error, filters }
}