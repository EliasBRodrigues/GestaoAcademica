package com.gestao_academica_backend.server.service;


import java.util.List;
import java.util.Optional;

import com.gestao_academica_backend.server.models.User;


public interface UserService {
    List<User> getAllUsers();
    Optional<User> getUserByUsername(String username);
    Optional<User> getUserByEmail(String email);
    Boolean hasUserWithUsername(String username);
    Boolean hasUserWithEmail(String email);
    User validateAndGetUserByUsername(String username);
}
