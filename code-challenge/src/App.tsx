import React, { useState } from 'react';
import { Spinner, Stack, Text, Grid, Button, Flex, } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { useCards } from './hooks/useCards';
import Card from './components/Card';
import FiltersDesktop from './components/filters/FiltersDesktop';
import FiltersMobile from './components/filters/FiltersMobile';
import { isBrowser, isMobile } from 'react-device-detect';

function App() {
  const { data, loading, error, filters } = useCards()
  const [appliedFilters, setAppliedFilters] = useState<string[]>([])
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="container">
      {loading ?
        <Flex
          padding='7rem 0'
          justifyContent='center'
        >
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='black.500'
            size='xl'
          />
        </Flex>

        : error ?
          <Text fontSize='lg' color='tomato' textAlign='center' padding='7rem 0'>Error while gettings cards.</Text>
          :
          <Stack
            margin='1rem 2rem'
            className='grid'>
            {filters && isMobile &&
              <Stack className='grid__mobile--container' marginBottom='2rem'>
                <Button
                  backgroundColor='#000'
                  color='#fff'
                  textTransform='uppercase'
                  alignItems='center'
                  borderRadius={0}
                  rightIcon={showMobileFilters ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  _active={{
                    backgroundColor: '#000'
                  }}
                  _hover={{
                    backgroundColor: '#000'
                  }}
                  onClick={() => setShowMobileFilters(!showMobileFilters)}>
                  Filters
                </Button>
                <Stack
                  className='grid__mobile--filters'
                  paddingBottom='2rem'
                  maxHeight='200px'
                  padding='.5rem 1rem'
                  style={{
                    display: showMobileFilters ? 'block' : 'none'
                  }}
                >
                  {filters.map((filter: string, i: number) =>
                    <FiltersMobile
                      key={i}
                      setAppliedFilters={setAppliedFilters}
                      appliedFilters={appliedFilters}
                      filter={filter}
                    />)
                  }
                </Stack>
              </Stack>
            }

            {filters && isBrowser &&
              <Flex
                className='grid__desktop--filters'
                alignItems='center'
                gap='.75rem'
                flexWrap='wrap'
                paddingBottom='2rem'>
                {filters.map((filter: string, i: number) =>
                  <FiltersDesktop
                    key={i}
                    setAppliedFilters={setAppliedFilters}
                    appliedFilters={appliedFilters}
                    filter={filter}
                  />)
                }
              </Flex>
            }

            {data &&
              <Grid className='grid__cards'>
                {!appliedFilters.length ? data.cards.map(card => <Card key={card.id}{...card} />)
                  : data && data.cards.map(card => {
                    const checker = appliedFilters.every(filter => card.tags.includes(filter));
                    return checker && <Card key={card.id}{...card} />
                  })}
              </Grid>}
          </Stack>
      }
    </div >
  );
}

export default App;
