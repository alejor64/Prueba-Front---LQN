import React, { useState } from 'react'
import { Button, Row, Col, List } from 'antd'
import CharacterInfo from './CharacterInfo'


const CharacterList = ({characters}) => {
    const [characterSelected, setCharacterSelected] = useState(characters[0].id)

    const characterInfo = characters.find(character => character.id === characterSelected) || characters[0]

    
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={8}>
                <List
                    className="list_ul"
                    bordered
                    dataSource={characters}
                    renderItem={character => (
                        <List.Item className="list_item" onClick={() => setCharacterSelected(`${character.id}`)}>
                            {character.name}
                            
                            <Button onClick={() => setCharacterSelected(`${character.id}`)}>
                                Details
                            </Button>
                            
                        </List.Item>
                    )}
                />
            </Col>
            <Col xs={24} sm={24} md={24} lg={16}>
                <CharacterInfo characterInfo={characterInfo}/>
            </Col>
        </Row>
    )
}

export default CharacterList
