import { Grid } from "@mui/material";
import { Saludo } from "./Saludo"


export const EjercicioUno = () => {
    return (

        <>
            <h2>Ejercicio uno</h2>
            <Grid style={{backgroundColor:'red',textAlign: 'center',}}>
                <Saludo nombre="Juan" />
                <Saludo nombre="Pedro" />
                <Saludo nombre="Andrea" />
            </Grid>
        </>
    )
}
export default EjercicioUno;