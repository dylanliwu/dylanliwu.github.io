export default function ExperienceBox() {
  return (
    <div className="box w-1/2 flex-col h-[34svh]">
        <h1 className="text-2xl mb-2">Work Experience</h1>
        <div className="flex-col space-y-2 mb-8">
          <div className="flex flex-row justify-between mb-8">
            <p>Software Engineer at Amicare Inc.</p>
            <p>May 2025 - Present</p>
          </div>
          <p>React Native app development. Helping a startup bring their idea for personal health care to life.</p>
        </div>
        <p className="text-center">Read More</p>
    </div>  
  );
}