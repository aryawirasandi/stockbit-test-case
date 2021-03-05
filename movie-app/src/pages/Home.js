import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import "../helper/axios";
const Home = () => {
    const [movies, setMovie] = useState();
    useEffect(() => {
        // axios.get({
        //     params : {
        //         s : "batman",
        //         page : 2
        //     }
        // })
    }, [])
    return (
        <div className="container">
            <div className="flex flex-wrap">
                <Card>
                    <div className="flex">
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Home