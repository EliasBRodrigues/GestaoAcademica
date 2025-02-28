import React from 'react'
import ButtonInterface from '../tools/ButtonInterface'
import profile from '../../assets/profile.svg';
import Navbar from '../tools/Navbar';

const Student = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-blue-300 w-full h-85 flex flex-col'>
                <Navbar />
                <img src={profile} className='block ml-auto mr-auto mb-5' />
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>aluno</h3>
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>email</h3>
                <h3 className='text-center mt-0.5 text-amber-50 text-2xl'>ra</h3>
            </div>
            <div className='pt-1 grid grid-cols-2 gap-7 justify-center w-full max-w-sm'>
                <ButtonInterface size={'large'} icon={'pi pi-id-card'} position={'top'} label='Matrícula'/>
                <ButtonInterface size={'large'} icon={'pi pi-clock'} position={'top'} label='Horários' />
                <ButtonInterface size={'large'} icon={'pi pi-book'} position={'top'} label='Boletim' />
                <ButtonInterface size={'large'} icon={'pi pi-check'} position={'top'} label='Frequência' />
            </div>
        </div>
    )
}

export default Student
