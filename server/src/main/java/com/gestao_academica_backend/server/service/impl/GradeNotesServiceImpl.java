package com.gestao_academica_backend.server.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.gestao_academica_backend.server.models.Classroom;
import com.gestao_academica_backend.server.models.Notes;
import com.gestao_academica_backend.server.models.Students;
import com.gestao_academica_backend.server.models.dto.NotesDTO;
import com.gestao_academica_backend.server.repository.GradeNotesRepository;
import com.gestao_academica_backend.server.service.GradeNotesService;

@Service
public class GradeNotesServiceImpl implements GradeNotesService{

    private GradeNotesRepository gradeNotesRepository;

    public GradeNotesServiceImpl(GradeNotesRepository gradeNotesRepository) {
        this.gradeNotesRepository = gradeNotesRepository;
    }

     public List<Notes> getAllGradeNotes() {
        return gradeNotesRepository.findAll();
    }

    public List<Notes> findByStudent(String id) throws Exception{
        return null;
    }

    public List<Notes> findGradeNotesByStudentId(Long id) throws Exception{
        List<Notes> notes = gradeNotesRepository.finGradeNotesByStudentId(id);
        return notes;
    }

    public List<NotesDTO> findGradeNotesByStudentEmail(String email) throws Exception{
        List<NotesDTO> notes = gradeNotesRepository.finGradeNotesByStudentEmail(email);
        return notes;
    }

    @Override
    public Optional<Notes> getGradeNotesById(Students id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getGradeNotesById'");
    }   
}