import React, { useEffect, useState } from 'react'
import Menu from '../../tools/Menu'
import { useAuth } from '../../auth/context/AuthContext';
import { Note } from '../../interface/Notes';
import { getNotesByEmail } from '../../service/Requests';
import style from '../../tools/style/input-button.module.css';
import Loader from '../../tools/Loader';
import Authenticate from '../../../hook/Authenticate';

const Notes = () => {
  const { emailGeral } = Authenticate();
  const [loading, setLoading] = useState<boolean>(true);

  const [noteStudent, setNotesStudent] = useState<string | Note | null>(null);
  const fetchData = async () => {
    try {
      if (!noteStudent) {
        const response = getNotesByEmail(emailGeral);
        setNotesStudent(await response);
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

  if (!noteStudent) {
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
          <h3 className='text-center mt-10 text-amber-50 text-4xl'>Boletim</h3>
        </div>
        <div className="flex-grow bg-white rounded-t-[50px] pt-8 px-8">
          <div className="pt-8 pb-8 px-5">
            {noteStudent && Array.isArray(noteStudent) ? (
              noteStudent.map((item: Note, index) => (
                <div key={index} className="flex flex-col mb-5">
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-[#709BEF] text-2xl font-extrabold text-left w-full mb-1">{item.subject}</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Atividade 1</p>
                    <p className="text-black text-lg text-right w-1/3">{item.atividade_um}</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Atividade 2</p>
                    <p className="text-black text-lg text-right w-1/3">{item.atividade_dois}</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Projeto Integrador</p>
                    <p className="text-black text-lg text-right w-1/3">{item.projeto_integrador}</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Avaliação Integradora</p>
                    <p className="text-black text-lg text-right w-1/3">{item.avaliacao_integradora}</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Maratona de Programação</p>
                    <p className="text-black text-lg text-right w-1/3">0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="font-bold text-black text-lg text-left w-2/3">Média</p>
                    <p className="font-bold text-black text-lg text-right w-1/3">{item.media}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">Nenhum horário disponível.</div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Notes
