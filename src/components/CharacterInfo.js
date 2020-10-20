import React from 'react'
import Films from './Films'
import { Row, Col } from 'antd'

const CharacterInfo = ({characterInfo}) => {
    return (
        <div className="characterInfo_container">
            <Col span={24}>
                <div className="characterInfo_title">
                    <h1>
                        {characterInfo.name}
                    </h1>
                </div>
            </Col>
            <Row>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <h2>Character Info</h2>
                    {
                        characterInfo.gender !== 'n/a' && <p><span>Gender:</span> {characterInfo.gender}</p>
                    }
                    {
                        characterInfo.species !== null && <p><span>Specie:</span> {characterInfo.species.name}</p>
                    }
                    <p><span>Homeworld:</span> {characterInfo.homeworld.name}</p>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                    <h2>Where do I appear?</h2>
                    <Films films={characterInfo.filmConnection.films}/>
                </Col>
            </Row>
        </div>
    )
}

export default CharacterInfo
