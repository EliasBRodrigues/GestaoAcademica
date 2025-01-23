package com.gestao_academica_backend.server.models;

import java.io.Serializable;

import com.gestao_academica_backend.server.constants.AbbreviationEnumeration;
import com.gestao_academica_backend.server.constants.SubjectEnumeration;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "grade")
public class GradeEntity implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private SubjectEnumeration subjectEnumeration;
    private AbbreviationEnumeration abbreviationEnumeration;
}
