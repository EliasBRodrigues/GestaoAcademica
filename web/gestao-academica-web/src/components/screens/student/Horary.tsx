import React, { useEffect, useState } from 'react'
import Menu from '../../tools/Menu'
import { Grades } from '../../interface/Grades';
import { getGradesByEmail } from '../../service/Requests';
import { useAuth } from '../../auth/context/AuthContext';
import Loader from '../../tools/Loader';
import style from '../../tools/style/input-button.module.css';

const Horary = () => {
    const Auth = useAuth();
    const user = Auth.getUser();
    const email = user.data.email;
    const [loading, setLoading] = useState<boolean>(true);

    const [schedules, setSchedules] = useState<string | Grades | null>(null);
    const fetchGradeHorary = async () => {
        try {
            if (!schedules) {
                const res = await getGradesByEmail(email);
                setSchedules(res);
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
        fetchGradeHorary();
    }, [email]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader isLoading={loading} />
            </div>
        );
    }

    if (!schedules) {
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
                    <h3 className='text-center mt-10 text-amber-50 text-4xl'>Horários</h3>
                </div>
                <div className="flex-shrink-0 bg-[#709BEF] h-10"></div>
                <div className='mb-8'>
                    <div className="w-full border border-[#709BEF] rounded-lg">
                        <div className="flex items-center border-b border-[#709BEF] h-12 sm:h-14">
                            <p className="flex-1 text-center font-bold text-black text-xs sm:text-base">SIGLA</p>
                            <div className="w-px h-full bg-[#709BEF]"></div>
                            <p className="flex-1 text-center font-bold text-black text-xs sm:text-base">DISCIPLINA</p>
                        </div>
                        {schedules && Array.isArray(schedules) && schedules.length > 0 ? (
                            schedules.map((item) => (
                                <div key={item.id} className="flex items-center border-b border-[#709BEF] h-12 sm:h-14">
                                    <p className="flex-1 text-center text-black text-xs sm:text-sm">{item.sigla}</p>
                                    <div className="w-px h-full bg-[#709BEF]"></div>
                                    <p className="flex-1 text-center text-black text-xs sm:text-sm">{item.nameGrade}</p>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500">Nenhum horário disponível.</div>
                        )}
                    </div>
                    <div className="flex flex-wrap justify-between mt-4 sm:mt-8">
                        {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((dia) => (
                            <div
                                key={dia}
                                className="border border-[#709BEF] bg-white w-full sm:w-[45%] p-4 mb-4 rounded-lg flex flex-col items-center justify-center"
                            >
                                <p className="font-semibold text-sm sm:text-base text-[#333] mb-2">{dia}</p>
                                <div className="w-full border border-[#709BEF] rounded-lg mt-2">
                                    {schedules && Array.isArray(schedules) && schedules.length > 0 ? (
                                        schedules.map((item) => (
                                            <div key={item.id} className="flex items-center border-b border-[#709BEF] h-12 sm:h-14">
                                                <p className="flex-1 text-center text-black text-xs sm:text-sm">{item.sigla}</p>
                                                <div className="w-px h-full bg-[#709BEF]"></div>
                                                <p className="flex-1 text-center text-black text-xs sm:text-sm">{item.horary}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-500">Nenhum horário disponível.</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Horary
