import React, { useEffect, useRef, useState } from 'react'
import Menu from '../../../tools/Menu'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ButtonGeneral from '../../../tools/ButtonGeneral';
import { Toast } from 'primereact/toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { StudentGrade } from '../../../interface/StudentGrade';
import useTeacherData from '../../../../hook/TeacherData';
import { useAuth } from '../../../auth/context/AuthContext';
import { getSubjectsByStudent } from '../../../service/Requests';
import style from '../../../tools/style/input-button.module.css'
import Loader from '../../../tools/Loader';

const FrequencyTeacher = () => {
  const nav = useNavigate();
  const { state } = useLocation();
  const { sigla, nameGrade } = state || {};  
  const toast = useRef<Toast>(null);

  const Auth = useAuth();
  const user = Auth.getUser();
  const { teacher, loading } = useTeacherData(user.data.email);

  const [student, setstudent] = useState<StudentGrade[]>([]);
  const [selectedstudent, setSelectedstudent] = useState<StudentGrade[] | null>(null);
  const [rowClick, setRowClick] = useState<boolean>(true);

  useEffect(() => {
    if (teacher && teacher.length > 0) {
      fetchData();
    }
  }, [teacher]);

  const fetchData = async () => {
    try {
      const response = await getSubjectsByStudent(sigla);
      const formattedResponse = response.map(([id, name]) => ({
        id, 
        name,
      }));
      setstudent(formattedResponse);  
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  }

  const load = async () => {
    toast.current?.show({ severity: 'info', summary: 'Info', detail: 'Carregando', life: 4000 });

    setTimeout(() => {
      toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Lista de presença salva com sucesso!', life: 2000 });
      setTimeout(() => {
        nav('/teacher');
      }, 4000)
    }, 3000)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader isLoading={loading} />
      </div>
    )
  }

  return (
    <div className={style.fade_in}>
      <div className='flex flex-col items-center justify-center w-full'>
        <div className='bg-orange-400 w-full h-auto flex flex-col p-4'>
          <Menu />
          <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Frequência</h3>
          <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>{nameGrade}</h3>
        </div>
        <div className='pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-lg'>
          <h2 className='flex-1 text-center font-bold text-black text-xs sm:text-base mt-5'>Presenças</h2>
          <h2 className='flex-1 text-center font-bold text-black text-xs sm:text-base mt-5'>Data: 03/02/2025</h2>
        </div>
        <div className="mb-8"></div>
        <Toast ref={toast} />
        <div className="card w-full overflow-x-auto px-4 sm:px-8 md:px-80">
          <DataTable
            value={student}
            selectionMode={rowClick ? 'multiple' : 'checkbox'}
            selection={selectedstudent!}
            onSelectionChange={(e: any) => setSelectedstudent(e.value)}
            dataKey="id"
            tableStyle={{ minWidth: '25rem' }}
          >
            <Column field="name" header="Aluno"></Column>
            <Column selectionMode="multiple" headerStyle={{ width: '10rem' }} header="Selecionar todos os alunos"></Column>
          </DataTable>
        </div>
        <ButtonGeneral styles={{ 'backgroundColor': 'orange' }} label='Matrícula' submit={undefined} click={load} />
        <div className='mb-20'></div>
      </div>
    </div>

  )
}

export default FrequencyTeacher
