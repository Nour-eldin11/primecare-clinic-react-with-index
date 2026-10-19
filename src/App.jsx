
import { useState } from "react";
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock3, HeartPulse, Menu, Phone, ShieldCheck, Sparkles, Stethoscope, X } from "lucide-react";

const services = [
  { icon: HeartPulse, title: "Primary care", text: "Everyday care, health screenings, and a clear plan for what comes next." },
  { icon: Sparkles, title: "Dermatology", text: "Thoughtful support for skin, hair, and nail health at every age." },
  { icon: Stethoscope, title: "Pediatrics", text: "Friendly, family-centered care from newborn checkups to teen health." },
  { icon: ShieldCheck, title: "Preventive health", text: "Evidence-led assessments designed to catch risks early and keep you well." },
];

const doctors = [
  { initials: "SM", name: "Dr. Sarah Morgan", specialty: "Family Medicine", color: "sage", note: "12 years of experience" },
  { initials: "AK", name: "Dr. Amir Khan", specialty: "Pediatrics", color: "sky", note: "Child & adolescent care" },
  { initials: "EC", name: "Dr. Elena Cruz", specialty: "Dermatology", color: "sand", note: "Medical dermatology" },
];

const faqs = [
  ["Do you accept same-day appointments?", "Yes. A limited number of same-day visits are reserved each weekday. Call us or use the appointment form and choose “Today, if available.”"],
  ["What should I bring to my first visit?", "Please bring a photo ID, insurance card if applicable, your medication list, and any recent reports that may help your clinician."],
  ["Can I reschedule online?", "For now, please call our care team at (555) 014-2273. We will help you find the next suitable time."],
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function submitAppointment(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <div className="topbar">
        <span>Mon–Fri 8:00–18:00 · Sat 9:00–13:00</span>
        <a href="tel:+15550142273"><Phone size={14} /> (555) 014-2273</a>
      </div>

      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="PrimeCare Clinic home">
            <span className="brand-mark"><HeartPulse size={22} /></span>
            <span>PrimeCare<small>CLINIC</small></span>
          </a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#doctors" onClick={() => setMenuOpen(false)}>Doctors</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="button button-small" href="#book" onClick={() => setMenuOpen(false)}>Book a visit</a>
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Care that feels considered</div>
            <h1>Feel better.<br />Live <em>fully.</em></h1>
            <p>Personal, unhurried healthcare for you and your family—with experienced clinicians, modern facilities, and a team that listens.</p>
            <div className="hero-actions">
              <a href="#book" className="button">Book an appointment <ArrowRight size={17} /></a>
              <a href="#services" className="text-link">Explore our services <ArrowRight size={16} /></a>
            </div>
            <div className="trust-row">
              <div><strong>4.9</strong><span>Patient rating</span></div><div><strong>15+</strong><span>Care specialists</span></div><div><strong>8 yrs</strong><span>Serving families</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="A welcoming, modern clinic experience">
            <div className="arch-card">
              <div className="medical-cross"><span /><span /></div><div className="line-art pulse-line">⌁</div>
              <div className="visual-copy"><small>YOUR HEALTH, SIMPLIFIED</small><strong>Care built<br />around you.</strong></div>
            </div>
            <div className="availability-card"><div className="status-dot" /><div><strong>Next available</strong><span>Today · 3:30 PM</span></div><a href="#book" aria-label="Book the next available slot"><ArrowRight size={18} /></a></div>
            <div className="care-badge"><ShieldCheck size={18} /><span><strong>Trusted care</strong>Clear guidance, every step</span></div>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading split-heading"><div><div className="eyebrow"><span /> How we can help</div><h2>Complete care,<br /><em>close to home.</em></h2></div><p>From routine checkups to specialized support, our clinicians work together to give you joined-up care in one welcoming place.</p></div>
          <div className="service-grid">
            {services.map((service, index) => { const Icon = service.icon; return <article className="service-card" key={service.title}><span className="service-number">0{index + 1}</span><Icon size={25} /><h3>{service.title}</h3><p>{service.text}</p><a href="#book">Book this service <ArrowRight size={15} /></a></article>; })}
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-grid">
          <div className="about-visual"><div className="about-panel main-panel"><HeartPulse size={64} strokeWidth={1.25} /><span>Health is personal.<br />Your care should be too.</span></div><div className="about-panel mini-panel"><strong>98%</strong><span>of patients would recommend us*</span></div></div>
          <div className="about-copy"><div className="eyebrow light"><span /> Why PrimeCare</div><h2>Medicine with<br /><em>more humanity.</em></h2><p>Good care starts with being heard. We take time to understand the whole picture, explain your options clearly, and make decisions with you.</p><ul><li><Check size={17} /> Longer appointments when you need them</li><li><Check size={17} /> Coordinated care across specialties</li><li><Check size={17} /> Clear follow-ups, without the jargon</li></ul><a href="#doctors" className="button button-light">Meet our team <ArrowRight size={17} /></a><small className="disclaimer">*Illustrative website content for demonstration purposes.</small></div>
        </div>
      </section>

      <section className="section doctors" id="doctors">
        <div className="container">
          <div className="section-heading centered"><div className="eyebrow"><span /> The people behind your care</div><h2>Doctors who <em>listen.</em></h2><p>Experienced clinicians, brought together by one shared standard: care that is clinical, clear, and genuinely kind.</p></div>
          <div className="doctor-grid">{doctors.map((doctor) => <article className="doctor-card" key={doctor.name}><div className={`doctor-portrait ${doctor.color}`}><span>{doctor.initials}</span><div className="portrait-ring" /></div><div className="doctor-info"><p>{doctor.specialty}</p><h3>{doctor.name}</h3><span>{doctor.note}</span><a href="#book">Request appointment <ArrowRight size={15} /></a></div></article>)}</div>
        </div>
      </section>

      <section className="section booking" id="book">
        <div className="container booking-grid">
          <div className="booking-copy"><div className="eyebrow light"><span /> Start here</div><h2>Your next step<br />to feeling <em>better.</em></h2><p>Tell us a little about what you need. Our care team will call to confirm the right clinician and time for your visit.</p><div className="booking-detail"><CalendarDays /><span><strong>Flexible appointments</strong>Same-day slots often available</span></div><div className="booking-detail"><Clock3 /><span><strong>Quick confirmation</strong>We’ll respond within one business day</span></div></div>
          <div className="form-card">
            {submitted ? <div className="success-message"><span><Check size={30} /></span><h3>Request received</h3><p>Thank you. Our care team will contact you within one business day to confirm your appointment.</p><button className="text-link" onClick={() => setSubmitted(false)}>Send another request</button></div> : <form onSubmit={submitAppointment}>
              <div className="form-heading"><span>Appointment request</span><small>Fields marked * are required</small></div>
              <label>Full name *<input required name="name" placeholder="Your full name" /></label>
              <div className="form-row"><label>Phone number *<input required name="phone" type="tel" placeholder="(555) 000-0000" /></label><label>Email<input name="email" type="email" placeholder="you@email.com" /></label></div>
              <label>How can we help? *<select required name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Primary care</option><option>Pediatrics</option><option>Dermatology</option><option>Preventive health</option><option>Not sure yet</option></select></label>
              <div className="form-row"><label>Preferred day *<input required name="date" type="date" /></label><label>Preferred time<select name="time" defaultValue="Any time"><option>Any time</option><option>Morning</option><option>Afternoon</option></select></label></div>
              <button className="button form-button" type="submit">Request appointment <ArrowRight size={17} /></button><p className="form-note">This form is for routine appointments only. If you have a medical emergency, call your local emergency number.</p>
            </form>}
          </div>
        </div>
      </section>

      <section className="section faq"><div className="container faq-grid"><div className="section-heading"><div className="eyebrow"><span /> Good to know</div><h2>Questions,<br /><em>answered.</em></h2><p>Can’t find what you need? Our care coordinators are one call away.</p><a className="text-link" href="tel:+15550142273"><Phone size={15} /> Call (555) 014-2273</a></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item ${openFaq === index ? "active" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={19} /></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></div></section>

      <footer id="contact"><div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark"><HeartPulse size={22} /></span><span>PrimeCare<small>CLINIC</small></span></a><p>Modern medicine.<br />Human care.</p></div><div><h4>Visit us</h4><p>128 Willow Street<br />Brighton, BN1 4QH</p><a href="#book">Get directions <ArrowRight size={14} /></a></div><div><h4>Contact</h4><a href="tel:+15550142273">(555) 014-2273</a><a href="mailto:hello@primecare.example">hello@primecare.example</a></div><div><h4>Hours</h4><p>Mon–Fri: 8:00–18:00<br />Saturday: 9:00–13:00<br />Sunday: Closed</p></div></div><div className="container footer-bottom"><span>© 2026 PrimeCare Clinic. Demo website.</span><div><a href="#">Privacy</a><a href="#">Accessibility</a></div></div></footer>
    </main>
  );
}
