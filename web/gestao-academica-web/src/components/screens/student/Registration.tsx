import React from 'react'
import Menu from '../../tools/Menu'
import ButtonGeneral from '../../tools/ButtonGeneral'

const Registration = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-10 text-amber-50 text-4xl'>Matrícula</h3>
            </div>
            <div>
                <div className="w-full flex justify-between mb-2">
                    <p className="text-[#709BEF] text-2xl font-bold mb-2 mt-7">Fulano Ciclano</p>
                </div>
                <div className="w-full flex justify-between mb-2">
                    <p className="text-[#709BEF] text-xl font-bold mb-2">Turma: DSM2</p>
                </div>
                <div className="w-full border border-[#709BEF] rounded-lg mt-1 py-2 px-5">
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-[#709BEF] text-2xl font-bold">Rendimento no curso</p>
                    </div>
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-black text-lg w-3/4">PP</p>
                        <p className="text-black text-lg w-1/4 text-right">84,84%</p>
                    </div>
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-black text-lg w-3/4">PP(Intercâmbio)</p>
                        <p className="text-black text-lg w-1/4 text-right">67.34%</p>
                    </div>
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-black text-lg w-3/4">PR</p>
                        <p className="text-black text-lg w-1/4 text-right">8.34</p>
                    </div>
                </div>
                <div className="w-full border border-[#709BEF] rounded-lg mt-5 py-2 px-5">
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-[#709BEF] text-2xl font-bold">Prazo de Integralização</p>
                    </div>
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-black text-lg w-3/4">Cursado</p>
                        <p className="text-black text-lg w-1/4 text-right">4</p>
                    </div>
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-black text-lg w-3/4">Máximo</p>
                        <p className="text-black text-lg w-1/4 text-right">10</p>
                    </div>
                    <div className="w-full flex justify-between mb-1">
                        <p className="text-black text-lg w-3/4">Faltam</p>
                        <p className="text-black text-lg w-1/4 text-right">6</p>
                    </div>
                </div>
                <ButtonGeneral label='Matrícula' submit={undefined} click={undefined} styles={{'backgroundColor': 'red'}} />
            </div>
        </div>
    )
}

export default Registration
