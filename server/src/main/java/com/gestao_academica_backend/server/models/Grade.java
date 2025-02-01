package com.gestao_academica_backend.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private String horary;
    
    @OneToMany(mappedBy = "grade", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonBackReference("student_grade")
    private List<Students> student;

    @OneToMany(mappedBy = "grade",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Section> sectionList;

    // @OneToMany(mappedBy = "grade",cascade = CascadeType.ALL)
    // @JsonIgnore
    // private List<Classroom> classroomsList;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "classroom_id", nullable = false)
    private Classroom classroom;
}