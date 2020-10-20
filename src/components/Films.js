import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import FilmButtonInfo from './FilmButtonInfo'

const Films = ({films}) => {

    return (
        <Fragment>
            {
                films.map(film =>
                    <li key={film.id} className="film_li">
                        <Row>
                            <Col xs={17} sm={20} md={18} lg={17}>
                                {film.title}
                            </Col>
                            <Col xs={4} sm={4} md={6} lg={7}>
                                <FilmButtonInfo film={film}/>
                            </Col>
                        </Row>
                    </li>
                )
            }
        </Fragment>
    )
}

export default Films
