import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import Student from "../screens/Student";
import Registration from "../screens/student/Registration";
import Horary from "../screens/student/Horary";
import Notes from "../screens/student/Notes";
import Frequency from "../screens/student/Frequency";
import Teacher from "../screens/Teacher";
import FrequencyTeacher from "../screens/teacher/subcomponents/FrequencyTeacher";
import NotesTeacher from "../screens/teacher/subcomponents/NotesTeacher";
import ClassroomTeacherNotes from "../screens/teacher/ClassroomTeacherNotes";
import ClassroomTeacherFrequency from "../screens/teacher/ClassroomTeacherFrequency";

export const RouteProject = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student" element={<Student />}/>
          <Route path="/student/registration" element={<Registration />}/>
          <Route path="/student/horary" element={<Horary />}/>
          <Route path="/student/notes" element={<Notes />}/>
          <Route path="/student/frequency" element={<Frequency />}/>
          <Route path="/teacher" element={<Teacher />}/>
          <Route path="/teacher/classroom/notes" element={<ClassroomTeacherNotes />} />
          <Route path="/teacher/classroom/frequency" element={<ClassroomTeacherFrequency />}/>
          <Route path="/teacher/classroom/frequency/freq" element={<FrequencyTeacher />}/>
          <Route path="/teacher/classroom/notes/note" element={<NotesTeacher />}/>
        </Routes>
      </Router>
    </div>
  );
};
