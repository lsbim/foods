import { useEffect } from "react";
import ReactGA from 'react-ga';
import FoodComponent from "../components/trickcal/food/FoodComponent";

const IndexPage = () => {

    function MyPage() {
        useEffect(() => {
            ReactGA.pageview(window.location.pathname + window.location.search);
        }, []);
    }

    return (
        <div className="flex justify-center">
            <div className="w-[1200px]">
                <span className="flex justify-center mt-2 mb-2 md:text-[36px] text-[24px] font-bold">
                    트릭컬 연회장 음식 호불호
                </span>
                <FoodComponent></FoodComponent>
            </div>
        </div>
    );
}

export default IndexPage;