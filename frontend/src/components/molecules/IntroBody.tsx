type props = {
  text: string;
  num: string;
};

function IntroBody({ text, num }: props) {
  return (
    <div>
      <p className=" text-[#434242] text-[1.375rem] font-[400] leading-normal">
        {text}
      </p>
      <p className=" text-[#434242] text-[1.5rem] font-[400] leading-normal py-[3.19rem] ">
        {num} questions
      </p>
    </div>
  );
}

export default IntroBody;
