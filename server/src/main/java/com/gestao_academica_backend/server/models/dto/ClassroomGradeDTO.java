package com.gestao_academica_backend.server.models.dto;

public record ClassroomGradeDTO(
        String classrooms,
        String nameGrade,
        String sigla,
        String subjectHours,
        String subjectFormatClass,
        String horary) {}