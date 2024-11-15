import Nav from '../components/Navber/Nav';

const NonTextile = () => {
    return (
        <div>
             <Nav isVisible={true} />
             <div className="mt-28">
             <div className="container mx-auto">
          <iframe
            width="1560"
            height="315"
            src="https://www.youtube.com/embed/U7jyIVjXldM?autoplay=1&mute=1&si=Vq-fG0spCMccGu6J"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <h3 className="text-3xl font-bold container mx-auto mt-10">Non Textile</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 container mx-auto gap-10">
          <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeum7D-Tyit3tsFv1DSiKcWfZX6Dlil7ufxg&s" alt="" />
          </div>
          <div>
          <img className="w-full h-full" src="https://daiaplastic.com/wp-content/uploads/2022/09/non-woven-fabric-rolls.jpg" alt="" />
          </div>
          <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5qbaTPWj_cRb02KwpuHjFXZ6PKL_17DdJg&s" alt="" />
          </div>
          <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFy0pPPgu62GpPity6ua_786CaNBN9Z-YTQ&s" alt="" />
          </div>
          <div>
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7ENZKFUuYA7rKje10j9Q1PJ57nnLdDy9Aw&s" alt="" />
          </div>
          
        </div>
             </div>
        </div>
    );
};

export default NonTextile;