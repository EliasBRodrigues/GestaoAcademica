package com.gestao_academica_backend.server.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.gestao_academica_backend.server.models.Attendances;
import com.gestao_academica_backend.server.models.Students;
import com.gestao_academica_backend.server.models.dto.AttendancesDTO;
import com.gestao_academica_backend.server.models.dto.StudentsDTO;

public interface AttendanceRepository extends JpaRepository<Attendances,Long> {
    @Query("SELECT s FROM Students s JOIN FETCH s.attendanceList a WHERE s.id = :id")
    //@Query("SELECT new com.gestao_academica_backend.server.models.dto.StudentsDTO(s.id, s.name, s.email, s.ra, s.academicYear) " +
    //"FROM Students s WHERE s.id = :id")
    Optional<Students> findByIdWithAttendances(@Param("id") Long id);

    // @Query("SELECT new com.gestao_academica_backend.server.models.dto.AttendancesDTO(a.id, a.subjectEnumeration, a.sigla, a.attendanceDate, a.attendanceStatus) " +
    // "FROM Attendances a WHERE a.student.id = :studentId")
    // List<AttendancesDTO> findAttendancesByStudentId(@Param("studentId") Long studentId);
    @Query("SELECT a FROM Attendances a WHERE a.student.id = :id")
    List<Attendances> findAttendancesByStudentId(@Param("id") Long id);
}

