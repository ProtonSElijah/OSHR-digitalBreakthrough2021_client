import React from 'react'
import PropTypes from 'prop-types'

import {
    Avatar,
    SimpleCell
} from '@vkontakte/vkui'

const Students = ({ go, students, club_name, group_name }) => {

    return students.map(
        // onClick={go} data-to="student_profile" data-studentid={student.id}
        (student) => 
            <SimpleCell key={student.id} before={<Avatar size={40}/>} onClick={go} data-to="teacher_student" data-studentid={student.id}>
                {`${student.firstname ? student.firstname : ''} ${student.lastname ? student.lastname  : ''}`}
            </SimpleCell>
    )
}

Students.propTypes = {
    students: PropTypes.array.isRequired,
    club_name: PropTypes.string.isRequired,
    //group_name: PropTypes.string.isRequired
}

export default Students