import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSignIn, Inverted, ...otherProps }) => (
    <button
      className={`${Inverted ? 'Inverted' : ''}
      ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );

    export default CustomButton;
