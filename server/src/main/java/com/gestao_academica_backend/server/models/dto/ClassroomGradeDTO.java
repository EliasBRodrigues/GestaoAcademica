package com.gestao_academica_backend.server.models.dto;

import com.gestao_academica_backend.server.models.Classroom;
import com.gestao_academica_backend.server.models.Grade;

public class ClassroomGradeDTO {
    private Classroom classroom;
    private Grade grade;

    // Getters e Setters
    public Classroom getClassroom() {
        return classroom;
    }

    public void setClassroom(Classroom classroom) {
        this.classroom = classroom;
    }

    public Grade getGrade() {
        return grade;
    }

    public void setGrade(Grade grade) {
        this.grade = grade;
    }
}
