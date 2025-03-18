import React, { useEffect, useState } from 'react'
import Menu from '../../tools/Menu'
import { Attendance } from '../../interface/Attendance';
import { useAuth } from '../../auth/context/AuthContext';
import { getAttendancesByEmail } from '../../service/Requests';
import style from '../../tools/style/input-button.module.css';
import Loader from '../../tools/Loader';
import Authenticate from '../../../hook/Authenticate';

const Frequency = () => {
  const { emailGeral } = Authenticate();
  const [loading, setLoading] = useState<boolean>(true);
  const [attendances, setAttendances] = useState<string | Attendance | null>(null);
  
  const fetchData = async () => {
    try {
      if (emailGeral) {
        const response = getAttendancesByEmail(emailGeral);
        setAttendances(await response);
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

  if (!attendances) {
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
          <h3 className='text-center mt-10 text-amber-50 text-4xl'>Frequência</h3>
        </div>
        <div className="flex-shrink-0 bg-[#709BEF] h-10"></div>
        <div className="flex-grow bg-white rounded-t-[50px] pt-8 px-5 pb-4">
          <div className="w-full bg-white">
            <div className="w-full border-t-[2px] border-[#709BEF]">
              <div className="flex items-center border-b-[1px] border-[#709BEF] py-2 px-4">
                <p className="flex-1 text-center font-semibold text-lg text-black">MATERIA</p>
                <div className="w-[1px] h-full bg-[#709BEF]"></div>
                <p className="flex-1 text-center font-semibold text-lg text-black">PRESENÇA</p>
                <div className="w-[1px] h-full bg-[#709BEF]"></div>
                <p className="flex-1 text-center font-semibold text-lg text-black">FALTAS</p>
              </div>
              {attendances && Array.isArray(attendances) ? (
                attendances.map((item: Attendance, idx) => (
                  <div key={idx} className="flex items-center border-b-[1px] border-[#709BEF] py-2 px-4">
                    <p className="flex-1 text-center text-black">{item.sigla}</p>
                    <div className="w-[1px] h-full bg-[#709BEF]"></div>
                    <p className="flex-1 text-center text-black">{item.attendancePresent}</p>
                    <div className="w-[1px] h-full bg-[#709BEF]"></div>
                    <p className="flex-1 text-center text-black">{item.attendanceAbsent}</p>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">Nenhum horário disponível.</div>
              )}
            </div>
            <p className="text-black text-sm font-normal mt-4 px-4 text-center">
              Obs: Caso atinja um percentual acima de 25% na matéria será reprovado por falta na matéria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frequency
