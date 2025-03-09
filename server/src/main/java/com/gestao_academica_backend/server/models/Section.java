package com.gestao_academica_backend.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gestao_academica_backend.server.constants.ClassroomEnumeration;
import com.gestao_academica_backend.server.constants.SectionEnumeration;

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
    private ClassroomEnumeration name_section;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="grade_id")
    private Grade grade;

    private SectionEnumeration status;

    @ManyToMany(mappedBy = "sections")
    @JsonIgnore
    private List<Teachers> teachers;
}