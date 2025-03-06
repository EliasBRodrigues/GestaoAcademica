package com.gestao_academica_backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Classroom;
import com.gestao_academica_backend.server.models.dto.ClassroomGradeDTO;

import java.util.List;

public interface ClassroomRepository extends JpaRepository<Classroom, Long> {
    @Query("SELECT new com.gestao_academica_backend.server.models.dto.ClassroomGradeDTO(c.classrooms, g.nameGrade, g.sigla , g.horary , g.subjectFormatClass , g.subjectHours) FROM Classroom c JOIN Grade g ON c.id = g.classroom.id WHERE c.classrooms LIKE %:id%")
    List<ClassroomGradeDTO> findClassroomAndGradeByGradeId(@Param("id") String id);
 }
