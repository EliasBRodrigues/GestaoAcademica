package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.service.ClassroomService;
import com.gestao_academica_backend.server.service.GradeService;
import com.gestao_academica_backend.server.service.SectionService;
import com.gestao_academica_backend.server.service.impl.ClassroomServiceImp;
import com.gestao_academica_backend.server.service.impl.GradeServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class GradeController {

    private final GradeServiceImp gradeService;
    private final ClassroomServiceImp classroomService;
    private final SectionService sectionService;

    @Autowired
    public GradeController(GradeServiceImp gradeService, ClassroomServiceImp classroomService, SectionService sectionService)
    {
        this.gradeService = gradeService;
        this.classroomService = classroomService;
        this.sectionService = sectionService;
    }

    @GetMapping("/api/grade/classroom/{id}")
    public ResponseEntity<?> getGradeByClassroomId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(gradeService.getGradeByClassroomId(id));
    }

    @GetMapping("/api/grade/student/{email}")
    public ResponseEntity<?> getGradeByStudEntity(@PathVariable String email) throws Exception {
        return ResponseEntity.ok(gradeService.findByGradeStudenList(email));
    }
}