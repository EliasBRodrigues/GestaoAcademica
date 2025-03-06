package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.service.impl.ClassroomServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173/")
public class ClassroomController {

    private final ClassroomServiceImp classroomService;

    @Autowired
    public ClassroomController(ClassroomServiceImp classroomService) {
        this.classroomService = classroomService;
    }

    @GetMapping("/api/classrooms/grade/{id}")
    public ResponseEntity<?> getClassroomGradeByGradeId(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(classroomService.findByClassroomGrade(id));
    }
}