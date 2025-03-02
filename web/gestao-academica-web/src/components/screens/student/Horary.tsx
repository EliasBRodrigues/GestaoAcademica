import React from 'react'
import Menu from '../../tools/Menu'

const Horary = () => {
    const subjects = [
        { sigla: "IAL", disciplina: "Internet das Coisas" },
        { sigla: "IHC", disciplina: "Interação Humano Computador" },
        { sigla: "IHC", disciplina: "Interação Humano Computador" },
        { sigla: "IHC", disciplina: "Interação Humano Computador" },
        { sigla: "IHC", disciplina: "Interação Humano Computador" },
        { sigla: "IHC", disciplina: "Interação Humano Computador" },
    ];
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-10 text-amber-50 text-4xl'>Horários</h3>
            </div>
            <div>
                <div className="w-full border border-[#709BEF] rounded-lg mt-10">
                    <div className="flex items-center border-b border-[#709BEF] h-10">
                        <p className="flex-1 text-center font-bold text-black">SIGLA</p>
                        <div className="w-px h-full bg-[#709BEF]"></div>
                        <p className="flex-1 text-center font-bold text-black">DISCIPLINA</p>
                    </div>
                    {subjects.map((subject, index) => (
                        <div key={index} className="flex items-center border-b border-[#709BEF] h-10">
                            <p className="flex-1 text-center text-black text-xs">{subject.sigla}</p>
                            <div className="w-px h-full bg-[#709BEF]"></div>
                            <p className="flex-1 text-center text-black text-xs">{subject.disciplina}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-between w-full mt-4">
                    {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((dia, index) => (
                        <div key={index} className="border border-[#709BEF] bg-white w-[45%] p-4 mb-4 rounded-lg flex flex-col items-center justify-center">
                            <p className="font-semibold text-sm text-[#333] mb-2">{dia}</p>
                            <div className="w-full border border-[#709BEF] rounded-lg mt-2">
                                {[
                                    { sigla: "IAL", horario: "18:30-19:30" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center border-b border-[#709BEF] h-10">
                                        <p className="flex-1 text-center text-black text-xs">{item.sigla}</p>
                                        <div className="w-px h-full bg-[#709BEF]"></div>
                                        <p className="flex-1 text-center text-black text-xs">{item.horario}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Horary
