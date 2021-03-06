import Article from "../components/Article";
import HeadingText from "../components/HeadingText";
import Badge from "../components/Badge";
const Home = () => {
    return (
        <div className="container">
            <HeadingText title="Latest Movies"/>
            <div className="flex overflow-scroll my-5">
                <Badge title="Movie"/>
                <Badge title="Series"/>
                <Badge title="Episode"/>
            </div>
            <div className="flex justify-between flex-wrap">
                <Article/>
            </div>
        </div>
    )
}

export default Home