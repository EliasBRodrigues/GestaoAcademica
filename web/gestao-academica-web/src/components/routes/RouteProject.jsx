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
import Subjects from "../screens/student/subcomponent/Subjects";
import { AuthProvider } from "../auth/context/AuthContext";
import PrivateRoute from "../service/PrivateRoute";

export const RouteProject = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/student" element={<PrivateRoute><Student /></PrivateRoute>} />
            <Route path="/student/registration" element={<PrivateRoute><Registration /></PrivateRoute>} />
            <Route path="/student/horary" element={<PrivateRoute><Horary /></PrivateRoute>} />
            <Route path="/student/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
            <Route path="/student/frequency" element={<PrivateRoute><Frequency /></PrivateRoute>} />
            <Route
              path="/student/registration/subjects"
              element={<PrivateRoute><Subjects /></PrivateRoute>}
            />
            <Route path="/teacher" element={<PrivateRoute><Teacher /></PrivateRoute>} />
            <Route
              path="/teacher/classroom/notes"
              element={<PrivateRoute><ClassroomTeacherNotes /></PrivateRoute>}
            />
            <Route
              path="/teacher/classroom/frequency"
              element={<PrivateRoute><ClassroomTeacherFrequency /></PrivateRoute>}
            />
            <Route
              path="/teacher/classroom/frequency/freq"
              element={<PrivateRoute><FrequencyTeacher /></PrivateRoute>}
            />
            <Route
              path="/teacher/classroom/notes/note"
              element={<PrivateRoute><NotesTeacher /></PrivateRoute>}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};
