package com.gestao_academica_backend.server.service.impl;

import com.gestao_academica_backend.server.models.Grade;
import com.gestao_academica_backend.server.models.dto.GradeDTO;
import com.gestao_academica_backend.server.repository.GradeRepository;
import com.gestao_academica_backend.server.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class GradeServiceImp implements GradeService {
    private final GradeRepository gradeRepository;

    @Autowired
    public GradeServiceImp(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    //@Override
    public List<Grade> getAllGrades() {
        return gradeRepository.findAll();
    }

    //@Override
    public Optional<Grade> getGradeById(Long id) {
        return gradeRepository.findById(id);
    }

    public List<Grade> getGradeByClassroomId(Long id){
        List<Grade> grades = gradeRepository.findGradesByClassroomId(id);
        return grades;
        //return grades.orElseThrow(() -> new RuntimeException("Grade not found"));
    }

    public List<GradeDTO> findByGradeStudenList(String email) throws Exception{
        List<GradeDTO> grades = gradeRepository.findGradesByStudenList(email);
        return grades;
    }
}
