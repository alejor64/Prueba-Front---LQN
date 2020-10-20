import React, { Fragment, useContext } from 'react'
import {Charactercontext} from './CharacterContext'
import { SyncOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import CharacterList from './CharacterList'
import yodaLaser from '../images/yodaLaser.png'
import darthVader from '../images/darthVader.png'
import skywalker from '../images/skywalker.png'
import ButtonCharacter from './ButtonCharacter'
import Footer from './Footer'


const Characters = () => {

    const characterContext = useContext(Charactercontext)
    const {loading, error, data} = characterContext
    const screenWidth = window.screen.width

    if (error) return `Error! ${error}`;

    return (
        <Fragment>
            <div>
                <div>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={8}>
                            <h1>Characters</h1>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row>
                                <Col span={11}>
                                    <img className="characters_img-darth" src={darthVader}  alt="Darth Vader"/>
                                </Col>
                                <Col span={2}>
                                    <img className="characters_img-sky" src={skywalker}  alt="Skywalker"/>
                                </Col>
                                <Col span={11}>
                                    <img className="characters_img-yoda" src={yodaLaser}  alt="Yoda"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {
                        screenWidth < 992 && <ButtonCharacter />
                    }
                    {
                        loading ? 
                            <SyncOutlined spin/>
                        :
                            <CharacterList characters={data.allPeople.people} />
                    }
                </div>

                {
                    screenWidth >= 992 && <ButtonCharacter />
                }
            </div>
                <Col span={24}>
                    <Footer />
                </Col>
        </Fragment>
    )
}

export default Characters
