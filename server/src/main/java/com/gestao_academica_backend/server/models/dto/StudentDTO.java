package com.gestao_academica_backend.server.models.dto;

import lombok.Data;

@Data
public class StudentDTO {
    private String name;
    private String email;
    private String ra;
    private String academicYear;
}
