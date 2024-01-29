type props = {
    title: string;
    subtitle: string;
    fontSize: string;
};

function IntroHeader({ title, subtitle, fontSize }: props) {
    if (subtitle) {
        return (
            <div className="text-center">
                <p
                    className=" text-[#000] font-[700] leading -normal"
                    style={{ fontSize }}
                >
                    {title}
                </p>
                <h4
                    className="text-[#434242] text-[1.5rem] font-[700] leading-normal"
                    style={{ fontSize }}
                >
                    {subtitle}
                </h4>
            </div>
        );
    }

    return (
        <h1 className=" text-[#000] text-[6.25rem] font-[700] leading -normal">
            {title}
        </h1>
    );
}
export default IntroHeader;
