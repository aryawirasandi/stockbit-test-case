const Input = ({name, change, value, placeholder}) => {
    return (
        <input type="text" className="form-control" onChange={change} value={value} name={name} placeholder={placeholder}/>
    )
}

export default Input;