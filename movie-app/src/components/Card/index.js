const Card = ({children}) => {
    return (
        <div className="bg-white hover:shadow-lg hover:scale-20 m-2 min-h-1/4 w-full sm:w-60">
            {children}
        </div>
    )
}

export default Card;