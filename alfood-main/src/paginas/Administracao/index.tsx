import { useEffect, useState } from "react"
import IRestaurante from "../../interfaces/IRestaurante"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { IPaginacao } from "../../interfaces/IPaginacao"

export default function AdministracaoRestaurantes() {

    const [restaurantes, setRestaurants] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get<IRestaurante[]>("http://localhost:8000/api/v2/restaurantes/")
            .then(response => setRestaurants(response.data))
    }, [])
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map((item) => (
                        <TableRow key ={ item.id }>
                            <TableCell>
                                {item.nome}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}