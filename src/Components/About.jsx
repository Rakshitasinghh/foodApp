import aboutImage from "C:/Users/raksh/Desktop/food-app/src/assets/images/about-image.png";

export const About = () => {
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div>
                    <h2 className="text-2xl font-medium">About us</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis ipsum corporis dolorem nihil in porro perspiciatis a neque aliquam. Vitae porro hic, odio delectus labore unde debitis enim asperiores?</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="About" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default About;