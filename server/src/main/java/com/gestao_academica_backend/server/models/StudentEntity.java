package com.gestao_academica_backend.server.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.gestao_academica_backend.server.constants.ClassroomEnumeration;

import jakarta.persistence.*;

public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String entity;

    @Column(name = "academicYear")
    private String academicYear;

    @OneToMany(mappedBy = "student", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonBackReference("student-attendance")
    private List<AttendanceEntity> attendancesList;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "classroom_id")
    private ClassroomEnumeration classroomEnumeration;

    // @OneToMany(mappedBy = "student", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    // @JsonManagedReference("student_notes")
    //private List<Grade
}
