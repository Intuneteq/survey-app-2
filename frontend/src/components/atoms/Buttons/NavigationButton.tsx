type props = {
    text: string;
    width: string;
    height: string;
    backgroundColor: string;
    borderRadius: string;
    color: string;
    children;
};

export default function NavigationButton({
    width,
    height,
    backgroundColor,
    text,
    borderRadius,
    color,
    children,
}: props) {
    return (
        <button
            style={{
                width,
                height,
                borderRadius,
                backgroundColor,
                color,
            }}
        >
            {text} {children}
        </button>
    );
}
