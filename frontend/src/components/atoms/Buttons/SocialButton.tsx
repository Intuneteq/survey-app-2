type Props = {
  icon: string;
  text: string;
  width: string;
};

export default function SocialButton({ text, icon, width }: Props) {
  return (
    <button
      style={{ width }}
      className="border border-secondary rounded-[1.25rem] px-[2rem] py-[0.5rem] text-[#FFF5C1] text-[0.875rem] font-[400] leading-normal flex justify-center items-center gap-2"
    >
      <img src={icon} alt={text} /> <span className="capitalize">{text}</span>
    </button>
  );
}
