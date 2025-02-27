import React, { useState } from "react";
import siga from "../../assets/siga.svg";
import Input from "../tools/Input";
import ButtonLocal from "../tools/Button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useNavigation } from "react-router-dom";
export const Login = () => {
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div>
        <img src={siga} className="mx-auto h-60 w-auto" alt="siga" />
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <div class="mt-2">
              <IconField iconPosition="left">
                <InputIcon className="pi pi-user"  style={{ marginLeft: '10px', color: '#709BEF' }}/>
                <Input placeholder="Email" />
              </IconField>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between"></div>
            <div class="mt-2">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-lock"  style={{ marginLeft: '10px', color: '#709BEF' }}/>
                <Input placeholder="Password" />
              </IconField>
            </div>
          </div>
          <div>
            <ButtonLocal label="Login" loading={loading} onClick={load} />
          </div>
        </form>
      </div>
    </div>
  );
};
