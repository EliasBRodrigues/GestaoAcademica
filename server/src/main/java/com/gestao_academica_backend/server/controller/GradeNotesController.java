// package com.gestao_academica_backend.server.controller;

// import java.util.List;

// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;

// import com.gestao_academica_backend.server.models.Classroom;
// import com.gestao_academica_backend.server.models.Notes;
// import com.gestao_academica_backend.server.service.impl.GradeNotesServiceImpl;

// @Controller
// @CrossOrigin(origins = "http://localhost:8081/")
// public class GradeNotesController {
//     private GradeNotesServiceImpl gradeNotesServiceImpl;

//     public GradeNotesController(GradeNotesServiceImpl gradeNotesServiceImpl) {
//         this.gradeNotesServiceImpl = gradeNotesServiceImpl;
//     }

//     @GetMapping("/api/gradesNotes")
//     public ResponseEntity<List<Notes>> getAllGradesNotes() {
//         List<Notes> gradesNotes = gradeNotesServiceImpl.getAllGradeNotes();
//         return ResponseEntity.ok(gradesNotes);
//     }

//     @GetMapping("/api/gradesNotes/{id}")
//     public ResponseEntity<?> getClassroomById(@PathVariable String id) throws Exception {
//         return ResponseEntity.ok(gradeNotesServiceImpl.findByStudent(id));
//     }

//     @GetMapping("/api/grades/notes/{id}")
//     public ResponseEntity<?> getGradesNotesByStudentId(@PathVariable Long id) throws Exception{
//         return ResponseEntity.ok(gradeNotesServiceImpl.findGradeNotesByStudentId(id));
//     }

// }
