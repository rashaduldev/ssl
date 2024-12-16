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
         <div className="absolute top-[40%] left-[36%] md:left-[42%] text-white uppercase">
         <h1 className="text-4xl md:text-7xl">{text}</h1>
         <h3 className="mt-5 md:ml-16 text-sm md:text-xl">
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