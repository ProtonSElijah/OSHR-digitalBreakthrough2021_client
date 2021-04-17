import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addClub as addClub_action } from '../../../redux/actions/teacher-actions'

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

const AddClub = ({ id, go, fetchedUser, store }) => {
    const[name, setName] = useState('')

    const onchangeName = (e) => {
        setName(e.currentTarget.value)
    }

    const addClub = () => {
        const club = {
            'name': name,
            'id': Math.floor(Math.random() * 10000)
        }
        store.dispatch(addClub_action(club))
        go({'currentTarget': {'dataset': {'to': 'teacher_profile'}}})
    }

	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="teacher_profile"/>}
            >
				Добавить секцию
			</PanelHeader>

            <Group>
                <FormLayout>
                    <FormItem top="Название">
                        <Input onChange={onchangeName} />
                    </FormItem>
                </FormLayout>

                <FormItem>
                    <Button size="l" stretched onClick={addClub}>Добавить секцию</Button>
                </FormItem>
            </Group>
		</Panel>
	)
};

AddClub.propTypes = {
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

export default AddClub;
