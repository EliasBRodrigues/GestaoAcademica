import React, { useEffect, useRef, useState } from 'react'
import Menu from '../../../tools/Menu'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ButtonGeneral from '../../../tools/ButtonGeneral';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

interface Student {
  id?: string;
  name?: string;
}

const FrequencyTeacher = () => {
  const nav = useNavigate();
  const toast = useRef<Toast>(null);
  const [student, setstudent] = useState<Student[]>([]);
  const [selectedstudent, setSelectedstudent] = useState<Student[] | null>(null);
  const [rowClick, setRowClick] = useState<boolean>(true);

  const studentList = [
    { id: '0', name: 'Aluno 1' },
    { id: '1', name: 'Aluno 2' },
    { id: '2', name: 'Aluno 3' },
    { id: '3', name: 'Aluno 4' },
    { id: '4', name: 'Aluno 5' },
    { id: '4', name: 'Aluno 6' },
    { id: '4', name: 'Aluno 7' },
    { id: '4', name: 'Aluno 8' },
    { id: '4', name: 'Aluno 9' },
  ]

  const load = async () => {
    toast.current?.show({ severity: 'info', summary: 'Info', detail: 'Carregando', life: 4000 });

    setTimeout(() => {
      toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Lista de presença salva com sucesso!', life: 2000 });
      setTimeout(() => {
        nav('/teacher');
      }, 4000)
    }, 3000)
  }

  useEffect(() => {
    setstudent(studentList);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='bg-orange-400 w-full h-auto flex flex-col p-4'>
        <Menu />
        <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Selecione a turma</h3>
        <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Frequência</h3>
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
  )
}

export default FrequencyTeacher
