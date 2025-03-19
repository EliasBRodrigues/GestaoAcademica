package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Teachers;
import com.gestao_academica_backend.server.models.dto.TeacherDTO;

public interface TeacherRepository extends JpaRepository<Teachers, Long> {
    @Query("SELECT new com.gestao_academica_backend.server.models.dto.TeacherDTO(t.name, t.email) FROM Teachers t where t.email LIKE %:email%")
    TeacherDTO findTeacherByUserEmail(@Param("email") String email);

    @Query(value = "SELECT t.email, t.name, s.name_section, g.name_grade, g.sigla FROM Teachers t join teacher_section ts on ts.teacher_id = t.id join sections s on s.id = ts.section_id  join grade g on g.id = s.grade_id  where t.email LIKE %:email%", nativeQuery = true)
    List<Object[]> findSubjectsTeacher(@Param("email") String email);
}
