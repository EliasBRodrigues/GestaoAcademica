package com.gestao_academica_backend.server.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="teachers")
public class Teachers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique=true)
    private String email;
    private String name;
    
    @Temporal(TemporalType.DATE)
    private Date joiningData;

    @ManyToMany
    @JoinTable(
            name="teacher_section",
            joinColumns = @JoinColumn(name="teacher_id"),
            inverseJoinColumns = @JoinColumn(name="section_id")
    )
    private List<Section> sections;

    @ManyToOne
    @JoinColumn(name = "user_id", unique = true)
    @JsonIgnore
    private User user;
}