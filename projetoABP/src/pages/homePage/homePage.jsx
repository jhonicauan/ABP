import Mainheader from "../../components/main_header/main_header"

function Welcomeback(name){
    return(
        <div className="message_box">
            <h2>Welcome Back, ${name}</h2>
            
        </div>
    )
}

export default function Homepage() {
    return (
        <main>
            <Mainheader></Mainheader>
        </main>
    )
}