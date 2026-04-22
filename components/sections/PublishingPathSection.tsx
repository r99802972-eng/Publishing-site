export default function PublishingPathSection() {
  const steps = [
    {
      step: "Step 1",
      title: "Submit Your Manuscript",
      description: "Send us your completed manuscript, and tell us your goals. Don't have a manuscript? Ask about our writing services."
    },
    {
      step: "Step 2",
      title: "Editing & Design",
      description: "Our experts dive in with full professional editing, followed by premium book cover and interior design to make it shine."
    },
    {
      step: "Step 3",
      title: "Publishing & Distribution",
      description: "We handle the ISBNs, barcodes, and digital formatting, making your book available globally across major retailers."
    },
    {
      step: "Step 4",
      title: "Marketing Strategy",
      description: "Our marketing team launches your book into the world with dedicated campaigns, ensuring your work reaches the right audience."
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-pad flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-16 text-center">
          The Publishing Path, Simplified
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-8 border border-[#FE7028]/30 rounded-lg shadow-sm hover:shadow-xl transition-shadow bg-white mt-6">
              {/* Step Badge */}
              <div className="absolute -top-5 bg-[#FE7028] text-white font-bold px-6 py-2 rounded-full uppercase tracking-wider text-sm shadow-md">
                {item.step}
              </div>
              <h3 className="font-display font-semibold text-xl text-gray-900 mt-6 mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
