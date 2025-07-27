import HeaderBox from "@/components/HeaderBox";
import HeroBox from "@/components/HeroBox";
import PictureBox from "@/components/PictureBox";
import ProjectBox from "@/components/ProjectBox";
import ContactBox from "@/components/ContactBox";
import ExperienceBox from "@/components/ExperienceBox";

export default function Home() {
  return (
    <div className="py-[1.5svh] px-4 text-white">
      <div className="mb-[1.5svh]">
        <HeaderBox />
      </div>
      <div className="flex flex-row gap-[1.5svh]">
        <div className="w-full">
          <div className="flex flex-row gap-[1.5svh] mb-[1.5svh]">
            <HeroBox />
            <PictureBox />
          </div>
          <div className="flex flex-row gap-[1.5svh]">
            <ExperienceBox />
            <ContactBox />
          </div>
        </div>
        <ProjectBox />
      </div>
    </div>
  );
}
