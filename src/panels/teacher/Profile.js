import React from 'react'
import PropTypes from 'prop-types'

import {
    Text,
    Title,
    Avatar,
    Div,
    Cell,
    Group,
    Button,
    Header,
    PanelHeader,
    Panel,
    Gradient,
    CellButton
  } from "@vkontakte/vkui"

  import {
    Icon28AddOutline
  } from "@vkontakte/icons"


const TeacherProfile = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Профиль учителя</PanelHeader>

        {fetchedUser &&
        <Group>
            <Gradient style={{
                margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 32,
            }}>
                <Avatar size={96} src={fetchedUser.photo_200 ? fetchedUser.photo_200 : ''} />
                <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{`${fetchedUser.first_name ? fetchedUser.first_name : ''} ${fetchedUser.last_name ? fetchedUser.last_name : ''}`}</Title>
                <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Инфо</Text>
                <Button size="m" mode="secondary">Редактировать</Button>
            </Gradient>

            <CellButton before={<Icon28AddOutline />}>Добавить секцию</CellButton>
            <CellButton before={<Icon28AddOutline />}>Добавить учебную группу</CellButton>
            <CellButton before={<Icon28AddOutline />}>Добавить ученика</CellButton>
        </Group>}
	</Panel>
);

/*
<Group mode="plain">
                <Header>Учебные заведения и классы</Header>
                <SimpleCell before={<Icon28SchoolOutline />} description="Екатеринбург">Школа №180</SimpleCell>
                <CellButton before={<Icon28AddOutline />}>Добавить учебное заведение</CellButton>
            </Group>
*/

TeacherProfile.propTypes = {
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

export default TeacherProfile;
