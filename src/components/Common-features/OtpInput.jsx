export default function OtpInput(props) {
  const {
    // Default size to 6 characters
    size = 6,
    // Default validation is digits
    validationPattern = /[0-9]{1}/,
    // Value[] to bind with inputs
    value,
    // Call callback with Value of OTP 
    onChange,
    // Class name for inputs
    className,
    ...restProps
  } = props;

  const handleInputChange = (inputEvent, index) => {
    const elem = inputEvent.target;
    const val = inputEvent.target.value;
    // check if the value is valid
    if (!validationPattern.test(val) && val !== "") return;

    // change the value of the upper state using onChange
    const valueArr = value.split("");
    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);
    onChange(newVal);

    //focus the next element if there's a value
    if (val) {
      const next = elem.nextElementSibling;
      next?.focus();
    }
  };

  const handleKeyUp = (e) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling;
      prev?.focus();
      return void prev?.setSelectionRange(0, 1);
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling;
      prev?.focus();
      return void prev?.setSelectionRange(0, 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };

  // Create an array based on the size.
  const arr = new Array(size).fill("-");
  return (
    <div className="d-flex gap-2">
      {/* Map through the array and render input components based on size */}
      {arr.map((_, index) => {
        return (
          <input
            key={index}
            {...restProps}
            className={className}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern={validationPattern.source}
            maxLength={6}
            value={value.at(index) ?? ""}
            onChange={(e) => {
              handleInputChange(e, index);
            }}
            onKeyUp={handleKeyUp}
            onPaste={handlePaste}
          />
        );
      })}
    </div>
  );
}
