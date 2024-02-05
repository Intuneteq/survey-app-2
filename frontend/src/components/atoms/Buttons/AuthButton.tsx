type Props = {
    width?: string;
    height?: string;
    text: string;
};

export default function AuthButton({
    width = "100%",
    height = "3.75rem",
    text,
}: Props) {
    return (
        <button
            type="submit"
            style={{ width, height }}
            className="rounded-[0.625rem] bg-primary hover:bg-[#BAB286] text-[1.25rem] font-[700] leading-normal text-center flex justify-center items-center text-black transition duration-700"
        >
            {text}
        </button>
    );
}
