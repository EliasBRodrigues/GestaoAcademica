package com.gestao_academica_backend.server.service.impl;

import com.gestao_academica_backend.server.models.Students;
import com.gestao_academica_backend.server.repository.StudentRepository;
import com.gestao_academica_backend.server.service.StudentService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class StudentServiceImp implements StudentService {
    private StudentRepository studentRepository;
    
    @Autowired
    public StudentServiceImp(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }
    
    @Override
    public Students saveStudent(Students student) {
        return studentRepository.save(student);
    }
    
    @Override
    public Optional<Students> findById(Long id) {
        return studentRepository.findById(id);
    }
    @Override
    public List<Students> findAll() {
        return studentRepository.findAll();
    }

    public List<Students> findStudentsByUserId(Long id) throws Exception{
        List<Students> students = studentRepository.findStudentsByUserId(id);
        return students;
    }

    public Students findStudentsByUserEmail(String email) throws Exception{
        Students students = studentRepository.findStudentsByUserEmail(email);
        return students;
    }

    public List<Object[]> findSubjectsByStudent(String grades) throws Exception{
        List<Object[]> students = studentRepository.findSubjectsByStudents(grades);
        return students;
    }

    public List<Object[]> findNotesByStudent(String grades) throws Exception{
        List<Object[]> students = studentRepository.findNotesByStudents(grades);
        return students;
    }
    
}
