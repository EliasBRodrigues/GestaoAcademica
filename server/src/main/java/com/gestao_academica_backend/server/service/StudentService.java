package com.gestao_academica_backend.server.service;


import java.util.List;
import java.util.Optional;

import com.gestao_academica_backend.server.models.Students;

public interface StudentService {
    Students saveStudent(Students student);
    //Students updateStudent(Long id, Students updatedStudent);
    Optional<Students> findById(Long id);
    List<Students>findAll();
}
