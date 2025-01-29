export interface User {
    id: number;
    name: string;
    email: string;
    ra: string;
    academic_year: string;
    attendance: {
        id: number;
        attendanceDate: Date;
        status: string;
    };
    academic_grade: number;
}