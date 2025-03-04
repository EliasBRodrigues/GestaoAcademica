export interface Grades {
    id: number;
    nameGrade: string;
    sigla: string;
    subjectHours: string;
    subjectFormatClass: string;
    horary: string;
    classroom: {
        id: number,
		classrooms: string
    }
}