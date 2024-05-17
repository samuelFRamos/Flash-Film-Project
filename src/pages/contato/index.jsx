import { useForm } from "react-hook-form";
import "./style.css"

const Contato = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  };

  function enviarForm() {
    handleSubmit(onSubmit)()
    
  }

  console.log({ errors })
  return (
    <>
    
    <div className="app-container">
      <h2 className="contateNos">Contate-nos</h2>
      <div className="form-group">
        <label>Nome</label>
        <input
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Digite seu nome"
          {...register("name", { required: true, minLength: 3 })}
          />
        {
          errors?.name?.type === 'required' && 
          <p className="error-message">O nome é obrigatório</p>
        }

        {
          errors?.name?.type === 'minLength' && 
          <p className="error-message">O nome deve ter no minimo 3 caracteres</p>
        }
      </div>

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
        <label>Mensagem</label>
        <input
          className={errors?.password && "input-error"}
          type=""
          placeholder="Seu Comentario"
          {...register("mensage", { required: true, minLength: 10 })}
        />
        {
          errors?.mensage?.type === 'required' && 
          <p className="error-message">A mensagem é obrigatório</p>
        }

        {
          errors?.mensage?.type === 'minLength' && 
          <p className="error-message">A mensagem deve ter no minimo 10 caracteres</p>
        }
        
      </div>

      

      <div className="form-group">
        <button onClick={() => enviarForm()}>Enviar</button>
      </div>
    </div>
    
    </>
  );
};

export default Contato;
// import React from "react";
// import './style.css'
// import Header from "../../components/header/header";
// import Footer from "../../components/footer";




// function Contato() {
//     return (
//         <>

      
//             <Header />
//             <form className="form" onSubmit={handleSubmit}>
//                 <h2>CONTATE-NOS</h2>
//                 <div className="formAria">
//                     <input id="textAria1" type="text" className="nome" placeholder="Digite seu nome" /> <br></br>
//                     <span className="span-required" ></span>
                    
//                     <input id="textAria2" type="email" className="email" placeholder="Digite um E-mail valido" /> <br></br>
//                     <span className="span-required" >Digite um email válido</span>
                    
//                     <input id="textAria3" type="text" className="menssagem" placeholder="Digite a Mensagem" /> <br></br>
//                     <span className="span-required" >Você deve escrever algo antes de Enviar</span>

//                     <input type="submit" id="button" />
//                     <p id="concluido"></p>
//                 </div>
//             </form>
//             <div className="obg">
//                 <h2>Obrigado!</h2>
//             </div>
//             <Footer />
//         </>
//     )
// }


// export default Contato