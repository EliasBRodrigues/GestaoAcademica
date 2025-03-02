// package com.gestao_academica_backend.server.controller;

// import com.gestao_academica_backend.server.constants.ClassroomEnumeration;
// import com.gestao_academica_backend.server.models.Classroom;
// import com.gestao_academica_backend.server.service.ClassroomService;
// import com.gestao_academica_backend.server.service.impl.ClassroomServiceImp;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @CrossOrigin(origins = "http://localhost:8081/")
// public class ClassroomController {

//     private final ClassroomServiceImp classroomService;

//     @Autowired
//     public ClassroomController(ClassroomServiceImp classroomService) {
//         this.classroomService = classroomService;
//     }

//     @GetMapping("/api/classrooms")
//     public ResponseEntity<List<Classroom>> getAllClassrooms() {
//         List<Classroom> classrooms = classroomService.getAllClassrooms();
//         return ResponseEntity.ok(classrooms);
//     }

//     @GetMapping("/api/classrooms/{id}")
//     public ResponseEntity<?> getClassroomById(@PathVariable String id) throws Exception {
//         return ResponseEntity.ok(classroomService.findByClassroomGrade(id));
//     }

    

//     // @GetMapping("/api/classroom/{classrooms}")
//     // public List<Classroom> getClassroomsByName(@PathVariable("classrooms") String classrooms) {
//     //     ClassroomEnumeration classroom = ClassroomEnumeration.valueOf(classrooms);
//     //     return classroomService.findByNameClassrooms(classroom);
//     // }
// }