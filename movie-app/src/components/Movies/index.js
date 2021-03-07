import Card from "../Card";
const Movies = () => {
    return (
        <Card className="cursor-pointer">
            <div className="flex flex-col">
                <div>
                    <picture>
                        <img src="https://via.placeholder.com/150" alt="movie one" className="w-full h-40 object-cover hover:opacity-50"/>
                    </picture>
                </div>
                <div className='container flex flex-col justify-between'>
                    <div className="text-left">
                        <h1 className="text-lg font-bold">Film One</h1>
                    </div>
                    <div className="text-justify">
                        <p>
                           This is the movie of film one
                        </p>
                    </div>
                    <div className="text-justify">
                        <p>
                           Year : 2016
                        </p>
                    </div>
                    <div className="text-justify">
                        <p>
                           IMDBId : tt4853102
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Movies;