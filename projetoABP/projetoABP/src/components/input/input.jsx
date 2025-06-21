import './input.css'

export default function Input({input_label, value, width, placeholder, onChange, id}) {
    return (
        <>
        <label className='input_box' style={{width: width + '%'}}>
        <h5>{input_label}</h5>
        <input type="text" id={id} placeholder={placeholder} value={value} onChange={onChange}/>
        </label>
        </>
    )
}