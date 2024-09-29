import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect( () =>{
        // console.log('user inside useToken', user);
        const email = user?.user?.email;
        const currentUser = {email: email};
        if(email){
            fetch(`https://toolstation-server-a12-ve89a8ziv-asif-mahmouds-projects.vercel.app/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                // console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;