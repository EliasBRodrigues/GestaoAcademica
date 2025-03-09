package com.gestao_academica_backend.server.models.dto;

public class GradeDTO {
    private String nameGrade;
    private String sigla;
    private String horary;
    private String email;

    public GradeDTO(String nameGrade, String sigla, String horary, String email) {
        this.nameGrade = nameGrade;
        this.sigla = sigla;
        this.horary = horary;
        this.email = email;
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

    public String getHorary() {
        return this.horary;
    }

    public void setHorary(String horary) {
        this.horary = horary;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}