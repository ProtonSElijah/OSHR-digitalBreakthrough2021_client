import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Groups from '../components/Groups'

import {
    PanelHeader,
    Panel,
    PanelHeaderBack,
    CellButton,
    Group,
    Text,
    FormLayout,
    FormItem,
    Input,
    Button,
    Div,
    Header
  } from "@vkontakte/vkui"

  import {
    Icon28AddOutline
  } from "@vkontakte/icons"

const GroupOfClub = ({ id, go, fetchedUser, store, club_name, group_name }) => {
    const getStudentsOfGroup = () => {
        const clubs = store.getState().teacherState.clubs
        for (const club of clubs) {
            if (club.name === club_name) {
                for (const group of club.groups)
                    if (group.name === group_name) {
                        return group.students ? group.students : null
                    }
            }
        }
    }

    const students = getStudentsOfGroup()

	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="club" data-clubid={club_name}/>}
            >
				Ученики
			</PanelHeader>

            <Div>
                <CellButton before={<Icon28AddOutline />} onClick={go} data-to={'teacher_addStudent'} data-clubid={club_name} data-groupid={group_name}>Добавить ученика</CellButton>
            </Div>

            <Group
                header={<Header>Ученики группы {group_name}</Header>}
            >
                {students && students.length > 0 &&
                    <Groups groups={groups} />
                }
                {!students || students.length === 0 &&
                    <Div>
                        <Text>Ученики отсутствуют</Text>
                    </Div>
                }
            </Group>
		</Panel>
	)
};

GroupOfClub.propTypes = {
    club_name: PropTypes.string.isRequired,
    group_name: PropTypes.string.isRequired
};

export default GroupOfClub;
