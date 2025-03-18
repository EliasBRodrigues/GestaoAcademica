export function parseJWT(token){
    if (!token || token.split('.').length !== 3) {
        console.error('Token inválido ou malformado');
        return null;
    }

    try {
        const base64URL = token.split('.')[1];
        const base64 = base64URL.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    } catch (error) {
        console.error('Erro ao decodificar o JWT', error);
        return null;
    }
}

export const handleLogError = (error) => {
    if(error.response){
        console.log(error.response.data)
    } else if (error.request){
        console.log(error.request)
    } else {
        console.log(error.message)
    }
}