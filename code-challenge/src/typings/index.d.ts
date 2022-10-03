export type DataT = {
    cards: CardT[]
}

export type CardT = {
    id: string,
    tags: string[],
    image: string,
    url: string,
    title: string,
    description: string,
    featured: boolean
}

export type FiltersT = {
    filter: string,
    appliedFilters: string[],
    setAppliedFilters: React.Dispatch<React.SetStateAction<string[]>>
}