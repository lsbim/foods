import FoodComponent from "../components/trickcal/food/FoodComponent";

const IndexPage = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[1200px]">
                <span className="flex justify-center mb-2 text-[36px]">
                    트릭컬 연회장 음식 호불호
                </span>
                <FoodComponent></FoodComponent>
            </div>
        </div>
    );
}

export default IndexPage;