import React from 'react'
import PropTypes from 'prop-types'

import {
    SimpleCell
} from '@vkontakte/vkui'

const Groups = ({ go, groups, club_name }) => {

    return groups.map(
        (group) =>
            <SimpleCell key={group.name} onClick={go} data-to="group" data-clubid={club_name} data-groupid={group.name}>
                {group.name ? group.name : ''}
            </SimpleCell>
    )
}

Groups.propTypes = {
    groups: PropTypes.array.isRequired
}

export default Groups