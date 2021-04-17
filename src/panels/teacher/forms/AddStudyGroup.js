import React from 'react';
import PropTypes from 'prop-types';

import {
    PanelHeader,
    Panel,
    PanelHeaderBack
  } from "@vkontakte/vkui"

const AddStudyGroup = ({ id, go, fetchedUser }) => {
	return (
		<Panel id={id}>
			<PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="teacher_profile"/>}
            >
				Добавить учебную группу
			</PanelHeader>
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

export default AddStudyGroup;
