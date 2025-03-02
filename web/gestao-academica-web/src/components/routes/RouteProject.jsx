import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import Student from "../screens/Student";
import Registration from "../screens/student/Registration";
import Horary from "../screens/student/Horary";
import Notes from "../screens/student/Notes";
import Frequency from "../screens/student/Frequency";
import Teacher from "../screens/Teacher";

export const RouteProject = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/student" element={<Student />}/>
          <Route path="/student/registration" element={<Registration />}/>
          <Route path="/student/horary" element={<Horary />}/>
          <Route path="/student/notes" element={<Notes />}/>
          <Route path="/student/frequency" element={<Frequency />}/>
          <Route path="/teacher" element={<Teacher />}/>
        </Routes>
      </Router>
    </div>
  );
};
