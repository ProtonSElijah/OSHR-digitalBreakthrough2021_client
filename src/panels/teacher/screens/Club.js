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

const Club = ({ id, go, fetchedUser, store, club_name, club_groups  }) => {

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
                    <Groups groups={club_groups} />
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
    club_groups: PropTypes.array.isRequired
};

export default Club;
