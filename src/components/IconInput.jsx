const IconInput = ({
  children,
  placeholder,
  type,
  onChange,
  register,
  name,
  error,
  ...rest
}) => {
  // check if register is a function
  const registerProps = typeof register === "function" ? register(name) : {};
  return (
    <div className="inputWrap">
      <div className="formWrap">
        <div className="iconWrap">{children}</div>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...registerProps}
          {...rest}
        />
      </div>
      {/* Display error message */}
      {error && <span className="errorText">{error.message}</span>}
    </div>
  );
};

export default IconInput;
