import { createContext } from "react";

const UserContext = createContext({
    user: {
        name:"Scooby Doe",
        email:"douchebag@gmail.com"
    }}
)
export default UserContext