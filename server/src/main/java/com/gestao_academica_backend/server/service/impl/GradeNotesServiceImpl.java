package com.gestao_academica_backend.server.service.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gestao_academica_backend.server.dao.AbstractEntityDao;
import com.gestao_academica_backend.server.models.Classroom;
import com.gestao_academica_backend.server.models.GradeNotes;
import com.gestao_academica_backend.server.models.Students;
import com.gestao_academica_backend.server.repository.GradeNotesRepository;
import com.gestao_academica_backend.server.service.GradeNotesService;

@Service
public class GradeNotesServiceImpl extends AbstractEntityDao<GradeNotes>{

    private GradeNotesRepository gradeNotesRepository;

    public GradeNotesServiceImpl(GradeNotesRepository gradeNotesRepository) {
        this.gradeNotesRepository = gradeNotesRepository;
    }

     public List<GradeNotes> getAllGradeNotes() {
        return gradeNotesRepository.findAll();
    }

    public List<GradeNotes> findByStudent(String id) throws Exception{
        PreparedStatement pstmt = getConnection().prepareStatement(" SELECT n.*, s.* FROM notes n JOIN students s ON n.student_id = s.id WHERE s.id = ?; ");
        pstmt.setString(1, id);
        return super.findByPreparedStatement(pstmt);
    }

    @Override
    protected GradeNotes resultSetToObject(ResultSet rs) throws Exception {
        GradeNotes gradeNotes = new GradeNotes();
        gradeNotes.setId(rs.getLong("id"));
        gradeNotes.setSubject(rs.getString("subject"));
        gradeNotes.setAtividade_um(rs.getDouble("atividade_um"));
        gradeNotes.setAtividade_dois(rs.getDouble("atividade_dois"));
        gradeNotes.setAvaliacao_integradora(rs.getDouble("avaliacao_integradora"));
        gradeNotes.setProjeto_integrador(rs.getDouble("projeto_integrador"));
        gradeNotes.setMedia(rs.getDouble("media"));
        Students students = new Students();
        students.setId(rs.getLong("id"));
        students.setEmail(rs.getString("email"));
        gradeNotes.setStudent(students);
        return gradeNotes;
    }


    
}
