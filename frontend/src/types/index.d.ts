type FormType = // where radio dey?

        | "text"
        | "tel"
        | "email"
        | "password"
        | "textarea"
        | "select"
        | "range"
        | "file"
        | "search"
        | "time"
        | "date"
        | "number"
        | "checkbox"
        | "radio";

type Svg = {
    className: string;
    onClick?: () => void;
    stroke?: string;
    fill?: string;
};

type ButtonType = "button" | "submit" | "link" | "anchor";

type CustomError = {
    status: number;
    statusText: string;
    message?: string;
};

type SurveyList = {
    id: number;
    name: string;
    question: string;
    response: string;
    created: string;
    updated: string;
};

interface ISelectButton {
    /** Dropdown ID */
    id: number;

    name: string;

    /** Dropdown placeholder */
    placeholder?: string;

    /** Dropdown Background color */
    backgroundColor: string;

    /** Dropdown Text color */
    color: string;

    /** Dropdown border radius */
    borderRadius: string;

    borderColor: string;

    /** Dropdown height */
    height: string;

    /** Select options for the dropdown */
    options: SelectOption[];
}

type SelectOption = {
    /** The value of the option - What will be passed as the data */
    value: string;

    /** The label of the option - What will be displayed */
    label: string;

    /**
     * Dynamic background color for selected option change
     * If you want the background color of the select button to change when you select a new option, pass this.
     */
    background?: string;

    /**
     * Dynamic Text color for selected option change
     * If you want the text color of the select button to change when you select a new option, pass this.
     */
    color?: string; // selected button color

    /**
     * Icon to be rendered with the option
     */
    icon?: React.ReactElement;
};
