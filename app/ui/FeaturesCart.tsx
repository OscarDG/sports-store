'use-client';

import Image from "next/image";
import FeatureImageOne from '@/public/women_bicycle.webp'
import FeatureImageTwo from '@/public/man_joy.webp'
import FeatureImageThree from '@/public/break-dancer-doing.webp'
import {ArrowIcon} from '@/public/arrow'

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
                    <div className={`relative flex flex-col justify-evenly items-center w-[90%] md:w-[30%] h-[500px] md:h-[90vh] z-10 mt-[5%] mb-[5%]`} key={feature.id}>
                        <div className="absolute flex justify-center items-center w-[70%] h-[50%]">
                            <Image src={feature.image} width={2000} height={2635} alt="Imágen de característica Uno" loading="lazy" />
                        </div>
                        <h2>{feature.name}</h2>
                        <p>{feature.description}</p>
                        <div className="absolute flex justify-evenly items-center md:w-[35%] w-[40%] h-[12%] md:h-[8%] z-20 bg-mainred">
                            <a className="flex items-center w-[50%] h-[100%] md:h-[100%] z-10 text-mainwhite" href="/" target="_blank">See more</a>
                            <ArrowIcon width={50} height={50} stroke={'#ffffff'}/>
                        </div>
                    </div>
                )
            })
    )
}