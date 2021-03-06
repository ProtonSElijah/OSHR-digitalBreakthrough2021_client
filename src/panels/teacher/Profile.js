import React, { useState } from 'react'
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
    CellButton,
    CardGrid
  } from "@vkontakte/vkui"

  import {
    Icon20FavoriteCircleFillYellow,
    Icon28AddOutline,
    Icon20CalendarOutline,
    Icon24LightbulbStarOutline
  } from "@vkontakte/icons"
  
  import Clubs from './components/Clubs'


const TeacherProfile = ({ id, go, fetchedUser, store }) => {
    //const clubs = useSelector(state => state.clubs)
    const clubs = store.getState().teacherState.clubs

    return (
        <Panel id={id}>
            <PanelHeader>Профиль учителя</PanelHeader>

            <Group>
                <Gradient style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 32,
                }}>
                    <Avatar size={96} src={fetchedUser && fetchedUser.photo_200 ? fetchedUser.photo_200 : ''} />
                    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{
                        `${fetchedUser && fetchedUser.first_name ? fetchedUser.first_name : ''} 
                        ${fetchedUser && fetchedUser.last_name ? fetchedUser.last_name : ''}`}
                    </Title>
                    <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Инфо</Text>
                    <Button size="m" mode="secondary">Редактировать</Button>
                </Gradient>

                <CellButton before={<Icon20FavoriteCircleFillYellow width={22} height={22} />}>Рейтинг учеников</CellButton>
                <CellButton before={<Icon24LightbulbStarOutline width={22} height={22} />}>Отметить достижения учеников</CellButton>
                <CellButton before={<Icon20CalendarOutline width={22} height={22} />}>Расписание занятий</CellButton>
                <CellButton before={<Icon28AddOutline width={22} height={22} />} onClick={go} data-to={'teacher_addClub'}>Добавить секцию</CellButton>
            </Group>

            <Group
                header={<Header>Мои секции</Header>}
            >
                {clubs.length > 0 &&
                    <Clubs go={go} clubs={clubs} />
                }
                {clubs.length === 0 &&
                    <Div>
                        <Text>Секции отсутствуют</Text>
                    </Div>
                }
            </Group>
        </Panel>
    )
}

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
