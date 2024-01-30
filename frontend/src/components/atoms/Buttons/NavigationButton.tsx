import { ReactNode } from "react";

type props = {
    text: string;
    width: string;
    height: string;
    backgroundColor: string;
    borderRadius: string;
    color: string;
    children: ReactNode;
};

export default function NavigationButton({
    width,
    height,
    backgroundColor,
    text,
    borderRadius,
    color,
    children,
}: props) {
    return (
        <button
            style={{
                width,
                height,
                borderRadius,
                backgroundColor,
                color,
            }}
        >
            {text} {children}
        </button>
    );
}
{
    /* <div className="flex justify-end space-x-[0.62rem] pt-[5rem]">

<NavigationButton>
    <img src={leftarrow} />
</NavigationButton>

<NavigationButton
    text="1"
    width="4rem"
    height="4rem"
    borderRadius="0.375rem"
    backgroundColor="#239D60"
/>

<NavigationButton
    text="2"
    width="4rem"
    height="4rem"
    borderRadius="0.375rem"
    backgroundColor="transparent"
/>
<NavigationButton
    text="3"
    width="4rem"
    height="4rem"
    borderRadius="0.375rem"
    backgroundColor="transparent"
/>
<NavigationButton
    text="..."
    width="4rem"
    height="4rem"
    borderRadius="0.375rem"
    backgroundColor="transparent"
/>
<NavigationButton
    text="20"
    width="4rem"
    height="4rem"
    borderRadius="0.375rem"
    backgroundColor="transparent"
/>
<NavigationButton>
    <img src={rightarrow} />
</NavigationButton>
</div> */
}
