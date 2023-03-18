import React, { useState, useEffect } from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <div className="spinner">
      <div className="spinner1"></div>
      </div>  
      <p className="font-epilogue font-light text-[18px] text-white text-center"/>
    </div>
  )
}

export default Loader