package com.gestao_academica_backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestao_academica_backend.server.constants.ClassroomEnumeration;
import com.gestao_academica_backend.server.models.Classroom;

import java.util.List;

public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
    //List<Classroom> findClassroomByGradeId(Long gradeId);
    // List<Classroom> findByClassrooms(ClassroomEnumeration classrooms);
}
