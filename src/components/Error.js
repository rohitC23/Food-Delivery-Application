import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  return(
    <div>
      <h1>Oops!!! Something went wrong</h1>
      <h3>Error: {err.status} {err.statusText}</h3>
    </div>    
  )
}

export default Error;