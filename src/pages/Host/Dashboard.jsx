import { Outlet } from "react-router-dom"

function DashBoard() {
    return(
        <>
        <h1>Host DashBoard here</h1>
        <Outlet />
        </>
    )
}

export default DashBoard