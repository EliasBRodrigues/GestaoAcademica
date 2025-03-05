import React, { useRef, useState } from "react";
import siga from "../../assets/siga.svg";
import Input from "../tools/Input";
import ButtonGeneral from "../tools/ButtonGeneral";
import style from "../tools/style/input-button.module.css"
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { Requests } from "../service/Requests";
import { parseJWT } from "../service/JWT";
import { useAuth } from "./context/AuthContext";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useRef(null);
  const Auth = useAuth();
  const nav = useNavigate();
  
  const showInfo = () => {
    toast.current.show({severity:'info', summary: 'Info', detail:'Carregando', life: 4000});
  }

  const load = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!(username && password)) {
      toast.current.show({severity:'error', summary: 'Error', detail:'Campos vazios', life: 3000});
      setUsername("");
      setPassword("");
      setLoading(false)
      return;
    }

    try {
      const response = await Requests.authenticate(username, password);
      const { accessToken } = response.data;
      const data = parseJWT(accessToken);
      const userAuthenticate = { data, accessToken };
      Auth.userLogin(userAuthenticate);
      setUsername('')
      setPassword('')
      // setSignin(true)
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          if (data.role == 'USER') {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Seja Bem Vindo(a), aluno(a))!', life: 2000 });
            setTimeout(() => {
              nav('/student');
            }, 3000)
          } else if (data.role == 'ADMIN') {
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Seja Bem Vindo(a), professor(a))!', life: 2000 });
            setTimeout(() => {
              nav('/teacher');
            }, 3000)
          } else {
            nav('/');
            toast.current.show({severity:'error', summary: 'Error', detail:'Não encontrado', life: 3000});
          }
        }, 900);
      }, 4000);
    } catch (error) {
      console.error(error);
      toast.current.show({severity:'error', summary: 'Error', detail:'Não encontrado', life: 3000});
    }

    
  };
  
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div>
        <img src={siga} className="mx-auto h-60 w-auto" alt="siga" />
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" onSubmit={load} method="POST">
          <div>
            <div class="mt-2">
              <IconField iconPosition="left">
                <InputIcon className="pi pi-user"  style={{ marginLeft: '10px', color: '#709BEF' }}/>
                <Input placeholder="Username" type="text" name="username" {...username} onChange={(e) => { setUsername(e.target.value)}}/>
              </IconField>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between"></div>
            <div class="mt-2">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-lock"  style={{ marginLeft: '10px', color: '#709BEF' }}/>
                <Input placeholder="Password" type="password" name="password" {...password} onChange={(e) => { setPassword(e.target.value)}}/>
              </IconField>
            </div>
          </div>
          <Toast ref={toast} style={style.toast}/>
          <div>
            <ButtonGeneral styles={{'backgroundColor': '#709BEF'}} label="Login" loading={loading} onSubmit={load} click={showInfo}/>
          </div>
        </form>
      </div>
    </div>
  );
};
