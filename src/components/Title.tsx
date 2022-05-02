export default function Title(props){
    return(
        <div className="flex flex-col justify-center" >
            <h1 className="pl-10 text-3xl">
                {props.children}
            </h1>
            <hr className="border-2 border-green-200"/>
        </div>
    )
}