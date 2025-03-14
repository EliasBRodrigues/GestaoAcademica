import React from 'react'
import Menu from '../tools/Menu';
import { useNavigate } from 'react-router-dom';
import ButtonInterface from '../tools/ButtonInterface';
import profile from '../../assets/profile.svg';

const Teacher = () => {
    const nav = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-orange-400 w-full h-85 flex flex-col'>
                <Menu />
                <img src={profile} className='block ml-auto mr-auto mb-5' />
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>professor</h3>
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>email</h3>
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>ra</h3>
            </div>
            <div className='pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-sm'>
                <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-book'} position={'top'} label='Boletim' props={() => nav('/teacher/classroom/notes')} />
                <ButtonInterface style={{ 'backgroundColor': 'orange' }} size={'large'} icon={'pi pi-check'} position={'top'} label='Frequência' props={() => nav('/teacher/classroom/frequency')} />
            </div>
        </div>
    )
}

export default Teacher
