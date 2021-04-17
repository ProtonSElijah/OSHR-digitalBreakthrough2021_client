import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { addStudent as addStudent_action } from '../../../redux/actions/teacher-actions'

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

const AddStudent = ({ id, go, fetchedUser, store, group_name, club_name }) => {
	const[firstname, setFirstname] = useState('')
	const[lastname, setLastname] = useState('')

    const onChangeFirstname = e => {
        setFirstname(e.currentTarget.value)
    }
	const onChangeSecondname = e => {
		setLastname(e.currentTarget.value)
	}

    const addStudent= () => {
        const student = {
            'firstname': firstname,
			'lastname': lastname,
			'id': Math.floor(Math.random() * 10000)
        }
        store.dispatch(addStudent_action(student, group_name, club_name))
        go({'currentTarget': {'dataset': {'to': 'group'}}})
	}

	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="group"/>}
            >
				Добавить ученика
			</PanelHeader>

			<Group>
                <FormLayout>
                    <FormItem top="Имя">
                        <Input onChange={onChangeFirstname} />
                    </FormItem>
					<FormItem top="Фамилия">
                        <Input onChange={onChangeSecondname} />
                    </FormItem>
                </FormLayout>

                <FormItem>
                    <Button size="l" stretched onClick={addStudent} data-clubid={club_name} data-groupid={group_name}>Добавить студента</Button>
                </FormItem>
            </Group>
		</Panel>
	)
};

AddStudent.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	club_name: PropTypes.string.isRequired,
	group_name: PropTypes.string.isRequired
};

export default AddStudent;
