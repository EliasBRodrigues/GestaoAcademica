import React, {  useEffect, useRef, useState } from 'react'
import Menu from '../../../tools/Menu'
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import ButtonGeneral from '../../../tools/ButtonGeneral';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

interface Student {
  id?: string;
  name?: string;
}

const NotesTeacher = () => {
  let emptyStudent: Student = {
    id: undefined,
    name: '',
  };

  const studentList = [
    {id: '0', name: 'elias'},
    {id: '1', name: 'elias'},
  ]

  const [students, setStudents] = useState<Student[]>([]);
  const [studentDialog, setStudentDialog] = useState<boolean>(false);
  const [student, setStudent] = useState<Student>(emptyStudent);
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<Student[]>>(null);

  useEffect(() => {
    setStudents(studentList);
  }, []);

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
        const index = findIndexById(student.id);

        _students[index] = _student;
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Student Updated', life: 3000 });
      } 

      setStudents(_students);
      setStudentDialog(false);
      setStudent(emptyStudent);
    }
  };

  const editStudent = (student: Student) => {
    setStudent({ ...student });
    setStudentDialog(true);
  };

  const findIndexById = (id: string) => {
    let index = -1;

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    const val = (e.target && e.target.value) || '';
    let _student = { ...student };

    // @ts-ignore
    _student[name] = val;

    setStudent(_student);
  };

  const actionBodyTemplate = (rowData: Student) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editStudent(rowData)} />
      </React.Fragment>
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h4 className="m-0">Elias</h4>
    </div>
  );

  const studentDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveStudent} />
    </React.Fragment>
  );


  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='bg-orange-400 w-full h-auto flex flex-col p-4'>
        <Menu />
        <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>DSM 1</h3>
        <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Sistemas Operacionais e Redes de Computadores</h3>
      </div>
      <div className="mb-8"></div>
      <Toast ref={toast} />
      <div className="card w-full overflow-x-auto px-4 sm:px-8 md:px-80">
        <div>
          <Toast ref={toast} />
          <div className="card">

            <DataTable ref={dt} value={students} selection={selectedStudents}
              
              dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} students" globalFilter={globalFilter} header="Notas Gerais"
              selectionMode="multiple"
            >
              <Column field="name" header="Name" sortable style={{ minWidth: '16rem' }}></Column>
              <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
          </div>

          <Dialog visible={studentDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={header} modal className="p-fluid" footer={studentDialogFooter} onHide={hideDialog}>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                Atividade 1
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                Atividade 2
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                Projeto Integrador
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                Avaliação Integradora
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                Maratona de Programação
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                QTE
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
            <div className="field mb-5">
              <label htmlFor="name" className="font-bold">
                Média
              </label>
              <InputText id="name" value={student.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !student.name })} />
              {submitted && !student.name && <small className="p-error">Name is required.</small>}
            </div>
          </Dialog>
        </div>
      </div>
      <ButtonGeneral styles={{ 'backgroundColor': 'orange' }} label='Matrícula' submit={undefined} click={undefined} />
      <div className='mb-20'></div>
    </div>

  )
}

export default NotesTeacher
