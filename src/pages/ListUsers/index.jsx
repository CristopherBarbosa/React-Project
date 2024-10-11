import { useEffect, useState } from "react"
import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import api from "../../services/api"




function ListUsers() {


    useEffect(() => {
        async function getUsers(){
            const usersFromApi = await api.get('/usuarios')
            console.log(usersFromApi)
        }
        getUsers()
    }, [])
    
    return (
        <div>
            
            <TopBackground />
            <h1>Listagem de Usuários</h1>

            <Button>Voltar</Button>


        </div>
    )

}

export default ListUsers