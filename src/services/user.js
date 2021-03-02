import axios from "axios"
import { goHome } from "../routing/Coordinator"

// export const login = (body, history, setRightButtonText) => {
//   axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login/`, body)
//   .then((response) => {
//     localStorage.setItem("token", response.data.token)
//     clear()
//     //Colocar para ir pro feed 
//     goHome(history) 
//   })
//   .catch((error) => {
//     console.log(error.response.data.message)
//     alert(error.response.data.message)
//   })
// }