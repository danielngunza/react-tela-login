import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault(); 

        console.log( username, password)

        console.log("Envio")

        alert('Enviando dados'+ username +'-' + password)
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Faça seu login</h1>
                <div className='input'>
                    <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className='icon'/>
                    </div>
                <div className='input'>
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} required/><FaLock className='icon' />
                    </div>

                    <div className="forget">
                        <label >
                            <input type="checkbox" />
                            Guardar Acesso
                           
                        </label>
                             <a href="#">Esqueceu a senha?</a>
                    </div>

                    <div>
                        <button>Entrar</button>
                    </div>

                    <div className="signup">
                        <p>Não tem uma conta? <a href="#">Criar conta</a></p>
                    </div>
            </form>
        </div>
    )
}

export default Login