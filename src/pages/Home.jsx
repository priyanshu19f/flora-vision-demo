import React from "react";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant5 from "../assets/plant5.png";
import plant6 from "../assets/plant6.png";

function Home() {
    return (
        <>
            <div
                className="w-full min-h-[2200px] bg-cover bg-bottom bg-no-repeat"
                style={{
                    backgroundImage: "url('/main flower.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/40 min-h-[2200px] "></div>
                <Navbar />

                <div className="relative z-10 px-10 flex flex-col">
                    <div className="relative z-10 px-10 pt-40 flex justify-between">
                        <div className=" text-white flex flex-col justify-between">
                            <div>
                                <h1
                                    className="text-[105px] font-bold leading-tight opacity-70"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    Earth’s Exhale
                                </h1>

                                <p
                                    className=" text-gray-300 text-[20px] w-[650px]"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    "Earth Exhale" symbolizes the purity and
                                    vitality of the Earth's natural environment
                                    and its essential role in sustaining life.
                                </p>

                                <div className="flex items-center gap-5 mt-8">
                                    <button className="border border-white px-10 py-3 rounded-xl cursor-pointer">
                                        Buy Now
                                    </button>
                                    <button className="w-14 h-14 rounded-full border border-white flex items-center justify-center cursor-pointer">
                                        <FaPlay />
                                    </button>
                                    <p
                                        style={{ fontFamily: "Indie Flower" }}
                                        className="text-lg"
                                    >
                                        Live Demo ...
                                    </p>
                                </div>
                            </div>
                            <div className="w-100 h-50 mt-35  rounded-3xl   border-2  border-white/20 bg-white/10 backdrop-blur-[3px] p-6 text-white relative ">
                                <div className="overflow-hidden flex gap-5">
                                    <div className="overflow-hidden w-12 h-12  rounded-full">
                                        <img
                                            src="ronnie.png"
                                            alt="profile pic"
                                        />
                                    </div>
                                    <div>
                                        <p
                                            style={{ fontFamily: "Inter" }}
                                            className="text-lg opacity-80 leading-relaxed"
                                        >
                                            Ronnie Hamill
                                        </p>
                                        <div className="flex gap-2">
                                            <FaStar size={14} color="yellow" />
                                            <FaStar size={14} color="yellow" />
                                            <FaStar size={14} color="yellow" />
                                            <FaStar size={14} color="yellow" />
                                            <FaStarHalf
                                                size={14}
                                                color="yellow"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p
                                        className="text-md font-light opacity-80"
                                        style={{ fontFamily: "Inter" }}
                                    >
                                        I can't express how thrilled I am with
                                        my new natural plants! They bring such a
                                        fresh and vibrant energy to my home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className=" w-[400px] h-[520px] rounded-[40px]   border-2  border-white/20 bg-white/10 backdrop-blur-[3px] p-6 text-white relative">
                            <img
                                src="/aglao plant.png"
                                alt=""
                                className="w-[350px] mx-auto -mt-26"
                            />
                            <div className="flex items-center justify-between ">
                                <div className="mt-6">
                                    <p className="text-gray-300">
                                        Indoor Plant
                                    </p>

                                    <h2 className="text-4xl mt-2">
                                        Aglaonema plant{" "}
                                    </h2>

                                    <button className="mt-6 border border-white px-10 py-3 rounded-xl cursor-pointer">
                                        Buy Now
                                    </button>
                                </div>
                                <FaAngleRight size={23} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col">
                        <div className="relative  mx-auto max-w-fit">
                            <div className=" absolute  top-0  right-0 w-15  h-15 border-t-4 border-r-4 border-yellow-500 rounded-tr-2xl"></div>
                            <div className=" absolute bottom-0 left-0 w-15 h-15 border-b-4 border-l-4 border-yellow-500 rounded-bl-2xl "></div>

                            <h2
                                className="text-white text-5xl font-semibold text-center px-6 py-3"
                                style={{ fontFamily: "Inter" }}
                            >
                                Our Trendy plants
                            </h2>
                        </div>

                        <div className="w-[95%]  shadow flex mt-10 h-[450px] backdrop-blur-md border-white/20 border-2 rounded-[150px]   mx-auto">
                            <div className="w-[50%] h-full relative">
                                <img
                                    className="w-[95%] absolute bottom-0"
                                    src="rose gold.png"
                                    alt="rose gold"
                                />
                            </div>
                            <div className="text-white pt-7 pr-5 w-[60%] flex flex-col items-start justify-center gap-5">
                                <p
                                    className="text-4xl"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    For Your Desks Decorations
                                </p>
                                <p
                                    className="w-[90%] text-lg font-light "
                                    style={{ fontFamily: "Inter" }}
                                >
                                    I recently added a beautiful desk decoration
                                    plant to my workspace, and it has made such
                                    a positive difference!
                                </p>
                                <p
                                    className="text-4xl"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    Rs. 599/-
                                </p>
                                <div className="flex gap-10">
                                    <button className="border-2 px-12 py-2 rounded-lg hover:cursor-pointer">
                                        Explore
                                    </button>
                                    <button className="border-2 hover:cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg">
                                        <img
                                            src="/cart bag.png"
                                            alt="cart"
                                            className="w-7 object-contain"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[95%] shadow  flex mt-30 h-[450px] backdrop-blur-md border-white/20 border-2 rounded-[150px]   mx-auto">
                            <div className="text-white  pt-7 pl-20 w-[60%] flex flex-col items-start justify-center gap-5 ">
                                <p
                                    className="text-4xl"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    For Your Desks Decorations
                                </p>
                                <p
                                    className="w-[90%] text-lg font-light "
                                    style={{ fontFamily: "Inter" }}
                                >
                                    The greenery adds a touch of nature and
                                    serenity to my desk, making it feel more
                                    inviting and calming
                                </p>
                                <p
                                    className="text-4xl"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    Rs. 399/-
                                </p>
                                <div className="flex gap-10">
                                    <button className="border-2 px-12 py-2 rounded-lg hover:cursor-pointer">
                                        Explore
                                    </button>
                                    <button className="border-2 hover:cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg">
                                        <img
                                            src="/cart bag.png"
                                            alt="cart"
                                            className="w-7 object-contain"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="w-[50%] h-full relative">
                                <img
                                    className="w-[95%] absolute bottom-0"
                                    src="rose gold fem.png"
                                    alt="rose gold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* top selling plant  */}
            <div className="bg-[#1c2417] pt-30 pb-20 ">
                <div className="relative  mx-auto max-w-fit mb-10">
                    <div className=" absolute  top-0  right-0 w-15  h-15 border-t-4 border-r-4 border-yellow-500 rounded-tr-2xl"></div>
                    <div className=" absolute bottom-0 left-0 w-15 h-15 border-b-4 border-l-4 border-yellow-500 rounded-bl-2xl "></div>

                    <h2
                        className="text-white text-5xl font-semibold text-center px-6 py-3 "
                        style={{ fontFamily: "Inter" }}
                    >
                        Our Top Selling Plants
                    </h2>
                </div>

                <div className="p-20 grid grid-cols-3 gap-y-28 gap-x-5 w-full">
                    {[
                        {
                            plantPic: plant1,
                            title: "Aglaonema plant",
                            desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
                            price: "Rs. 300/-",
                        },
                        {
                            plantPic: plant2,
                            title: "Plantain Lilies",
                            desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes",
                            price: "Rs. 380/-",
                        },
                        {
                            plantPic: plant3,
                            title: "Cactus",
                            desc: "It is known for their ability to thrive in arid environments",
                            price: "Rs. 259/-",
                        },
                        {
                            plantPic: plant4,
                            title: "Swiss cheese Plant",
                            desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
                            price: "Rs. 400/-",
                        },
                        {
                            plantPic: plant5,
                            title: "Sansevieria plant",
                            desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
                            price: "Rs. 450/-",
                        },
                        {
                            plantPic: plant6,
                            title: "Agave plant",
                            desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
                            price: "Rs. 359/-",
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex justify-center">
                            <div className="relative flex flex-col justify-between w-[360px] h-[430px] rounded-[45px] border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl overflow-visible ">
                                <img
                                    src={item.plantPic}
                                    alt={item.title}
                                    className="w-[280px]  absolute -top-20 left-1/2 -translate-x-1/2 drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)]"
                                />

                                <div className=" h-[60%] absolute bottom-0 p-8 text-white flex flex-col">
                                    <h2
                                        className="text-3xl font-medium leading-tight"
                                        style={{ fontFamily: "Inter" }}
                                    >
                                        {item.title}
                                    </h2>

                                    <p
                                        className="text-gray-300 mt-3 text-sm leading-7"
                                        style={{ fontFamily: "Inter" }}
                                    >
                                        {item.desc}
                                    </p>

                                    <div className="flex items-center justify-between  mt-auto mt-6">
                                        <p
                                            className="text-3xl"
                                            style={{ fontFamily: "Inter" }}
                                        >
                                            {item.price}
                                        </p>

                                        <button className="w-12 h-12  rounded-xl border border-white/40 flex items-center justify-center hover:bg-white/10 transition-all">
                                            <img
                                                src="/cart bag.png"
                                                alt="cart"
                                                className="w-5"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* customer review  */}
            <div className="bg-[#1c2417] pt-0 pb-20 ">
                <div className="relative  mx-auto max-w-fit">
                    <div className=" absolute  top-0  right-0 w-15  h-15 border-t-4 border-r-4 border-yellow-500 rounded-tr-2xl"></div>
                    <div className=" absolute bottom-0 left-0 w-15 h-15 border-b-4 border-l-4 border-yellow-500 rounded-bl-2xl "></div>

                    <h2
                        className="text-white text-5xl font-semibold text-center px-6 py-3 "
                        style={{ fontFamily: "Inter" }}
                    >
                        Customer Review
                    </h2>
                </div>

                <div className="px-20 flex justify-between">
                    <div className=" p-px w-90 h-80 rounded-[50px] mt-35 bg-linear-to-br from-white via-transparent  to-white mx-auto">
                        <div className="w-90 flex flex-col h-80 bg-[#252d21] shadow-2xl  rounded-[50px]   border-2  border-white/20 backdrop-blur-[3px] p-6 text-white relative ">
                            <div className="overflow-hidden flex gap-8 mb-6">
                                <div className="overflow-hidden w-12 h-12  rounded-full shadow-2xl">
                                    <img
                                        src="/shelly.png"
                                        alt="profile pic"
                                        className="shadow-2xl"
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{ fontFamily: "Inter" }}
                                        className="text-lg opacity-80 leading-relaxed"
                                    >
                                        Shelly Russel
                                    </p>
                                    <div className="flex gap-2">
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStarHalf size={14} color="yellow" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p
                                    className="text-md font-light opacity-80"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    Just got my hands on some absolutely awesome
                                    plants, and I couldn't be happier!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" p-px w-90 h-80 rounded-[50px] mt-35 bg-linear-to-br from-white via-transparent  to-white mx-auto">
                        <div className="w-90 flex flex-col h-80 bg-[#252d21] shadow-2xl rounded-[50px]   border-2  border-white/20 backdrop-blur-[3px] p-6 text-white relative ">
                            <div className="overflow-hidden flex gap-8 mb-6">
                                <div className="overflow-hidden w-12 h-12  rounded-full shadow-2xl">
                                    <img
                                        src="/lula.jpg"
                                        alt="profile pic"
                                        className="shadow-2xl h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{ fontFamily: "Inter" }}
                                        className="text-lg opacity-80 leading-relaxed"
                                    >
                                        Lula Rolfson
                                    </p>
                                    <div className="flex gap-2">
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStarHalf size={14} color="yellow" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p
                                    className="text-md font-light opacity-80"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    Each one has its own unique charm and
                                    personality, and they've already started
                                    brightening up my space. The vibrant colors
                                    and fresh greenery make such a huge
                                    difference in my home.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className=" p-px w-90 h-80 rounded-[50px] mt-35 bg-linear-to-br from-white via-transparent  to-white mx-auto">
                        <div className="w-90 flex flex-col h-80 bg-[#252d21] shadow-2xl rounded-[50px]   border-2  border-white/20 backdrop-blur-[3px] p-6 text-white relative ">
                            <div className="overflow-hidden flex gap-8 mb-6">
                                <div className="overflow-hidden w-12 h-12  rounded-full shadow-2xl">
                                    <img
                                        src="/carol.png"
                                        alt="profile pic"
                                        className="shadow-2xl object-cover h-full"
                                    />
                                </div>
                                <div>
                                    <p
                                        style={{ fontFamily: "Inter" }}
                                        className="text-lg opacity-80 leading-relaxed"
                                    >
                                        Carol Huels
                                    </p>
                                    <div className="flex gap-2">
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStar size={14} color="yellow" />
                                        <FaStarHalf size={14} color="yellow" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <p
                                    className="text-md font-light opacity-80"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    It's like bringing a little piece of nature
                                    indoors. Definitely worth the investment-my
                                    plant collection has never looked better!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* best O2  */}

            <div className="bg-[#1c2417] pt-30 pb-30 overflow-hidden">
                <div className="relative mx-auto max-w-fit mb-30">
                    <div className="absolute top-0 right-0 w-15 h-15 border-t-4 border-r-4 border-yellow-500 rounded-tr-2xl"></div>

                    <div className="absolute bottom-0 left-0 w-15 h-15 border-b-4 border-l-4 border-yellow-500 rounded-bl-2xl"></div>

                    <h2
                        className="text-white text-5xl font-semibold text-center px-6 py-3"
                        style={{ fontFamily: "Inter" }}
                    >
                        Our Best o2
                    </h2>
                </div>

                <div className="p-px w-[85%] h-[552px] rounded-[70px] bg-gradient-to-br from-white via-transparent  to-white mx-auto">
                    <div className="relative  h-[550px] rounded-[70px] bg-[#252d21] backdrop-blur-md flex items-center justify-between px-20 shadow-lg">
                        <div className="w-[45%] flex justify-center">
                            <img
                                src="/aglao plant.png"
                                alt="aglao plant"
                                className="w-[680px] absolute bottom-0 left-0 -translate-x-12"
                            />
                        </div>

                        <div className="w-[50%] text-white z-10 flex flex-col py-10">
                            <h2
                                className="text-4xl font-semibold"
                                style={{ fontFamily: "Inter" }}
                            >
                                We Have Small And Best o2 Plants Collection’s
                            </h2>

                            <p
                                className="mt-10 text-gray-300 text-lg "
                                style={{ fontFamily: "Inter" }}
                            >
                                Oxygen-producing plants, often referred to as
                                "O2 plants," are those that release oxygen into
                                the atmosphere through the process of
                                photosynthesis.
                            </p>

                            <p
                                className="mt-8 text-gray-300 text-lg"
                                style={{ fontFamily: "Inter" }}
                            >
                                Many plants can help filter out pollutants and
                                toxins from the air, such as formaldehyde,
                                benzene, and trichloroethylene. This makes the
                                air cleaner and healthier to breathe.
                            </p>

                            <div className="flex items-center justify-between gap-14 mt-12">
                                <button className="border border-white/40 px-12 py-3 rounded-xl text-lg">
                                    Explore
                                </button>

                                <div className="flex items-center gap-8 text-white/60">
                                    <button className="text-4xl hover:text-white transition-all">
                                        ‹
                                    </button>

                                    <p className="text-lg tracking-wide">
                                        01/04
                                    </p>

                                    <button className="text-4xl hover:text-white transition-all">
                                        ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-12">
                    <div className="w-8 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
            </div>

            {/* Footer */}

            <footer className="bg-[#1c2417] px-20 py-24 overflow-hidden">
                <div className=" w-full pt-16 flex justify-between gap-20 flex-wrap">
                    <div className="max-w-[420px] text-white">
                        <div className="flex items-center gap-4">
                            <img
                                src="/logo plant.png"
                                alt="logo"
                                className="w-14"
                            />

                            <h2
                                className="text-4xl font-bold"
                                style={{ fontFamily: "Inter" }}
                            >
                                FloraVision.
                            </h2>
                        </div>

                        <p
                            className="mt-10 text-gray-300 text-xl "
                            style={{ fontFamily: "Inter" }}
                        >
                            "From lush indoor greens to vibrant outdoor blooms,
                            our plants are crafted to thrive and elevate your
                            living environment."
                        </p>

                        <div className="flex gap-16 mt-20 text-[30px] font-semibold">
                            <button className="hover:text-yellow-400 transition-all">
                                FB
                            </button>

                            <button className="hover:text-yellow-400 transition-all">
                                TW
                            </button>

                            <button className="hover:text-yellow-400 transition-all">
                                LI
                            </button>
                        </div>
                    </div>

                    <div className="text-white">
                        <h2
                            className="text-2xl font-semibold mb-10"
                            style={{ fontFamily: "Inter" }}
                        >
                            Quick Link’s
                        </h2>

                        <div
                            className="flex flex-col gap-2 text-lg text-gray-300 underline"
                            style={{ fontFamily: "Inter" }}
                        >
                            <a
                                href="#"
                                className="hover:text-white transition-all"
                            >
                                {" "}
                                Home{" "}
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-all"
                            >
                                {" "}
                                Types of Plants{" "}
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-all"
                            >
                                {" "}
                                Contact{" "}
                            </a>
                            <a
                                href="#"
                                className="hover:text-white transition-all"
                            >
                                {" "}
                                Privacy{" "}
                            </a>
                        </div>
                    </div>

                    <div className="text-white flex flex-col justify-between">
                        <div>
                            <h2
                                className="text-2xl font-semibold mb-10"
                                style={{ fontFamily: "Inter" }}
                            >
                                For Every Update.
                            </h2>

                            <div className=" flex items-center border-3 p-1 border-white/40 rounded-xl overflow-hidden w-[470px] h-[70px]">
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className=" bg-transparent outline-none px-3 w-full h-full text-xl text-white placeholder:text-gray-400"
                                />

                                <button className="bg-white text-black h-full px-10 text-xl rounded-md font-bold hover:bg-gray-200 transition-all">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>

                        <p
                            className="text-gray-300 text mt-20"
                            style={{ fontFamily: "Inter" }}
                        >
                            FloraVision © all right reserve
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Home;
