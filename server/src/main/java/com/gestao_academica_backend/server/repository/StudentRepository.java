package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Grade;
import com.gestao_academica_backend.server.models.Students;

public interface StudentRepository extends JpaRepository<Students,Long> {
    @Query("SELECT s FROM Students s WHERE s.user =:id")
    List<Students> findStudentsByUserId(@Param("id") Long id);

    @Query("SELECT s FROM Students s WHERE s.email = :email")
    Students findStudentsByUserEmail(@Param("email") String email);
}
