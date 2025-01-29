package com.gestao_academica_backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Students;

public interface StudentRepository extends JpaRepository<Students,Long> {
    @Query("SELECT AVG(g.media) FROM GradeNotes g WHERE g.student.id = :studentId")
    double calculateStudentAverageGrade(@Param("studentId") Long studentId);

}
