import Title from "./Title";

interface LayoutProps{
    title: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={`
            flex flex-col w-1/3
            bg-white text-zinc-700
            rounded-md
        `}>
        <Title>{props.title}</Title>
            <div className="p-3">
            {props.children}
            </div>
        </div>
    )
}