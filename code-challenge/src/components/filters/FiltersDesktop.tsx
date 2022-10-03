import React, { useState } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import type { FiltersT } from '../../typings'
import { updateAppliedFiltersArr } from '../../utils'

const FiltersDesktop = ({ filter, setAppliedFilters, appliedFilters }: FiltersT) => {
    const [active, setActive] = useState(false)

    const handleClick = (filter: string) => {
        setActive(!active)
        updateAppliedFiltersArr(appliedFilters, filter, setAppliedFilters)
    }

    return (
        <Flex alignItems='center' marginTop='.5rem'>
            <Button
                name={filter}
                value={filter}
                border='2px solid'
                fontWeight='600'
                textTransform='uppercase'
                borderRadius={0}
                style={{
                    backgroundColor: active ? '#000' : '#fff',
                    color: active ? '#fff' : '#000'
                }}
                onClick={() => handleClick(filter)}
            >
                {filter}
            </Button>
        </Flex>
    )
}

export default FiltersDesktop