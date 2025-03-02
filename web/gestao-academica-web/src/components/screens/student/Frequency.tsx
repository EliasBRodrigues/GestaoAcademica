import React from 'react'
import Menu from '../../tools/Menu'

const Frequency = () => {
    const getRandomInt = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      
      const subjects = ['IoT', 'PM', 'BD', 'AI', 'SE'];
      
      return (
        <div className='flex flex-col items-center justify-center'>
            <div className='bg-[#709BEF] w-full h-42 flex flex-col'>
                <Menu />
                <h3 className='text-center mt-10 text-amber-50 text-4xl'>Frequência</h3>
            </div>
          <div className="flex-shrink-0 bg-[#709BEF] h-10"></div>
          <div className="flex-grow bg-white rounded-t-[50px] pt-8 px-5 pb-4">
            <div className="w-full bg-white">
              <div className="w-full border-t-[2px] border-[#709BEF]">
                <div className="flex items-center border-b-[1px] border-[#709BEF] py-2 px-4">
                  <p className="flex-1 text-center font-semibold text-lg text-black">MATERIA</p>
                  <div className="w-[1px] h-full bg-[#709BEF]"></div>
                  <p className="flex-1 text-center font-semibold text-lg text-black">PRESENÇA</p>
                  <div className="w-[1px] h-full bg-[#709BEF]"></div>
                  <p className="flex-1 text-center font-semibold text-lg text-black">FALTAS</p>
                </div>
      
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center border-b-[1px] border-[#709BEF] py-2 px-4">
                    <p className="flex-1 text-center text-black">{subject}</p>
                    <div className="w-[1px] h-full bg-[#709BEF]"></div>
                    <p className="flex-1 text-center text-black">{getRandomInt(10, 20)}</p>
                    <div className="w-[1px] h-full bg-[#709BEF]"></div>
                    <p className="flex-1 text-center text-black">{getRandomInt(0, 5)}</p>
                  </div>
                ))}
              </div>
              <p className="text-black text-sm font-normal mt-4 px-4 text-center">
                Obs: Caso atinja um percentual acima de 25% na matéria será reprovado por falta na matéria.
              </p>
            </div>
          </div>
        </div>
      );
    }

export default Frequency
