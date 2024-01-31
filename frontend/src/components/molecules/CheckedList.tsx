type props = {
    type: FormType;
    name: string;
    label: string;
    placeholder: string;
};

const sublist = [
    { id: 1, value: "Lorem ipsum" },
    { id: 2, value: "Lorem ipsum dolor" },
    { id: 3, value: "Lorem ipsum dolor sit amet" },
    { id: 4, value: "Lorem ipsum dolor sit amet consectetur." },
];

function CheckedList({ type, label, placeholder }: props) {
    return (
        <div>
            {sublist.map((item) => (
                <div className="space-y-[1.88rem]">
                    <input
                        type={type}
                        name="checklist"
                        placeholder={placeholder}
                        value={item.value}
                    />

                    <label htmlFor={item.value}>{label}</label>
                </div>
            ))}
        </div>
    );
}

export default CheckedList;
