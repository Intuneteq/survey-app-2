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
