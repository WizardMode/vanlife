import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../api"

/* hook up our form so it (halfway) works.
 * 
 * 1. Pull in the `loginUser` function from the api.js file
 * 2. Call loginUser when the form is submitted and log the
 *    data that comes back. Use "b@b.com" as the username and
 *    "p123" as the password.
 * 
 *    NOTE: loginUser returns a promise, so you'll need
 *    a .then(data => {...}) to access the data, or use
 *    a separate aync function defined inside handleSubmit
 * 3. TBA
 */ 

/**
 * Code the sad path 🙁
 * 
 * 3. Add a `status` state and default it to "idle". When the 
 *    login form begins submitting, set it to "submitting". When
 *    it's done submitting and the data has come back, set it 
 *    to "idle" again
 * 4. Disable the button when the `status` state is "submitting"
 *    (this may require some Googling if you haven't done this
 *    before).
 * 5. Add an `error` state and default it to `null`. When the
 *    form is submitted, reset the errors to `null`. If there's
 *    an error from `loginUser` (add a .catch(err => {...}) in 
 *    the promise chain), set the error to the error that 
 *    comes back.
 * 6. Display the error.message below the `h1` if there's ever
 *    an error in state
 */

/*
 * read up on the useNavigate hook from the 
 * docs and implement it in the VanLife app. When the user
 * successfully logs in, they should be redirected to the 
 * /host route.
 * https://reactrouter.com/en/main/hooks/use-navigate
 */

function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location)

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                navigate("/host")
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
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
                location.state ?.message &&
                    <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {
                error ?.message &&
                    <h3 className="login-error">{error.message}</h3>
            }

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button
                    disabled={status === "submitting"}
                >
                    {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </form>
        </div>
    )
}

export default Login