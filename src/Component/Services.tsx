import { Card, CardContent } from "./UI/Card";

const services = [
  {
    icon: "🚀",
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "React & Next.js",
      "Node.js Backend",
      "Mobile-First Design",
      "Performance Optimization",
    ],
  },
  {
    icon: "⚙️",
    title: "CMS Solutions",
    description:
      "Powerful content management systems that give you complete control over your digital content with ease.",
    features: [
      "Headless CMS",
      "Custom Admin Panels",
      "Content Strategy",
      "Multi-platform Publishing",
    ],
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that amplify your brand presence and drive measurable business growth.",
    features: [
      "SEO Optimization",
      "Social Media Strategy",
      "Analytics & Insights",
      "Conversion Optimization",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#E6FFFF]">
            Our <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive digital solutions that transform your
            vision into reality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group glass-strong border-primary-20 hover:border-primary-40 transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gradient-cyan">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 glow-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
