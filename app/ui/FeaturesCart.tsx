'use-client';
import Image from "next/image";
import FeatureImageOne from '@/public/adventure.webp'
import FeatureImageTwo from '@/public/health.webp'
import FeatureImageThree from '@/public/speed.webp'
import { monaSans } from "../fonts";
import FwButton from "@/app/ui/FwButton";

const features = [
    {
        id: 1,
        name: "Feature One",
        description: "This is a product feature that appears in the second section of the web page",
        image: FeatureImageOne,
        tag: "dance"
    },
    {
        id: 2,
        name: "Feature Two",
        description: "This is a product feature that appears in the second section of the web page",
        image: FeatureImageTwo,
        tag: 'cycle'
    },
    {
        id: 3,
        name: "Feature Three",
        description: "This is a product feature that appears in the second section of the web page",
        image:FeatureImageThree,
        tag: "joy"
    }
]

export default function FeaturesCart(){
    return (
            features.map((feature) => {
                return(
                    <div className={`relative flex flex-col items-center w-[90%] md:w-[30%] h-[500px] md:h-[80vh] z-10 mt-[5%] mb-[5%]`} key={feature.id}>
                        <div className="absolute top-2 md:top-10 flex justify-center items-center w-[80%] max-w-[500px] md:w-[85%] md:max-w-[550px] h-[45%] md:h-[40%] rounded-[20px] overflow-hidden">
                            <Image className="w-[100%] h-[100%] object-cover transition duration-100 ease-in hover:scale-150" src={feature.image} width={2000} height={3000} alt="Imágen de características" loading="lazy" />
                        </div>
                        <h2 className={`${monaSans.className} absolute md:top-[55%] top-[50%] left-10 text-[clamp(1.5rem,2rem,2.5rem)] after:content-[''] after:block after:w-[100%] after:h-[2px] after:bg-mainred after:rounded-2xl`}>{feature.name}</h2>
                        <p className={`${monaSans.className} absolute top-[65%] md:top-[68%] left-10 text-[clamp(0.5rem,1rem,1.5rem)] w-[70%]`}>{feature.description}</p>
                        <div className="absolute flex justify-start items-center bottom-2 left-10 w-[35%] h-[8%]">
                            <FwButton width={50} height={100} href="/" target="_blank" text="See more"/>
                        </div>
                    </div>
                )
            })
    )
}