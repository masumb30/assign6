const steps = [
  {
    number: "01",
    title: "Create Account",
    image: "user.png",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    title: "Choose Products",
    image: "package.png",
    description:
      "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    title: "Start Creating",
    image: "rocket.png",
    description:
      "Download and start using your premium tools immediately.",
  },
];

const StepsSection = () => {
  return (
    <div className="max-w-300 mx-auto mt-16 px-4 text-center text-black">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold">
        Get Started in 3 Steps
      </h2>
      <p className="text-gray-600 mt-2">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {steps.map((step) => (
          <div
            key={step.number}
            className="p-6 rounded-xl   shadow-sm hover:shadow-md transition"
          >
            {/* Number */}
            <div className="text-right">
              <span className="inline-block bg-linear-to-r from-purple-600 to-blue-600 rounded-full p-2 text-white">{step.number}</span>
            </div>
            <div className="flex justify-center">
                <img className="h-10 w-10" src={`/${step.image}`} alt="" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;