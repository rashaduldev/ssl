import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SecondNavImg = ({img,text}) => {
    return (
        <div
        className="h-96 relative mt-24 md:mt-[111px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
         <div className="absolute top-[40%] left-[45%] text-white uppercase">
         <h1 className="text-7xl">{text}</h1>
         <h3 className="mt-5 ml-16 text-xl">
          <span className="text-orange-300">
            <NavLink to={'/'}>Home</NavLink>
            </span> 
            <span className="mx-3">/</span>
          <span>{text}</span></h3>
         </div>
        </div>
        </div>
    );
};

export default SecondNavImg;