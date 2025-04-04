import React, { useRef, useState } from 'react'
import { Toast } from 'primereact/toast';
import { Sidebar } from "primereact/sidebar";
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/context/AuthContext';
import menu from "../../assets/menu.svg";

const Menu = () => {
    const nav = useNavigate();
    const { userLogout } = useAuth();
    const [visible, setVisible] = useState(false);
    const toast = useRef<Toast>(null);
    
    const logout = () => {
        if(toast.current){
            toast.current?.show({ severity: 'info', summary: 'Loading...', detail: 'User Exit System' });
        }
        setTimeout(() => {
            userLogout();
            nav('/');
        }, 2000)
    }
    return (
        <div>
            <Toast ref={toast} position='top-center' />
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <Button onClick={logout}>Sair</Button>
            </Sidebar>
            <Button onClick={() => setVisible(true)}>
                <img src={menu} alt="siga" />
            </Button>
        </div>
    )
}

export default Menu
