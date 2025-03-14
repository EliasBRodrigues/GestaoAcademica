package com.gestao_academica_backend.server.service;



import java.util.List;
import java.util.Optional;

import com.gestao_academica_backend.server.models.Attendances;

public interface AttendanceService {
    List<Attendances> getAllAttendances();
    Optional<Attendances> getAttendanceById(Long id);
    Attendances saveAttendance(Attendances attendance);
    Attendances updateAttendance(Long id, Attendances updatedAttendance);
    void deleteAttendance(Long id);
}