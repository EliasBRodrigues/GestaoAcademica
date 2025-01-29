export interface Classroom {
    id: number;
    nameClass: string;
    grade: {
        id: number;
        nameGrade: string;
        sigla: string;
        subjectHours: string;
        subjectFormatClass: string;
    }   
}