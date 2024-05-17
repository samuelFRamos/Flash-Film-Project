import React from "react";
import './style.css'
import { useForm } from "react-hook-form";




function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
        const onSubmit = (data) => {
          alert(data)
        };
      
        function enviarForm() {
          handleSubmit(onSubmit)()
        }
      
        
    return (
          <>
          
          <div className="app-container">
            <h2 className="login">Login</h2>
      
            <div className="form-group">
              <label>E-mail</label>
              <input
                className={errors?.email && "input-error"}
                type="email"
                placeholder="Digite um E-mail valido"
                {...register("email", { required: true, pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i })}
              />
              {
                errors?.email?.type === 'required' && 
                <p className="error-message">O E-mail é obrigatório</p>
              }
      
              {
                errors?.email?.type === 'pattern' && 
                <p className="error-message">Digite um email válido</p>
              }
            </div>
      
            <div className="form-group">
              <label>Senha</label>
              <input
                className={errors?.password && "input-error"}
                type="password"
                placeholder="Digite a sua senha"
                {...register("mensage", { required: true, minLength: 8 })}
              />
              {
                errors?.mensage?.type === 'required' && 
                <p className="error-message">A senha é obrigatório</p>
              }
      
              {
                errors?.mensage?.type === 'minLength' && 
                <p className="error-message">A senha deve ter no minimo 8 caracteres</p>
              }
              
            </div>
      
            
      
            <div className="form-group">
              <button onClick={() => enviarForm()}>Enviar</button>
            </div>
          </div>
          
          </>
    )
}

export default Login