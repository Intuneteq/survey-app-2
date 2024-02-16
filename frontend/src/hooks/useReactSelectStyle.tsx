import { StylesConfig } from "react-select";

type SelectDropDownStyle = {
    color: string;
    height: string;
    borderRadius: string;
    backgroundColor: string;
    borderColor: string;
    width?: string;
    menuPadding?: string;
};

/**
 * Custom material UI stylings are defined and retrieved using this hook
 */
const useReactSelectStyle = () => {
    const setSelectDropdownStyle = ({
        color,
        height,
        borderRadius,
        backgroundColor,
        borderColor,
        width,
        menuPadding,
    }: SelectDropDownStyle): StylesConfig<SelectOption> => {
        return {
            /** You can also pass in a 'state' argument to manage select state in each method. */
            control: (base, state) => ({
                ...base,
                height: height,
                width: width ?? "auto",
                borderRadius: borderRadius,

                backgroundColor: backgroundColor,

                /** Overwrittes the different states of border  */
                borderColor: borderColor,

                cursor: "pointer",

                outline: state.isFocused ? borderColor : "none",

                boxShadow: state.isFocused ? "none" : "none",

                "&:hover": {
                    // syyle hover state here
                },
            }),
            menu: (base) => ({
                ...base,
                marginTop: "0.1rem",
                color: "#000",
                width: "100%",
            }),

            menuList: (base) => ({
                ...base,
                // kill the white space on first and last option
                padding: menuPadding,
            }),
            input: (base) => ({
                ...base,
                color: "#000",
            }),
            placeholder: (base) => ({
                ...base,
                color: color,
                textTransform: "capitalize",
                fontSize: "0.875rem",
            }),
            singleValue: (base) => ({
                ...base,
                color: color,
                textTransform: "capitalize",
                fontSize: "0.875rem",
            }),
            dropdownIndicator: (base) => ({
                ...base,
                color: color,
            }),
            indicatorsContainer: (base) => ({
                ...base,
            }),
        };
    };

    return {
        setSelectDropdownStyle,
    };
};

export default useReactSelectStyle;
