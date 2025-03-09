package com.gestao_academica_backend.server.models.dto;

import jakarta.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginDTO {
    @NotBlank(message = "USERNAME VAZIO")
    private String username;

    @NotBlank(message = "SENHA VAZIA")
    private String password;
}
