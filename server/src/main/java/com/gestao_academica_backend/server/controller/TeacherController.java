package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.models.Teachers;
import com.gestao_academica_backend.server.service.TeacherService;
import com.gestao_academica_backend.server.service.impl.StudentServiceImp;
import com.gestao_academica_backend.server.service.impl.TeacherServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class TeacherController {

    private final TeacherServiceImp teacherService;
    private final StudentServiceImp studentService;

    @Autowired
    public TeacherController(TeacherServiceImp teacherService, StudentServiceImp studentService) {
        this.teacherService = teacherService;
        this.studentService = studentService;
    }
   
    @GetMapping("/api/teachers/")
    public List<Teachers> getAllTeachers() {
        return teacherService.getAllTeachers();
    }

    @GetMapping("/api/teachers/{email}")
    public ResponseEntity<?> findByTeachersEmail(@PathVariable String email) throws Exception {
        return ResponseEntity.ok(teacherService.findByTeachersEmail(email));
    }

    @GetMapping("/api/teachers/subjects/{email}")
    public ResponseEntity<?> findBySubjectsTeacher(@PathVariable String email) throws Exception {
        return ResponseEntity.ok(teacherService.findBySubjectTeacher(email));
    }

    @GetMapping("/api/teachers/students/{grades}")
    public ResponseEntity<?> getSubjectsByStudent(@PathVariable String grades) throws Exception {
        return ResponseEntity.ok(studentService.findSubjectsByStudent(grades));
    }

    @GetMapping("/api/teachers/students/notes/{grades}")
    public ResponseEntity<?> getNotesByStudent(@PathVariable String grades) throws Exception {
        return ResponseEntity.ok(studentService.findNotesByStudent(grades));
    }
}
