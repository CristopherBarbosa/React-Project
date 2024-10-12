import { useEffect, useState } from "react"
import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import api from "../../services/api"
import { useNavigate } from 'react-router-dom'

import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser } from './style'

import Trash from '../../assets/trash.svg'

function ListUsers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])

    return (
        <Container>

            <TopBackground />

            <Title>Lista de Usuários</Title>

            <ContainerUsers>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button"  onClick={() => navigate('/')}>Voltar</Button>


        </Container>
    )

}

export default ListUsers