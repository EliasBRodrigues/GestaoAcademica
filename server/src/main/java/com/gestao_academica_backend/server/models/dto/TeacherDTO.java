package com.gestao_academica_backend.server.models.dto;

public class TeacherDTO {
    private String name;
    private String email;

    public TeacherDTO() {}

    public TeacherDTO(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
