export function addClub (club) {
    return {
        type: 'ADD_CLUB',
        club,
    };
}

export function addGroup (group, club_name) {
    return {
        type: 'ADD_GROUP',
        group,
        club_name
    };
}

export function addStudent (student, group_name, club_name) {
    return {
        type: 'ADD_STUDENT',
        student,
        group_name,
        club_name
    }
}