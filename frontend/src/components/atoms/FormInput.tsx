import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties, ReactNode, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type Props = {
  /** Form type */
  type: FormType;

  style?: CSSProperties; // Overide default classes

  name: string;

  label: string;

  placeholder?: string;

  readOnly?: boolean;

  hideLabel?: boolean; // Hide the label Element for the inputs

  children?: ReactNode;
};
export default function FormInput({
  style,
  type,
  name,
  placeholder,
  label,
  readOnly = false,
  hideLabel = false,
  children,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const defaultClasses: Array<string> = [
    "border",
    "border-[#675E5E]",
    "rounded-[0.5rem]",
    "bg-transparent",
    "p-2",
    "text-[#FFF]",
    "placeholder:text-white",
    "placeholder:capitalize",
    "outline-none",
    "focus:border-secondary",
    "w-full",
  ];

  const renderInput = () => {
    if (type === "password") {
      return (
        <div className="w-full">
          <input
            name={name}
            type={isVisible ? "text" : "password"}
            id={name}
            className={defaultClasses.join(" ")}
            aria-label={label}
            aria-describedby={`error-${name}`}
            aria-labelledby={`label-${name}`}
            aria-placeholder={placeholder}
            placeholder={isVisible ? placeholder : "**********"}
            style={style}
          />
          <button
            className="absolute right-0 p-[10px]"
            type="button"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? (
              <FontAwesomeIcon icon={faEye} className="h-5 w-5 text-white" />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="h-5 w-5 text-white"
              />
            )}
          </button>
        </div>
      );
    }

    if (type === "checkbox") {
      return (
        <div className="flex justify-between items-center gap-2">
          <input
            type="checkbox"
            name={name}
            id={name}
            
            aria-label={label}
            aria-describedby={`error-${name}`}
            aria-labelledby={`label-${name}`}
            className={defaultClasses.join(" ") +"cursor-pointer rounded"}
            style={style}
          />
          <label htmlFor={label}>{children}</label>
        </div>
      );
    }

    return (
      <input
        type={type}
        name={name}
        id={name}
        readOnly={readOnly}
        className={defaultClasses.join(" ")}
        aria-label={label}
        aria-describedby={`error-${name}`}
        aria-labelledby={`label-${name}`}
        aria-placeholder={placeholder}
        placeholder={placeholder}
        style={style}
      />
    );
  };

  return (
    <div className={`flex flex-col w-full`}>
      <label
        className={`text-base font-bold mb-2 ${hideLabel && "hidden"}`}
        htmlFor={name}
      >
        {label}
      </label>
      {renderInput()}
      {/* {errors ? <small className="text-red">{errors}</small> : null} */}
    </div>
  );
}
