import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, ArrowRight, Phone, MapPin, Menu, X, Dumbbell, Activity, Users, Music2, Check, Clock3, Star, Instagram, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { gym } from '@/lib/gym';
import interior from '@/assets/unnamed.webp.asset.json';
import weights from '@/assets/unnamed.jpg.asset.json';
import cardio from '@/assets/unnamed_1.jpg.asset.json';
import community from '@/assets/unnamed_1.webp.asset.json';
import people from '@/assets/unnamed_2.webp.asset.json';
import logo from '@/assets/integrity-logo.webp.asset.json';

export const Route = createFileRoute('/')({
 component: Index,
 head: () => ({ meta: [
  { title: 'Integrity Gym | Strength, Cardio & Zumba in Viman Nagar, Pune' },
  { name: 'description', content: 'Train at Integrity Gym in Viman Nagar, Pune. Strength training, cardio, group fitness and Zumba. Open Monday–Saturday, 6 AM–10 PM. Call +91 80071 70068 for membership enquiries.' },
  { property: 'og:title', content: 'Integrity Gym — Viman Nagar, Pune' },
  { property: 'og:description', content: 'A well-equipped gym and supportive fitness community in Viman Nagar. Explore the gym, training programmes and membership enquiries.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ], links: [{ rel: 'canonical', href: '/' }] }),
});

const navigation = [['The gym', '#about'], ['Training', '#training'], ['Gallery', '#gallery'], ['Visit us', '#visit']];
const photos = [
 { url: weights.url, title: 'Strength zone', alt: 'Close-up of the dumbbells at Integrity Gym' },
 { url: cardio.url, title: 'Cardio floor', alt: 'Treadmills beside the windows inside Integrity Gym' },
 { url: people.url, title: 'People of Integrity', alt: 'Two people standing beside the original Integrity Gym sign' },
];
const services = [
 { icon: Dumbbell, name: 'Strength training', copy: 'Free weights and gym equipment for your strength-focused workouts.' },
 { icon: Activity, name: 'Cardio & fitness', copy: 'Build your routine with cardio equipment and a well-equipped workout floor.' },
 { icon: Users, name: 'Group fitness', copy: 'Bring your energy to group workouts in a supportive training atmosphere.' },
 { icon: Music2, name: 'Zumba', copy: 'Move to the music. Add a little rhythm to your fitness routine.' },
];
function Brand() { return <a href="#" className="brand" aria-label="Integrity Gym home"><img src={logo.url} alt="Original Integrity Gym logo" width="40" height="42" /><span className="brand-name">INTEGRITY GYM<span className="brand-tag">UNITED TO FITNESS</span></span></a>; }
function Stars() { return <span className="stars" aria-label="Five stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} size={13} fill="currentColor" />)}</span>; }
function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [enquiryOpen, setEnquiryOpen] = useState(false);
 const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
 const mapKey = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY'];
 const selected = selectedPhoto === null ? null : photos[selectedPhoto];
 return <>
  <header className="site-header"><div className="shell header-inner"><Brand /><nav className="nav-desktop" aria-label="Main navigation">{navigation.map(([name, href]) => <a className="nav-link" key={href} href={href}>{name}</a>)}<Button variant="gym" size="cta" onClick={() => setEnquiryOpen(true)}>Enquire now <ArrowUpRight /></Button></nav><Button className="menu-toggle" variant="ghost" size="icon" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>{menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}<a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a></nav>}</header>
  <main>
   <section className="hero"><img className="hero-photo" src={interior.url} alt="The strength training floor at Integrity Gym, Viman Nagar, with dumbbell racks and workout equipment" fetchPriority="high" /><div className="shell hero-content"><div className="eyebrow">Viman Nagar · Pune</div><h1>Integrity<span>Gym.</span></h1><p className="hero-subtitle">Show up. Get stronger.</p><p className="hero-copy">Your space to build strength, find your rhythm and keep moving. Right here in Viman Nagar.</p><div className="hero-actions"><Button variant="gym" size="cta" onClick={() => setEnquiryOpen(true)}>Enquire about membership <ArrowUpRight /></Button><Button variant="gymOutline" size="cta" asChild><a href={gym.call}><Phone /> Call the gym</a></Button></div><a className="hero-rating" href={gym.directions} target="_blank" rel="noopener noreferrer"><Stars /><span><strong>4.9 / 5</strong> · 493 Google reviews</span></a></div><span className="hero-caption">Real space. Real progress.</span></section>
   <div className="quick-strip"><div className="shell quick-inner"><div className="quick-item"><MapPin /><div>Viman Nagar, Pune<small>Your neighbourhood fitness centre</small></div></div><div className="quick-item"><Clock3 /><div>6:00 AM – 10:00 PM<small>Monday to Saturday</small></div></div><div className="quick-item"><Users /><div>Find your fitness community<small>Strength · Cardio · Group classes</small></div></div></div></div>
   <section id="training" className="section shell"><div className="section-heading"><div><div className="eyebrow">Find your movement</div><h2>Different goals.<br />One place to train.</h2></div><p className="section-copy">From your first workout to your next challenge, make room for the training that feels right for you.</p></div><div className="services-grid">{services.map(({ icon: Icon, name, copy }, i) => <article className="service" key={name}><div className="service-top"><Icon size={26} strokeWidth={1.5} /><span>0{i + 1}</span></div><h3>{name}</h3><p>{copy}</p></article>)}</div></section>
   <section id="about" className="section community"><div className="shell community-grid"><img className="community-photo" src={community.url} alt="The Integrity Gym community together on the workout floor in Viman Nagar" loading="lazy" width="822" height="370" /><div className="community-text"><div className="eyebrow">United to fitness</div><h2>A gym with<br />a sense of belonging.</h2><p className="section-copy">A well-equipped space. A supportive atmosphere. People who show up, just like you. Integrity Gym brings fitness and community together in Viman Nagar.</p><ul className="checklist"><li><Check /> Fitness guidance for your workout journey</li><li><Check /> Strength, cardio and group fitness</li><li><Check /> Shower and restroom facilities</li></ul><a className="text-link" href="#visit">Come meet us <ArrowRight size={16} /></a></div></div></section>
   <section id="gallery" className="section shell"><div className="section-heading"><div><div className="eyebrow">Inside Integrity</div><h2>Your next workout starts here.</h2></div><a className="text-link" href={gym.instagram} target="_blank" rel="noopener noreferrer">More on Instagram <ArrowUpRight size={16} /></a></div><div className="gallery-grid">{photos.map((photo, i) => <Button key={photo.title} variant="photo" size="photo" className="gallery-item" onClick={() => setSelectedPhoto(i)} aria-label={`View ${photo.title} photo`}><img src={photo.url} alt={photo.alt} loading="lazy" /><div className="gallery-caption"><span>{photo.title}</span><Plus size={20} /></div></Button>)}</div></section>
   <section id="membership" className="section membership"><div className="shell membership-inner"><div><div className="eyebrow">Make your next move</div><h2>Your goals.<br />Your membership.</h2></div><div className="membership-details"><h3>Let’s find your fit.</h3><p>Speak with our team about current membership plans, pricing and class schedules. Interested in personal training? Ask about current availability.</p><Button variant="gym" size="cta" onClick={() => setEnquiryOpen(true)}>Explore membership <ArrowUpRight /></Button></div></div></section>
   <section className="rating-section shell" aria-label="Google Business Profile rating"><div className="eyebrow">Our community on Google</div><div className="rating-value">{gym.rating}<span className="text-muted-foreground text-3xl"> / 5</span></div><Stars /><p>Rated by {gym.reviews} reviewers on Google.</p><a className="text-link" href={gym.directions} target="_blank" rel="noopener noreferrer">View our Google profile <ArrowUpRight size={16} /></a><small>Rating and review count from the supplied business profile; may change.</small></section>
   <section id="visit" className="section location"><div className="shell location-grid"><div><div className="eyebrow">In your neighbourhood</div><h2>See you at the gym.</h2><address className="address">{gym.address}</address><a className="contact-line" href={gym.call}><Phone />{gym.phone}</a><a className="text-link" href={gym.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16} /> @integritygympune <ArrowUpRight size={15} /></a><div className="hours"><h3>Opening hours</h3><div className="hours-row"><span>Monday – Saturday</span><span>6:00 AM – 10:00 PM</span></div><div className="hours-row"><span>Sunday</span><span>Closed</span></div></div></div><div><div className="map-frame">{mapKey ? <iframe title="Integrity Gym location in Viman Nagar, Pune" src={`https://www.google.com/maps/embed/v1/place?key=${mapKey}&q=${encodeURIComponent(gym.address + ', Integrity Gym')}`} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <a className="text-link p-6" href={gym.directions} target="_blank" rel="noopener noreferrer"><MapPin /> View Integrity Gym on Google Maps <ArrowUpRight /></a>}</div><div className="map-footer"><span>Above Shri Krishna Hotel · 2nd Floor</span><a href={gym.directions} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight size={15} /></a></div></div></div></section>
  </main>
  <footer className="footer"><div className="shell"><div className="footer-top"><Brand /><nav className="footer-nav" aria-label="Footer navigation"><a className="nav-link" href="#training">Training</a><a className="nav-link" href="#membership">Membership</a><a className="nav-link" href="#visit">Visit us</a><a href={gym.instagram} aria-label="Integrity Gym on Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a></nav></div><div className="footer-bottom"><span>© 2026 Integrity Gym. All rights reserved.</span><span>Viman Nagar, Pune · United to fitness</span></div></div></footer>
  <div className="mobile-actions"><Button variant="gymOutline" asChild><a href={gym.call}><Phone /> Call</a></Button><Button variant="gym" onClick={() => setEnquiryOpen(true)}>Enquire <ArrowUpRight /></Button><Button variant="gymOutline" asChild><a href={gym.directions} target="_blank" rel="noopener noreferrer"><MapPin /> Directions</a></Button></div>
  <Dialog open={enquiryOpen} onOpenChange={setEnquiryOpen}><DialogContent className="enquiry-dialog"><DialogTitle>Let’s get you moving.</DialogTitle><DialogDescription>Contact Integrity Gym for current membership prices, class schedules, personal training availability or to arrange a visit.</DialogDescription><div className="enquiry-options"><Button variant="gym" size="cta" asChild><a href={gym.call}><span>Call {gym.phone}</span><Phone /></a></Button><Button variant="gymOutline" size="cta" asChild><a href={gym.instagram} target="_blank" rel="noopener noreferrer"><span>Message us on Instagram</span><Instagram /></a></Button></div><p className="text-xs text-muted-foreground">Monday–Saturday · 6:00 AM–10:00 PM<br />2nd Floor, above Shri Krishna Hotel, Viman Nagar.</p></DialogContent></Dialog>
  <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelectedPhoto(null); }}><DialogContent className="photo-lightbox"><DialogTitle>{selected?.title ?? 'Inside Integrity Gym'}</DialogTitle><DialogDescription className="sr-only">A real photograph from Integrity Gym, Viman Nagar.</DialogDescription>{selected && <img src={selected.url} alt={selected.alt} />}</DialogContent></Dialog>
 </>;
}
