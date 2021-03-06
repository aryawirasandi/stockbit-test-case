import Article from "../components/Article";
const Home = () => {
    return (
        <div className="container">
            <div className="text-left my-3">
                <h2 className="font-extrabold text-3xl">Latest Movies</h2>
            </div>
            <div className="flex justify-between overflow-scroll">
                <Article/>
            </div>
        </div>
    )
}

export default Home