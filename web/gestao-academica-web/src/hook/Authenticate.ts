import { useMemo } from "react";
import { useAuth } from "../components/auth/context/AuthContext"

const Authenticate = () => {
    const Auth = useAuth();
    const user = Auth.getUser();

    const emailGeral = useMemo(() => {
        return user?.data?.email || '';
    }, [user]);

    return { emailGeral };
};

export default Authenticate;