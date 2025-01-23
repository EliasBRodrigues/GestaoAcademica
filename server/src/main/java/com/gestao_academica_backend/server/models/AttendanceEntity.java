package com.gestao_academica_backend.server.models;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.gestao_academica_backend.server.constants.AbbreviationEnumeration;
import com.gestao_academica_backend.server.constants.AttendanceEnumeration;
import com.gestao_academica_backend.server.constants.SubjectEnumeration;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "attendances")
public class AttendanceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private SubjectEnumeration subjectEnumeration;
    private AbbreviationEnumeration abbreviationEnumeration;
    private Date attendanceDate;
    private AttendanceEnumeration attendanceEnumeration;

    // @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    // @JoinColumn(name = "student_id")
    // @JsonBackReference("student_attendance")
    
}
