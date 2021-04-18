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
    PanelHeaderBack,
    Panel,
    Gradient,
    CellButton,
    CardGrid,
    RichCell
  } from "@vkontakte/vkui"

  import {
    Icon20FavoriteCircleFillYellow,
    Icon28LightbulbCircleFillYellow 
  } from "@vkontakte/icons"

const StudentProfile = ({ id, go, fetchedUser, store, student_id }) => {
    const getStudent = () => {
        const students = store.getState().teacherState.students
        for (const student of students) {
            if ((student.id).toString() === student_id) {
                return student ? student : null
            }
        }
    }

    const student = getStudent()

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="group"/>}
            >
                Профиль ученика
            </PanelHeader>

            <Group>
                <Gradient style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: 32,
                }}>
                    <Avatar />
                    <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">{
                        `${student && student.firstname ? student.firstname : ''} 
                        ${student && student.lastname ? student.lastname : ''}`}
                    </Title>
                    <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Инфо</Text>
                    <Button size="m" mode="secondary">Редактировать</Button>
                </Gradient>
            </Group>
            <Group>
                <Cell before={<Icon20FavoriteCircleFillYellow width={26} height={26} />} description={`Секция ${student.clubs.name}, группа ${student.clubs.groups}`}>1-ое место в рейтинге</Cell>
            </Group>
            <Group
                header={<Header>Личные достижения</Header>}
            >
                <Cell before={<Icon28LightbulbCircleFillYellow width={26} height={26} />} description={`Петербургский молодежный форум`}>1-ое место на выставке проектов</Cell>
            </Group>
        </Panel>
    )
}

/*
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
*/

/*
<Group mode="plain">
                <Header>Учебные заведения и классы</Header>
                <SimpleCell before={<Icon28SchoolOutline />} description="Екатеринбург">Школа №180</SimpleCell>
                <CellButton before={<Icon28AddOutline />}>Добавить учебное заведение</CellButton>
            </Group>
*/

StudentProfile.propTypes = {

};

export default StudentProfile;
