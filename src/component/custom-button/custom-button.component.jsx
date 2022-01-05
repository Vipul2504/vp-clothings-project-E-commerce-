import './custom-button.styles.scss'

const CustomButton = ({childern, ...otherprops}) => {
    return(
    <button className='custom-button' {...otherprops}>
        {childern}
    </button>
)
}

    export default CustomButton;
