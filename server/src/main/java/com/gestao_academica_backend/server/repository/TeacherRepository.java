package com.gestao_academica_backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Teachers;

public interface TeacherRepository extends JpaRepository<Teachers, Long> {
    @Query("SELECT t FROM Teachers t where t.email =:email")
    Teachers findTeacherByUserEmail(@Param("email") String email);
}
