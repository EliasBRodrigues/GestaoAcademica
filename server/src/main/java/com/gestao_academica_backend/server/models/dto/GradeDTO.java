package com.gestao_academica_backend.server.models.dto;

public record GradeDTO(
    String nameGrade,
    String sigla,
    String horary,
    String email) {}