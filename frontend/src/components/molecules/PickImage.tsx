type Props = {
    img: string;
    text: string;
};

export default function PickImage({ text, img }: Props) {
    return (
        <div className="w-full">
            <p className="text-[0.625rem] text-[#767676] mb-[0.625rem]">
                {text}
            </p>
            <div className="w-full h-[6.25rem] rounded-[0.625rem]">
                <img
                    className="w-full h-full object-cover rounded-[0.625rem]"
                    src={img}
                />
            </div>
        </div>
    );
}
