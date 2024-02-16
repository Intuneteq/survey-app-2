import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { isURL, toMail } from "../../lib/utilities";
import { CSSProperties, ReactNode } from "react";

type Props = {
    /** Type of HTML element - button element, anchor element or React Link */
    type: ButtonType;

    /** Button design type */
    scheme: "primary" | "secondary";

    /** Button width with unit e.g 8rem, 8px etc - If time permits, add regex validation */
    width?: string;

    /** Button Height width unit e.g 8rem, 8px etc - If time permits, add regex validation */
    height?: string;

    /** React child component */
    children: ReactNode;

    /** Disable button*/
    disabled?: boolean;

    /** Enable loading image on button
     * Typically, only type submit and button will load
     */
    isLoading?: boolean;

    /** Href property for Link and Anchor */
    href?: string;

    /** Click event for type 'button' */
    onClick?: () => void;

    className?: string;

    style?: CSSProperties; // overwrite default classes
};

export default function Button({
    type,
    scheme,
    width = "w-full",
    height = "h-3.75rem",
    disabled,
    children,
    onClick,
    className,
    href,
    isLoading,
    style,
}: Props) {
    let classes: Array<string> = [
        "transition",
        "transition-colors",
        "duration-700",
        "py-[0.375rem]",
        "px-5",
        "rounded-[0.625rem]",
        "flex",
        "items-center",
        "gap-2",
        "justify-center",
        "font-medium",
        "xl:text-base",
        "text-sm",
        className ?? "",
    ];

    if (width) {
        [...classes, width];
    }

    if (height) {
        [...classes, height];
    }

    if (scheme === "primary") {
        classes = [
            ...classes,
            "bg-tertiary",
            "text-white",
            "hover:bg-[#16683F]",
        ];

        if (disabled) {
            classes = [...classes, "bg-[#0B3822]"];
        }
    }

    if (scheme === "secondary") {
        classes = [
            ...classes,
            "bg-transparent",
            "border-2",
            "border-tertiary",
            "text-black",
            "hover:text-[#16683F]"
        ];

        if (disabled) {
            classes = [...classes, "bg-[#0B3822]", "text-[#1D2827]"];
        }
    }

    if (disabled) {
        classes = [...classes, "bg-[#D2D4DC]", "text-[#A19F9D]"];
    }

    if (type === "button") {
        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={classes.join(" ")}
                style={style}
            >
                {children}
            </button>
        );
    }

    if (type === "submit") {
        return (
            <button
                type={type}
                disabled={disabled}
                className={classes.join(" ")}
                style={style}
            >
                {isLoading ? (
                    <FontAwesomeIcon
                        className="h-5 w-5 text-white animate-spin"
                        icon={faSpinner}
                    />
                ) : (
                    children
                )}
            </button>
        );
    }

    if (type === "link") {
        if (!href)
            throw new Error("href prop must be passed into Link Element!");

        return (
            <Link style={style} className={classes.join(" ")} to={href}>
                {children}
            </Link>
        );
    }

    if (type === "anchor") {
        if (!href) throw new Error("href prop must be passed into anchor tag!");

        if (!isURL(href) && !toMail(href)) {
            throw new Error(
                "Href prop must be a valid URL (e.g., http://example.com)."
            );
        }

        return (
            <a
                className={classes.join(" ")}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={style}
            >
                {children}
            </a>
        );
    }
}
