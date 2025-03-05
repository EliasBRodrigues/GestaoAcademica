package com.gestao_academica_backend.server.models.dto;

public class AttendanceDTO {
    private String sigla;
    private Integer attendanceAbsent;
    private Integer attendancePresent;

    public AttendanceDTO(){}


    public AttendanceDTO(String sigla, Integer attendanceAbsent, Integer attendancePresent) {
        this.sigla = sigla;
        this.attendanceAbsent = attendanceAbsent;
        this.attendancePresent = attendancePresent;
    }

    public String getSigla() {
        return this.sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public Integer getAttendanceAbsent() {
        return this.attendanceAbsent;
    }

    public void setAttendanceAbsent(Integer attendanceAbsent) {
        this.attendanceAbsent = attendanceAbsent;
    }

    public Integer getAttendancePresent() {
        return this.attendancePresent;
    }

    public void setAttendancePresent(Integer attendancePresent) {
        this.attendancePresent = attendancePresent;
    }
    
}
