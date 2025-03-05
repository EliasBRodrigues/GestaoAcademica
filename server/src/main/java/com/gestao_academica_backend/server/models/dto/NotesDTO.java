package com.gestao_academica_backend.server.models.dto;

public class NotesDTO {
    private String email;
    private String subject;
    private double atividade_um;
    private double atividade_dois;
    private double projeto_integrador;
    private double avaliacao_integradora;
    private double media;

    public NotesDTO() {}

    public NotesDTO(String email, String subject, double atividade_um, double atividade_dois, double projeto_integrador, double avaliacao_integradora, double media) {
        this.email = email;
        this.subject = subject;
        this.atividade_um = atividade_um;
        this.atividade_dois = atividade_dois;
        this.projeto_integrador = projeto_integrador;
        this.avaliacao_integradora = avaliacao_integradora;
        this.media = media;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public double getAtividade_um() {
        return this.atividade_um;
    }

    public void setAtividade_um(double atividade_um) {
        this.atividade_um = atividade_um;
    }

    public double getAtividade_dois() {
        return this.atividade_dois;
    }

    public void setAtividade_dois(double atividade_dois) {
        this.atividade_dois = atividade_dois;
    }

    public double getProjeto_integrador() {
        return this.projeto_integrador;
    }

    public void setProjeto_integrador(double projeto_integrador) {
        this.projeto_integrador = projeto_integrador;
    }

    public double getAvaliacao_integradora() {
        return this.avaliacao_integradora;
    }

    public void setAvaliacao_integradora(double avaliacao_integradora) {
        this.avaliacao_integradora = avaliacao_integradora;
    }

    public double getMedia() {
        return this.media;
    }

    public void setMedia(double media) {
        this.media = media;
    }
}
