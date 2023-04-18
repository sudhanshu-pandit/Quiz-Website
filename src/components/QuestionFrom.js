import "./QuestionFormStyles.css";

function QuestionForm(){
    return(
        <div className="from-container">
            <h1 className="head"> Ask A Question! </h1>
            <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Phone No."/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default QuestionForm;