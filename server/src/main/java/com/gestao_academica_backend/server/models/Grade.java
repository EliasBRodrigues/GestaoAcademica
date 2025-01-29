package com.gestao_academica_backend.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gestao_academica_backend.server.constants.AbbreviationEnumeration;
import com.gestao_academica_backend.server.constants.SubjectEnumeration;
import com.gestao_academica_backend.server.constants.SubjectFormatClass;
import com.gestao_academica_backend.server.constants.SubjectHoursEnumeration;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="grade")
public class Grade implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name_grade")
    private String nameGrade;    
    private String sigla;
    private String subjectHours;
    private String subjectFormatClass;

    @OneToMany(mappedBy = "grade",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Section> sectionList;

    @OneToMany(mappedBy = "grade",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Classroom> classroomsList;
}