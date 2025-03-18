package com.gestao_academica_backend.server.models.dto;

public record NotesDTO(
    String email, 
    String subject, 
    Double atividade_um,
    Double atividade_dois,
    Double projeto_integrador,
    Double avaliacao_integradora,
    Double media) {}