import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy, Minus, Plus, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrolly } from "../hooks/use-reveal";
import campusImage from "../assets/campus-growth.jpg";
import nxtwaveLogo from "../assets/nxtwave-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The 500-Student Experiment — NxtWave Growth Challenge" },
      { name: "description", content: "A seven-day growth experiment to bring 500 engineering students to NxtWave's free AI project workshop with a ₹2,000 budget. The strategy, the numbers, and the decisions behind it." },
      { property: "og:title", content: "The 500-Student Experiment — NxtWave Growth Challenge" },
      { property: "og:description", content: "A seven-day, ₹2,000 growth experiment for 500 engineering student registrations. Explore the campaign, budget and real message asset." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const channels = [
  { id: "01", name: "The trusted forward", source: "WhatsApp communities", target: "300", detail: "Ten student ambassadors share a 45-word message and a 15-second project demo into relevant class, placement and coding groups. One person-to-person recommendation beats another paid impression.", action: "10 ambassadors × 8–10 relevant groups", tag: "FIRST MOVE" },
  { id: "02", name: "Borrowed credibility", source: "Clubs & placement cells", target: "150", detail: "Pitch 30 coding clubs and placement coordinators with a short, co-branded invitation. An official college broadcast makes the opportunity feel worth opening.", action: "30 targeted pitches, not a mass email", tag: "TRUST LAYER" },
  { id: "03", name: "The second wave", source: "Student referrals", target: "50", detail: "Give every registrant an easy-to-forward invite. Keep the ask simple: bring a friend who also wants a first AI project. Track attributed signups, not just shares.", action: "One message · one link · one friend", tag: "MULTIPLIER" },
];

const messageVariants = [
  { label: "The project", text: "Still need an AI project for your resume? NxtWave is running a free 60-minute workshop where you'll build your first one. No prior AI experience needed. I'm joining — want the link? [WORKSHOP LINK]" },
  { label: "The interview", text: "If an interviewer asked to see your AI project tomorrow, what would you show? Build your first one in NxtWave's free 60-minute workshop. I'm signing up too. Here's the link: [WORKSHOP LINK]" },
  { label: "The friend", text: "Found a free NxtWave workshop to build your first AI project in just 60 minutes. Thought of you because we're both trying to add something real to our resumes. Join me? [WORKSHOP LINK]" },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span className="section-label-index">{number}</span><span>{children}</span></div>;
}

function Index() {
  useScrolly();
  const [selectedMessage, setSelectedMessage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [ambassadorSpend, setAmbassadorSpend] = useState(800);
  const videoSpend = 1400 - ambassadorSpend;
  const ambassadorCount = Math.floor(ambassadorSpend / 80);
  const remaining = 2000 - ambassadorSpend - videoSpend - 400;

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(messageVariants[selectedMessage]?.text ?? "");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main>
      <div id="scroll-progress" aria-hidden="true" />
      <nav className="site-nav" aria-label="Page navigation">
        <a href="#top" className="nav-mark" aria-label="Back to top">
          <img src={nxtwaveLogo} alt="NxtWave Logo" className="h-8 w-auto object-contain bg-white p-1 rounded-sm" />
          <span className="hidden sm:inline">THE GROWTH FILE</span>
        </a>
        <span className="nav-center hidden md:inline">NXTWAVE / GROWTH INTERN CHALLENGE</span>
        <a href="#playbook" className="nav-link">EXPLORE THE PLAN <ArrowUpRight size={15} /></a>
      </nav>

      <header id="top" className="hero">
        <img className="hero-image" src={campusImage} width={1600} height={1000} alt="Engineering students sharing something on a phone in a campus corridor" />
        <div className="hero-shade" />
        <div className="hero-topline"><span>FIELD NOTES / 001</span><span>GROWTH CHALLENGE · ROUND 1</span></div>
        <div className="hero-content">
          <p className="hero-eyebrow"><span className="signal-dot" /> THE 500-STUDENT EXPERIMENT</p>
          <h1><span>500</span> students.<br /><span>7</span> days.<br /><em>₹2,000.</em></h1>
          <p className="hero-sub">One free workshop. One small budget. A plan to turn student trust into momentum.</p>
          <a className="hero-scroll" href="#brief">OPEN THE FIELD NOTES <ArrowDown size={17} /></a>
        </div>
        <div className="hero-side">A PROPOSED PLAN — NOT REPORTED RESULTS</div>
      </header>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">{Array.from({length: 4}, (_, i) => <span key={i}>BUILD YOUR FIRST AI PROJECT IN 60 MINUTES <b>✳</b> 500 STUDENTS <b>✳</b> 7 DAYS <b>✳</b> ₹2,000 <b>✳</b> </span>)}</div></div>

      <section id="brief" className="brief-section section-pad">
        <div className="page-shell">
          <SectionLabel number="00 / THE BRIEF">WHAT WE'RE SOLVING</SectionLabel>
          <div className="brief-grid">
            <h2 className="display-heading reveal">Don't buy<br />attention.<br /><i>Earn a forward.</i></h2>
            <div className="brief-aside reveal">
              <p>NxtWave wants <strong>500 final-year engineering students</strong> to register for a free online workshop: “Build Your First AI Project in 60 Minutes.” The window is seven days. The budget is ₹2,000.</p>
              <p>My bet: the message travels further when it comes from someone a student already knows.</p>
              <div className="hypothesis"><span>THE HYPOTHESIS</span><p>Trust is the distribution channel.</p></div>
            </div>
          </div>
          <div className="metric-strip reveal"><div><strong>500</strong><span>REGISTRATION TARGET</span></div><div><strong>07</strong><span>DAYS TO ACT</span></div><div><strong>₹2K</strong><span>TOTAL BUDGET</span></div><div><strong>₹4</strong><span>TARGET COST / REGISTRATION</span></div></div>
        </div>
      </section>

      <section id="student" className="student-section section-pad">
        <div className="page-shell">
          <SectionLabel number="01 / THE HUMAN">START WITH A PERSON</SectionLabel>
          <div className="student-grid">
            <div className="reveal"><p className="overline">NOT EVERY STUDENT. THIS STUDENT.</p><h2 className="student-quote">“I don't need another course. I need <em>one project</em> I can show by Monday.”</h2><p className="quote-caption">A working student insight, not a research quote.</p></div>
            <div className="student-notes reveal"><div><span>WHO</span><p>Final-year CSE, IT and ECE students at tier-2/3 colleges, starting with Hyderabad, Bengaluru, Chennai and Vijayawada.</p></div><div><span>THE PRESSURE</span><p>Placement season is approaching. Their resumes list the same skills; they want proof they can actually build something.</p></div><div><span>THE TRIGGER</span><p>Free, doable in 60 minutes, and immediately useful in an interview. The promise is a finished first project — not more theory.</p></div></div>
          </div>
        </div>
      </section>

      <section id="playbook" className="playbook-section section-pad">
        <div className="page-shell">
          <SectionLabel number="02 / THE PLAYBOOK">A PLAN THAT FITS THE CONSTRAINT</SectionLabel>
          <div className="section-intro reveal"><h2 className="display-heading">Three moves.<br /><i>Not twenty.</i></h2><p>Prioritize by likely cost per verified registration. Run the human channels first; use paid reach only to support the message that works.</p></div>
          <div className="channel-list">{channels.map((channel) => <article className="channel-row reveal" key={channel.id}><span className="channel-index">{channel.id}</span><div className="channel-body"><span className="overline">{channel.tag} / {channel.source}</span><h3>{channel.name}</h3><p>{channel.detail}</p><small>{channel.action}</small></div><div className="channel-target"><strong>{channel.target}</strong><span>PLANNED<br />REGISTRATIONS</span></div></article>)}</div>
          <div className="funnel-note reveal"><span>THE SANITY CHECK</span><p>25,000 relevant impressions <span>→</span> ~3,500 visits <span>→</span> ~500 registrations</p><small>Planning assumptions: ~14% click-through and ~14% visit-to-registration. Measure actuals daily; these are targets, not outcomes.</small></div>
        </div>
      </section>

      <section id="asset" className="asset-section section-pad">
        <div className="page-shell">
          <SectionLabel number="03 / THE ASSET">SOMETHING YOU CAN ACTUALLY USE</SectionLabel>
          <div className="section-intro reveal"><h2 className="display-heading">The message<br /><i>is the medium.</i></h2><p>A sample forwardable message, written for the channel where this campaign begins. Switch the angle. Copy the draft. Replace the placeholder with the real workshop link before sending.</p></div>
          <div className="asset-workspace reveal">
            <div className="asset-controls"><div><span className="overline">MESSAGE LAB / 01</span><h3>Pick the hook</h3></div><div className="message-tabs" role="tablist" aria-label="Message angle">{messageVariants.map((item, index) => <Button type="button" key={item.label} variant={selectedMessage === index ? "default" : "outline"} className="message-tab" role="tab" aria-selected={selectedMessage === index} onClick={() => { setSelectedMessage(index); setCopied(false); }}>{item.label}</Button>)}</div></div>
            <div className="message-stage"><div className="message-meta"><span>FORWARD DRAFT</span><span>WHATSAPP / STUDENT-TO-STUDENT</span></div><p key={selectedMessage} className="message-copy">{messageVariants[selectedMessage]?.text}</p><div className="message-footer"><span>SHORT. PERSONAL. ONE CLEAR ACTION.</span><Button onClick={copyMessage} className="copy-button">{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? "COPIED" : "COPY DRAFT"}</Button></div></div>
          </div>
          <p className="asset-disclaimer">This is a campaign draft, not a live registration or referral system. No student data is collected here.</p>
        </div>
      </section>

      <section id="budget" className="budget-section section-pad">
        <div className="page-shell">
          <SectionLabel number="04 / THE MONEY">EVERY RUPEE NEEDS A JOB</SectionLabel>
          <div className="section-intro reveal"><h2 className="display-heading">₹2,000.<br /><i>No magic.</i></h2><p>Spend most of it helping the human distribution work. Adjust the split below; the total stays fixed.</p></div>
          <div className="budget-layout reveal"><div className="budget-visual"><div className="budget-total">₹2,000 <span>FIXED BUDGET</span></div><div className="budget-meter" aria-label="Budget allocation"><div className="budget-segment ambassadors" style={{ flexGrow: ambassadorSpend }} /><div className="budget-segment video" style={{ flexGrow: videoSpend }} /><div className="budget-segment prize" style={{ flexGrow: 400 }} /><div className="budget-segment buffer" style={{ flexGrow: remaining }} /></div><p className="budget-hint">₹2,000 ÷ 500 target registrations = <strong>₹4 target cost per registration.</strong> This is a goal, not a guaranteed result.</p></div><div className="budget-lines"><div className="budget-line"><div><span className="budget-swatch ambassadors" /><strong>Ambassador fuel</strong><small>₹80 mobile recharge per active ambassador</small></div><div className="budget-stepper"><Button variant="outline" size="icon" aria-label="Decrease ambassador budget" disabled={ambassadorSpend <= 400} onClick={() => setAmbassadorSpend(v => v - 80)}><Minus size={16} /></Button><b>₹{ambassadorSpend}</b><Button variant="outline" size="icon" aria-label="Increase ambassador budget" disabled={ambassadorSpend >= 1200} onClick={() => setAmbassadorSpend(v => v + 80)}><Plus size={16} /></Button></div></div><div className="budget-line"><div><span className="budget-swatch video" /><strong>Demo video boost</strong><small>Small paid test, only after organic copy shows traction</small></div><b>₹{videoSpend}</b></div><div className="budget-line"><div><span className="budget-swatch prize" /><strong>Top ambassador prize</strong><small>Reward for verified registrations, not group spam</small></div><b>₹400</b></div><div className="budget-line"><div><span className="budget-swatch buffer" /><strong>Contingency</strong><small>Redirect to the lowest-cost channel on day three</small></div><b>₹{remaining}</b></div><div className="budget-summary"><span>AT THIS SPLIT: UP TO {ambassadorCount} AMBASSADORS FUNDED</span><Button variant="ghost" size="icon" aria-label="Reset budget split" title="Reset budget split" onClick={() => setAmbassadorSpend(800)}><RotateCcw size={16} /></Button></div></div></div>
        </div>
      </section>

      <section id="timeline" className="timeline-section section-pad"><div className="page-shell"><SectionLabel number="05 / THE CLOCK">SEVEN DAYS, NOT SEVEN WEEKS</SectionLabel><div className="section-intro reveal"><h2 className="display-heading">Ship. Measure.<br /><i>Correct course.</i></h2><p>A campaign only matters if someone knows what to do tomorrow morning.</p></div><div className="timeline-grid reveal">{[{day:"D01",title:"Set the baseline",text:"Finalize message, workshop link, tracking tags and 15-second demo. Line up ambassadors."},{day:"D02–03",title:"Launch the trusted channels",text:"Seed relevant groups, contact 30 clubs and placement cells. Watch unique visits and verified registrations."},{day:"D04–05",title:"Follow the signal",text:"Cut weak copy, boost the best-performing message and redirect the remaining spend."},{day:"D06–07",title:"Close the loop",text:"Send honest reminders, check duplicate signups and report cost per verified registration."}].map(item => <div className="timeline-item" key={item.day}><span>{item.day}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div></div></section>

      <section id="judgment" className="judgment-section section-pad"><div className="page-shell"><SectionLabel number="06 / THE JUDGMENT">WHAT AI DIDN'T DECIDE</SectionLabel><div className="section-intro reveal"><h2 className="display-heading">The best idea<br />was <i>what I cut.</i></h2><p>AI helped generate options and draft copy. It didn't decide which ideas deserved seven scarce days.</p></div><div className="judgment-list reveal"><div><span>01 / CHANNEL SPRAWL</span><p>AI suggested SEO, LinkedIn, webinars and more. I chose three channels with a direct path to students instead of pretending I could execute twenty.</p></div><div><span>02 / FAKE URGENCY</span><p>AI suggested countdowns and “only 23 seats left.” I rejected invented scarcity. Trust is hard to earn and easy to spend.</p></div><div><span>03 / POLISHED-BUT-DEAD COPY</span><p>AI wrote long, formal forwards. I cut them down to something a student might actually send to a friend.</p></div></div><div className="closing-thought reveal"><span>IF I HAD ONE MORE DAY</span><p>I'd test the three message angles with actual students, keep the one they naturally forward, and replace every assumption above with observed data.</p></div></div></section>

      <footer className="finale"><div className="page-shell"><span className="overline">NXTWAVE GROWTH INTERN / ROUND 1</span><h2>Less pitch.<br /><i>More proof.</i></h2><div className="finale-bottom"><p>A concrete plan for a very real constraint.<br />500 registrations are the target. The work starts with the first forward.</p><a href="https://forms.gle/xEtJSgJfeqvnxv8q6" target="_blank" rel="noreferrer" className="submission-link">OPEN SUBMISSION FORM <ArrowUpRight size={20} /></a></div><div className="footer-line"><span>THE 500-STUDENT EXPERIMENT</span><a href="#top">BACK TO TOP ↑</a></div></div></footer>
    </main>
  );
}
