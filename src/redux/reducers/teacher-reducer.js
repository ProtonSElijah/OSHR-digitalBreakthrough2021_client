const initialState = {
    /*
    clubs: [
        { // group
            name: 'groupName'
            students: [
                { // student
                    name: 'studentName
                }
            ]
        }
    ]
    */
    clubs: []
}

function teacher(state=initialState, action) {
    switch (action.type) {
        case 'ADD_CLUB': {
            state.clubs.push(action.club)
            return state
        }
        default: {
            return state
        }
    }
}

export default teacher;