import React, { useState } from 'react'

function DueBills() {

    const [bills, setBills] = useState(null)
  return (
    <div className="w-full h-screen p-5 bg-gray-100 mt-20">
      <div className="">
        <h1 className='text-5xl font-light text-gray-700 mb-4'>Panel de control</h1>
        <h5>
          <p className='font-bold text-gray-700 inline-block'> Cuenta 21908574 </p>
          <small>- PAUNERO WENCESLAO 2115 PB 1 - CORDOBA</small>
        </h5>
      </div>
      <hr  className='mt-4'/>
      <div className="grid grid-cols-3 grid-rows-3 gap-8 flex-wrap">
        <div className="row-span-2 h-full rounded-xl shadow-lg p-5  mt-3 bg-white" id="panelEstado">
        </div>
        <div className="row-span-2 h-full mt-3 rounded-xl shadow-lg p-5 bg-white" id='panel_statics'>

        </div>
        <div className="row-span-2 h-full mt-3 rounded-xl shadow-lg p-5 bg-white" id='panel_map'>

        </div>
        <div className='col-span-3 rounded-xl shadow-lg p-5  bg-white mt-5'>
            <h1 className='font-medium mb-5 font-sans'>Facturas adeudadas</h1>
            {bills ? 
            <div className=""> 

            </div> 
            : 
            <div className="w-7/8 flex items-center bg-green-200 p-5 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="wow bounceIn" data-wow-delay=".4s" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#007E33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <p>
                  <strong>Estás al día!</strong> No tienes deuda.
                </p>
            </div>
            }
            <a href="" className='flex justify-end mt-4'><p className='mb-3'>Ver facturas pagadas<span><i className="fa fa-chevron-right"></i></span></p></a>
        </div>
      </div>
    </div>
  )
}

export default DueBills