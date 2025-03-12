package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.models.Teachers;
import com.gestao_academica_backend.server.service.TeacherService;
import com.gestao_academica_backend.server.service.impl.TeacherServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class TeacherController {

    private final TeacherServiceImp teacherService;

    @Autowired
    public TeacherController(TeacherServiceImp teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/api/teachers/")
    public List<Teachers> getAllTeachers() {
        return teacherService.getAllTeachers();
    }

    @GetMapping("/api/teachers/{email}")
    public ResponseEntity<?> findByTeachersEmail(@PathVariable String email) throws Exception{
        return ResponseEntity.ok(teacherService.findByTeachersEmail(email));
    }
}
