package com.gestao_academica_backend.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestao_academica_backend.server.models.GradeNotes;

public interface GradeNotesRepository extends JpaRepository<GradeNotes, Long>{
    
}
