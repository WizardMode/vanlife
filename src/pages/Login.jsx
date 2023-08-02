import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: ""})
    const location = useLocation()
    // console.log(location)

    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e) {
        const {name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    /*
        If location.state.message exists,
        display it above the <h1>
    */

    return (
        <div className="login-container">
            {
                location.state?.message &&
                <h3 className="login-first">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email adress"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login