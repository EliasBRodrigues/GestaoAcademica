package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Notes;

public interface GradeNotesRepository extends JpaRepository<Notes, Long>{
    @Query("SELECT n FROM Notes n JOIN n.student s WHERE s.id = :id")
    List<Notes> finGradeNotesByStudentId(@Param("id") Long id);
}
