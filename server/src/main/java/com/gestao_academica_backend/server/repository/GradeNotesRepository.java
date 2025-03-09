package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Notes;
import com.gestao_academica_backend.server.models.dto.NotesDTO;

public interface GradeNotesRepository extends JpaRepository<Notes, Long>{
    @Query("SELECT n FROM Notes n JOIN n.student s WHERE s.id = :id")
    List<Notes> finGradeNotesByStudentId(@Param("id") Long id);

    @Query("SELECT new com.gestao_academica_backend.server.models.dto.NotesDTO(s.email, n.subject, n.atividade_um, n.atividade_dois, n.projeto_integrador, n.avaliacao_integradora, n.media) FROM Notes n JOIN Students s ON n.student.id = s.id WHERE s.email LIKE %:email%")
    List<NotesDTO> finGradeNotesByStudentEmail(@Param("email") String email);
}
