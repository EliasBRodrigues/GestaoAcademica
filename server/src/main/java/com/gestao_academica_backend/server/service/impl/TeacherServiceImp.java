package com.gestao_academica_backend.server.service.impl;

import com.gestao_academica_backend.server.models.Teachers;
import com.gestao_academica_backend.server.repository.TeacherRepository;
import com.gestao_academica_backend.server.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherServiceImp implements TeacherService {
    private final TeacherRepository teacherRepository;

    @Autowired
    public TeacherServiceImp(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    @Override
    public List<Teachers> getAllTeachers() {
        return teacherRepository.findAll();
    }

    @Override
    public Teachers getTeacherById(Long id) {
        Optional<Teachers> teacherOptional = teacherRepository.findById(id);
        return teacherOptional.orElse(null);
    }

    public Teachers findByTeachersEmail(String email){
        Teachers teachers = teacherRepository.findTeacherByUserEmail(email);
        return teachers;
    }
}
