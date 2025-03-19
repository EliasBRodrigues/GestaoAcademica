package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.models.Students;
import com.gestao_academica_backend.server.service.impl.StudentServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentServiceImp studentService;

    @Autowired
    public StudentController(StudentServiceImp studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Students>> getAllStudents() {
        List<Students> students = studentService.findAll();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Students> getStudentById(@PathVariable Long id) {
        return studentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/student/user/{email}")
    public ResponseEntity<?> getStudentByUserEmail(@PathVariable String email) throws Exception{
        return ResponseEntity.ok(studentService.findStudentsByUserEmail(email));
    }

    @PostMapping("/")
    public ResponseEntity<Students> saveStudent(@RequestBody Students student) {
        Students savedStudent = studentService.saveStudent(student);
        return ResponseEntity.ok(savedStudent);
    }
}
