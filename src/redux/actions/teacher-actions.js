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