import React from "react";
import PageLayout from "../../components/utils/PageLayout";
import Heading from "../../components/utils/Heading";
import hero from "./z6.jpeg";
import { MediaQuery } from "@/components/utils/MediaQuery";
import Hero from "@/components/Hero/Hero";

const data = [
  "Executive protection",
  "Static patrol dog",
  "Crowd control K9",
  "Close protection man and dog teams",
  "Explosives detection & checkpoint screening",
  "Tracking",
  "Airport & Marinetime security",
  "Container & Baggage screening",
  "Round the clock land and property guard dogs",
  "Burgular prevention",
  "K9 mobile response unit",
  "Events",
  "Gate control",
];

const page = () => {
  return (
    <PageLayout>
      <Hero image={hero} />
      <MediaQuery>
        <div className="my-12 space-y-8">
          <h1 className="text-4xl font-extrabold uppercase">
            <span className="text-neutral-400">Elite CP </span>Elite Canine
            Protection
          </h1>
          <p>
            Elite Canine Protection offer a comprehensive range of man and dog
            teams providing:
          </p>
          <div className="bg-neutral-800 p-2">
            <p className="text-3xl font-semibold text-neutral-700d text-slate-400 ">
              close protection k9 units, escorts, vehicle and room screening
              as-well-as doorway and object guarding
            </p>
          </div>
          <p>
            With professional dog handlers to ensure safety and maximise security.
            Since the company was established we’ve had considerable growth and
            serve clients from around the world. Elite CP offer a Security Risk
            Management service which enables us to identify, evaluate and analyze
            the security risks involved with your business, movements, or
            premises. Once the evaluation is complete we can tailor a K9 solution
            suitable to assist your needs and implement it fully to give you
            complete peace of mind.
          </p>
          <p>
            Elite canine Protection provide contracts and emergency dogs and
            handler teams to cover any workplace many parts of the world. We
            provide expert handlers with elite trained dogs, our staff in uniforms
            that will compliment your existing security procedures.
          </p>
          <p>
            We can advise and prepare a tailor made package to meet the individual
            requirements of each client and situation however delicate or routine
            this may be. Our Professional Management team and supervisors ensure
            that our dogs and handler teams are being kept up-to-date with regular
            continuation training, while our experience within both the security
            services and civilian sectors places us at the the forefront of K9
            corperate and security operations.
          </p>
        </div>

        <div className="my-24 space-y-8">
          <h1 className="text-4xl font-extrabold uppercase">
            What we We provide
          </h1>
          <ul className="columns-2 list-disc pl-4">
            {data.map((points, i: number) => (
              <li key={i}>{points}</li>
            ))}
          </ul>
          <p>
            All our services are provided with highly trained dogs and handlers,
            with high visibility wear and equipment for the day and night shifts,
            uniforms that will complement your business with a professional look.
            For more information get in contact with us. If you are seeking an
            expert canine security team dedicated to customer attention and
            finding solutions, look no further.
          </p>
        </div>
      </MediaQuery>
    </PageLayout>
  );
};

export default page;
