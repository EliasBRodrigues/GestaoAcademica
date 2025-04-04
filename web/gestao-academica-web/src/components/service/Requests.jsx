import api from './constant/api'

export const Requests = {
    authenticate,
    getUserByEmail,
    getGradesByEmail
  }
  
  function authenticate(username, password) {
    return api.post('/auth/authenticate', { username, password }, {
      headers: { 'Content-type': 'application/json' }
    });
  }

  export async function getUserByEmail(email) {
    const url = (`/api/students/student/user/${email}`);
    return (await api.get(url)).data;
  }

  export async function getTeacherByEmail(email) {
    const url = (`/api/teachers/${email}`);
    return (await api.get(url)).data;
  }

  export async function getGradesByEmail(email) {
    const url = (`/api/grade/student/${email}`);
    return (await api.get(url)).data;
  }

  export async function getNotesByEmail(email) {
    const url = (`/api/grades/student/notes/${email}`);
    return (await api.get(url)).data;
  }

  export async function getAttendancesByEmail(email) {
    const url = (`/api/attendances/student/${email}`);
    return (await api.get(url)).data;
  }

  export async function getClassroomGradesByGradeId(semester) {
    const url = (`/api/classrooms/grade/${semester}`);
    return (await api.get(url)).data;
  }

  export async function getClassroomTeachers(email) {
    const url = (`/api/teachers/subjects/${email}`);
    return (await api.get(url)).data;
  }

  export async function getSubjectsByStudent(grades) {
    const url = (`/api/teachers/students/${grades}`);
    return (await api.get(url)).data;
  }

  export async function getNotesByStudent(grades) {
    const url = (`/api/teachers/students/notes/${grades}`);
    return (await api.get(url)).data;
  }
