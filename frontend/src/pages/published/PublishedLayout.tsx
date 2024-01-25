import { Images } from "../../assets";
import { AuthButton } from "../../components/atoms";

export default function PublishedLayout() {
  const { picture, backImg } = Images;

  return (
    <main className="" style={{ backgroundImage: `url(${backImg})` }}>
      <div className=" flex justify-center">
        <div className="  max-w-[53.75rem] py-[5.19rem]">
          <div className="w-full flex justify-center">
            <div className="w-[25rem] h-[25rem]">
              <img
                className="flex justify-center object-contain items-center"
                src={picture}
                alt="picture"
              />
            </div>
          </div>

          <div className="w-full text-center ">
            <h1 className=" text-[#000] text-[6.25rem] font-[700] leading -normal">
              Lorem ipsum
            </h1>
            <h4 className="text-[#434242] text-[1.5rem] font-[700] leading-normal">
              Expiry Date: DD-MM-YYYY
            </h4>
            <p className=" text-[#434242] text-[1.375rem] font-[400] leading-normal">
              Lorem ipsum dolor sit amet consectetur. Habitant lacus morbi
              suspendisse egestas dignissim venenatis tortor. Proin elementum
              lectus id risus.
            </p>
            <p className=" text-[#434242] text-[1.5rem] font-[400] leading-normal py-[3.19rem] ">
              20 questions
            </p>
            <div className=" flex justify-center">
              <AuthButton
                width="10.9375rem"
                height="3.75rem"
                text="Start"
                backgroundColor="#239D60"
                color="#FFF"
              />
            </div>
            <p className=" text-[#434242] text-[1.25rem] font-[400] leading-normal">
              [Click to Begin the survey]
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
