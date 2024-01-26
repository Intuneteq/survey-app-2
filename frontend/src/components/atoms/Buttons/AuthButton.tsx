type Props = {
  width: string;
  height: string;
  text: string;
  backgroundColor: string;
  color: string;
};

export default function AuthButton({
  width,
  height,
  text,
  backgroundColor,
  color,
}: Props) {
  return (
    <button
      style={{
        width,
        height,
        backgroundColor,
        color,
      }}
      className="rounded-[1.25rem] text-[1.25rem] font-[700] leading-normal text-center flex justify-center items-center"
    >
      {text}
    </button>
  );
}
