import "./CategoryStyles.css";
import CategoryData from "./CategoryData";
import Cat1 from "../assets/categories/nedu.jpg";
import Cat2 from "../assets/categories/fun.webp";
import Cat3 from "../assets/categories/qgames.png";

function Category(){
    return(
       <div className="category">
        <h1>Categories</h1>
        <p>Choose one according to your mood</p>
        <div className="categorycard">
            <CategoryData
            image={Cat1}
            heading="Educational"
            text="Want to increase your knowledge?"
            />
            <CategoryData
            image={Cat2}
            heading="Fun"
            text="Want to chill and relax?"
            />
            <CategoryData
            image={Cat3}
            heading="Quick Games"
            text="Not interested in simple quizes?"
            />
        </div>
       </div>
    );
}
export default Category;