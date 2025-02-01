package com.gestao_academica_backend.server.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Grade;

public interface GradeRepository extends JpaRepository<Grade,Long> {
    @Query("SELECT g FROM Grade g WHERE g.classroom.id = :id")
    List<Grade> findGradesByClassroomId(@Param("id") Long id);
}
