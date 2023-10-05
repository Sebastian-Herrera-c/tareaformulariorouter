export const ListaNombres = ({ nombres }: { nombres: string[] }) => {
    return (
        <>

            <h3>Lista de Nombres</h3>
            <ul>
                {
                nombres.map((nombre,indice)=>(
                    <li key={indice}>{nombre}</li>))
                }
            </ul>

        </>
    )

}