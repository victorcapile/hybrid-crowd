import React, { useState, useEffect } from 'react';
import { loader } from '../assets';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center rounded bg-[#2c2f32]">Transação em processamento.<br /> Por favor aguarde...</p>
    </div>
  )
}

export default Loader