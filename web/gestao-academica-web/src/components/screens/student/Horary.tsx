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
            <div className="flex-shrink-0 bg-[#709BEF] h-10"></div>
            <div className='mb-8'>
                <div className="w-full border border-[#709BEF] rounded-lg">
                    <div className="flex items-center border-b border-[#709BEF] h-12 sm:h-14">
                        <p className="flex-1 text-center font-bold text-black text-xs sm:text-base">SIGLA</p>
                        <div className="w-px h-full bg-[#709BEF]"></div>
                        <p className="flex-1 text-center font-bold text-black text-xs sm:text-base">DISCIPLINA</p>
                    </div>
                    {subjects.map((subject, index) => (
                        <div key={index} className="flex items-center border-b border-[#709BEF] h-12 sm:h-14">
                            <p className="flex-1 text-center text-black text-xs sm:text-sm">{subject.sigla}</p>
                            <div className="w-px h-full bg-[#709BEF]"></div>
                            <p className="flex-1 text-center text-black text-xs sm:text-sm">{subject.disciplina}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-between mt-4 sm:mt-8">
                    {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((dia, index) => (
                        <div
                            key={index}
                            className="border border-[#709BEF] bg-white w-full sm:w-[45%] p-4 mb-4 rounded-lg flex flex-col items-center justify-center"
                        >
                            <p className="font-semibold text-sm sm:text-base text-[#333] mb-2">{dia}</p>
                            <div className="w-full border border-[#709BEF] rounded-lg mt-2">
                                {[
                                    { sigla: "IAL", horario: "18:30-19:30" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                    { sigla: "IHC", horario: "14:00-15:00" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center border-b border-[#709BEF] h-12 sm:h-14">
                                        <p className="flex-1 text-center text-black text-xs sm:text-sm">{item.sigla}</p>
                                        <div className="w-px h-full bg-[#709BEF]"></div>
                                        <p className="flex-1 text-center text-black text-xs sm:text-sm">{item.horario}</p>
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
