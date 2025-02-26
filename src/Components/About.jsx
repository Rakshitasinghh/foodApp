import aboutImage from "C:/Users/raksh/Desktop/food-app/src/assets/images/about-image.png";

export const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div>
                    <h2 className="text-2xl font-medium">About us</h2>
                    <p className="text-lg">Welcome to our website, your go-to food delivery app for delicious meals anytime, anywhere. We bring you a wide range of cuisines from top restaurants with fast and hassle-free delivery. Enjoy easy ordering, exclusive deals, and a seamless food experience. Satisfy your cravings with just a few taps!</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="About" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    );
};// system setup

export default About;