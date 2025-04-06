
import React from "react";
import hero from "./hero.jpeg";
import { dogTraining } from "./data";
import TrainingCard from "./TrainingCard";
import { GoAlert } from "react-icons/go";
import PageLayout from "../../components/utils/PageLayout";
import { ImInfo } from "react-icons/im";
import Hero from "@/components/Hero/Hero";
import { MediaQuery } from "@/components/utils/MediaQuery";

const page = () => {

  return (
    <PageLayout>
      <Hero
        header="Training"
        subheader="Elite K9 offer a variety of courses for individuals with their dog
            companion to NGOs, private security companys to which the following
            courses are all available"
        image={hero}
      />

      <MediaQuery>
        <div className="my-12 space-y-8">
          <div className="flex gap-2">
            <span><ImInfo className="text-xl text-sky-400" /></span>
            <div className="">
              <p>
                For information on our prices in your countrys currency or payment
                plans, please contact us via phone or email. Please note - all
                payments for courses should be paid in full prior to the first day
                of training.
              </p>
              <p>
                Booking and reserving dates for board and train or just
                boarding can be made with a deposit of 20% of the full cost for time
                duration or course which can be made by either cash payment or bank
                transfer.
              </p>
            </div>
          </div>
          <div className="p-2 rounded-sm bg-neutral-700 font-bold flex gap-2 border border-orange-300">
            <span><GoAlert className="text-xl text-orange-300" /></span>
            Cancellation fees are 50% of the deposit if the cancellation is made
            after 48hrs
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-4 justify-between">
          {dogTraining.map((item: any, idx: number) => (
            <TrainingCard key={idx} item={item} />
          ))}
        </div>
        <div className="my-10">
          <GoAlert className="text-3xl text-orange-300" />
          <p className="text-orange-300 text-sm">
            While we do guarantee our trained dogs and promote the best of care
            for all dogs and maintenance of their training, our guarantee does
            not cover our clients abusing their dogs, negligence of the dog or
            the permitting of bad habits.
            <br />
            We welcome people to come and visit our facility and meet us in
            person. We reserve the right to deny this to anyone at our
            discretion. Let us know when you would like to come to see our work
            or our facility and we will make the necessary arrangements. Our
            facility is a secure place because of the diversified work we
            perform. While we strive to accommodate our clients, our first
            concern is that of the dogs and the concentrated training we give to
            them.
          </p>
        </div>
      </MediaQuery>
    </PageLayout>
  );
};

export default page;
