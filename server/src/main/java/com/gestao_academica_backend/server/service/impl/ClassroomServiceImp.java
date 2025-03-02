// package com.gestao_academica_backend.server.service.impl;


// import lombok.extern.slf4j.Slf4j;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.gestao_academica_backend.server.constants.AbbreviationEnumeration;
// import com.gestao_academica_backend.server.constants.ClassroomEnumeration;
// import com.gestao_academica_backend.server.constants.SubjectEnumeration;
// import com.gestao_academica_backend.server.constants.SubjectFormatClass;
// import com.gestao_academica_backend.server.constants.SubjectHoursEnumeration;
// import com.gestao_academica_backend.server.dao.AbstractEntityDao;
// import com.gestao_academica_backend.server.models.Classroom;
// import com.gestao_academica_backend.server.models.Grade;
// import com.gestao_academica_backend.server.repository.ClassroomRepository;
// import com.gestao_academica_backend.server.repository.GradeRepository;
// import com.gestao_academica_backend.server.service.ClassroomService;

// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.util.List;
// import java.util.Optional;

// @Service
// @Slf4j
// public class ClassroomServiceImp extends AbstractEntityDao<Classroom> {
//     private final ClassroomRepository classroomRepository;
//     private final GradeRepository gradeRepository;

//     @Autowired
//     public ClassroomServiceImp(ClassroomRepository classroomRepository,GradeRepository gradeRepository) {
//         this.classroomRepository = classroomRepository;
//         this.gradeRepository = gradeRepository;
//     }

//     public List<Classroom> getAllClassrooms() {
//         return classroomRepository.findAll();
//     }

//     public Optional<Classroom> getClassroomById(Long id) {
//         return classroomRepository.findById(id);
//     }

//     public List<Classroom> findByClassroomGrade(String id) throws Exception{
//         // PreparedStatement pstmt = getConnection().prepareStatement(" SELECT * FROM classroom, grade WHERE classrooms = ? ");
//         // pstmt.setString(1, id);
//         // return super.findByPreparedStatement(pstmt);
//     }
// }
