import React from 'react';
import PropTypes from 'prop-types';
import { useState} from 'react';

import Select from '@vkontakte/vkui/dist/components/Select/Select';
import { FormItem } from '@vkontakte/vkui/dist/components/FormItem/FormItem';
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout';
import CustomSelectOption from '@vkontakte/vkui/dist/components/CustomSelectOption/CustomSelectOption';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const roles = [
    {
        'type': 'Учитель',
        'value': 'teacher'
    },
    {
        'type': 'Обучающийся',
        'value': 'student'
    },
    {
        'type': 'Родитель',
        'value': 'parent'
    }
]

const RolesSelect = ({ id, go, fetchedUser }) => {
	const [role, setRole] = useState('role');
	const [roleId, setRoleId] = useState(null)

	const onChangeRole = (e) => {
		setRole(e.currentTarget.value)
		setRoleId(`${e.currentTarget.value}_profile`)
	}

	return (
		<Panel id={id}>
			<PanelHeader>
				Выбор роли
			</PanelHeader>

			<Group>
				<FormLayout>
					<FormItem top="Выберите роль">
						<Select
							placeholder="Роль не выбрана" 
							onChange={onChangeRole}
							options={roles.map(role => ({ label: role.type, value: role.value }))}
							renderOption={({ option, ...restProps }) => (
								<CustomSelectOption {...restProps} />
							)}
						/>
					</FormItem>
				</FormLayout>
				{role &&
				<Div>
					<Button stretched size="l" onClick={go} data-to={roleId}>
						Продолжить
					</Button>
				</Div>}
			</Group>
		</Panel>
	)
};

RolesSelect.propTypes = {
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

export default RolesSelect;
