import Card from "../components/Card";
import Heading from "../components/HeadingText";
import Badge from "../components/Badge/";
import Star from "../assets/icons/star.svg";
const Detail = () => {
    return (
        <div className="container">
            <Card width="w-4/5 block mx-auto">
            <div>
                <picture>
                    <img src="https://via.placeholder.com/150" alt="video one" className="w-full h-80 object-cover"/>
                </picture>
             </div>
            <div className="container">
            <Heading title="The Social Network" align="center"/>
            <div className="text-center">
                <p>
                As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.
                </p>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Actors</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <Badge title="Jesse Eisenberg"/>
                    <Badge title="Jesse Eisenberg"/>
                    <Badge title="Jesse Eisenberg"/>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Writer</p>
                </div>
                <div className="flex">
                    <p>Aaron Sorkin (screenplay), Ben Mezrich (book)</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Director</p>
                </div>
                <div className="flex">
                    <p>David Fincher</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Language</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <Badge title="USA"/>
                    <Badge title="French"/>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Country</p>
                </div>
                <div className="flex">
                    <p>USA</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Awards</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <p>Won 3 Oscars. Another 170 wins & 185 nominations.</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Year Release</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <p>2012</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">IMDB ID</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <p>tt1285016</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Type</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <p>Movie</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Box Office</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <p>$96,962,694</p>
                </div>
            </div>
            <div className="flex items-center my-5">
                <div className="mr-3">
                    <p className="font-bold">Production</p>
                </div>
                <div className="flex overflow-scroll sm:overflow-visible">
                    <Badge title="Scott Rudin Productions"/>
                    <Badge title="Trigger Street"/>
                    <Badge title="Michael De luca"/>
                </div>
            </div>
            </div>
        </Card>  
        <div className="container">
            <Heading title="Rating" align="center"/>
        </div>
        <div className="flex justify-center flex-wrap sm:flex-nowrap">
            <Card>
                <div className="container">
                    <div className="text-center">
                        <picture>
                            <img src={Star} alt="rating 1" title="rating 1" className="w-1/3 mx-auto"/>
                        </picture>
                    </div>
                    <div className="text-center">
                        <h2>Internet Movie Database</h2>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl">7.2</p>
                    </div>
                </div>
            </Card>
        </div>
        <div className="container">
            <Heading title="Score" align="center"/>
        </div>
        <div className="flex justify-center flex-wrap">
                <Badge title="Meta Score : 9.5"/>
                <Badge title="imdDb Rating : 7.7"/>
        </div>
       </div>      
    )
}

export default Detail;