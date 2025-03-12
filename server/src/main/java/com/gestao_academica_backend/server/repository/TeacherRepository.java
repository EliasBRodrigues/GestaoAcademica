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
}
