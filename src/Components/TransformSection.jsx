const TransformSection = () => {
  return (
    <div className="bg-linear-to-r from-blue-500 to-purple-500 text-white mt-20 px-4">
      
      <div className="rounded-2xl max-w-300 mx-auto text-center py-12 px-6">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold">
          Ready to Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="mt-3 text-white/90 max-w-xl mx-auto">
          Join thousands of professionals who are already using Digitools to work smarter.
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          
          <button className="px-6 py-3 rounded-lg font-medium bg-white text-black hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="px-6 py-3 rounded-lg font-medium border border-white text-white hover:bg-white/10 transition">
            View Pricing
          </button>
        </div>

        {/* Footer note */}
        <p className="text-sm text-white/80 mt-6">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
      
    </div>
  );
};

export default TransformSection;