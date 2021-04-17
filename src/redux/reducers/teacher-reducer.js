const initialState = {
    /*
    clubs: [
        { // groups
            name: 'groupName'
            students: [
                { // students
                    name: 'studentName
                }
            ]
        }
    ]
    */
    clubs: [

    ]
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
                    club['groups'].push(action.group)
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