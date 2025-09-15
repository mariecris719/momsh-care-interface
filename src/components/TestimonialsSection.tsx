import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "Amazing quality products! My baby loves everything we've ordered. Fast shipping and excellent customer service.",
    location: "Manila"
  },
  {
    id: 2,
    name: "Maria C.",
    rating: 5,
    comment: "I love that they curate only the best products for moms like us. The baby clothes are so soft and comfortable.",
    location: "Cebu"
  },
  {
    id: 3,
    name: "Anna L.",
    rating: 5,
    comment: "Better Momsh has been my go-to for all baby essentials. Everything arrives exactly as described and the packaging is beautiful.",
    location: "Davao"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-soft-rose/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-burgundy mb-4">
            What Parents Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Real feedback from our amazing community of moms
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-soft-rose/20 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-soft-rose text-soft-rose' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                <div className="text-sm">
                  <p className="font-medium text-deep-burgundy">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;