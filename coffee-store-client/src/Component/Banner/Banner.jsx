
const Banner = () => {
    return (
        <div className="hero" style={{backgroundImage: 'url(https://i.ibb.co/KDFnCZB/3.png)', backgroundPosition:'bottom'}}>
        <div className="hero-content text-center text-neutral-content w-full">
            <div className="md:text-left md:ml-[50%] my-10 sm:my-20 md:my-40 lg:my-60">
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-light">Would you like a Cup of Delicious Coffee?</h1>
            <p className="mb-5 font-light">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className="btn bg-[#E3B577] rounded-none border-0 hover:border hover:text-white hover:border-white hover:bg-transparent font-light">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;