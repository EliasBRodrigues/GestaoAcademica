package com.gestao_academica_backend.server.models.dto;

import java.util.List;
import java.util.Objects;

public class StudentsDTO {
    private Long id;
    private String name;
    private String email;
    private String ra;
    private String academicYear;
    //private List<AttendancesDTO> attendanceList;


    public StudentsDTO() {
    }

    public StudentsDTO(Long id, String name, String email, String ra, String academicYear) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.ra = ra;
        this.academicYear = academicYear;
        //this.attendanceList = attendanceList; , List<AttendancesDTO> attendanceList
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRa() {
        return this.ra;
    }

    public void setRa(String ra) {
        this.ra = ra;
    }

    public String getAcademicYear() {
        return this.academicYear;
    }

    public void setAcademicYear(String academicYear) {
        this.academicYear = academicYear;
    }

    // public List<AttendancesDTO> getAttendanceList() {
    //     return this.attendanceList;
    // }

    // public void setAttendanceList(List<AttendancesDTO> attendanceList) {
    //     this.attendanceList = attendanceList;
    // }

    public StudentsDTO id(Long id) {
        setId(id);
        return this;
    }

    public StudentsDTO name(String name) {
        setName(name);
        return this;
    }

    public StudentsDTO email(String email) {
        setEmail(email);
        return this;
    }

    public StudentsDTO ra(String ra) {
        setRa(ra);
        return this;
    }

    public StudentsDTO academicYear(String academicYear) {
        setAcademicYear(academicYear);
        return this;
    }

    // public StudentsDTO attendanceList(List<AttendancesDTO> attendanceList) {
    //     setAttendanceList(attendanceList);
    //     return this;
    // }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", email='" + getEmail() + "'" +
            ", ra='" + getRa() + "'" +
            ", academicYear='" + getAcademicYear() + "'" +
            //", attendanceList='" + getAttendanceList() + "'" +
            "}";
    }
    

}
