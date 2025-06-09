import './button.css'

export default function Button({type = 'default' ,buttonText, style, onclick}) {
    return (
        <>
        {type == 'default' ? 
        <ButtonDefault buttonText={buttonText} style={style} onclick={onclick}></ButtonDefault> : 
        type == 'submit' ?
        <ButtonSubmit buttonText={buttonText} style={style}></ButtonSubmit> : null}
        </>
    )
}

const ButtonSubmit = ({buttonText, style}) => {
    return (
        <>
        <input type="submit" value={buttonText} className="button_submit" style={style}/>
        </>
    )
}

const ButtonDefault = ({buttonText, style, onclick}) => {
    return (
        <>
        <button className="button_default" style={style} onClick={onclick}>{buttonText}</button>
        </>
    )
}