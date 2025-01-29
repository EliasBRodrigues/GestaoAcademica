package com.gestao_academica_backend.server.service;

import java.util.Optional;

import com.gestao_academica_backend.server.models.GradeNotes;
import com.gestao_academica_backend.server.models.Students;

public interface GradeNotesService {
    Optional<GradeNotes> getGradeNotesById(Students id);
}
