import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
        <div className="flex items-center justify-center">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                {/* Hidden in Dark Mode */}
                <Image
                    src="/documents.png"
                    fill
                    className="object-contain dark:hidden"
                    alt="documents"
                />
                {/* Hidden in Light Mode */}
                <Image
                    src="/documents-dark.png"
                    fill
                    className="object-contain hidden dark:block"
                    alt="documents"
                />
            </div>
            <div className="relative w-[400px] h-[400px] hidden md:block">
                {/* Hidden in Dark Mode */}
                <Image
                    src="/reading.png"
                    fill
                    className="object-contail dark:hidden"
                    alt="reading"
                />
                {/* Hidden in Light Mode */}
                <Image
                    src="/reading-dark.png"
                    fill
                    className="object-contail hidden dark:block"
                    alt="reading"
                />
            </div>
        </div>
    </div>
  );
};

export default Hero;
