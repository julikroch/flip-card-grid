import React from 'react'
import { Flex } from '@chakra-ui/react'
import type { FiltersT } from '../../typings'
import { updateAppliedFiltersArr } from '../../utils'

const FiltersMobile = ({ filter, setAppliedFilters, appliedFilters }: FiltersT) => (
    <Flex alignItems='center'>
        <label className='mobile__filters--label' htmlFor={filter}>
            <input
                className='mobile__filters--checkbox'
                type='checkbox'
                value={filter}
                name={filter}
                onClick={() => updateAppliedFiltersArr(appliedFilters, filter, setAppliedFilters)}
            />
            {filter}
        </label>
    </Flex>
)


export default FiltersMobile