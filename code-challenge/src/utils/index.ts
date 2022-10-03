export const updateAppliedFiltersArr = (
    filters: string[],
    filter: string,
    setFilters: React.Dispatch<React.SetStateAction<string[]>>
) => {
    const foundFilter = filters.includes(filter)
    setFilters(foundFilter ? filters.filter(element => element !== filter) : [...filters, filter])
}