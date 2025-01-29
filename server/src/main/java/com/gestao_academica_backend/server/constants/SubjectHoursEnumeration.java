package com.gestao_academica_backend.server.constants;

public enum SubjectHoursEnumeration {
    AULAS_20(20),
    AULAS_40(40),
    AULAS_60(60),
    AULAS_80(80);

    private final int hours;

    SubjectHoursEnumeration(int hours) {
        this.hours = hours;
    }

    public int getHours() {
        return hours;
    }
}
