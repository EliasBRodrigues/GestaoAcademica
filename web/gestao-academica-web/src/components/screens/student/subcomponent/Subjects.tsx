import React, { useState } from 'react'
import ButtonGeneral from '../../../tools/ButtonGeneral'
import Menu from '../../../tools/Menu'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';

interface City {
    name: string;
    code: string;
}

const Subjects = () => {
    const [selectedCity, setSelectedCity] = useState<City | null>(null);
    const cities: City[] = [
        { name: 'DSM 1', code: '1' },
        { name: 'DSM 2', code: '2' },
        { name: 'DSM 3', code: '3' },
        { name: 'DSM 4', code: '4' },
        { name: 'DSM 5', code: '5' },
        { name: 'DSM 6', code: '6' }
    ];
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-10 text-amber-50 text-4xl'>Matérias</h3>
            </div>
            <div>
                <div className="card flex justify-content-center mb-5 mt-5">
                    <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                        placeholder="Selecione um semestre" className="w-full md:w-14rem" />
                </div>


                <ButtonGeneral label='Matrícula' submit={undefined} click={undefined} styles={{ 'backgroundColor': '#709BEF' }} />
            </div>
        </div>
    )
}

export default Subjects
