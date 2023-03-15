import '../../assets/css/global.css'
import logo from '../../assets/vetor.jpg'
import { useEffect, useState } from 'react'
const Login = () =>{

    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
        console.log(nome)
    }, [nome, senha])

    return(
        <section class="vh-100 back">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-10 col-lg-6 col-xl-5">
                        <img src={logo} alt="Sample image" className='img'/>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
                        <form>
                            <div class="divider d-flex align-items-center my-4">
                                <h1 className='text-success'>Login</h1>
                            </div>

                            <div class="form-outline mb-1">
                                <input type="email" 
                                id="form3Example3" 
                                class="form-control form-control-lg"
                                placeholder="Enter a valid email address" 
                                onKeyUp={(event) => {
                                    setNome(event.target.value)
                                }}
                                />
                                <label class="form-label" for="form3Example3">Email address</label>
                            </div>

                            <div class="form-outline mb-1">
                                <input type="password" 
                                id="form3Example4" 
                                class="form-control form-control-lg"
                                placeholder="Enter password"
                                onKeyUp={(event) => {
                                    setSenha(event.target.value)
                                }} />
                                <label class="form-label" for="form3Example4">Password</label>
                            </div>

                            <div class="d-flex justify-content-between align-items-center">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Remember me
                                </label>
                                </div>
                            </div>
                            <div class="text-center text-lg-start mt-1 pt-2">
                                <button 
                                type="button" 
                                class="btn bg-success btn-lg text-white"
                                onClick={() => {

                                }}
                                >Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                    class="text-success">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
  
    </section>
    )
}
export default Login    