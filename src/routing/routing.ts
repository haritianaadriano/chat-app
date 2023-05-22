import router from "next/router";

export const moveToSignUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    router.push("/sign-up");
}