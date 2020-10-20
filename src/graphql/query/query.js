import {gql} from '@apollo/client'

export const GET_CHARACTERS = gql `
    query getCharacters($page: Int)
    {
        allPeople(first:$page, last:10){
            people {
                name,
                id,
                gender,
                homeworld {
                    name,
                    id
                },
                filmConnection{
                    films {
                    title,
                    episodeID,
                    director,
                    producers,
                    id, planetConnection {
                        planets {
                        name,
                        terrains
                        }
                    }
                    }
                },
                species {
                    name
                }
            }
        }
    }
`