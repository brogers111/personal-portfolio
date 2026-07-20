import { useMemo, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLocationDot,
  faGraduationCap,
  faGlobe,
  faTrophy,
  faStar,
  faQuoteLeft,
  faArrowRight,
  faBasketballBall,
  faHand,
  faLaptop,
  faBolt,
  faBrain,
  faPersonRunning,
} from '@fortawesome/free-solid-svg-icons'
import { faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'
import heroImage from '../assets/training-photos/hero-image.png'
import mapImage from '../assets/training-photos/map.png'
import venmoQr from '../assets/training-photos/venmo-qrcode.jpg'
import paypalQr from '../assets/training-photos/paypal-qrcode.jpg'
import marymountLogo from '../assets/logos/mu-logo.png'
import facilityImage from '../assets/training-photos/court2.png'
import intlCoaching1 from '../assets/training-photos/intl-coaching1.jpg'
import trainingHeadshot from '../assets/training-photos/training-headshot.png'
import extendedLogo from '../assets/training-photos/extended-logo.png'
import comingSoonImage from '../assets/training-photos/coming-soon.png'

const TIKTOK_URL = 'https://www.tiktok.com/@brandon11rogers'
const INSTAGRAM_URL = 'https://www.instagram.com/barnworktraining/'
const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=5706+Tabor+St,+Arvada,+CO+80002'
const EMAIL_HREF = 'mailto:contact@brandonrogersconsulting.com'

type GroupSize = 1 | 2 | 3

type BundleOption = {
  value: number
  label: string
  subLabel: string
  discount: number
}

const groupRates: Record<GroupSize, number> = {
  1: 60,
  2: 40,
  3: 32,
}

const groupLabels: Record<GroupSize, string> = {
  1: 'Solo',
  2: 'Duo',
  3: 'Small group',
}

const bundleOptions: BundleOption[] = [
  { value: 1, label: '1x', subLabel: 'Single session', discount: 0 },
  { value: 4, label: '4x', subLabel: '5% off', discount: 0.05 },
  { value: 8, label: '8x', subLabel: '10% off', discount: 0.1 },
  { value: 12, label: '12x', subLabel: '15% off', discount: 0.15 },
]

const heroChips = [
  { label: 'Shooting', icon: faBasketballBall },
  { label: 'Ball Handling', icon: faHand },
  { label: 'Film Review', icon: faLaptop },
  { label: 'Explosiveness', icon: faBolt },
  { label: 'Game IQ', icon: faBrain },
  { label: 'Conditioning', icon: faPersonRunning },
]

const marqueeItems = [
  'SHOOTING MECHANICS',
  'BALL HANDLING',
  'FILM REVIEW',
  'EXPLOSIVENESS',
  'COLLEGE RECRUITING',
  'GAME IQ',
  'SHOT SPEED',
]

const stats = [
  { value: '8+', label: 'Years Coaching' },
  { value: '900+', label: 'Athletes Trained' },
  { value: '8', label: 'Countries Coached In' },
  { value: 'DIII-DI', label: 'Training Experience' },
]

const tabs = [
  { label: 'Facility', href: '#about' },
  { label: 'Training', href: '#program' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Availability & Directions', href: '#directions' },
  { label: 'Testimonials', href: '#results' },
]

const aboutPhotos = [
  { src: heroImage, alt: 'The private half-court training facility', title: 'The facility', caption: "A private half-court built for working hard in silence" },
  { src: intlCoaching1, alt: 'Working on ball handling with a youth training group', title: '8 years of coaching experience', caption: 'From middle schoolers in Japan to DI athletes in the US' },
]

const bentoTopPhotos = [
  { src: comingSoonImage, alt: 'coming soon', tag: 'SHOOTING', className: 'sm:col-span-2 sm:row-span-2' },
  { src: comingSoonImage, alt: 'coming soon', tag: 'DYNAMIC WARM UP', className: '' },
  { src: comingSoonImage, alt: 'coming soon', tag: 'CONDITIONING', className: '' },
]

const bentoBottomPhotos = [
  { src: comingSoonImage, alt: 'coming soon', tag: 'FILM REVIEW' },
  { src: comingSoonImage, alt: 'coming soon', tag: 'BALL HANDLING' },
]

const workoutItems = [
  { name: 'Dynamic Warmup', reps: '' },
  { name: 'Wall Line Shots w/ Pump Fake', reps: '20 reps' },
  { name: '1 Arm Up & Outs', reps: '5 makes @ 5 spots' },
  { name: 'Side Float Dribble Pickups L + R', reps: '5 makes @ 5 spots both sides' },
  { name: "Slide Middy's L + R", reps: '5 makes @ 5 spots both ways' },
  { name: "Single Leg Horizontal Leap Middy's L + R", reps: '5 makes @ 5 spots both ways' },
  { name: "Catch & Shoot 3's", reps: '5 makes @ 5 spots' },
  { name: "Quick Turn Catch & Shoot 3's", reps: '5 makes @ 5 spots' },
  { name: "Downscreen 3's", reps: '5 makes @ 3 spots both ways' },
  { name: "Flare Screen 3's", reps: '5 makes @ 3 spots both ways' },
  { name: "Don't Drop Your Hands Finisher", reps: '50 swishes' },
]

const credentials = [
  {
    icon: faGlobe,
    title: 'Camps and training across eight countries',
    description: 'Has run camps and trained athletes in the United States, Japan, Thailand, South Korea, China, Guam, Colombia, and Ecuador.',
  },
  {
    icon: faTrophy,
    title: 'Hundreds of athletes coached into DIII–DI programs',
    description: 'Seven years of training has helped athletes earn roster spots and scholarship offers from Division III through Division I.',
  },
  {
    icon: faLocationDot,
    title: 'International professional exposure in Japan & the Philippines',
    description: 'Professional playing experience overseas alongside a US college career shapes a training style built on both worlds’ best habits.',
  },
  {
    icon: faGraduationCap,
    title: '3-year starter & 2x team captain at Marymount University',
    description: 'Played shooting guard at the NCAA DIII level, starting for three seasons and leading the program as captain for two of them.',
  },
]

// TODO: swap in real quotes once gathered from parents/athletes.
const testimonials = [
  {
    quote: "My son's shot completely changed in one off-season. Coach Brandon breaks mechanics down in a way that actually clicks for a 14-year-old.",
    name: 'Karen Mitchell',
    role: 'Parent of a 2029 guard',
  },
  {
    quote: 'The film review sessions are clutch. I stopped guessing about what college coaches wanted to see and started working on what matters.',
    name: 'Jordan Ellis',
    role: 'Class of 2022, combo guard',
  },
  {
    quote: "Every session is structured and every rep counts. My daughter's confidence and her handle both took off after a few months.",
    name: 'Dave Whitfield',
    role: 'Parent of a 2024 point guard',
  },
  {
    quote: 'Putting in consistent work with Coach [Brandon] literally extended my career 4 more years. I committed to play at a DIII school this fall.',
    name: 'Marcus Reyes',
    role: 'Class of 2023, DIII commit',
  },
]

// Current open training hours. To update: flip `booked` to true/false per slot as sessions fill up or open back up.
const availability = [
  {
    day: 'Monday',
    slots: [
      { time: '7 - 8 PM', booked: true },
      { time: '8 - 9 PM', booked: false },
      { time: '9 - 10 PM', booked: false },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '7 - 8 PM', booked: true },
      { time: '8 - 9 PM', booked: false },
      { time: '9 - 10 PM', booked: false },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '7 - 8 PM', booked: false },
      { time: '8 - 9 PM', booked: false },
      { time: '9 - 10 PM', booked: false },
    ],
  },
]
const availabilityTimeLabels = availability[0].slots.map((slot) => slot.time)

const faqs = [
  {
    question: 'How do I book a session?',
    answer: "Email to get started — it's the fastest way to reach me, and we'll find a time that works and confirm your first session directly. There's no online booking system, so reaching out is the fastest way in.",
  },
  {
    question: 'What ages and skill levels do you train?',
    answer: 'Athletes from 4th grade through college, from first-time players building fundamentals to college-bound recruits refining their game.',
  },
  {
    question: 'Can I book a single session, or do I need a package?',
    answer: 'Either works. Single sessions are available anytime, and bundles of 4, 8, or 12 sessions come with a discount for athletes training consistently.',
  },
  {
    question: 'Can film review be done remotely?',
    answer: 'Yes, game and practice film can be reviewed and broken down online, in addition to in-person sessions. Email to establish a recurring remote review schedule or to request a one-off session.',
  },
  {
    question: 'What should my athlete bring?',
    answer: "Basketball shoes, workout clothes, and a personal basketball. There's a water fountain and bathroom on site, so no need to bring anything else. I supply size 7 basketballs, so if your athlete requires a size 6, please bring your own.",
  },
  {
    question: 'Do you help with college recruiting?',
    answer: 'Yes — my network of college coaches and recruiters is vast, so I can not only connect you with coaches but also help prepare the film and content coaches are actually looking for.',
  },
]

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Training() {
  const [groupSize, setGroupSize] = useState<GroupSize>(1)
  const [bundleSize, setBundleSize] = useState(1)

  const selectedBundle = bundleOptions.find((option) => option.value === bundleSize) ?? bundleOptions[0]

  const pricing = useMemo(() => {
    const basePerKid = groupRates[groupSize]
    const discountedPerKid = basePerKid * (1 - selectedBundle.discount)
    const totalBefore = discountedPerKid * bundleSize
    const perSession = Math.round(discountedPerKid)
    const totalDue = Math.round(totalBefore)
    const soloBaseline = groupRates[1] * bundleSize
    const savings = soloBaseline - totalDue

    return { perSession, totalDue, savings }
  }, [bundleSize, groupSize, selectedBundle.discount])

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <img src={extendedLogo} alt="Barn Work" className="h-12 w-auto sm:h-14" />
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-dongle text-xl leading-none text-white transition-colors hover:bg-accent-dark"
        >
          <FontAwesomeIcon className="size-3.5" icon={faEnvelope} />
          Contact
        </a>
      </header>

      {/* Hero: full-bleed image card with overlaid content */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={facilityImage} alt="The training facility at 5706 Tabor St, Arvada, CO" className="h-[660px] w-full object-cover sm:h-[600px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

          <div className="absolute bottom-8 right-5 hidden grid-cols-3 items-center justify-items-end gap-2 md:grid md:bottom-10 md:right-8">
            {heroChips.map((chip) => (
              <span key={chip.label} className="inline-flex h-8 items-center gap-1.5 rounded-full bg-white px-3.5 font-dongle text-lg text-gray-900">
                <FontAwesomeIcon className="block size-3 shrink-0" icon={chip.icon} />
                <span className="block leading-[1]">{chip.label}</span>
              </span>
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 px-5 pb-8 sm:px-8 sm:pb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-1.5">
              <FontAwesomeIcon className="size-3 text-white/80" icon={faLocationDot} />
              <span className="font-dongle text-xl leading-none text-white/80">ARVADA, CO</span>
            </div>
            <h1 className="max-w-xl font-bluffolk text-4xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              <span className="text-accent-light">BASKETBALL</span><br />
              TRAINING
            </h1>
            <p className="mt-4 max-w-md font-dongle text-2xl leading-none text-white/80">
              From 1 on 1's to small group sessions. <br />Come ready to put in that barn work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-dongle text-2xl leading-none text-white transition-colors hover:bg-accent-dark"
              >
                View Pricing
              </a>
              <a
                href="#program"
                className="inline-flex items-center rounded-full border-2 border-white/40 px-6 py-3 font-dongle text-2xl leading-none text-white transition-colors hover:border-accent hover:text-accent-light"
              >
                See the program
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="mt-10 overflow-hidden border-y-2 border-gray-800 bg-gray-800 py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="flex items-center gap-8 font-dongle text-2xl leading-none text-gray-300">
              {item}
              <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 divide-x-2 divide-y-2 divide-gray-800 border-b-2 border-gray-800 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-100 px-4 py-8 text-center">
            <p className="font-bluffolk text-4xl text-gray-800 sm:text-5xl">{stat.value}</p>
            <p className="mt-1 font-dongle text-xl leading-none text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tab pills */}
      <nav className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 pt-10">
        {tabs.map((tab, index) => (
          <a
            key={tab.label}
            href={tab.href}
            className={`rounded-full px-5 py-2 font-dongle text-xl leading-none transition-colors ${
              index === 0 ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </a>
        ))}
      </nav>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 md:py-20">
        {/* About / destination */}
        <section id="about">
          <p className="font-dongle text-3xl text-gray-300">A FOCUSED</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">TRAINING ENVIRONMENT</h2>
          <p className="mt-4 max-w-2xl font-dongle text-2xl leading-none text-gray-400">
            Every session happens on a private half-court built for focused reps. Yes, it's literally in a barn. Yes, you will put in that work. Yes, you will get better.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {aboutPhotos.map((photo) => (
              <div key={photo.title} className="relative overflow-hidden rounded-3xl">
                <img src={photo.src} alt={photo.alt} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-dongle text-2xl leading-none text-white">{photo.title}</p>
                  <p className="mt-1 font-dongle text-lg leading-none text-white/75">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-gray-100 p-6 sm:flex-row sm:items-center">
            <p className="max-w-2xl font-dongle text-2xl leading-none text-gray-500">
              Built on <span className="text-accent">22 years</span> of playing experience and <span className="text-accent">8+ years</span> of coaching experience, every session runs 60 minutes on a private half-court — three players maximum per session.
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3 font-dongle text-xl leading-none text-white transition-colors hover:bg-accent-dark"
            >
              <FontAwesomeIcon className="size-3.5" icon={faEnvelope} />
              Contact
            </a>
          </div>
        </section>

        {/* Program bento gallery */}
        <section id="program">
          <p className="font-dongle text-3xl text-gray-300">WHAT'S IN A</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">SESSION</h2>
          <div className="mt-6 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3">
            {bentoTopPhotos.map((photo) => (
              <div key={photo.tag} className={`group relative overflow-hidden rounded-3xl ${photo.className}`}>
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 font-dongle text-lg leading-none tracking-wide text-gray-800">
                  {photo.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bentoBottomPhotos.map((photo) => (
              <div key={photo.tag} className="group relative h-64 overflow-hidden rounded-3xl">
                <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 font-dongle text-lg leading-none tracking-wide text-gray-800">
                  {photo.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Example workout */}
        <section>
          <p className="font-dongle text-3xl text-gray-300">SEE AN EXAMPLE</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">WORKOUT</h2>
          <p className="mt-4 max-w-2xl font-dongle text-2xl leading-none text-gray-400">
            Training is centered on clean mechanics, fast reps, and college-level conditioning — improving form, building shot volume with purpose, and sharpening the skills that matter most when the game speeds up.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {workoutItems.map((item, index) => (
              <div key={item.name} className="flex flex-col gap-1.5 rounded-2xl bg-white px-5 py-4 shadow-md shadow-gray-200/70 transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
                <div className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-800 font-dongle text-lg text-white shadow-sm">
                    {index + 1}
                  </span>
                  <span className="font-dongle text-2xl leading-none text-gray-800">{item.name}</span>
                </div>
                {item.reps ? (
                  <span className="self-end font-dongle text-xl leading-none text-accent sm:self-auto sm:shrink-0 sm:text-right">{item.reps}</span>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* TikTok callout */}
        <section className="flex flex-col items-center gap-6 rounded-3xl bg-gray-800 px-8 py-12 text-center text-white sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-dongle text-2xl text-gray-400">SEE IT FOR YOURSELF</p>
            <h2 className="font-bluffolk text-4xl leading-none sm:text-5xl">WATCH A REAL WORKOUT</h2>
            <p className="mt-3 max-w-md font-dongle text-2xl leading-none text-gray-300">Drill inspiration, college recruiting advice, and full workouts to do at home — posted regularly on TikTok, Instagram, and YouTube.</p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-dongle text-2xl leading-none text-white transition-colors hover:bg-accent-dark"
            >
              <FontAwesomeIcon className="size-4" icon={faTiktok} />
              @brandon11rogers
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 font-dongle text-2xl leading-none text-white transition-colors hover:border-accent hover:text-accent-light"
            >
              <FontAwesomeIcon className="size-4" icon={faInstagram} />
              @barnworktraining
            </a>
          </div>
        </section>

        {/* Credentials */}
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <img src={trainingHeadshot} alt="Brandon Rogers training headshot" className="w-full rounded-3xl shadow-xl" />
            <div className="absolute -bottom-6 -right-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-3 shadow-lg sm:h-28 sm:w-28">
              <img src={marymountLogo} alt="Marymount University logo" className="h-full w-full object-contain" />
            </div>
          </div>
          <div>
            <p className="font-dongle text-3xl text-gray-300">WHY TRAIN WITH</p>
            <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">COACH ROGERS</h2>
            <div className="mt-6 flex flex-col gap-5">
              {credentials.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <FontAwesomeIcon className="size-4 text-accent" icon={item.icon} />
                  </div>
                  <div>
                    <p className="font-dongle text-2xl leading-none text-gray-800">{item.title}</p>
                    <p className="mt-1 font-dongle text-xl leading-none text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing calculator */}
        <section id="pricing">
          <p className="font-dongle text-3xl text-gray-300">ESTIMATE YOUR</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">PRICING</h2>
          <p className="mt-4 max-w-2xl font-dongle text-2xl leading-none text-gray-400">
            Choose a group size and session package to estimate cost. This is a planning tool for parents and athletes — final pricing is confirmed in person.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl bg-gray-100 p-8">
              <p className="mb-3 font-dongle text-2xl leading-none text-gray-400">Group size</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {([1, 2, 3] as GroupSize[]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setGroupSize(size)}
                    className={`rounded-2xl border-2 px-4 py-4 text-left transition-colors ${
                      groupSize === size ? 'border-accent bg-white' : 'border-transparent bg-white/60 hover:border-gray-200'
                    }`}
                  >
                    <span className="block font-bluffolk text-3xl text-gray-800">{size}</span>
                    <span className="mt-1 block font-dongle text-xl leading-none text-gray-400">{groupLabels[size]}</span>
                  </button>
                ))}
              </div>

              <p className="mb-3 mt-8 font-dongle text-2xl leading-none text-gray-400">Session package</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {bundleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setBundleSize(option.value)}
                    className={`rounded-2xl border-2 px-4 py-4 text-left transition-colors ${
                      bundleSize === option.value ? 'border-accent bg-white' : 'border-transparent bg-white/60 hover:border-gray-200'
                    }`}
                  >
                    <span className="block font-bluffolk text-3xl text-gray-800">{option.label}</span>
                    <span className="mt-1 block font-dongle text-xl leading-none text-gray-400">{option.subLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gray-800 p-8 text-white">
              <p className="font-dongle text-2xl leading-none text-gray-400">Per athlete per session</p>
              <p className="font-bluffolk text-5xl">{formatCurrency(pricing.perSession)}</p>
              <p className="mt-6 font-dongle text-2xl leading-none text-gray-400">
                {bundleSize === 1 ? 'Total due' : `Total for ${bundleSize} sessions`}
              </p>
              <p className="font-bluffolk text-5xl text-accent-light">{formatCurrency(pricing.totalDue)}</p>
              <p className="mt-6 font-dongle text-xl leading-none text-gray-400">
                60-minute sessions on a private half-court. Bundle sessions should be used within the agreed training block.
              </p>
              {pricing.savings > 0 ? (
                <p className="mt-6 inline-block rounded-full bg-white/10 px-4 py-2 font-dongle text-xl leading-none text-accent-light">
                  Saving {formatCurrency(pricing.savings)} vs. solo rate
                </p>
              ) : null}

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="font-dongle text-xl leading-none text-accent-light">FOR ATHLETES IN LOW-INCOME FAMILIES</p>
                <p className="mt-2 font-dongle text-lg leading-none text-gray-300">
                  I'm a product of two teachers, so I know what it's like to not be able to afford expensive camps and training. If that's also you, please reach out anyway — we can work out a pricing structure that works for you. This is a beautiful game and you deserve to get better at it, no matter your financial situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to pay */}
        <section className="rounded-3xl bg-gray-100 p-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
            <div>
              <p className="font-dongle text-2xl text-gray-300">HOW TO</p>
              <h2 className="font-bluffolk text-4xl leading-none text-gray-800">PAY</h2>
              <p className="mt-4 max-w-md font-dongle text-2xl leading-none text-gray-500">
                Venmo and PayPal are available for digital payments. Cash and checks are also accepted in person.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:max-w-xs sm:justify-self-end">
              <div className="rounded-2xl bg-white p-4 text-center">
                <img src={venmoQr} alt="Venmo QR code" className="mx-auto h-36 w-36 rounded-lg object-contain" />
                <p className="mt-3 font-dongle text-2xl leading-none text-gray-600">Venmo</p>
              </div>
              <div className="rounded-2xl bg-white p-4 text-center">
                <img src={paypalQr} alt="PayPal QR code" className="mx-auto h-36 w-36 rounded-lg object-contain" />
                <p className="mt-3 font-dongle text-2xl leading-none text-gray-600">PayPal</p>
              </div>
            </div>
          </div>
        </section>

        {/* Training Information: availability + directions */}
        <section id="directions" className="scroll-mt-10">
          <p className="font-dongle text-3xl text-gray-300">SCHEDULE &</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">TRAINING INFORMATION</h2>
          <p className="mt-4 max-w-2xl font-dongle text-2xl leading-none text-gray-400">
            Current session availability and everything you need to find the gym.
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-gray-100 p-8">
              <p className="font-dongle text-2xl text-gray-300">CURRENT</p>
              <h3 className="font-bluffolk text-4xl leading-none text-gray-800">AVAILABILITY</h3>
              <p className="mt-2 font-dongle text-xl leading-none text-gray-500">Open training hours — subject to change as sessions fill up.</p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                <div className="grid grid-cols-4 bg-white">
                  <div className="p-3" />
                  {availability.map((d) => (
                    <div key={d.day} className="border-l border-gray-200 p-3 text-center font-dongle text-xl leading-none text-gray-700">
                      {d.day.slice(0, 3)}
                    </div>
                  ))}
                </div>
                {availabilityTimeLabels.map((time, rowIndex) => (
                  <div key={time} className="grid grid-cols-4 border-t border-gray-200 bg-white">
                    <div className="flex items-center justify-center p-3 font-dongle text-lg leading-none text-gray-400">{time}</div>
                    {availability.map((d) => {
                      const slot = d.slots[rowIndex]
                      return (
                        <div
                          key={d.day}
                          className={`flex items-center justify-center border-l border-gray-200 p-3 ${slot.booked ? 'bg-gray-50' : 'bg-accent/10'}`}
                        >
                          <span className={`font-dongle text-lg leading-none ${slot.booked ? 'text-gray-400' : 'text-accent'}`}>
                            {slot.booked ? 'Booked' : 'Open'}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-4">
                <span className="flex items-center gap-1.5 font-dongle text-lg leading-none text-gray-500">
                  <span className="size-2.5 rounded-full bg-accent" />
                  Open
                </span>
                <span className="flex items-center gap-1.5 font-dongle text-lg leading-none text-gray-500">
                  <span className="size-2.5 rounded-full bg-gray-300" />
                  Booked
                </span>
              </div>
            </div>

            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl bg-gray-100 p-8 transition-colors hover:bg-gray-200"
            >
              <p className="font-dongle text-2xl text-gray-300">FIND THE</p>
              <h3 className="font-bluffolk text-4xl leading-none text-gray-800">GYM</h3>
              <p className="mt-2 max-w-md font-dongle text-xl leading-none text-gray-500">
                Contact Coach Brandon with your estimated arrival time as the gym is only accessible via key fob.
              </p>
              <div className="mt-4 flex items-start gap-2">
                <FontAwesomeIcon className="mt-1.5 size-4 shrink-0 text-accent" icon={faLocationDot} />
                <p className="font-dongle text-2xl leading-none text-gray-600">
                  5706 Tabor St<br />Arvada, CO 80002
                </p>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border-2 border-transparent transition-colors group-hover:border-accent">
                <img src={mapImage} alt="Map to 5706 Tabor St, Arvada, CO 80002" className="w-full" />
              </div>
              <span className="mt-4 inline-flex items-center gap-2 font-dongle text-2xl leading-none text-accent">
                Get directions
                <FontAwesomeIcon className="size-3" icon={faArrowRight} />
              </span>
            </a>
          </div>
        </section>

        {/* Testimonials */}
        <section id="results">
          <p className="font-dongle text-3xl text-gray-300">WHAT PARENTS & ATHLETES</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">ARE SAYING</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl bg-gray-100 p-6">
                <FontAwesomeIcon className="size-5 text-accent" icon={faQuoteLeft} />
                <p className="mt-3 font-dongle text-2xl leading-none text-gray-600">{testimonial.quote}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-dongle text-lg text-accent">
                      {initials(testimonial.name)}
                    </span>
                    <div>
                      <p className="font-dongle text-xl leading-none text-gray-800">{testimonial.name}</p>
                      <p className="font-dongle text-lg leading-none text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FontAwesomeIcon key={index} className="size-3" icon={faStar} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <p className="font-dongle text-3xl text-gray-300">FREQUENTLY ASKED</p>
          <h2 className="font-bluffolk text-5xl text-gray-800 md:text-6xl">QUESTIONS</h2>
          <div className="mt-6 grid items-start gap-3 sm:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl bg-gray-100 px-5 py-4 open:bg-gray-100">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-dongle text-2xl leading-none text-gray-800">
                  {faq.question}
                  <span className="shrink-0 font-dongle text-3xl leading-none text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-dongle text-xl leading-none text-gray-500">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-10 rounded-3xl bg-gray-800 p-8 text-center text-white sm:p-12">
          <p className="font-dongle text-2xl text-gray-400">GET IN</p>
          <h2 className="font-bluffolk text-5xl leading-none sm:text-6xl">TOUCH</h2>
          <p className="mx-auto mt-4 max-w-xl font-dongle text-2xl leading-none text-gray-300">
            Questions about training, pricing, or scheduling? Reach out and I'll be in touch within 48 hours.
          </p>
          <a
            href={EMAIL_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-dongle text-2xl leading-none text-white transition-colors hover:bg-accent-dark"
          >
            <FontAwesomeIcon className="size-4" icon={faEnvelope} />
            contact@brandonrogersconsulting.com
          </a>
          <p className="mx-auto mt-4 max-w-md font-dongle text-lg leading-none text-gray-400">
            If tapping that doesn't open your email app (common in the TikTok or Instagram in-app browser), just copy the email address above and send it directly.
          </p>
        </section>
      </div>

      <footer className="border-t border-gray-100 py-8 text-center">
        <p className="font-dongle text-xl leading-none text-gray-300">© {new Date().getFullYear()} Barn Work Training · Arvada, CO</p>
      </footer>
    </div>
  )
}

export default Training
