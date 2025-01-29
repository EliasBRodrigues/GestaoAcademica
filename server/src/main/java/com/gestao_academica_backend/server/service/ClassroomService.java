package com.gestao_academica_backend.server.service;

import java.util.List;
import java.util.Optional;

import com.gestao_academica_backend.server.constants.ClassroomEnumeration;
import com.gestao_academica_backend.server.models.Classroom;

public interface ClassroomService {
    List<Classroom> getAllClassrooms();
    Optional<Classroom> getClassroomById(Long id);
    List<Classroom> findByGrade(Long GradeId);
    List<Classroom> findByGrade(String classrooms);
}
