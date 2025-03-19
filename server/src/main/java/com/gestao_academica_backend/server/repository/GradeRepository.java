package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Grade;
import com.gestao_academica_backend.server.models.dto.GradeDTO;

public interface GradeRepository extends JpaRepository<Grade,Long> {
    @Query("SELECT g FROM Grade g WHERE g.classroom.id = :id")
    List<Grade> findGradesByClassroomId(@Param("id") Long id);

    @Query("SELECT new com.gestao_academica_backend.server.models.dto.GradeDTO(g.nameGrade, g.sigla, g.horary, s.email) FROM Grade g JOIN Students s ON g.classroom.id = s.classroom.id WHERE s.email LIKE %:email%")
    List<GradeDTO> findGradesByStudenList(@Param("email") String email);
}
