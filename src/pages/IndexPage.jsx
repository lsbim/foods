import { useState } from "react";
import FoodComponent from "../components/food/FoodComponent";
import CharacterSearch from "../layouts/CharacterSearch";
import Footer from "../layouts/Footer";

const IndexPage = () => {

    const [target, setTarget] = useState('');
    const [verylike, setVerylike] = useState([]);
    const [like, setLike] = useState([]);
    const [hate, setHate] = useState([]);
    const [soso, setSoso] = useState([]);

    // console.log("target: ", target)

    return (
        <div className="flex justify-center">
            <div className="w-[1200px] relative gap-y-12 flex flex-col">
                <div className="mb-[120px] flex justify-center">
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