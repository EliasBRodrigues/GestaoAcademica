package com.gestao_academica_backend.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.gestao_academica_backend.server.models.Attendances;
import com.gestao_academica_backend.server.service.AttendanceService;
import com.gestao_academica_backend.server.service.impl.AttendanceServiceImp;

import java.util.List;

@RestController
@RequestMapping("/api/attendances")
public class AttendanceController {

    private final AttendanceServiceImp attendanceService;

    @Autowired
    public AttendanceController(AttendanceServiceImp attendanceService) {
        this.attendanceService = attendanceService;
    }

    @GetMapping("/")
    public ResponseEntity<List<Attendances>> getAllAttendances() {
        List<Attendances> attendances = attendanceService.getAllAttendances();
        return ResponseEntity.ok(attendances);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Attendances> getAttendanceById(@PathVariable Long id) {
        return attendanceService.getAttendanceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/")
    public ResponseEntity<Attendances> saveAttendance(@RequestBody Attendances attendance) {
        Attendances savedAttendance = attendanceService.saveAttendance(attendance);
        return ResponseEntity.ok(savedAttendance);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<Attendances> updateAttendance(@PathVariable Long id, @RequestBody Attendances updatedAttendance) {
        Attendances updated = attendanceService.updateAttendance(id, updatedAttendance);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAttendance(@PathVariable Long id) {
        attendanceService.deleteAttendance(id);
        return ResponseEntity.noContent().build();
    }
}