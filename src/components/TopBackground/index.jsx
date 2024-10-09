import UserImage from '../../assets/users.png'
import { Background } from './style'


function TopBackground(){
    return(
        <div>
            <Background>
                <img src= {UserImage} alt="imagem-usuarios" />
            </Background>
        </div>
    )
}

export default TopBackground