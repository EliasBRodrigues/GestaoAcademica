package com.gestao_academica_backend.server.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.gestao_academica_backend.server.constants.AttendanceStatus;
import com.gestao_academica_backend.server.constants.AbbreviationEnumeration;
import com.gestao_academica_backend.server.constants.SubjectEnumeration;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="attendance")
public class Attendances{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    // @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    // @JoinColumn(name = "grade_id")
    // @JsonBackReference
    // private Grade subject;

    private String subjectEnumeration;
    private String sigla;

    private Date attendanceDate;
    
    private String attendanceStatus;
    
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id")
    @JsonBackReference("student_attendance")
    private Students student;

}