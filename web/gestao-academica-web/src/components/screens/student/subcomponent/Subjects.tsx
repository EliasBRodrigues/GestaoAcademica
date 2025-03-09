import React, { useEffect, useRef, useState } from 'react'
import ButtonGeneral from '../../../tools/ButtonGeneral'
import Menu from '../../../tools/Menu'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Subject } from '../../../interface/Subject';
import { Semester } from '../../../interface/Semester';
import { getClassroomGradesByGradeId } from '../../../service/Requests';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';

const Subjects = () => {
    const nav = useNavigate();
    const toast = useRef<Toast>(null);
    const [selected, setSelected] = useState<Semester | null>();
    const [subject, setSubject] = useState<string | Subject[] | null>([]);

    const fetchData = async (semester: string) => {
        try {
            const response = await getClassroomGradesByGradeId(semester);
            setSubject(response);
        } catch (error) {
            console.error(error);
        }
    }

    const handlePickerChange = (item: Semester) => {
        setSelected(item);
        fetchData(item.id);
    };

    const showSuccess = () => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail: 'Carregando', life: 3000 });
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Novas matérias e um novo semestre!', life: 5000 });
        setTimeout(() => {
            nav('/student');
        }, 5000)
    }

    const semesters: Semester[] = [
        { id: 'DSM_1', classrooms: '1º Semestre' },
        { id: 'DSM_2', classrooms: '2º Semestre' },
        { id: 'DSM_3', classrooms: '3º Semestre' },
        { id: 'DSM_4', classrooms: '4º Semestre' },
        { id: 'DSM_5', classrooms: '5º Semestre' },
        { id: 'DSM_6', classrooms: '6º Semestre' },
    ];

    useEffect(() => {
        if (selected) {
            fetchData(selected.id);
        }
    }, [selected]);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-10 text-amber-50 text-4xl'>Matérias</h3>
            </div>
            <div>
                <Toast ref={toast} />
                <div className="card flex justify-content-center mb-5 mt-5">
                    <Dropdown value={selected} onChange={(e: DropdownChangeEvent) => handlePickerChange(e.value)} options={semesters} optionLabel="classrooms"
                        placeholder="Selecione um semestre" className="w-full md:w-14rem" />
                </div>
                <div className="overflow-y-auto max-h-[300px]">
                    {subject && Array.isArray(subject) ? (
                        subject.map((item: any, index: number) => (
                            <div key={index}
                                className="bg-white p-4 mb-2 rounded-lg shadow-lg"
                            >
                                <h4 className="text-lg font-bold mb-2">{item.nameGrade}</h4>
                                <p>{`Quantidade de aulas: ${item.subjectHours}`}</p>
                                <p>{`Modelo: ${item.subjectFormatClass}`}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-base text-gray-800">{subject}</p>
                    )}
                </div>
                <ButtonGeneral label='Matrícula' submit={undefined} click={showSuccess} styles={{ 'backgroundColor': '#709BEF' }} />
            </div>
        </div>
    )
}

export default Subjects
