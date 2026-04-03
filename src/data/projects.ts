import { Zap, TrendingUp, Users, BarChart3 } from "lucide-react";

import workAutoflow from "@/assets/work-autoflow.jpg";
import workVoltcommerce from "@/assets/work-voltcommerce.jpg";
import workHealthpulse from "@/assets/work-healthpulse.jpg";
import workGreengrid from "@/assets/work-greengrid.jpg";

export const projects = [
  {
    slug: "nexfoundation-portal",
    title: "NexFoundation",
    industry: "Non-Profit / Community",
    tagline: "Centralized hub for donations and volunteers",
    description:
      "A non-profit needed a professional digital hub to manage donors, volunteers, and impact stories. We built a platform that automates donations, volunteer management, and showcases their community impact.",
    fullDescription:
      "NexFoundation struggled with fragmented operations, manual donation tracking, and volunteer onboarding in spreadsheets. Donors and volunteers faced friction due to lack of a professional platform.\n\nWe developed a secure donation gateway, automated volunteer management system, and a CMS for real-time impact reporting. This centralized hub streamlined operations, improved transparency, and amplified the foundation’s reach.\n\nAs a result, online donations increased, volunteer sign-ups grew, and administrative hours were significantly reduced.",
    challenge:
      "Manual donation processes and volunteer tracking caused inefficiency and high donor/volunteer drop-off rates.",
    solution:
      "Comprehensive community hub with automated donation and volunteer management, plus a real-time impact CMS.",
    results: [
      "55% increase in online donations",
      "300+ new volunteer sign-ups",
      "15+ weekly hours saved",
      "100% transparency score",
      "90% faster content updates",
    ],
    result: "55% increase in donations",
    icon: "Heart",
    image: "workNexfoundation",
    demoUrl: "https://nexfoundation-demo.nexflare.com",
  },
  {
    slug: "nexacademy-ems",
    title: "NexAcademy",
    industry: "Education / School Management",
    tagline: "Unified digital campus for enrollment and student tracking",
    description:
      "An educational institution needed to digitize enrollment and student management. We built a platform automating admissions, class assignments, and student achievement tracking.",
    fullDescription:
      "NexAcademy faced long enrollment lines, manual student records, and limited visibility of achievements. Parents were frustrated and admins struggled to manage records.\n\nWe created an automated enrollment engine, student achievement showcase, and admin dashboard for class management. The platform improved efficiency, reduced errors, and increased parent engagement.\n\nThe school can now process admissions faster, keep accurate records, and highlight student successes seamlessly.",
    challenge:
      "Manual enrollment and record-keeping caused errors and administrative delays.",
    solution:
      "Automated enrollment system, achievement showcase, and centralized admin dashboard.",
    results: [
      "70% faster enrollment process",
      "0% data redundancy",
      "2.5x increase in parent engagement",
      "95% user satisfaction",
      "200% scalability buffer",
    ],
    result: "70% faster enrollment",
    icon: "BookOpen",
    image: "workNexacademy",
    demoUrl: "https://nexacademy-demo.nexflare.com",
  },
  {
    slug: "nexfix-erp",
    title: "NexFix",
    industry: "Logistics / Fleet Maintenance",
    tagline: "ERP dashboard for fleet maintenance and contractor management",
    description:
      "A fleet management company needed better oversight of repairs, contractors, and costs. We built a secure ERP system with multi-level approvals, role-based access, and full audit tracking.",
    fullDescription:
      "NexFix suffered from paper-based operations, verbal approvals, and poor expense tracking. Contractors and finance teams lacked visibility.\n\nWe developed a high-security ERP dashboard with multi-level approval workflows, granular RBAC, and detailed logging. Every repair, expense, and user action is tracked in real-time.\n\nThe platform improved contractor accountability, reduced maintenance overspend, and eliminated unauthorized access incidents.",
    challenge:
      "Financial leakage, lack of audit trails, and costly downtime due to untracked repairs.",
    solution:
      "ERP system with role-based permissions, automated workflows, and audit logging.",
    results: [
      "100% audit transparency",
      "45% faster repair turnaround",
      "20% reduction in maintenance overspend",
      "Zero unauthorized access incidents",
      "3x improved contractor accountability",
    ],
    result: "100% audit transparency",
    icon: "Zap",
    image: "workNexfix",
    demoUrl: "https://nexfix-demo.nexflare.com",
  },
  {
    slug: "nexshowcase-portal",
    title: "NexShowcase",
    industry: "Real Estate / Property Management",
    tagline: "Automated property listings and tour scheduling",
    description:
      "A real estate agency needed a faster way to showcase properties and book viewings. We built a portal for listing management, automated inquiries, and scheduling tours.",
    fullDescription:
      "NexShowcase's client was losing leads due to slow response times and unorganized scheduling. Agents spent more time on follow-ups than selling.\n\nWe developed a high-conversion real estate portal with an automated viewing scheduler, inquiry dashboard, and property CMS. The platform allowed instant booking, faster updates, and better lead qualification.\n\nThis resulted in higher booking rates, improved lead management, and increased client retention.",
    challenge:
      "High lead loss and inefficient scheduling due to manual processes.",
    solution:
      "Real estate portal with automated scheduling, inquiry management, and CMS for listings.",
    results: [
      "50% increase in viewing bookings",
      "90% faster listing updates",
      "65% lead qualification rate",
      "Zero no-shows",
      "3x higher user retention",
    ],
    result: "50% increase in bookings",
    icon: "Home",
    image: "workNexshowcase",
    demoUrl: "https://nexshowcase-demo.nexflare.com",
  },
  {
    slug: "nexbooking-engine",
    title: "NexBooking",
    industry: "Resort / Hospitality",
    tagline: "Premium booking engine for resorts",
    description:
      "A resort needed 24/7 booking capabilities and real-time inventory management. We built a platform to manage rooms, rates, and guest bookings seamlessly.",
    fullDescription:
      "The resort had a static site with limited booking hours and frequent overbooking. Staff spent hours manually checking availability.\n\nWe developed a booking engine with inventory management and a CMS for live room/rate control. Guests can book instantly, and staff manage operations efficiently.\n\nThe platform boosted after-hours bookings, eliminated overbooking, and optimized seasonal pricing.",
    challenge:
      "Revenue loss and overbooking due to manual processes and limited digital presence.",
    solution:
      "Booking engine with real-time inventory, CMS, and seamless guest experience.",
    results: [
      "120% increase in after-hours bookings",
      "0 overbooking incidents",
      "45% growth in direct bookings",
      "15-minute staff onboarding",
      "70% better seasonal optimization",
    ],
    result: "120% increase in bookings",
    icon: "Calendar",
    image: "workNexbooking",
    demoUrl: "https://nexbooking-demo.nexflare.com",
  },
  {
    slug: "nexquote-b2b",
    title: "NexQuote",
    industry: "B2B Services / Portfolio",
    tagline: "Automated quote and lead management system",
    description:
      "A B2B service provider needed a faster, professional way to deliver quotes and gather requirements. We built a portfolio with a Request a Quote engine and lead tracking CMS.",
    fullDescription:
      "NexQuote's client lost leads due to slow, opaque quoting and repetitive intake forms. High-value prospects were discouraged.\n\nWe designed a sleek portfolio with an integrated quote engine, requirement capture, and lead management CMS. The system reduced low-intent inquiries and improved high-value client engagement.\n\nThis resulted in faster quotes, increased high-value leads, and higher closing rates.",
    challenge:
      "Lead loss and slow quoting due to manual processes and opaque intake forms.",
    solution:
      "Portfolio with integrated Request a Quote engine and CMS-based lead management.",
    results: [
      "2x faster quote turnaround",
      "40% increase in high-value leads",
      "80% reduction in low-intent inquiries",
      "50% higher case study engagement",
      "25% improvement in closing rate",
    ],
    result: "2x faster quotes",
    icon: "Clipboard",
    image: "workNexquote",
    demoUrl: "https://nexquote-demo.nexflare.com",
  },
  {
    slug: "nexlove-rsvp",
    title: "NexLove",
    industry: "Events / Wedding Planning",
    tagline: "Premium RSVP and guest management platform",
    description:
      "A couple needed a centralized, elegant way to manage wedding RSVPs and guest info. We built a mobile-friendly RSVP site with real-time tracking and interactive maps.",
    fullDescription:
      "NexLove's clients faced chaos with paper RSVPs and repetitive guest inquiries. Managing headcounts and dietary restrictions was stressful.\n\nWe created a high-speed RSVP web app with one-tap confirmations, interactive maps, and real-time guest list management. Couples could focus on their wedding while the system handled logistics.\n\nThe platform improved RSVP accuracy, reduced inquiries, and saved money on stationery.",
    challenge:
      "Chaotic RSVP process with high administrative effort and inaccurate guest data.",
    solution:
      "Elegant web app with real-time guest tracking, one-tap RSVP, and interactive maps.",
    results: [
      "100% RSVP accuracy",
      "80% reduction in guest inquiries",
      "$200+ saved on stationery",
      "98% mobile completion rate",
      "Instant registry fulfillment",
    ],
    result: "100% RSVP accuracy",
    icon: "Gift",
    image: "workNexlove",
    demoUrl: "https://nexlove-demo.nexflare.com",
  },
];