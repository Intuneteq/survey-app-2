import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const options = [
    {
        id: 1,
        option: "option 1",
    },
    {
        id: 2,
        option: "option 2",
    },
    {
        id: 3,
        option: "option 3",
    },
];

export default function Background({ children }: Props) {
    return (
        <section className="w-full h-full flex justify-center items-center">
            <div className="w-[53.75rem] h-[37.5rem] bg-[#FFF] shadow-top  rounded-xl flex justify-center items-center">
                {options.map((option) => (
                    <div key={option.id}>
                        <input
                            type="radio"
                            name={option.option}
                            id={option.id.toString()}
                        />
                        <label htmlFor={option.option}>{option.option}</label>
                    </div>
                ))}
                {children}
            </div>
        </section>
    );
}
