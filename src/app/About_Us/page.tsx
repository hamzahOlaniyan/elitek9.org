import React from "react";
import PageLayout from "../../components/utils/PageLayout";
import Image from "next/image";
import MissionCard from "./MissionCard";
import { data } from "./data";
import hero from "./img/h.jpeg";
import img1 from "./img/g16.jpg";
import img2 from "./img/g20.jpeg";
import img3 from "./img/g13.jpg";
import img4 from "./img/fdv.jpeg";
import Heading from "../../components/utils/Heading";
import { MediaQuery } from "@/components/utils/MediaQuery";
import Hero from "@/components/Hero/Hero";

const pics = [img1, img2, img3, img4];
const page = () => {
  return (
    <PageLayout>
      <Hero
        header="About Elite K9 Training Centre"
        subheader="K9 Training Centre in Treesbank has been helping people train their dogs for over 30 years."
        image={hero}
      />
      <MediaQuery>
        <div className="my-12 space-y-20">
          <section className="my-12 space-y-8">
            <Heading heading=" General Info" />
            <p className=" mt-4 ">
              ELITE K9 formally known as PTS K9 is a family-owned business that
              began around 2003 with the breeding, training and selling of guard
              dogs by Dog master Ibrahim Kinteh. <br /> <br /> Founded in the UK,
              Elite K9 has supplied world-class protection and security dogs to
              families, military and security forces around the world. Elite K9 is
              committed to developing and providing a portion of the worlds best
              trained dogs to serve and protect humanity. We are one of the first
              islamic based protection dog businesses from the UK and use our
              religious beliefs, teachings and principles to govern and guide us
              in our work and methodology of breeding, handling, rearing, training
              and supplying dogs to all corners of the world. <br />
              <br /> From home protection to canines screening for explosive
              materials or controlling crowds, our highly trained dogs play an
              important role along with our certified handlers and trainers who
              remain on duty and on call almost every single day throughout the
              year. To us training dogs is not just a job, its a way of life.{" "}
              <br />
              <br /> Experience the legendary and true security benefit of having
              your own Elite K9. Contact us for more info.
            </p>
          </section >

          <section className="my-12 space-y-8">
            <Heading heading="Our Mission" />
            <p className=" mt-4 ">
              To be the avant-garde in establishing safety and security through
              providing elite dogs, handlers and specialist training to The UK,
              Europe, Middle East, Africa and The World.
            </p>
            <div className="md:grid grid-cols-3 gap-3 my-4">
              <MissionCard>
                To deliver the best and purest breeds of working dogs, both
                locally and internationally.
              </MissionCard>
              <MissionCard>
                Advocate and promote the best available veterinary care for dogs
              </MissionCard>
              <MissionCard>
                Provide k9 support for government bodies and private organisation.
              </MissionCard>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 w-full relative">
              {pics.map((item: any, idx: number) => (
                <div key={idx} className="h-40 w-full md:h-80">
                  <Image

                    src={item}
                    fill={true}
                    alt=""
                    className="object-cover object-center w-full h-full relative"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </MediaQuery >

      <div className="p-3 bg-teal-600 text-black">
        <MediaQuery>
          <div className="py-12 ">
            <Heading heading="Why choose Elite K9" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-12 gap-y-6 gap-6">
              {data.map((item: any, idx: number) => (
                <article key={idx} className="">
                  <h3 className="uppercase font-bold">{item.title}</h3>
                  <p className="">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </MediaQuery >
      </div>

      <MediaQuery >
        <section className="py-20 space-y-8">
          <Heading heading="Elite K9 Training Methods" />
          <p >
            At Elite K9 we use the most up-to-date methods and equipment for
            training the many dogs that are brought for us to learn, we use a
            balance of reward-based training using favorite foods, games or toys,
            and praises as well as affection as motivation for the dogs to learn.{" "}
            <br /> <br />
            We also use corrections for dogs but only after a dog has fully
            comprehended and understood what action it is that is required from
            the dog when it is commanded, thereafter if the dog is easily
            distracted or not compliant the dog is corrected through the leash
            with simple techniques which are neither harmful nor painful to the
            dog. This creates a balance of both positive and negative
            reinforcement to keep the dog reliable and obedient in both private
            and public settings.
          </p>
        </section>
      </MediaQuery>

    </PageLayout >
  );
};

export default page;
