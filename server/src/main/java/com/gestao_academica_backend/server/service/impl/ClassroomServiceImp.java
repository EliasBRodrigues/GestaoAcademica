package com.gestao_academica_backend.server.service.impl;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestao_academica_backend.server.models.Classroom;
import com.gestao_academica_backend.server.models.dto.ClassroomGradeDTO;
import com.gestao_academica_backend.server.repository.ClassroomRepository;
import com.gestao_academica_backend.server.repository.GradeRepository;
import com.gestao_academica_backend.server.service.ClassroomService;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ClassroomServiceImp implements ClassroomService {
    private final ClassroomRepository classroomRepository;
    private final GradeRepository gradeRepository;

    @Autowired
    public ClassroomServiceImp(ClassroomRepository classroomRepository,GradeRepository gradeRepository) {
        this.classroomRepository = classroomRepository;
        this.gradeRepository = gradeRepository;
    }

    public List<Classroom> getAllClassrooms() {
        return classroomRepository.findAll();
    }

    public Optional<Classroom> getClassroomById(Long id) {
        return classroomRepository.findById(id);
    }

    public List<ClassroomGradeDTO> findByClassroomGrade(String id) throws Exception{
        List<ClassroomGradeDTO> classrooms = classroomRepository.findClassroomAndGradeByGradeId(id);
        return classrooms;
    }
}
