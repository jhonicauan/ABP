import './input.css'

export default function Input({input_label, value, width, placeholder, onChange, id, dissable}) {
    return (
        <>
        <label className='input_box' style={{width: width + '%'}}>
        <h5>{input_label}</h5>
        <input disabled={dissable} type="text" id={id} placeholder={placeholder} value={value} onChange={onChange}/>
        </label>
        </>
    )
}