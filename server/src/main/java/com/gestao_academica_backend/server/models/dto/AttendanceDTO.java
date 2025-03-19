package com.gestao_academica_backend.server.models.dto;

public record AttendanceDTO(
    String sigla, 
    Integer attendanceAbsent, 
    Integer attendancePresent) {} 