
import './form-input.styles.scss'

const FormInput = ({handlechnage, label, ...otherprops}) => {
    return(
        <div className='group'>
            <input className='form-input' onChange={handlechnage}{...otherprops}/>
            {
                label?(<label className={`${otherprops.value.length ? 'shrink':''} form-input-label`}>{label}</label>):null
            }
        </div>
    )
}

export default FormInput;