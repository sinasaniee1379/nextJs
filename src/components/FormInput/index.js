const InputComponent = ({
  lable,
  formik,
  name,
  type,
  className,
  placeholder = "",
}) => {
  return (
    <div className={className}>
      <lable
        className="flex flex-row mb-2 text-sm text-gray-500"
        htmlFor={name}
      >
        {lable}
        {formik.touched[name] && formik.errors[name] ? (
          <div className="flex-1 ml-2 text-rose-500 text-left text-xs">
            {formik.errors[name]}
          </div>
        ) : null}
      </lable>
      <input
        dir="ltr"
        placeholder={placeholder}
        className="text-left border p-2 text-sm rounded border-gray-200 outline-none w-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
        type={type || "text"}
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
};

export default InputComponent;
