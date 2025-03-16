package com.gestao_academica_backend.server.models.dto;

public class TeacherSection {
    private String email;
    private String name;
    private String nameSection;
    private String nameGrade;


    public TeacherSection() {
    }

    public TeacherSection(String email, String name, String nameSection, String nameGrade) {
        this.email = email;
        this.name = name;
        this.nameSection = nameSection;
        this.nameGrade = nameGrade;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNameSection() {
        return this.nameSection;
    }

    public void setNameSection(String nameSection) {
        this.nameSection = nameSection;
    }

    public String getNameGrade() {
        return this.nameGrade;
    }

    public void setNameGrade(String nameGrade) {
        this.nameGrade = nameGrade;
    }

}
