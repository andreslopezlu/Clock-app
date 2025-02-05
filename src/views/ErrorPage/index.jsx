import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    console.log(error)

    return (
        <div className="error-container">
            <h3>Oops!</h3>
            <p>{error.statusText} {error.status}</p>
            <p>{error.data}</p>
        </div>
    )
}

export default ErrorPage