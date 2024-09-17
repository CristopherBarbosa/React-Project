import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Button, ContainerInputs, Form, Input, InputLabel, Title, TopBackground, Container } from './styles'
import UserImage from './assets/users.png'

function Home() {
 

  return (
    <>
      <Container>
        <TopBackground>
          <img src= {UserImage} alt="" />
        </TopBackground>


        <Form>
          <Title>Ok React</Title>

          <ContainerInputs>
            <div>
                <div>
                  <InputLabel>Nome<span>*</span></InputLabel>
                  <Input  type='text' placeholder='Nome do usuário'/>
                </div>
                <div>
                  <InputLabel>Idade<span>*</span></InputLabel>
                  <Input type='number' placeholder='Idade do usuário'/>
                </div>
            </div>
              <div>
                <InputLabel>E-mail<span>*</span></InputLabel>
                <Input type='email' placeholder='E-mail do usuário'/>
              </div>
          </ContainerInputs>

          <Button>Cadastrar Usuário</Button>
        </Form>
      </Container>

    </>
  )
}

export default Home
