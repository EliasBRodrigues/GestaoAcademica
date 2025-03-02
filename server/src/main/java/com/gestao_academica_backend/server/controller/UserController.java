package com.gestao_academica_backend.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestao_academica_backend.server.mapper.UserMapper;
import com.gestao_academica_backend.server.models.dto.UserDTO;
import com.gestao_academica_backend.server.service.UserService;
import com.gestao_academica_backend.server.service.impl.UserServiceImpl;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;

import static com.gestao_academica_backend.server.config.SwaggerConfig.BEARER_KEY_SECURITY_SCHEME;

@RestController
@CrossOrigin(origins = "http://localhost:8081/")
@RequestMapping("/api/")
public class UserController {
    private final UserServiceImpl userService;
    private final UserMapper userMapper;


    public UserController(UserServiceImpl userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @Operation(security = {@SecurityRequirement(name = BEARER_KEY_SECURITY_SCHEME)})
    @GetMapping("/user")
    public UserDTO getUser(@PathVariable String username) {
        return userMapper.userDTO(userService.validateAndGetUserByUsername(username));
    }

}
