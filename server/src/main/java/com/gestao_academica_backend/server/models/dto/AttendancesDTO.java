package com.gestao_academica_backend.server.models.dto;

import java.sql.Date;
import java.util.Objects;

public class AttendancesDTO {
    private Long id;
    private String subjectEnumeration;
    private String sigla;
    private Date attendanceDate;
    private String attendanceStatus;


    public AttendancesDTO() {
    }

    public AttendancesDTO(Long id, String subjectEnumeration, String sigla, Date attendanceDate, String attendanceStatus) {
        this.id = id;
        this.subjectEnumeration = subjectEnumeration;
        this.sigla = sigla;
        this.attendanceDate = attendanceDate;
        this.attendanceStatus = attendanceStatus;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubjectEnumeration() {
        return this.subjectEnumeration;
    }

    public void setSubjectEnumeration(String subjectEnumeration) {
        this.subjectEnumeration = subjectEnumeration;
    }

    public String getSigla() {
        return this.sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public Date getAttendanceDate() {
        return this.attendanceDate;
    }

    public void setAttendanceDate(Date attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public String getAttendanceStatus() {
        return this.attendanceStatus;
    }

    public void setAttendanceStatus(String attendanceStatus) {
        this.attendanceStatus = attendanceStatus;
    }

    public AttendancesDTO id(Long id) {
        setId(id);
        return this;
    }

    public AttendancesDTO subjectEnumeration(String subjectEnumeration) {
        setSubjectEnumeration(subjectEnumeration);
        return this;
    }

    public AttendancesDTO sigla(String sigla) {
        setSigla(sigla);
        return this;
    }

    public AttendancesDTO attendanceDate(Date attendanceDate) {
        setAttendanceDate(attendanceDate);
        return this;
    }

    public AttendancesDTO attendanceStatus(String attendanceStatus) {
        setAttendanceStatus(attendanceStatus);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", subjectEnumeration='" + getSubjectEnumeration() + "'" +
            ", sigla='" + getSigla() + "'" +
            ", attendanceDate='" + getAttendanceDate() + "'" +
            ", attendanceStatus='" + getAttendanceStatus() + "'" +
            "}";
    }

    
}
