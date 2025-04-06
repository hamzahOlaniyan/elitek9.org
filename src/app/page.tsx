import HeroHome from "@/components/Hero/HeroHome";
import News from "@/components/News/News";
import ProtectionSection from "@/components/ProtectionSection/ProtectionSection";
import { Service } from "@/components/Service/Service";
import { Testimony } from "@/components/Testimony/Testimony";
import { MediaQuery } from "@/components/utils/MediaQuery";
import PageLayout from "@/components/utils/PageLayout";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <PageLayout>
      <HeroHome />
      <MediaQuery>
        <div className="space-y-28 mt-12">
          <News />
          <Service />
        </div>
      </MediaQuery>
      <div className="mt-28 space-y-28">
        {/* <Map /> */}
        <WhyChoose />
      </div>
      <ProtectionSection />
      <Testimony />
    </PageLayout>
  );
}
