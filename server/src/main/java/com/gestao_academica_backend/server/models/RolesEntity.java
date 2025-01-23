package com.gestao_academica_backend.server.models;

import lombok.Data;
import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "roles")
public class RolesEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "rolename")
    private String rolename;
    
    @ManyToOne
    @JoinColumn(name = "user")
    private UserEntity user;
}