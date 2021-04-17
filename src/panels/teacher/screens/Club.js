import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    PanelHeader,
    Panel,
    PanelHeaderBack,
    Group,
    FormLayout,
    FormItem,
    Input,
    Button
  } from "@vkontakte/vkui"

const Club = ({ id, go, fetchedUser, store, club_name }) => {
    const [groups, setGroups] = useState(null)

    const getGroupsOfClub = () => {
        const clubs = store.getState().teacherState.clubs
        for (const club of clubs) {
            if (club.name === club_name) {
                console.log(club.groups)
                setGroups(club.groups ? club.groups : null)
                break
            }
        }
    }

	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="teacher_profile"/>}
            >
				Секция "{club_name ? club_name : ''}"
			</PanelHeader>

            
		</Panel>
	)
    /*
    <Group>
                {club_groups && club_groups > 0 &&
                    <Groups groups={groups} />
                }
                {club_groups || clubs.length === 0 &&
                    <Div>
                        <Text>Группы отсутствуют</Text>
                    </Div>
                }
            </Group>
            */
};

Club.propTypes = {
    club_name: PropTypes.string.isRequired,
};

export default Club;
