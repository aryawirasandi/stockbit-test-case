const Card = ({children}) => {
    return (
        <div className="bg-white hover:shadow-lg hover:scale-20 p-5 min-h-1/2 w-full h-60 sm:w-60">
            {children}
        </div>
    )
}

export default Card;