const initialState = {
    clubs: []
}

function teacher(state=initialState, action) {
    switch (action.type) {
        case 'ADD_CLUB': {
            action.club.groups = []
            action.club.students = []
            state.clubs.push(action.club)
            return state
        }
        case 'ADD_GROUP': {
            for (const club of state.clubs) {
                if (club.name === action.club_name) {
                    action.group.students = []
                    club.groups.push(action.group)
                    break
                }
            }
            return state
        }
        case 'ADD_STUDENT': {
            for (const club of state.clubs) {
                if (club.name === action.club_name) {
                    club.students.push(action.student)
                    for (const group of club.groups) {
                        if (group.name === action.group_name) {
                            group.students.push(action.student)
                            break
                        }
                    }
                    break
                }
            }
            return state
        }
        default: {
            return state
        }
    }
}

export default teacher;