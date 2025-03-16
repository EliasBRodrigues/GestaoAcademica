import React, { useEffect, useRef, useState } from 'react'
import Menu from '../../../tools/Menu'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { StudentGrade } from '../../../interface/StudentGrade';
import { useLocation } from 'react-router-dom';
import useTeacherData from '../../../../hook/TeacherData';
import { useAuth } from '../../../auth/context/AuthContext';
import { getNotesByStudent } from '../../../service/Requests';
import Loader from '../../../tools/Loader';
import style from '../../../tools/style/input-button.module.css'

const NotesTeacher = () => {
  const { state } = useLocation();
  const { sigla, nameGrade } = state || {};

  const Auth = useAuth();
  const user = Auth.getUser();
  const { teacher, loading } = useTeacherData(user.data.email);

  let emptyStudent = {
    id: '',
    name: '',
    atividade_um: '',
    atividade_dois: '',
    projeto_integrador: '',
    avaliacao_integradora: '',
    maratona_programacao: '',
    qte: '',
    media: '',
  };

  const [students, setStudents] = useState<StudentGrade[]>([]);
  const [studentDialog, setStudentDialog] = useState(false);
  const [student, setStudent] = useState(emptyStudent);
  const [submitted, setSubmitted] = useState(false);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (teacher && teacher.length > 0) {
      fetchData();
    }
  }, [teacher]);

  const fetchData = async () => {
    try {
      const response = await getNotesByStudent(sigla);
      const formattedResponse = response.map((([id, name, sigla, atividade_um, atividade_dois, projeto_integrador, avaliacao_integradora, media]) => ({
        id, name, sigla, atividade_um, atividade_dois, projeto_integrador, avaliacao_integradora, media
      })))
      setStudents(formattedResponse);
    } catch (error) {
      console.error(error);
    }
  }

  const hideDialog = () => {
    setSubmitted(false);
    setStudentDialog(false);
  };

  const saveStudent = () => {
    setSubmitted(true);
    if (student.name?.trim()) {
      let _students = [...students];
      let _student = { ...student };

      if (student.id) {
        const index = _students.findIndex(s => s.id === student.id);
        _students[index] = _student;
        toast.current?.show({ severity: 'success', summary: 'Sucesso', detail: 'Estudante atualizado', life: 3000 });
      }

      setStudents(_students);
      setStudentDialog(false);
      setStudent(emptyStudent);
    }
  };

  const editStudent = (student) => {
    setStudent({ ...student });
    setStudentDialog(true);
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editStudent(rowData)} />
      </React.Fragment>
    );
  };

  const studentDialogFooter = (
    <React.Fragment>
      <Button label="Cancelar" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Salvar" icon="pi pi-check" onClick={saveStudent} />
    </React.Fragment>
  );

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
          <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Notas Gerais</h3>
          <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>{nameGrade} - {sigla}</h3>
        </div>
        <div className="card w-full overflow-x-auto px-4 sm:px-8 md:px-80">
          <div>
            <Toast ref={toast} />
            <DataTable
              value={students}
              paginator rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} estudantes"
              header="Notas Gerais"
              selectionMode="single"
            >
              <Column field="name" header="Nome" sortable style={{ minWidth: '16rem' }} />
              <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }} />
            </DataTable>
          </div>

          <Dialog visible={studentDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Editar Notas" modal className="p-fluid" footer={studentDialogFooter} onHide={hideDialog}>
            <div className="field mb-5">
              <label htmlFor="atividade_um" className="font-bold">{student.name}</label>
            </div>
            <div className="field mb-5">
              <label htmlFor="atividade_um" className="font-bold">Atividade 1</label>
              <InputText id="atividade_um" value={student.atividade_um} onChange={(e) => setStudent({ ...student, atividade_um: e.target.value })} />
            </div>
            <div className="field mb-5">
              <label htmlFor="atividade_dois" className="font-bold">Atividade 2</label>
              <InputText id="atividade_dois" value={student.atividade_dois} onChange={(e) => setStudent({ ...student, atividade_dois: e.target.value })} />
            </div>
            <div className="field mb-5">
              <label htmlFor="projeto_integrador" className="font-bold">Projeto Integrador</label>
              <InputText id="projeto_integrador" value={student.projeto_integrador} onChange={(e) => setStudent({ ...student, projeto_integrador: e.target.value })} />
            </div>
            <div className="field mb-5">
              <label htmlFor="avaliacao_integradora" className="font-bold">Avaliação Integradora</label>
              <InputText id="avaliacao_integradora" value={student.avaliacao_integradora} onChange={(e) => setStudent({ ...student, avaliacao_integradora: e.target.value })} />
            </div>
            <div className="field mb-5">
              <label htmlFor="maratona_programacao" className="font-bold">Maratona de Programação</label>
              <InputText id="maratona_programacao" value='0' />
            </div>
            <div className="field mb-5">
              <label htmlFor="qte" className="font-bold">QTE</label>
              <InputText id="qte" value='0' />
            </div>
            <div className="field mb-5">
              <label htmlFor="media" className="font-bold">Média</label>
              <InputText id="media" value={student.media} onChange={(e) => setStudent({ ...student, media: e.target.value })} />
            </div>
          </Dialog>
        </div>
      </div>
    </div>

  );
};

export default NotesTeacher
