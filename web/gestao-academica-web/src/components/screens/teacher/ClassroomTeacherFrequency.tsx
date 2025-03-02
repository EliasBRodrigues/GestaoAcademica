import React from 'react'
import Menu from '../../tools/Menu';
import { useNavigate } from 'react-router-dom';
import ButtonInterface from '../../tools/ButtonInterface';

const ClassromTeacherFrequency = () => {
    const nav = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-orange-400 w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Selecione a turma</h3>
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>Frequência</h3>
            </div>
            <div className='pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-sm'>
                <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-users'} position={'top'} label='DSM 1' props={() => nav('/teacher/classroom/frequency/freq')} />
                <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-users'} position={'top'} label='DSM 2' props={() => nav('/teacher/classroom/frequency/freq')} />
            </div>
        </div>
    )
}

export default ClassromTeacherFrequency