const Footer = (props) => {
    return(
        <>
        <div className="footer">
        <h3 className="footerText">Site criado por <span className="font-bold">{props.name}</span></h3>
        </div>
        </>
    )
}

export default Footer