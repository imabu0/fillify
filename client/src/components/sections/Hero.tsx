import LightRays from "../animations/LightRays";

export default function Hero() {
  return (
    <div className="relative h-[100vh]">
      {/* ✅ Light rays as a full background */}
      <div className="absolute inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays w-full h-full"
        />
      </div>

      {/* ✅ Content stays on top */}
      <div className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center flex-col gap-3 text-center">
          <p className="px-4 py-2 border-[1px] border-[#ECECEC] rounded-4xl inline font-light">
            Making fillable to editing it
          </p>
          <h1 className="text-7xl font-medium">
            Modern Solution <br /> for the Modern World
          </h1>
          <p>
            Make any non-fillable pdf into a fillable pdf, and edit any pdf for
            free
          </p>
        </div>
      </div>
    </div>
  );
}
