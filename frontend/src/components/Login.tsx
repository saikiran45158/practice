import { useRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import authenticate from "../services/authService";
export default function Login() {
    const navigate: NavigateFunction = useNavigate()
    const user = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleSubmit = async (eve: { preventDefault: () => void; }) => {
        eve.preventDefault();
        if (!user.current?.value || !password.current?.value) {
            window.alert('enter all values')
            return;
        }
        const data = { user: user.current.value, password: password.current.value }
        const isLoggedIn: boolean = await authenticate(data)
        if (isLoggedIn)
            navigate('/menu/home')
    }
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '3%' }}>
            <form id='login-form' onSubmit={handleSubmit} style={{ width: 'auto', display: 'flex', flexDirection: 'column', alignItems: "center", gap: '10px' }}>
                <h2 style={{ display: 'inline', width: 'auto' }}>Login</h2>
                <input className="login-input" ref={user} type="text" placeholder="enter username"></input>
                <input className="login-input" ref={password} type="password" placeholder="enter password"></input>
                <button id="log-btn">login</button>
            </form>
        </div>
    )
}