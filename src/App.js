import React, { useState } from 'react'
import { Charactercontext } from './components/CharacterContext'
import Characters from './components/Characters'
import {useQuery} from '@apollo/client'
import { GET_CHARACTERS } from './graphql/query/query'
import 'antd/dist/antd.css'

function App() {

  const [page, setPage] = useState(10)
  const {loading, error, data} = useQuery(GET_CHARACTERS, {
    variables: {page}
  })

  // console.log(loading,error,data)

  const character = {
    loading,
    error,
    data,
    page,
    setPage
  }

  return (
    <Charactercontext.Provider value={character}>
      <Characters />
    </Charactercontext.Provider>
  );
}

export default App;
