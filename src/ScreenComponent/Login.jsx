import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    let user = ""

    const Navigate = useNavigate()

    const submitHandler = (event) => {

        event.preventDefault()
        window.localStorage.setItem("user", user)
        Navigate("/report")
    }

    const changehandler = (event) => {
        user = event.target.value
    }

    return (
        <>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label className="form-label">username</label>
                                    <input onChange={changehandler} type="text" className="form-control" placeholder="username" />


                                    <button className="btn btn-dark">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}
