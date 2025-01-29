package com.gestao_academica_backend.server.service.impl;

import com.gestao_academica_backend.server.dao.AbstractEntityDao;
import com.gestao_academica_backend.server.models.Grade;
import com.gestao_academica_backend.server.repository.GradeRepository;
import com.gestao_academica_backend.server.service.GradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.util.List;
import java.util.Optional;
@Service
public class GradeServiceImp extends AbstractEntityDao<Grade> {
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

    @Override
    protected Grade resultSetToObject(ResultSet rs) throws Exception {
        Grade grade = new Grade();
        grade.setId(rs.getLong("id"));
        grade.setNameGrade(rs.getString("name_grade"));
        grade.setSigla(rs.getString("sigla"));
        grade.setSubjectHours(rs.getString("subject_hours"));
        grade.setSubjectFormatClass(rs.getString("subject_format_class"));
        return grade;
    }
}
