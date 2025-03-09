package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.models.Teachers;
import com.gestao_academica_backend.server.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TeacherController {

    private final TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/api/teachers/")
    public List<Teachers> getAllTeachers() {
        return teacherService.getAllTeachers();
    }

    @GetMapping("/api/teachers/{id}")
    public Teachers getTeacherById(@PathVariable Long id) {
        return teacherService.getTeacherById(id);
    }
}
