import { Zap, TrendingUp, Users, BarChart3 } from "lucide-react";

import workAutoflow from "@/assets/work-autoflow.jpg";
import workVoltcommerce from "@/assets/work-voltcommerce.jpg";
import workHealthpulse from "@/assets/work-healthpulse.jpg";
import workGreengrid from "@/assets/work-greengrid.jpg";

export const projects = [
  {
    slug: "vilsons-truck-services",
    title: "Vilsons Truck Services",
    industry: "Logistics / Fleet Maintenance",
    tagline: "Automated job order system for truck repair operations",
    description:
      "A truck repair company needed a smarter way to manage job orders, contractors, and finances. We built a web app that automates job assignments, separates user roles, and provides full visibility into operations, expenses, and profit.",
    fullDescription:
      "Vilsons Truck Services struggled with manual job order handling, contractor coordination, and scattered financial tracking. Assignments were done manually, updates were inconsistent, and there was no clear visibility into overall business performance.\n\nWe developed a comprehensive web application that automates job order assignments to contractors based on availability and role. The system features multi-role access, giving customers, contractors, and administrators tailored dashboards and permissions.\n\nCustomers can track the status of their repairs, contractors receive and manage assigned jobs, and administrators oversee the entire operation from a centralized dashboard. The platform also includes financial tracking for expenses, revenue, profit, transactions, and payroll — giving the business real-time insight into its performance.\n\nAs a result, job assignment time dropped significantly, operational delays were minimized, and financial tracking became fully transparent and data-driven.",
    challenge: "Manual job order assignment, poor contractor coordination, and lack of financial visibility across operations.",
    solution: "Role-based web application with automated job assignment, real-time tracking, and integrated financial management.",
    results: [
      "70% faster job order assignment",
      "60% reduction in coordination errors",
      "Real-time financial tracking across all operations",
      "50% improvement in overall workflow efficiency",
    ],
    result: "70% faster operations",
    icon: Zap,
    image: workAutoflow,
    demoUrl: "https://autoflow-demo.nexflare.com",
  },
  {
    slug: "aldrin-cox-visa-services",
    title: "Aldrin Cox Visa Services",
    industry: "Professional Services",
    tagline: "Built for credibility and client conversion",
    description:
      "A visa consulting service needed a professional online presence to attract and convert clients. We designed a clean, modern website that builds trust and clearly communicates their services.",
    fullDescription:
      "Aldrin Cox Visa Services required a strong digital presence to establish credibility and reach more clients online. Their previous setup lacked structure, clarity, and trust-building elements essential for service-based businesses.\n\nWe designed and developed a modern, responsive website focused on clarity and conversion. The site highlights their services, guides users through the visa process, and includes strategically placed calls-to-action to encourage inquiries.\n\nWe also optimized the site for performance and mobile experience, ensuring accessibility across all devices. Clear messaging, testimonials, and structured service flows improved user trust and engagement.\n\nAfter launch, the website became a consistent lead-generation channel, helping the business attract more qualified inquiries and convert visitors into clients.",
    challenge: "Lack of online presence, low client trust, and unclear service communication.",
    solution: "Modern, responsive website with clear service structure, trust elements, and conversion-focused design.",
    results: [
      "2.5x increase in client inquiries",
      "40% higher conversion rate",
      "65% improvement in user engagement",
      "Fully optimized mobile experience",
    ],
    result: "2.5x more inquiries",
    icon: TrendingUp,
    image: workVoltcommerce,
    demoUrl: "https://voltcommerce-demo.nexflare.com",
  },
  {
    slug: "mediminder-system",
    title: "MediMinder System",
    industry: "Healthcare",
    tagline: "Smarter medication adherence system",
    description:
      "A healthcare solution combining a website and web app to support a medicine reminder device. We built a system that helps users manage medication schedules and improve adherence.",
    fullDescription:
      "MediMinder was designed as a companion system for a smart medicine reminder box. The goal was to help users manage their medication schedules more effectively while providing caregivers with visibility and control.\n\nWe developed both a website and a web application that allow users to set schedules, receive reminders, and monitor medication intake. The system integrates seamlessly with the device, ensuring real-time updates and notifications.\n\nThe platform provides a user-friendly interface for patients while enabling caregivers to monitor adherence remotely. Notifications, logs, and tracking features ensure that no dose is missed.\n\nThe result is a more reliable and efficient system for managing medication routines, improving both patient outcomes and caregiver confidence.",
    challenge: "Missed medication schedules, lack of monitoring system, and no digital integration with the device.",
    solution: "Web platform with scheduling, reminders, and real-time monitoring integrated with the medicine device.",
    results: [
      "80% reduction in missed doses",
      "Real-time monitoring for caregivers",
      "Seamless device-to-web synchronization",
      "Improved patient adherence and consistency",
    ],
    result: "80% fewer missed doses",
    icon: Users,
    image: workHealthpulse,
    demoUrl: "https://healthpulse-demo.nexflare.com",
  },
  {
    slug: "arcdem-crack-detection",
    title: "ArcDem Crack Detection",
    industry: "Infrastructure / AI",
    tagline: "Automated road damage detection",
    description:
      "An intelligent web application that detects road cracks using image processing. We built a system that helps streamline infrastructure inspection and reduce manual analysis.",
    fullDescription:
      "ArcDem is an automated road crack detection system designed to assist in infrastructure monitoring. Traditional inspection methods are time-consuming, inconsistent, and require manual effort.\n\nWe developed a web application that uses image processing techniques to analyze road images and detect cracks with high accuracy. Users can upload images, view processed results, and identify damaged areas quickly.\n\nThe system standardizes detection results and reduces human error, making infrastructure assessment more reliable. It also enables faster decision-making for maintenance and repairs.\n\nBy automating the analysis process, ArcDem significantly reduces inspection time while improving consistency and scalability.",
    challenge: "Manual road inspection, time-consuming analysis, and inconsistent detection results.",
    solution: "AI-powered web app for image-based crack detection with automated analysis and reporting.",
    results: [
      "75% faster inspection process",
      "60% reduction in manual analysis effort",
      "Consistent and standardized crack detection",
      "Scalable infrastructure monitoring system",
    ],
    result: "75% faster inspections",
    icon: BarChart3,
    image: workGreengrid,
    demoUrl: "https://greengrid-demo.nexflare.com",
  },
];