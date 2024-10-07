const Footer = (props) => {
    return(
        <>
        <div className="flex flex-col h-fit self-end w-full bg-white border-2 border-red-600 ">
        <h3 className="text-lg text-center p-2 font-sans text-red-600">Site criado por <span className="font-bold">{props.name}</span></h3>
        </div>
        </>
    )
}

export default Footer