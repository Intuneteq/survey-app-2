type Props = {
    icon: string;
    text: string;
    width: string;
};

export default function SocialButton({ text, icon, width }: Props) {
    return (
        <button
            type="button"
            style={{ width }}
            className="border border-primary rounded-[0.625rem] px-[2rem] py-[0.5rem] text-primary text-[0.875rem] font-[400] leading-normal flex justify-center items-center gap-2 hover:border-[#BAB286] hover:text-[#BAB286]"
        >
            <img src={icon} alt={text} />{" "}
            <span className="capitalize">{text}</span>
        </button>
    );
}
