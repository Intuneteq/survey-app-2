type Props = {
  width: string;
  height: string;
  text: string;
};

export default function AuthButton({ width, height, text }: Props) {
  return (
    <button
      style={{
        width,
        height,
      }}
      className="rounded-[1.25rem] bg-[#FFF5C1] text-[#000] text-[1.25rem] font-[700] leading-normal text-center flex justify-center items-center"
    >
      {text}
    </button>
  );
}
