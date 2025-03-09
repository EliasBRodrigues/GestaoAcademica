import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/context/AuthContext';
import { Students } from '../interface/Students';
import { getUserByEmail } from '../service/Requests';
import ButtonInterface from '../tools/ButtonInterface'
import Menu from '../tools/Menu';
import Loader from '../tools/Loader';
import style from '../tools/style/input-button.module.css';
import profile from '../../assets/profile.svg';

const Student = () => {
    const nav = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);

    const Auth = useAuth();
    const user = Auth.getUser();
    const [students, setStudent] = useState<Students | null>(null);
    const emailStudent = user.data.email;

    const fetchData = async () => {
        try {
            if (emailStudent) {
                const response = await getUserByEmail(emailStudent);
                setStudent(response);
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
    }, [emailStudent]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader isLoading={loading} />
            </div>
        );
    }

    if (!students) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Erro ao carregar os dados do estudante.</p>
                <p>Tente novamente mais tarde.</p>
            </div>
        );
    }

    return (
        <div className={style.fade_in}>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[#709BEF] w-full h-85 flex flex-col">
                    <Menu />
                    <img src={profile} className="block ml-auto mr-auto mb-5" alt="Profile" />
                    <h3 className="text-center mt-0.5 text-amber-50 text-2xl">{students.name}</h3>
                    <h3 className="text-center mt-0.5 text-amber-50 text-2xl">{students.email}</h3>
                    <h3 className="text-center mt-0.5 text-amber-50 text-2xl">{students.ra}</h3>
                </div>
                <div className="pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-sm">
                    <ButtonInterface
                        style={{ backgroundColor: '#709BEF' }}
                        size="large"
                        icon="pi pi-id-card"
                        position="top"
                        label="Matrícula"
                        props={() => nav('/student/registration')}
                    />
                    <ButtonInterface
                        style={{ backgroundColor: '#709BEF' }}
                        size="large"
                        icon="pi pi-clock"
                        position="top"
                        label="Horários"
                        props={() => nav('/student/horary')}
                    />
                    <ButtonInterface
                        style={{ backgroundColor: '#709BEF' }}
                        size="large"
                        icon="pi pi-book"
                        position="top"
                        label="Boletim"
                        props={() => nav('/student/notes')}
                    />
                    <ButtonInterface
                        style={{ backgroundColor: '#709BEF' }}
                        size="large"
                        icon="pi pi-check"
                        position="top"
                        label="Frequência"
                        props={() => nav('/student/frequency')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Student
