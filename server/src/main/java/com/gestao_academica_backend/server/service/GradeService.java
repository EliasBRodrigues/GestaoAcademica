package com.gestao_academica_backend.server.service;


import java.util.List;
import java.util.Optional;

import com.gestao_academica_backend.server.models.Grade;

public interface GradeService {
    List<Grade> getAllGrades();
    Optional<Grade> getGradeById(Long id);
}
