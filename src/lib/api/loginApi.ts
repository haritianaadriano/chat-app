import axios from "axios";

export function sendLogin(data: any){
        axios
          .post(`${process.env.BACKEND_BASE_URL}/users/login`, data, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              console.log(response);
              return response.data;
            } 
          })
          .then(data => {
            sessionStorage.setItem("token", data.user.token);
            sessionStorage.setItem("username", data.user.name);
            sessionStorage.setItem("id", data.user.id)
            console.log(data.user);
            
          })
          .catch(error => {
            console.error(error)
          });
    }
