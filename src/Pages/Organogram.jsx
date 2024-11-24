import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";


const componentName = () => {
    return (
        <div>
            <Nav isVisible={true}/>
            <div className="mt-[110px]">
              <SecondNavImg text="Top Management of the company" img="https://i.ibb.co/4jK4Xx1/download.jpg"/>
                <h1 className="text-center text-2xl md:text-4xl font-bold mt-10 italic tracking-wider">Company Organogram</h1>
                <div className="container mx-auto my-10 flex justify-center">
                    <img className="" src="https://i.ibb.co.com/mD1GqXn/Organogram.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default componentName;