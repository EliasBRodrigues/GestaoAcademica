package com.gestao_academica_backend.server.controller;

import com.gestao_academica_backend.server.models.Classroom;
import com.gestao_academica_backend.server.models.Grade;
import com.gestao_academica_backend.server.models.Section;
import com.gestao_academica_backend.server.service.ClassroomService;
import com.gestao_academica_backend.server.service.GradeService;
import com.gestao_academica_backend.server.service.SectionService;
import com.gestao_academica_backend.server.service.impl.ClassroomServiceImp;
import com.gestao_academica_backend.server.service.impl.GradeServiceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/api/grades")
    public ResponseEntity<List<Grade>> getAllGrades() {
        List<Grade> grades = gradeService.getAllGrades();
        return ResponseEntity.ok(grades);
    }

    // @GetMapping("/api/classrooms/grade={id}")
    // public ResponseEntity<List<Classroom>> getAllClassroomsByGradeId(@PathVariable Long id) {
    //     return ResponseEntity.ok(classroomService.findByGradeStudenList(id));
    // }

    // @GetMapping("/api/grades/{id}")
    // public ResponseEntity<Grade> getGradeById(@PathVariable Long id) {
    //     return gradeService.getGradeById(id)
    //             .map(ResponseEntity::ok)
    //             .orElse(ResponseEntity.notFound().build());
    // }

    // @GetMapping("/api/grades/{id}")
    // public ResponseEntity<?> getGradeByStudentId(@PathVariable Long id) throws Exception {
    //     return ResponseEntity.ok(gradeService.findByGradeStudenList(id));
    // }

    @GetMapping("/api/grade/classroom/{id}")
    public ResponseEntity<?> getGradeByClassroomId(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(gradeService.getGradeByClassroomId(id));
    }
}