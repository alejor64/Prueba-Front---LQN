import React, { Fragment, useState } from 'react'
import { Modal, Button, Tag, Tooltip } from 'antd'

const FilmButtonInfo = ({film}) => {
    const [modalState, setModalState] = useState(false)

    const planetInFilmLength = film.planetConnection.planets.length / 2
    const planetInFilm = film.planetConnection.planets.slice(0, planetInFilmLength)

    return (
        <Fragment>
            <Button className="filmsButtonInfo_btn" onClick={() => setModalState(true)}>
                About...
            </Button>
            <Modal
                className="filmsButtonInfo_modal"
                title={film.title}
                visible={modalState}
                onOk={() => setModalState(false)}
                onCancel={() => setModalState(false)}
            >
                <p><span>Director:</span> {film.director}</p>
                <p><span>Episode:</span> {film.episodeID}</p>
                <p><span>Producers:</span></p>
                <div className="filmsButtonInfo_tag">
                    {
                        film.producers.map((producer =>
                            <Tag key={producer}>{producer}</Tag>)
                        )
                    }
                </div>
                <p><span>Planets:</span></p>
                <div className="filmsButtonInfo_tag">
                    {
                        planetInFilm.map(planet =>
                            <Tooltip key={planet.name} placement="bottom" className="tooltip" title={`${planet.terrains} `}>
                                <Tag className="tag" >{planet.name}</Tag>
                            </Tooltip>
                        )
                    }
                </div>
                
            </Modal>
        </Fragment>
    )
}

export default FilmButtonInfo
