// Custom field for Multi Step form.

const Field = ({ label, error, children }) => {
  return (
    <div>
      <label htmlFor={label} className="fieldLabel">{label}</label>
      {children}
      {error && <span className="errorText">{error}</span>}
    </div>
  );
};

export default Field;
