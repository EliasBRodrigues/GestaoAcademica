package com.gestao_academica_backend.server.mapper.impl;


import org.springframework.stereotype.Service;

import com.gestao_academica_backend.server.mapper.UserMapper;
import com.gestao_academica_backend.server.models.User;
import com.gestao_academica_backend.server.models.dto.UserDTO;


@Service
public class UserMapperImpl implements UserMapper{

    @Override
    public UserDTO userDTO(User user) {
        if (user == null) {
            return null;
        }
        return new UserDTO(user.getId(), user.getUsername(),  user.getEmail(), user.getRole());
    }
}