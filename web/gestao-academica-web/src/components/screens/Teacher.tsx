import React, { useEffect, useState } from 'react'
import Menu from '../tools/Menu';
import { useNavigate } from 'react-router-dom';
import ButtonInterface from '../tools/ButtonInterface';
import profile from '../../assets/profile.svg';
import { useAuth } from '../auth/context/AuthContext';
import { Teachers } from '../interface/Teachers';
import { getTeacherByEmail } from '../service/Requests';
import Loader from '../tools/Loader';
import style from '../tools/style/input-button.module.css';
import Authenticate from '../../hook/Authenticate';

const Teacher = () => {
    const nav = useNavigate();
    const { emailGeral } = Authenticate();
    const [loading, setLoading] = useState<boolean>(true);
    const [teacher, setTeacher] = useState<Teachers | null>(null);

    const fetchData = async () => {
        try {
            if (emailGeral) {
                const response = await getTeacherByEmail(emailGeral);
                setTeacher(response);
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
    }, [emailGeral]);

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

    return (
        <div className={style.fade_in}>
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-orange-400 w-full h-85 flex flex-col'>
                    <Menu />
                    <img src={profile} className='block ml-auto mr-auto mb-5' />
                    <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>{teacher.email}</h3>
                    <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>{teacher.name}</h3>
                </div>
                <div className='pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-sm'>
                    <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-book'} position={'top'} label='Boletim' props={() => nav('/teacher/classroom/notes')} />
                    <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-check'} position={'top'} label='Frequência' props={() => nav('/teacher/classroom/frequency')} />
                </div>
            </div>
        </div>
    )
}

export default Teacher
