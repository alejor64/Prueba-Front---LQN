import React from 'react'
import { Carousel } from 'antd'
import {phrases} from '../helpers/helper'

const Footer = () => {
    return (
        <div className="footer_footer">
            <Carousel autoplay>
                {
                    phrases.map(phrase => (
                        <div className="footer_contentStyle" key={phrase.phrase}>
                            <h2>"{phrase.phrase}"</h2>
                            <p>{phrase.author}</p>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default Footer
