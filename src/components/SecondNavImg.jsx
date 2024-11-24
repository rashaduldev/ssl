// eslint-disable-next-line react/prop-types
const SecondNavImg = ({img,text}) => {
    return (
        <div
        className="h-52 relative mt-[111px]"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <h1 className="absolute top-[40%] text-4xl text-white uppercase mx-20">{text}</h1>
        </div>
        </div>
    );
};

export default SecondNavImg;