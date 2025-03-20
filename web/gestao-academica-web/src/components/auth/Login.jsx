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
    if (!(username && password)) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Campos vazios', life: 3000 });
      setUsername("");
      setPassword("");
      setLoading(false);
      return;
    }
    toast.current.show({ severity: 'info', summary: 'Info', detail: 'Carregando', life: 9000 });
  };
  
  const load = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const response = await Requests.authenticate(username, password);
      const { accessToken } = response.data;
      const data = parseJWT(accessToken);
      const userAuthenticate = { data, accessToken };
      Auth.userLogin(userAuthenticate);
      setUsername('');
      setPassword('');
  
      const navigateToRolePage = () => {
        const roleMessages = {
          'USER': { message: 'Seja Bem Vindo(a), aluno(a)!', path: '/student' },
          'ADMIN': { message: 'Seja Bem Vindo(a), professor(a)!', path: '/teacher' },
        };
  
        const role = roleMessages[data.role];
        if (role) {
          toast.current.show({ severity: 'success', summary: 'Success', detail: role.message, life: 4000 });
          setTimeout(() => nav(role.path), 3000);
        } else {
          nav('/');
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Não encontrado', life: 3000 });
        }
      };
  
      setTimeout(() => {
        setLoading(false);
        navigateToRolePage();
      }, 1000);
  
    } catch (error) {
      console.error(error);
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Não foi possível carregar as informações!', life: 3000 });
      setLoading(false);
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
