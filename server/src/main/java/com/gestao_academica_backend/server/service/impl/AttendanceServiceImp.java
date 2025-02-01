package com.gestao_academica_backend.server.service.impl;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestao_academica_backend.server.models.Attendances;
import com.gestao_academica_backend.server.models.Students;
import com.gestao_academica_backend.server.models.dto.StudentsDTO;
import com.gestao_academica_backend.server.repository.AttendanceRepository;
import com.gestao_academica_backend.server.repository.StudentRepository;
import com.gestao_academica_backend.server.service.AttendanceService;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class AttendanceServiceImp implements AttendanceService {
    private final AttendanceRepository attendanceRepository;
    @Autowired
    private StudentRepository studentsRepository;

    @Autowired
    public AttendanceServiceImp(AttendanceRepository attendanceRepository, StudentRepository studentsRepository) {
        this.attendanceRepository = attendanceRepository;
        this.studentsRepository = studentsRepository;
    }

    public Students getStudentWithAttendances(Long id) {
        Optional<Students> student = attendanceRepository.findByIdWithAttendances(id);
        return student.orElseThrow(() -> new RuntimeException("Student not found"));
    }

    public List<Attendances> getStudentWithAttendancesId(Long id) {
        List<Attendances> student = attendanceRepository.findAttendancesByStudentId(id);
        return student;
    }


    @Override
    public List<Attendances> getAllAttendances() {
        return attendanceRepository.findAll();
    }

    @Override
    public Optional<Attendances> getAttendanceById(Long id) {
        return attendanceRepository.findById(id);
    }

    @Override
    public Attendances saveAttendance(Attendances attendance) {
        return attendanceRepository.save(attendance);
    }

    @Override
    public Attendances updateAttendance(Long id, Attendances updatedAttendance) {
        Optional<Attendances> existingAttendance = attendanceRepository.findById(id);
        if (existingAttendance.isPresent()) {
            Attendances attendance = existingAttendance.get();
            attendance.setAttendanceDate(updatedAttendance.getAttendanceDate());
            attendance.setAttendanceStatus(updatedAttendance.getAttendanceStatus());
            attendance.setStudent(updatedAttendance.getStudent());
            // Update other fields as needed

            return attendanceRepository.save(attendance);
        }
        return null;
    }

    @Override
    public void deleteAttendance(Long id) {
        attendanceRepository.deleteById(id);
    }

   
}
