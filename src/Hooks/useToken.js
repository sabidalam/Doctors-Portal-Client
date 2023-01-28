import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState();
    useEffect(() => {
        fetch(`https://doctors-portal-server-zeta-ten.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    setToken(data.accessToken)
                }
            })
    }, [email]);
    return [token];

}

export default useToken;