import { CSSProperties, ReactNode, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

type Props = {
    /** Form type */
    type: FormType;

    style?: CSSProperties; // Overide default classes

    name: string;

    category?: string;

    label: string;

    placeholder?: string;

    readOnly?: boolean;

    hideLabel?: boolean; // Hide the label Element for the inputs

    children?: ReactNode;

    className?: string;
};
export default function FormInput({
    style,
    type,
    name,
    placeholder,
    category,
    label,
    readOnly = false,
    hideLabel = false,
    children,
    className,
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
        "focus:border-primary",
        "w-full",
        className ?? "",
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
                            <FontAwesomeIcon
                                icon={faEye}
                                className="h-5 w-5 text-white"
                            />
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
                <div className="flex justify-center items-center gap-2 w-full">
                    <input
                        type="checkbox"
                        name={name}
                        id={name}
                        aria-label={label}
                        aria-describedby={`error-${name}`}
                        aria-labelledby={`label-${name}`}
                        className={defaultClasses.join(" ")}
                        style={style}
                    />
                    <label htmlFor={label}>{children}</label>
                </div>
            );
        }

        if (type === "radio") {
            return (
                <div
                    className="flex justify-start items-center pl-[8rem]"
                    style={style}
                >
                    <input
                        className="w-[1.5rem] h-[1.5rem]"
                        type={type}
                        name={category}
                    />
                    <label className="pl-5" htmlFor={label}>
                        {label}
                    </label>
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
