package com.gestao_academica_backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestao_academica_backend.server.models.Attendances;

public interface AttendanceRepository extends JpaRepository<Attendances,Long> {
}

