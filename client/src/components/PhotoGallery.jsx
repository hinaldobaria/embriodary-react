import ImageCard from "./ImageCard";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      {/*all my photos will be listed inside this div*/}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">        
        {/*Image card*/}
        <ImageCard 
            title="Text
              "
            author="coder29"
            img="./design1.png"
            price={1000}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="flowers"
            author="coder29"
            img="./design2.png"
            price={850}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="Choose Happy"
            author="coder29"
            img="./design1.png"
            price={1000}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="flowers"
            author="coder29"
            img="./design2.png"
            price={850}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="Choose Happy"
            author="coder29"
            img="./design1.png"
            price={1000}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="flowers"
            author="coder29"
            img="./design2.png"
            price={850}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="Choose Happy"
            author="coder29"
            img="./design1.png"
            price={1000}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="flowers"
            author="coder29"
            img="./design2.png"
            price={850}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="Choose Happy"
            author="coder29"
            img="./design1.png"
            price={1000}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="flowers"
            author="coder29"
            img="./design2.png"
            price={850}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="Choose Happy"
            author="coder29"
            img="./design1.png"
            price={1000}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
        <ImageCard 
            title="flowers"
            author="coder29"
            img="./design2.png"
            price={850}
            icon1={<FaShoppingCart className="text-2xl text-black cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />
            }
            icon2={<IoIosHeart className="text-2xl text-pink-400 cursor-pointer hover:scale-110 transition-all easy-linear duration-300" />}
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
