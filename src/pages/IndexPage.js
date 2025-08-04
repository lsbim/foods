import { useEffect, useState } from "react";
import ReactGA from 'react-ga';
import FoodComponent from "../components/trickcal/food/FoodComponent";
import CharacterSearch from "../layouts/CharacterSearch";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const IndexPage = () => {

    const [target, setTarget] = useState('');
    const [verylike, setVerylike] = useState([]);
    const [like, setLike] = useState([]);
    const [hate, setHate] = useState([]);
    const [soso, setSoso] = useState([]);

    function MyPage() {
        useEffect(() => {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }, []);
    }

    // console.log("target: ", target)

    return (
        <div className="flex justify-center">
            <div className="w-[1200px] relative gap-y-12 flex flex-col">
                <div className="mb-[100px] flex justify-center">
                    <CharacterSearch
                        setTarget={setTarget}
                    />
                </div>
                <FoodComponent
                    target={target}
                    setTarget={setTarget}
                    verylike={verylike}
                    setVerylike={setVerylike}
                    like={like}
                    setLike={setLike}
                    hate={hate}
                    setHate={setHate}
                    soso={soso}
                    setSoso={setSoso}
                />

                {/* {target && target?.length > 0 &&
                    <SelectedObjComponent />
                } */}
                <Footer />
            </div>
        </div>
    );
}

export default IndexPage;