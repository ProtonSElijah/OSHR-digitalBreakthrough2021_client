import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addGroup as addGroup_action } from '../../../redux/actions/teacher-actions'

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

const AddStudyGroup = ({ id, go, fetchedUser, club_name, store }) => {
	const[name, setName] = useState('')

    const onchangeName = (e) => {
        setName(e.currentTarget.value)
    }

    const addGroup= () => {
        const group = {
            'name': name,
			'id': Math.floor(Math.random() * 10000)
        }
        store.dispatch(addGroup_action(group, club_name))
        go({'currentTarget': {'dataset': {'to': 'club'}}})
	}

	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="club"/>}
            >
				Добавить группу
			</PanelHeader>

			<Group>
                <FormLayout>
                    <FormItem top="Название">
                        <Input onChange={onchangeName} />
                    </FormItem>
                </FormLayout>

                <FormItem>
                    <Button size="l" stretched onClick={addGroup}>Добавить группу</Button>
                </FormItem>
            </Group>
		</Panel>
	)
};

AddStudyGroup.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default AddStudyGroup
