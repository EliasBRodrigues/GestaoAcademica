import React, { useEffect, useState } from 'react'
import Menu from '../../tools/Menu';
import { useNavigate } from 'react-router-dom';
import ButtonInterface from '../../tools/ButtonInterface';
import style from '../../tools/style/input-button.module.css';
import Loader from '../../tools/Loader';
import { useAuth } from '../../auth/context/AuthContext';
import { Teachers } from '../../interface/Teachers';
import { getClassroomTeachers } from '../../service/Requests';

const ClassromTeacherFrequency = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    const Auth = useAuth();
    const user = Auth.getUser();
    const [teacher, setTeacher] = useState<Teachers[]>([]);
    const emailTeacher = user.data.email;

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
    }

    useEffect(() => {
        fetchData();
    }, [emailTeacher]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader isLoading={loading} />
            </div>
        )
    }

    if (!teacher) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Erro ao carregar os dados do professor.</p>
                <p>Tente novamente mais tarde.</p>
            </div>
        );
    }

    const handleMateriaClick = (nameGrade: string, nameSection: string, sigla: string) => {
        nav(`/teacher/classroom/frequency/freq`, {
            state: { nameGrade, nameSection, sigla }
        });
    };


    return (
        <div className={style.fade_in}>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-orange-400 w-full h-42 flex flex-col mb-10'>
                    <Menu />
                    <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Selecione a turma</h3>
                    <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Frequência</h3>
                </div>
                <div className='pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-sm'>
                    {teacher && Array.isArray(teacher) ? (
                        teacher.map((teacher, index) => (
                            <div key={index}>
                                <h3 className='border border-amber-600 bg-white w-full sm:w-[100%] p-2 mb-4 rounded-lg flex flex-col items-center justify-center'>{teacher.nameSection}</h3>
                                <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-users'} position={'top'} label={teacher.nameGrade} props={() => handleMateriaClick(teacher.nameGrade, teacher.nameSection, teacher.sigla)} />
                            </div>
                        ))
                    ) : (
                        <div>Não foi possível carregar as informações</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ClassromTeacherFrequency