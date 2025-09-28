"use client"

export function IntegrationsSection() {
  const integrations = [
    {
      name: 'Cal.com',
      logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbac0dbcc4a60be5d0f55_67282f3b7c6bc502a2e3794a_67282c38d51824fcbb3257ad_android-chrome-512x512-5.png?',
      href: 'https://www.buddhistvoice.com/integrations/cal-com',
    },
    {
      name: 'n8n',
      logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbae2170637295756f2c1_67282f39268b30b9783711be_671ed0ce997520a67a970b7f_cropped-favicon-n8n-6.png?',
      href: 'https://www.buddhistvoice.com/integrations/n8n',
    },
    {
      name: 'GoHighLevel',
      logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbacb49d95fc1b99d1b2f_67282f398c83e7e1c6eb2576_671ec51b420cf850293256f4_16953064057414655210067262582862-1.svg?',
      href: 'https://www.buddhistvoice.com/integrations/go-high-level',
    },
    {
      name: 'Twilio',
      logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/svgs/675cbaed5e654042b0686ec1_671ec08aca514c4d553d7b83_twilio%20(1)-2.svg?',
      href: 'https://www.buddhistvoice.com/integrations/twillio',
    },
    {
      name: 'Vonage',
      logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/icons/675cbafe8d435798c4aacc8a_67282f36b8f9310bbd233ab1_6720735630c9d0df8f3ca879_vonage-7.png?',
      href: 'https://www.buddhistvoice.com/integrations/vonage',
    },
    {
      name: 'OpenAI',
      logoUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d88d3dca-f6e2-4980-ad64-cb2afe19a91e-retellai-com/assets/images/675cbb17056208a12365db4e_67282f3ab3a3615fe88a4af9_671ec93b0923ab9360558876_openai-chatgpt-logo-icon-free-png-5.webp?',
      href: 'https://www.buddhistvoice.com/integrations/custom-llm',
    },
  ]

  // Duplicate the integrations array to create seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations]

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Seamlessly Integrate with your tech stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With native and external connectivity to any CRM, telephony, automation platform, 
            and database, building and deploying phone agents has never been easier.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Horizontal scrolling container */}
          <div className="flex animate-horizontal-scroll">
            {duplicatedIntegrations.map((integration, index) => (
              <a
                key={`${integration.name}-${index}`}
                href={integration.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 mx-4 min-w-max"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center">
                    <img
                      src={integration.logoUrl}
                      alt={`${integration.name} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="6" fill="#3b82f6"/>
                            <text x="16" y="20" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">${integration.name.charAt(0)}</text>
                          </svg>
                        `)}`
                      }}
                    />
                  </div>
                  <span className="text-foreground font-semibold text-lg">
                    {integration.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}