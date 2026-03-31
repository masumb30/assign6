import { TiTick } from "react-icons/ti";

const pricingPlans = [
    {
        id: 1,
        name: "Starter",
        tagline: "Perfect for getting started",
        price: 0,
        period: "month",
        tag: null,
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
        buttonText: "Get Started Free",
    },
    {
        id: 2,
        name: "Pro",
        tagline: "Best for professionals",
        price: 29,
        period: "month",
        tag: "Most Popular",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
        ],
        buttonText: "Start Pro Trial",
    },
    {
        id: 3,
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: 99,
        period: "month",
        tag: null,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Advanced analytics",
            "Custom branding",
        ],
        buttonText: "Contact Sales",
    },
];


const PricingSection = () => {
    return (
        <div className="max-w-300 mx-auto mt-20 px-4 text-center text-black">

            {/* Heading */}
            <h2 className="text-3xl font-bold">
                Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 mt-2">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                {pricingPlans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`relative p-6 rounded-2xl border bg-white shadow-sm flex flex-col justify-between ${plan.tag ? "border-purple-500 shadow-lg bg-linear-to-r from-purple-500 to-blue-500 text-white" : ""
                            }`}
                    >
                        <div>

                            {/* Tag */}
                            {plan.tag && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs rounded-full bg-linear-to-r from-purple-200 to-blue-200 text-black">
                                    {plan.tag}
                                </span>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-2">
                                {plan.name}
                            </h3>

                            <p className={`text-sm ${plan.tag ? 'text-white' : 'text-gray-700'}mt-1`}>
                                {plan.tagline}
                            </p>

                            {/* Price */}
                            <div className="mt-4 text-3xl font-bold">
                                ${plan.price}
                                    <span className={`text-sm ${plan.tag ? 'text-white' : 'text-gray-700'} font-normal`}>
                                    /{plan.period}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className={`mt-5 space-y-2 text-sm ${plan.tag ? 'text-white' : 'text-gray-700'} text-left`}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <TiTick className="text-green-500"/>

                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        {/* Button */}
                        <button
                            className={`mt-6 w-full py-2 rounded-lg font-medium transition ${plan.tag
                                ? "border border-gray-300 hover:bg-gray-100 bg-white text-black"
                                : "bg-linear-to-r from-purple-500 to-blue-500 text-white"
                                }`}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;