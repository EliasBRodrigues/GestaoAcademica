package com.gestao_academica_backend.server.service.impl;

import com.gestao_academica_backend.server.models.Section;
import com.gestao_academica_backend.server.models.Teachers;
import com.gestao_academica_backend.server.repository.SectionRepository;
import com.gestao_academica_backend.server.repository.TeacherRepository;
import com.gestao_academica_backend.server.service.SectionService;
import jakarta.persistence.EntityNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class SectionServiceImpl implements SectionService {

    private final SectionRepository sectionRepository;
    private final TeacherRepository teacherRepository;

    @Autowired
    public SectionServiceImpl(SectionRepository sectionRepository, TeacherRepository teacherRepository) {
        this.sectionRepository = sectionRepository;
        this.teacherRepository = teacherRepository;
    }

    @Override
    public List<Section> getAllSections() {
        return sectionRepository.findAll();
    }

    @Override
    public Optional<Section> getSectionById(Long id) {
        return sectionRepository.findById(id);
    }
}
