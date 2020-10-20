import React, { useContext } from 'react'
import { RightCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons'
import { Button, Row, Col, Tooltip } from 'antd'
import {Charactercontext} from './CharacterContext'

const ButtonCharacter = () => {
    const characterContext = useContext(Charactercontext)
    const {page, setPage} = characterContext

    return (
        <Row>
            <Col xs={12} sm={12} md={12} lg={4}>
                <div>
                    {
                        page <= 10 ?
                            <Tooltip placement="bottom" title="You are in first page">
                                <Button
                                    className="characters_btn-disable"
                                    disabled
                                    onClick={() => setPage(page - 10)}
                                >
                                    Before <LeftCircleTwoTone twoToneColor="#d72e21"/>
                                </Button>
                            </Tooltip>
                        :
                            <Button
                                className="characters_btn"
                                onClick={() => setPage(page - 10)}
                            >
                                Before <LeftCircleTwoTone twoToneColor="#d72e21"/>
                            </Button>
                    }
                </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={4}>
                <div className="characters_next-btn">
                    <Button
                        className="characters_btn"
                        onClick={() => setPage(page + 10)}
                    >
                        Next <RightCircleTwoTone twoToneColor="#d72e21"/>
                    </Button>
                </div>
            </Col>
        </Row>
    )
}

export default ButtonCharacter
