package com.gestao_academica_backend.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gestao_academica_backend.server.models.Attendances;
import com.gestao_academica_backend.server.repository.StudentRepository;
import com.gestao_academica_backend.server.service.impl.AttendanceServiceImp;


@RestController
@RequestMapping("/api/attendances")
@CrossOrigin(origins = "http://localhost:5173/")
public class AttendanceController {

    private final AttendanceServiceImp attendanceService;

    @Autowired
    private StudentRepository studentsRepository;

    @Autowired
    public AttendanceController(AttendanceServiceImp attendanceService, StudentRepository studentsRepository) {
        this.attendanceService = attendanceService;
    }

    @GetMapping("/{id}/attendance")
    public ResponseEntity<?> getStudentWithAttendancesId(@PathVariable Long id) {
        return ResponseEntity.ok(attendanceService.getStudentWithAttendancesId(id));
    }

    @GetMapping("/student/{email}")
    public ResponseEntity<?> getAttendancesByStudentEmail(@PathVariable String email) {
        return ResponseEntity.ok(attendanceService.getAttendancesByStudentEmail(email));
    }
}