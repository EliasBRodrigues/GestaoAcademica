package com.gestao_academica_backend.server.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.gestao_academica_backend.server.constants.SubjectEnumeration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="notes")
public class Notes {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id")
    @JsonBackReference("student_notes")
    private Students student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "grade_id")
    @JsonBackReference
    private Grade grade;

    private String subject;

    private double atividade_um;
    private double atividade_dois;
    private double projeto_integrador;
    private double avaliacao_integradora;

    @Column(name = "media")
    private double media;
}
