package com.gestao_academica_backend.server.models;

import javax.persistence.*;

import com.gestao_academica_backend.server.constants.ClassroomEnumeration;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="classroom")
public class Classroom implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    //@Enumerated(EnumType.STRING)
    private String classrooms;
    
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="grade_id", nullable = false)
    private Grade grade;
}