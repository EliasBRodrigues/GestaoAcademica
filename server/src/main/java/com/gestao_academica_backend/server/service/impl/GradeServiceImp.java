// package com.gestao_academica_backend.server.service.impl;

// import com.gestao_academica_backend.server.dao.AbstractEntityDao;
// import com.gestao_academica_backend.server.models.Classroom;
// import com.gestao_academica_backend.server.models.Grade;
// import com.gestao_academica_backend.server.models.Students;
// import com.gestao_academica_backend.server.repository.GradeRepository;
// import com.gestao_academica_backend.server.service.GradeService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.util.List;
// import java.util.Optional;
// @Service
// public class GradeServiceImp extends AbstractEntityDao<Grade> {
//     private final GradeRepository gradeRepository;

//     @Autowired
//     public GradeServiceImp(GradeRepository gradeRepository) {
//         this.gradeRepository = gradeRepository;
//     }

//     //@Override
//     public List<Grade> getAllGrades() {
//         return gradeRepository.findAll();
//     }

//     //@Override
//     public Optional<Grade> getGradeById(Long id) {
//         return gradeRepository.findById(id);
//     }

//     public List<Grade> getGradeByClassroomId(Long id){
//         List<Grade> grades = gradeRepository.findGradesByClassroomId(id);
//         return grades;
//         //return grades.orElseThrow(() -> new RuntimeException("Grade not found"));
//     }

//     // public List<Grade> findByGradeStudenList(Long id) throws Exception{
//     //     PreparedStatement pstmt = getConnection().prepareStatement(" SELECT g.*, s.* FROM grade g JOIN students s ON g.id = s.id WHERE s.id = ? ");
//     //     pstmt.setLong(1, id);
//     //     return super.findByPreparedStatement(pstmt);
//     // }

//     @Override
//     protected Grade resultSetToObject(ResultSet rs) throws Exception {
//         Grade grade = new Grade();
//         grade.setId(rs.getLong("id"));
//         grade.setNameGrade(rs.getString("name_grade"));
//         grade.setSigla(rs.getString("sigla"));
//         grade.setSubjectHours(rs.getString("subject_hours"));
//         grade.setSubjectFormatClass(rs.getString("subject_format_class"));
//         grade.setHorary(rs.getString("horary"));
//         Students students = new Students();
//         students.setId(rs.getLong("id"));
//         // grade.setStudent(students);
//         return grade;
//     }
// }
