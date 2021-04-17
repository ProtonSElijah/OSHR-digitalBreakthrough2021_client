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

const Club = ({ id, go, fetchedUser, store, club_name }) => {
    const getGroupsOfClub = () => {
        const clubs = store.getState().teacherState.clubs
        for (const club of clubs) {
            if (club.name === club_name) {
                return club.groups ? club.groups : null
            }
        }
    }

    const groups = getGroupsOfClub()

	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="teacher_profile"/>}
            >
				Секция "{club_name ? club_name : ''}"
			</PanelHeader>

            <Div>
                <CellButton before={<Icon28AddOutline />} onClick={go} data-to={'teacher_addStudyGroup'} data-clubid={club_name}>Добавить учебную группу</CellButton>
            </Div>

            <Group
                header={<Header>Мои группы</Header>}
            >
                {groups && groups.length > 0 &&
                    <Groups go={go} groups={groups} />
                }
                {!groups || groups.length === 0 &&
                    <Div>
                        <Text>Группы отсутствуют</Text>
                    </Div>
                }
            </Group>
		</Panel>
	)
};

Club.propTypes = {
    club_name: PropTypes.string.isRequired,
};

export default Club;
