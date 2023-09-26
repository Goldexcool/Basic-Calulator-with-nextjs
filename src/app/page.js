"use client"
import Image from 'next/image'
import bg from '../Images/markus-spiske-MgtHZ4zlC1U-unsplash.jpg'
import profile from '../Images/Untitled design (1).png'
import menu from '../Images/menu-regular-24.png'
import './page.css'
import { useState } from 'react'


export default function Home() {
  const [calc, setCalc] = useState("");
  const [results, setResult] =useState('')

  const ops = ["/", "*", "+", "-", ".", "%", "."]

  const updateCalc = value => {
    if(
      ops.includes(value) && calc === "" || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    Number(value)
    setCalc(calc+value)

    if(!ops.includes(value)) {
      setResult(eval(calc+value).toString())
    }
  }
  const calculate = () =>{
    setCalc(eval(calc).toString())
  }

  const delLast = () =>{
   if( calc === ''){
    return
   }
   
  const value = calc.slice(0, -1)

  setCalc(value)
  }

  const reset = () => {
    setCalc("0")
  }
  const invert = () =>{
    if( calc === ''){
     return
    }
    
   const value = calc * -1
 
   setCalc(value)
   }
  return (
    <main className='main'>
      <div className='wrapper'>
      <div className='img_profile'>
        <Image src={menu} alt='menu' width={20} height={20} className='menu'/>
        <Image src={profile} alt='profile' width={50} height={50} className='profile' />
      </div>
      <div className='input_display'>
        <input value={results ? calc: 0}/>
      </div>
      <div className='memory_funct'>
        <p>MC</p>
        <p>MR</p>
        <p>M+</p>
        <p>M-</p>
        <p>MS</p>
        <p>M</p>
      </div>
      <div className='operations'>
        <p onClick={() => updateCalc('%')}>%</p>
        <p onClick={reset}>CE</p>
        <p onClick={delLast}>AC</p>
        <p onClick={() => updateCalc('/')}>/</p>
      </div>
      <div className='numb1'>
        <p onClick={() => updateCalc('7')} >7</p>
        <p onClick={() => updateCalc('8')}>8</p>
        <p onClick={() => updateCalc('9')}>9</p>
        <p onClick={() => updateCalc('*')}>*</p>
      </div>
      <div className='numb2'>
        <p onClick={() => updateCalc('4')}>4</p>
        <p onClick={() => updateCalc('5')}>5</p>
        <p onClick={() => updateCalc('6')}>6</p>
        <p onClick={() => updateCalc('-')}>-</p>
      </div>
      <div className='numb3'>
        <p onClick={() => updateCalc('1')}>1</p>
        <p onClick={() => updateCalc('2')}>2</p>
        <p onClick={() => updateCalc('3')}>3</p>
        <p onClick={() => updateCalc('+')}>+</p>
      </div>
      <div className='lastoperation'>
        <p onClick={invert}>+/-</p>
        <p onClick={() => updateCalc('0')}>0</p>
        <p className='dot' onClick={() => updateCalc('.')}>.</p>
        <p onClick={calculate}>=</p>
      </div>
      </div>
    </main>
  )
}
