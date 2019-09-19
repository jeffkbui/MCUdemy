export const fetchLectures = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/lectures'
    })
};

export const fetchLecture = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/lectures/${id}`
    })
};