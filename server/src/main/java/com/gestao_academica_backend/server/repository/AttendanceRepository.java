package com.gestao_academica_backend.server.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Attendances;

public interface AttendanceRepository extends JpaRepository<Attendances,Long> {
    @Query("SELECT a FROM Attendances a WHERE a.student.id = :id")
    List<Attendances> findAttendancesByStudentId(@Param("id") Long id);
}

