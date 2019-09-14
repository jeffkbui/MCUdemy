export const fetchCourses = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/courses'
    })
};

export const fetchCourse = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/courses/${id}`
    })
};