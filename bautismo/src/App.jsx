import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { GiClick } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { motion } from "framer-motion"
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <motion.div initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        }
        className='flex justify-between'>
        <img src="/flor de la izquierda.png" className='w-1/4 md:w-1/12 md:h-1/6' alt="" />
        <img src="/flor__derechga.png" className='w-1/4 md:w-1/12 md:h-1/6' alt="" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        }
        className=''>
        <div className='flex flex-col gap-4 w-full items-center'>
          <img className='w-1/12 ' src="/cruz.png" alt="" />
          <p className='text-center md:text-xl' >MI BAUTIZO</p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        }
        className='mt-5 flex flex-col items-center justify-center gap-0'>
        <div className='flex'>

          <h5 className='mt-3 '>R</h5>
          <h5 className=''>oma</h5>
        </div>
        <img className='w-2/5 md:w-1/5' src="/flor__abajo.png" alt="" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        }
        className=' mt-6 w-full flex justify-center  items-center md:mt-4'>
        <h2 className='bordeado font-semibold text-center w-1/4 md:text-2xl'>DOMINGO</h2>
        <div className=' flex flex-col justify-center items-center  w-1/3'>
          <span className='font-semibold text-2xl md:text-2xl' >03</span>
          <span className='font-semibold text-xl md:text-2xl'>MARZO</span>
        </div>
        <h2 className='bordeado font-semibold border-gray-400 border-brown-500 text-center md:text-2xl  w-1/4'>12:30 HS</h2>

      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        }
      >
        <h3 className='text-sm mt-4 text-center'>La misa sera en Parroquia Espiritu Santo</h3>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        }
        className='flex justify-center items-center mt-6'>

        <img className='w-1/12 md:w-1/12' src="/paloma.png" alt="" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={
          {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }
        } className='mt-6  w-full flex justify-between items-end gap-2 md:flex md:justify-center md:items-center'>
        <div className='w-full flex justify-start flex-col items-start pl-1'>

          <div className='flex w-full flex-col justify-center  items-start md:w-1/2  md:items-center'>
            <a className='w-full font-semibold gap-1  flex justify-start items-center md:justify-center' target='_blank' href="https://wa.link/dfjyq9">
              <span className='text-start md:text-2xl'>Confirmar asistencia aqui</span>
              <GiClick className='text-2xl confirmacion md:text-2xl' />
            </a>
          </div>
          <div className=' flex flex-col mt-4 gap-4 md:w-1/2 md:justify-center md:items-center'>
            <a target='_blank' className='flex gap-1 justify-start items-center md:justify-center' href="https://maps.app.goo.gl/RQNUYiYpcWTWXXLw9">
              <span className='text-center font-semibold md:text-2xl'>Ubicacion aqui</span>
              <FaLocationDot className='text-xl  ubi md:text-2xl' />
            </a>
            <span className='text-xs w-full md:text-lgl md:text-center'>Av.Hipolito Yrigoyen(Salon de eventos kiara's)-Palpala</span>
          </div>
        </div>
        <div className='relative w-1/3 flex justify-end'>
          <img className='w-full absolute top-4 bottom-0 md:w-1/2' src="/flor__abajo__derecha.png" alt="" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default App
