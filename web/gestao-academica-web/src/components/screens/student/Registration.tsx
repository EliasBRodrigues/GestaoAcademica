import React, { useEffect, useState } from 'react'
import Menu from '../../tools/Menu'
import ButtonGeneral from '../../tools/ButtonGeneral'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/context/AuthContext'
import { Students } from '../../interface/Students'
import { getUserByEmail } from '../../service/Requests'
import Loader from '../../tools/Loader'
import style from '../../tools/style/input-button.module.css';
import Authenticate from '../../../hook/Authenticate'

const Registration = () => {
    const nav = useNavigate();
    const { emailGeral } = Authenticate();
    const [loading, setLoading] = useState<boolean>(true);
    const [students, setStudent] = useState<Students | null>(null);
    
    const fetchData = async () => {
        try {
            if (emailGeral) {
                const response = await getUserByEmail(emailGeral);
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
    }, [emailGeral]);

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
            <div className='flex flex-col items-center justify-center'>
                <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                    <Menu />
                    <h3 className='text-center mt-10 text-amber-50 text-4xl'>Matrícula</h3>
                </div>
                <div>
                    <div className="w-full flex justify-between mb-2">
                        <p className="text-[#709BEF] text-2xl font-bold mb-2 mt-7">{students.name}</p>
                    </div>
                    <div className="w-full flex justify-between mb-2">
                        <p className="text-[#709BEF] text-xl font-bold mb-2">Turma: {students.classroom.classrooms}</p>
                    </div>
                    <div className="w-full border border-[#709BEF] rounded-lg mt-1 py-2 px-5">
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-[#709BEF] text-2xl font-bold">Rendimento no curso</p>
                        </div>
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-black text-lg w-3/4">PP</p>
                            <p className="text-black text-lg w-1/4 text-right">84,84%</p>
                        </div>
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-black text-lg w-3/4">PP(Intercâmbio)</p>
                            <p className="text-black text-lg w-1/4 text-right">67.34%</p>
                        </div>
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-black text-lg w-3/4">PR</p>
                            <p className="text-black text-lg w-1/4 text-right">8.34</p>
                        </div>
                    </div>
                    <div className="w-full border border-[#709BEF] rounded-lg mt-5 py-2 px-5">
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-[#709BEF] text-2xl font-bold">Prazo de Integralização</p>
                        </div>
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-black text-lg w-3/4">Cursado</p>
                            <p className="text-black text-lg w-1/4 text-right">4</p>
                        </div>
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-black text-lg w-3/4">Máximo</p>
                            <p className="text-black text-lg w-1/4 text-right">10</p>
                        </div>
                        <div className="w-full flex justify-between mb-1">
                            <p className="text-black text-lg w-3/4">Faltam</p>
                            <p className="text-black text-lg w-1/4 text-right">6</p>
                        </div>
                    </div>
                    <ButtonGeneral label='Matrícula' submit={undefined} click={() => nav('/student/registration/subjects')} styles={{ 'backgroundColor': '#709BEF' }} />
                </div>
            </div>
        </div>

    )
}

export default Registration
