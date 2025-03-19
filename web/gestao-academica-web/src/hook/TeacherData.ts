import { useState, useEffect } from 'react';
import { getClassroomTeachers } from '../components/service/Requests';
import { Teachers } from '../components/interface/Teachers';

const useTeacherData = (emailTeacher: string) => {
  const [teacher, setTeacher] = useState<Teachers[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      if (emailTeacher) {
        const response = await getClassroomTeachers(emailTeacher); 
        const teacherData = response.map((item: any) => ({
          email: item[0],
          name: item[1],
          nameSection: item[2],
          nameGrade: item[3],
          sigla: item[4]
        }));
        setTeacher(teacherData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  };

  useEffect(() => {
    fetchData();
  }, [emailTeacher]);

  return { teacher, loading };
};

export default useTeacherData;