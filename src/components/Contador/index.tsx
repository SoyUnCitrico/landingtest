// import './Timer.css';  
import React,{ useState, useEffect, useRef}from 'react';
import NumberTimer from './NumberTimer';
import { Box } from '@mui/material';
import { differenceInMilliseconds } from 'date-fns';


const Contador = () => {
  const dateNow = new Date();
  const dateFinal = new Date('12-31-2024');

  const getDuration = (milli: number) => {
    let seconds = Math.floor(milli / 1000) % 60;
    let minutes = Math.floor(milli / 60000) % 60
    let hours = Math.round(milli / 60000 / 60) % 24;
    let days = Math.round(Math.round(milli / 60000 / 60) / 24);
  
    return ({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    })
  };

  const timeInit = getDuration(differenceInMilliseconds(dateFinal, dateNow));
  const[ time, setTime ] = useState(timeInit);
  const myRef = useRef<any>(null); // comienza con curren = null
  // recibe una propiedad 'current' que contiene todos los datos del imput donde fue hecha la referencia
//console.log(myRef)
//const prueba = useRef(null)
  useEffect(() => {
    let intervalo: any = null;
    if (!!time) { // si activo =true y tipo = cuenta regresiva
      intervalo = setInterval(() => {
        setTime(getDuration(differenceInMilliseconds(dateFinal, new Date())));
      }, 1000);
    }

    return () => clearInterval(intervalo);
  }, [time]);

//   function agregaSegundos() {
//     // `current` apunta al elemento de entrada de texto montado
//     let ref = myRef.current.value //contiene el value del imput 
//     setSegundos(ref)
// }
//   function reset() {
//     setSegundos(60);// pisa el estado 'segundos' con cero
//     setActivo(false); // pisa el estado 'activo' con false
//     setActivo(true);
//     if(tipo === 'Cuenta Regresiva' && myRef.current) myRef.current.value = 0
//   }

  // function toggle() { // pisa el estado 'activo' con su opuesto  
  //   setActivo(!activo);
  // }

  return (<>
    <Box sx={{
      display: 'flex',
      // background: 'black'
    }}>
        <NumberTimer
          number={time.days.toString()}
          name={'Dias'}
        />
        <NumberTimer
          number={time.hours.toString()}
          name={'Hrs'}
        />
        <NumberTimer
          number={time.minutes.toString()}
          name={'Min'}
        />
        <NumberTimer
          number={time.seconds.toString()}
          name={'Seg'}
        />
    </Box>
    <div className="row">
      {/* <button  className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} onClick={toggle}> */}
        {/* {activo ? 'Pausa' : 'Inicio'} cambio el nombre del boton dependiendo el estado, si es true => pausa sino => inicio */}
      {/* </button> */}
    </div>    
    </>);
};

export default Contador;