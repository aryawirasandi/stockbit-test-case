const Card = ({children, width, className}) => {
    return (
        <div className={"bg-white hover:shadow-lg hover:scale-20 m-2 " + width + className}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    width : "min-h-1/4 w-full sm:w-60 ",
    className : ""
}

export default Card;