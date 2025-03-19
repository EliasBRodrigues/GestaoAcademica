package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Students;

public interface StudentRepository extends JpaRepository<Students,Long> {
    @Query("SELECT s FROM Students s WHERE s.user =:id")
    List<Students> findStudentsByUserId(@Param("id") Long id);

    @Query("SELECT s FROM Students s WHERE s.email = :email")
    Students findStudentsByUserEmail(@Param("email") String email);

    @Query(value = "SELECT s.id, s.name FROM Students s JOIN Classroom c on s.classroom_id = c.id JOIN Grade g ON c.id = g.id WHERE g.sigla LIKE %:grades%", nativeQuery = true)
    List<Object[]> findSubjectsByStudents(@Param("grades") String grades);

    @Query(value = "SELECT s.id, s.name, g.name_grade, n.atividade_um, n.atividade_dois , n.projeto_integrador , n.avaliacao_integradora , n.media FROM Students s JOIN Classroom c on s.classroom_id = c.id JOIN Grade g ON c.id = g.id join notes n on n.student_id = s.id WHERE g.sigla LIKE %:grades% and n.grade_id = s.classroom_id", nativeQuery = true)
    List<Object[]> findNotesByStudents(@Param("grades") String grades);
}
