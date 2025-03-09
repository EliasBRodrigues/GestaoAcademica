package com.gestao_academica_backend.server.service;

import java.util.Optional;

import com.gestao_academica_backend.server.models.Notes;
import com.gestao_academica_backend.server.models.Students;

public interface GradeNotesService {
    Optional<Notes> getGradeNotesById(Students id);
}
