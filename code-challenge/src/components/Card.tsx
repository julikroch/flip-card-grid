import React from 'react'
import { Stack, Text, Heading, Image, Button, Flex } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import type { CardT } from '../typings'

const Card = (card: CardT) => {

    const { image, featured, title, description, id, tags, url } = card

    return (
        <Stack className='card' border='2px solid' >
            <div className="card__container">
                <div className="card__front">
                    <Stack className='card__image' position='relative'>
                        <Image
                            backgroundPosition='center'
                            className='card__image--img'
                            marginTop={0}
                            src={image}
                            alt={title}
                            title={title}
                        />
                        {featured &&
                            <Text
                                className='card__image--featured'
                                as='i'
                                position='absolute'
                                right={0}
                            >
                                featured
                            </Text>
                        }
                    </Stack>
                    <Stack className='card__info' padding='1rem'>
                        <Heading
                            className='card__title'
                            as='h4'
                            fontSize={['md', 'md', 'md', 'xl']}
                        >
                            {title}
                        </Heading>
                        <Text
                            fontSize='sm'
                            overflow='hidden'
                            className='card__description'
                        >
                            {description}
                        </Text>
                    </Stack>
                </div>
                <div className="card__back">
                    <Stack className='card__image card__image--back' position='relative'>
                        <Image
                            minHeight='100px'
                            backgroundPosition='center'
                            marginTop={0}
                            transform='scaleX(-1)'
                            opacity={.4}
                            src={image}
                            alt={title}
                        />
                    </Stack>
                    <Stack flexDirection='column' className='card__back--info' padding='1rem'>
                        <Heading
                            className='card__id'
                            as='h5'
                            fontSize={['md', 'md', 'md', 'xl']}
                        >
                            {id}
                        </Heading>
                        {tags &&
                            <Flex
                                flexWrap='wrap'
                                alignItems='flex-end'
                                className='card__tags'
                            >
                                {tags.slice(0, 6).map(tag =>
                                    <Text
                                        className={`card__tags--${tag}`}
                                        as='b'
                                        fontSize='.75rem'
                                        marginTop={0}
                                        backgroundColor='#000'
                                        color='#fff'
                                        padding='.2rem .5rem'
                                    >
                                        {tag}
                                    </Text>
                                )}
                            </Flex>
                        }
                        <Stack className='card__btn' alignItems='center'>
                            <Button
                                backgroundColor='#fff'
                                className='card__btn--cta'
                                rightIcon={<ChevronRightIcon w={6} h={6} />}
                                textTransform='uppercase'
                                as='a'
                                href={url}
                                target='_blank'
                                cursor='pointer'
                                fontWeight='normal'
                                _active={{
                                    backgroundColor: '#fff'
                                }}
                                _hover={{
                                    backgroundColor: '#fff',
                                    textDecoration: 'underline'
                                }}
                                _focus={{
                                    backgroundColor: '#fff'
                                }}
                            >
                                Learn More
                            </Button>
                        </Stack>
                    </Stack>
                </div>
            </div>
        </Stack>
    )
}

export default Card