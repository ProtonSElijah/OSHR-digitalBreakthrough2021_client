import React from 'react'
import PropTypes from 'prop-types'

import {
    SimpleCell
} from '@vkontakte/vkui'

const Clubs = ({ go, clubs }) => {

    return clubs.map(
        (club) =>
            <SimpleCell key={club.name} onClick={go} data-to="club" data-clubid={club.name}>
                {club.name ? club.name : ''}
            </SimpleCell>
    )
}

Clubs.propTypes = {
    clubs: PropTypes.array.isRequired
}

export default Clubs