INSERT INTO teachers (email, password, name, joining_data) VALUES ('professor1@school.com','prof123','Professor A','2018-03-15'),('professor2@school.com','prof456','Professor B','2019-08-20');
INSERT INTO grade (name_grade, sigla, subject_hours, subject_format_class, horary) VALUES('Modelagem de Banco de Dados', 'MBD', '80h', 'PRESENCIAL', '19:20h - 20:10h'),('Desenvolvimento Web', 'Web', '80h', 'PRESENCIAL', '18:30h - 19:20h'), ('Computacao em Nuvem', 'Nuvem', '80h', 'PRESENCIAL', '20:10h - 21:00h');
INSERT INTO classroom (classrooms, grade_id) VALUES('DSM_1', 1),('DSM_2', 2)
INSERT INTO students (name, email, ra, academic_year, classroom_id, grade_id) VALUES('Elias','elias@example.com','RA123467890','2024-2025',1,1),('Jane Smith','jane.smith@example.com','RA5678','2024-2025',2,1);
INSERT INTO notes (student_id,grade_id, subject,atividade_um,atividade_dois,projeto_integrador,avaliacao_integradora,media) VALUES (1,1,'Modelagem',7.5,8.0,9.0,8.5,9), (1,1,'Nuvem',7.5,8.0,9.0,8.5,9), (1,1,'Web',7.5,8.0,9.0,8.5,9), (2,2,'Web',8.0,7.5,9.0,9.5,8);
INSERT INTO user(id, email, password) VALUES (1, 'user@example.com', 'userPassword123'),(2, 'seconduser@user.com', '123456789');
INSERT INTO attendance (attendance_date,attendance_status,subject_enumeration,sigla,student_id) VALUES ('2024-10-28', 'PRESENT', 'Modelagem', 'MBD', 1),('2024-10-29', 'ABSENT', 'Modelagem', 'MBD', 2);
INSERT INTO roles (rolename, user) VALUES ('ADMIN', 1), ('USER', 2);
INSERT INTO sections (name_section, grade_id, status) VALUES (0, 1, 0);
INSERT INTO teacher_section (teacher_id, section_id) VALUES (1, 1);