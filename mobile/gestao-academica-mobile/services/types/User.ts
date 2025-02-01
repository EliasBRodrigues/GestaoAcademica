export interface User {
    id: number;
    name: string;
    email: string;
    ra: string;
    academic_year: string;
    classroom: {
        id: number,
		classrooms: string,
    }
}