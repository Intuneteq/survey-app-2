import { Images } from "../../assets";
import { AuthButton } from "../../components/atoms";
import IntroHeader from "../../components/molecules/IntroHeader";
import IntroBody from "../../components/molecules/IntroBody";

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
            <IntroHeader
              title="Lorem ipsum"
              subtitle="Expiry Date: DD-MM-YYYY"
            />
            <IntroBody
              text="Lorem ipsum dolor sit amet consectetur. Habitant lacus morbi suspendisse egestas dignissim venenatis tortor. Proin elementum lectus id risus."
              num="20"
            />

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
