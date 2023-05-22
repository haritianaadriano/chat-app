import { Login } from "@/utils/types/types";
import axios from "axios";
import { useRouter } from "next/router";

export function sendLogin(data: Login, event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
  event.preventDefault();
    const router = useRouter();

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
            
            router.push("/landing");
          })
          .catch(error => {
            console.error(error)
          });
    }
