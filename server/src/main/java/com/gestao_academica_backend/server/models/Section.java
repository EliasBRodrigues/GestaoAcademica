package com.gestao_academica_backend.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name_section;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="grade_id")
    @JsonIgnore
    private Grade grade;

    @ManyToMany(mappedBy = "sections")
    @JsonIgnore
    private List<Teachers> teachers;
}