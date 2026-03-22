import { Zap, TrendingUp, Users, BarChart3 } from "lucide-react";

import workAutoflow from "@/assets/work-autoflow.jpg";
import workVoltcommerce from "@/assets/work-voltcommerce.jpg";
import workHealthpulse from "@/assets/work-healthpulse.jpg";
import workGreengrid from "@/assets/work-greengrid.jpg";

export const projects = [
  {
    slug: "autoflow-dashboard",
    title: "AutoFlow Dashboard",
    industry: "Logistics",
    tagline: "Automated 80% of manual workflows",
    description:
      "A logistics company was drowning in manual task assignments and reporting. We built an intelligent automation platform that routes tasks, tracks performance in real-time, and eliminated repetitive processes — saving the team 30+ hours every week.",
    fullDescription:
      "AutoFlow Dashboard was built for a mid-size logistics company struggling with manual processes that slowed down their entire operation. Dispatchers spent hours assigning tasks, drivers had no real-time visibility into their routes, and managers relied on spreadsheets for performance tracking.\n\nWe designed and built an intelligent automation platform that completely transformed their workflow. The system automatically assigns tasks based on driver availability, location, and priority. Real-time dashboards give managers instant visibility into fleet performance, delivery status, and bottleneck areas.\n\nThe result? The team now saves 30+ hours per week on administrative tasks. Error rates dropped by 60%, and overall operational efficiency improved dramatically. The platform continues to learn and optimize routing decisions using historical data.",
    challenge: "Manual task assignments, spreadsheet-based reporting, no real-time visibility into operations.",
    solution: "Intelligent task routing, real-time performance dashboards, automated reporting, and predictive analytics.",
    results: [
      "80% reduction in manual work",
      "30+ hours saved per week",
      "60% fewer operational errors",
      "Real-time fleet visibility",
    ],
    result: "80% less manual work",
    icon: Zap,
    image: workAutoflow,
    demoUrl: "https://autoflow-demo.nexflare.com",
  },
  {
    slug: "voltcommerce",
    title: "VoltCommerce",
    industry: "E-Commerce",
    tagline: "From 5K to 50K daily orders",
    description:
      "An online retailer needed a platform that could scale fast without breaking. We engineered a high-performance storefront with smart inventory management — resulting in 10x order capacity and a seamless checkout experience.",
    fullDescription:
      "VoltCommerce was created for a fast-growing online retailer whose existing platform couldn't keep up with demand. During peak sales events, the site would slow to a crawl, carts would time out, and inventory counts were unreliable — costing them thousands in lost revenue.\n\nWe rebuilt their entire e-commerce platform from the ground up with scalability as the top priority. The new architecture handles traffic spikes gracefully, with intelligent caching, optimized database queries, and a streamlined checkout flow that reduced cart abandonment by 35%.\n\nSmart inventory management ensures stock levels are always accurate across multiple warehouses. Automated alerts notify the team when restocking is needed, and analytics dashboards provide real-time insights into sales trends and customer behavior.",
    challenge: "Platform crashes during peak traffic, unreliable inventory tracking, high cart abandonment rates.",
    solution: "Scalable architecture, smart inventory management, optimized checkout flow, and real-time analytics.",
    results: [
      "10x order capacity",
      "35% lower cart abandonment",
      "99.9% uptime during peak sales",
      "Real-time inventory accuracy",
    ],
    result: "10x order capacity",
    icon: TrendingUp,
    image: workVoltcommerce,
    demoUrl: "https://voltcommerce-demo.nexflare.com",
  },
  {
    slug: "healthpulse-portal",
    title: "HealthPulse Portal",
    industry: "Healthcare",
    tagline: "Patient management, simplified",
    description:
      "A growing clinic needed to digitize appointments, patient records, and telemedicine. We designed an intuitive portal that staff learned in under a day — reducing no-shows by 40% and boosting patient satisfaction.",
    fullDescription:
      "HealthPulse Portal was developed for a growing multi-branch clinic that was still relying on paper records, phone-based scheduling, and manual follow-ups. Staff were overwhelmed, patients experienced long wait times, and no-show rates were eating into revenue.\n\nWe designed an intuitive patient management portal that digitized their entire workflow. Online appointment booking with automated SMS/email reminders dramatically reduced no-shows. Digital patient records made information instantly accessible across all branches.\n\nThe telemedicine module we integrated allowed doctors to conduct virtual consultations, expanding their reach beyond physical locations. The system was so intuitive that staff across all branches were fully trained in under a day — with zero disruption to daily operations.",
    challenge: "Paper-based records, phone scheduling, high no-show rates, no telemedicine capability.",
    solution: "Digital patient portal, automated reminders, telemedicine integration, and cross-branch record access.",
    results: [
      "40% fewer no-shows",
      "Staff trained in under 1 day",
      "3 branches connected",
      "Patient satisfaction up 50%",
    ],
    result: "40% fewer no-shows",
    icon: Users,
    image: workHealthpulse,
    demoUrl: "https://healthpulse-demo.nexflare.com",
  },
  {
    slug: "greengrid-analytics",
    title: "GreenGrid Analytics",
    industry: "Renewable Energy",
    tagline: "3x more qualified leads",
    description:
      "A renewable energy startup needed an online presence that converts. We delivered a conversion-optimized website with real-time analytics dashboards — tripling their qualified lead generation in just 3 months.",
    fullDescription:
      "GreenGrid Analytics was built for a renewable energy startup that had a great product but struggled to generate leads online. Their existing website was generic, slow, and had no clear conversion strategy. Marketing spend was high, but qualified leads were low.\n\nWe designed and built a conversion-optimized website that tells their story compellingly and guides visitors toward action. Strategic CTAs, social proof elements, and a streamlined contact flow turned passive visitors into engaged prospects.\n\nThe integrated analytics dashboard gives the team real-time visibility into website performance, lead sources, and conversion rates. A/B testing capabilities allow them to continuously optimize their messaging. Within 3 months of launch, qualified lead generation tripled — and their cost per lead dropped by 45%.",
    challenge: "Low online lead generation, generic website, no analytics or conversion strategy.",
    solution: "Conversion-optimized website, real-time analytics dashboard, A/B testing, and lead tracking.",
    results: [
      "3x qualified lead generation",
      "45% lower cost per lead",
      "2x website traffic",
      "Real-time performance tracking",
    ],
    result: "3x lead conversion",
    icon: BarChart3,
    image: workGreengrid,
    demoUrl: "https://greengrid-demo.nexflare.com",
  },
];
