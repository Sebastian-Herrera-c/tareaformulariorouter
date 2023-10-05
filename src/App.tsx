import { Route, Routes } from "react-router-dom";
import {EjercicioUno} from '../src/ejercicio-1/EjercicioUno';
import EjercicioDos from './ejercicio-2/EjercicioDos';
import { EjercicioTres } from './ejercicio-3/EjercicioTres';
import { EjercicioCuatro } from './ejercicio-4/EjercicioCuatro';
import EjercicioCinco from './ejercicio-5/EjercicioCinco';
import EjercicioSeis from './ejercicio-6/EjercicioSeis';
import EjercicioSiete from './ejercicio-7/EjercicioSiete';
import Layout from "./Layout";
import { Grid } from "@mui/material";


function App() {

  return (

      <Grid style=  {{textAlign: 'center',
      marginTop:'40px',
      backgroundColor:'orange',
      color:'white',
      width:'1450px',
      height:'1200px',
      marginBottom:'70px'}}>
          <h1>Menu</h1>
          <Routes>
             <Route path="/" element={<Layout/>} >

                  <Route path="/ejercicio-1" element={<EjercicioUno/>}/>
                  <Route path="/ejercicio-2" element={<EjercicioDos />}/>
                  <Route path="/ejercicio-3" element={<EjercicioTres />} />
                  <Route path="/ejercicio-4" element={<EjercicioCuatro />} />
                  <Route path="/ejercicio-5" element={<EjercicioCinco/>} />
                  <Route path="/ejercicio-6" element={<EjercicioSeis/>} />
                  <Route path="/ejercicio-7" element={<EjercicioSiete/>} />



             </Route>

          </Routes>

      </Grid>


  )



}

export default App;