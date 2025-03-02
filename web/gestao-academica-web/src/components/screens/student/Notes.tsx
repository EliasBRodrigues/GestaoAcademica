import React from 'react'
import Menu from '../../tools/Menu'

const Notes = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-10 text-amber-50 text-4xl'>Boletim</h3>
            </div>
          <div className="flex-grow bg-white rounded-t-[50px] pt-8 px-8">
              <div className="pt-8 pb-8 px-5">
                <div className="flex flex-col">
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-[#709BEF] text-2xl font-extrabold text-left w-full mb-1">Internet das coisas</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Atividade 1</p>
                    <p className="text-black text-lg text-right w-1/3">8.5</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Atividade 2</p>
                    <p className="text-black text-lg text-right w-1/3">9.0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Projeto Integrador</p>
                    <p className="text-black text-lg text-right w-1/3">7.5</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Avaliação Integradora</p>
                    <p className="text-black text-lg text-right w-1/3">8.0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Maratona de Programação</p>
                    <p className="text-black text-lg text-right w-1/3">10.0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="font-bold text-black text-lg text-left w-2/3">Média</p>
                    <p className="font-bold text-black text-lg text-right w-1/3">9</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-[#709BEF] text-2xl font-extrabold text-left w-full mb-1">Internet das coisas</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Atividade 1</p>
                    <p className="text-black text-lg text-right w-1/3">8.5</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Atividade 2</p>
                    <p className="text-black text-lg text-right w-1/3">9.0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Projeto Integrador</p>
                    <p className="text-black text-lg text-right w-1/3">7.5</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Avaliação Integradora</p>
                    <p className="text-black text-lg text-right w-1/3">8.0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="text-black text-lg text-left w-2/3">Maratona de Programação</p>
                    <p className="text-black text-lg text-right w-1/3">10.0</p>
                  </div>
                  <div className="flex justify-between w-full mb-2 px-5">
                    <p className="font-bold text-black text-lg text-left w-2/3">Média</p>
                    <p className="font-bold text-black text-lg text-right w-1/3">9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );      
}

export default Notes
