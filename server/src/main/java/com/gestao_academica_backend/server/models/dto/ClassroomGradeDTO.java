package com.gestao_academica_backend.server.models.dto;

public class ClassroomGradeDTO {
    private String classrooms;
    private String nameGrade;    
    private String sigla;
    private String subjectHours;
    private String subjectFormatClass;
    private String horary;

    public ClassroomGradeDTO(){}

    public ClassroomGradeDTO(String classrooms, String nameGrade, String sigla, String subjectHours, String subjectFormatClass, String horary) {
        this.classrooms = classrooms;
        this.nameGrade = nameGrade;
        this.sigla = sigla;
        this.subjectHours = subjectHours;
        this.subjectFormatClass = subjectFormatClass;
        this.horary = horary;
    }


    public String getClassrooms() {
        return this.classrooms;
    }

    public void setClassrooms(String classrooms) {
        this.classrooms = classrooms;
    }

    public String getNameGrade() {
        return this.nameGrade;
    }

    public void setNameGrade(String nameGrade) {
        this.nameGrade = nameGrade;
    }

    public String getSigla() {
        return this.sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public String getSubjectHours() {
        return this.subjectHours;
    }

    public void setSubjectHours(String subjectHours) {
        this.subjectHours = subjectHours;
    }

    public String getSubjectFormatClass() {
        return this.subjectFormatClass;
    }

    public void setSubjectFormatClass(String subjectFormatClass) {
        this.subjectFormatClass = subjectFormatClass;
    }

    public String getHorary() {
        return this.horary;
    }

    public void setHorary(String horary) {
        this.horary = horary;
    }
}