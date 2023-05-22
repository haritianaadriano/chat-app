export default function Profil({response}: any){
    return(
        <div className="container-prime">
          <div className="container-img">
            <img src="/images/avatar.jpg" alt="Avatar" />
            <p>" {response?.user.bio} "</p>
            <p>{`sign up on: ${response?.user.createdAt}`}</p>
            <p>{`update on: ${response?.user.updatedAt}`}</p>
          </div>
          <div className="child">
            <h3>{response?.user.name}</h3>
            <h3>Contact :</h3>
            <p>{response?.user.email}</p>
          </div>
        </div>
    )
}