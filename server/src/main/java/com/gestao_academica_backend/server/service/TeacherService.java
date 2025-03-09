package com.gestao_academica_backend.server.service;


import java.util.List;

import com.gestao_academica_backend.server.models.Teachers;

public interface TeacherService {
    List<Teachers> getAllTeachers();

    Teachers getTeacherById(Long id);

}
