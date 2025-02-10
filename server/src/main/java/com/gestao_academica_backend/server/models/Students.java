package com.gestao_academica_backend.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="students")
public class Students{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String ra;

    @Column(name = "academic_year")
    private String academicYear;

    @OneToMany(mappedBy = "student",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonManagedReference("student_attendance")
    private List<Attendances> attendanceList;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "classroom_id")
    private Classroom classroom;

    @OneToMany(mappedBy = "student", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference("student_notes")
    private List<Notes> gradeNotesList;

    @ManyToMany
    @JoinTable(
        name = "student_grade",
        joinColumns = @JoinColumn(name = "student_id"), // column to refer Student join
        inverseJoinColumns = @JoinColumn(name = "grade_id") // column to refer Grade join
    )
    @JsonIgnore
    private List<Grade> grade;

    @ManyToOne
    @JoinColumn(name = "user_id", unique = true)
    private User user;
}
