import React, { useEffect, useState } from 'react'
import Menu from '../../tools/Menu';
import { useNavigate } from 'react-router-dom';
import ButtonInterface from '../../tools/ButtonInterface';
import { useAuth } from '../../auth/context/AuthContext';
import { Teachers } from '../../interface/Teachers';
import useTeacherData from '../../../hook/TeacherData';
import { getClassroomTeachers } from '../../service/Requests';
import Loader from '../../tools/Loader';
import style from '../../tools/style/input-button.module.css';
import Authenticate from '../../../hook/Authenticate';

const ClassroomTeacherNotes = () => {
    const nav = useNavigate();
    const { emailGeral } = Authenticate();
    const { teacher, loading } = useTeacherData(emailGeral);
    const [teachers, setTeachers] = useState<Teachers[]>([]);

    const fetchData = async () => {
        try {
            const response = await getClassroomTeachers(emailGeral);
            setTeachers(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [emailGeral]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader isLoading={loading} />
            </div>
        )
    }

    if (!teachers) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Erro ao carregar os dados do professor.</p>
                <p>Tente novamente mais tarde.</p>
            </div>
        );
    }

    const handleMateriaClick = (nameGrade: string, nameSection: string, sigla: string) => {
        nav(`/teacher/classroom/notes/note`, {
            state: { nameGrade, nameSection, sigla }
        });
    };

    return (
        <div className={style.fade_in}>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-orange-400 w-full h-42 flex flex-col mb-10'>
                    <Menu />
                    <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Selecione a turma</h3>
                    <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Boletim</h3>
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

export default ClassroomTeacherNotes
