package com.gestao_academica_backend.server.mapper;



import com.gestao_academica_backend.server.models.User;
import com.gestao_academica_backend.server.models.dto.UserDTO;

public interface UserMapper {
    UserDTO userDTO(User user);
}