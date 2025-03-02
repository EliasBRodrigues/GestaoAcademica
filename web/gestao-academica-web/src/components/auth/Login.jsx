import React, { useRef, useState } from "react";
import siga from "../../assets/siga.svg";
import Input from "../tools/Input";
import ButtonGeneral from "../tools/ButtonGeneral";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useRef(null);
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

    setTimeout(() => {
      toast.current.show({ severity: 'success', summary: 'Success', detail: 'Seja Bem Vindo(a))!', life: 2000 });
      setLoading(false);
      setTimeout(() => {
        if (username == 'aluno' && password == 'aluno') {
          nav('/student');
        } else if (username == 'prof' && password == 'prof') {
          nav('/teacher');
        } else {
          nav('/');
          toast.current.show({severity:'error', summary: 'Error', detail:'Não encontrado', life: 3000});
        }
      }, 900);
    }, 4000);
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
          <Toast ref={toast}/>
          <div>
            <ButtonGeneral label="Login" loading={loading} onSubmit={load} click={showInfo}/>
          </div>
        </form>
      </div>
    </div>
  );
};
