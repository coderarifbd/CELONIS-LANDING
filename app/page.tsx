"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle,
  Users,
  Target,
  BarChart3,
  Zap,
  RefreshCw,
  Eye,
  AlertTriangle,
  Heart,
  TrendingUp,
  Award,
  Search,
  BarChart,
  Settings,
  ArrowUp,
  Menu,
  X,
  Activity,
  Layers,
  Network,
  Sparkles,
  Link,
} from "lucide-react";

export default function CelonisLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    consent: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.consent
    ) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, company, and consent are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your inquiry!",
      description:
        "Our team will contact you within 24 hours to discuss your Celonis implementation needs.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      consent: false,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="/aot-logo.png" alt="AOT Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-slate-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="text-slate-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-slate-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-slate-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection("partner")}
                  className="text-slate-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Partner
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Schedule Process Audit
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-red-600 p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-red-600 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-red-600 w-full text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-red-600 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-red-600 w-full text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("partner")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-red-600 w-full text-left"
              >
                Partner
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-red-600 w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                >
                  Schedule Process Audit
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="py-20 lg:py-32 bg-gradient-modern overflow-hidden bg-img"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <div className="flex items-center gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="border-[#00000040] text-[#10172b] bg-[#fff]"
                >
                  <Award className="w-4 h-4 mr-1" />
                  Certified Celonis Partner
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#00000040] text-[#10172b] bg-[#fff]"
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  Saudi Arabia
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Turn Processes into{" "}
                <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
                  Profit
                </span>{" "}
                — Faster
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                Unlock operational excellence with AI-powered process
                intelligence. We transform your data into measurable business
                impact through certified Celonis expertise in Saudi Arabia.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
                >
                  Schedule Process Audit
                </Button>
                <Button
                  onClick={() => scrollToSection("services")}
                  variant="outline"
                  size="lg"
                  className="border-[#10172b] text-[#10172b] hover:bg-[#10172b] hover:text-white px-8 py-4 text-lg"
                >
                  See How It Works
                </Button>
              </div>
            </div>

            <div className="lg:pl-12 animate-float">
              <div className="relative">
                {/* CHANGED: bg-white → glass-card */}
                <div className="glass-card rounded-3xl p-8 lg:p-12">
                  <svg viewBox="0 0 400 300" className="w-full h-auto">
                    <defs>
                      <linearGradient
                        id="modernGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#dc2626" />
                        <stop offset="50%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Animated network nodes */}
                    <circle
                      cx="80"
                      cy="150"
                      r="35"
                      fill="url(#modernGradient)"
                      opacity="0.9"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="35;40;35"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="200"
                      cy="80"
                      r="28"
                      fill="url(#modernGradient)"
                      opacity="0.7"
                    >
                      <animate
                        attributeName="r"
                        values="28;33;28"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="200"
                      cy="220"
                      r="28"
                      fill="url(#modernGradient)"
                      opacity="0.7"
                    >
                      <animate
                        attributeName="r"
                        values="28;33;28"
                        dur="2.8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx="320"
                      cy="150"
                      r="35"
                      fill="url(#modernGradient)"
                      opacity="0.9"
                      filter="url(#glow)"
                    >
                      <animate
                        attributeName="r"
                        values="35;40;35"
                        dur="3.2s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Animated connecting lines */}
                    <line
                      x1="115"
                      y1="150"
                      x2="172"
                      y2="100"
                      stroke="#dc2626"
                      strokeWidth="3"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="115"
                      y1="150"
                      x2="172"
                      y2="200"
                      stroke="#ef4444"
                      strokeWidth="3"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="2.3s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="228"
                      y1="80"
                      x2="285"
                      y2="130"
                      stroke="#dc2626"
                      strokeWidth="3"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="2.1s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="228"
                      y1="220"
                      x2="285"
                      y2="170"
                      stroke="#ef4444"
                      strokeWidth="3"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="2.4s"
                        repeatCount="indefinite"
                      />
                    </line>

                    {/* Labels */}
                    <text
                      x="80"
                      y="155"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      DATA
                    </text>
                    <text
                      x="200"
                      y="85"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      MINE
                    </text>
                    <text
                      x="200"
                      y="225"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      ANALYZE
                    </text>
                    <text
                      x="320"
                      y="155"
                      textAnchor="middle"
                      fill="white"
                      fontSize="14"
                      fontWeight="bold"
                    >
                      PROFIT
                    </text>
                  </svg>
                </div>

                {/* CHANGED: bg-white → glass-badge (kept positions/animation) */}
                <div
                  className="absolute -top-4 -right-4 bg-white p-3 animate-float rounded-full"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      30% Cost ↓
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      50% Speed ↑
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-slate-900 overflow-hidden">
        <div className="ticker-animation whitespace-nowrap">
          <span className="inline-flex items-center gap-8 text-white text-lg font-semibold">
            <span className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-red-400" />
              30% Cost Reduction
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-500" />
              50% Process Speed Increase
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-red-400" />
              10M SAR Saved Annually
            </span>
            <span className="text-slate-400">•</span>
            <span className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-red-500" />
              Real-time Process Visibility
            </span>
            <span className="text-slate-400">•</span>
          </span>
        </div>
      </section>

      <section id="why-us" className="py-20 bg-gradient-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Choose{" "}
              <span className="text-red-600">Process Intelligence</span> with
              Us?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our certified expertise and innovative approach transforms your
              operations into competitive advantages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 modern-card-hover bg-white/80 backdrop-blur-sm animate-on-scroll">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Certified Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Official Celonis partnership ensures cutting-edge technology
                  access and proven methodologies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 modern-card-hover bg-white/80 backdrop-blur-sm animate-on-scroll">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Deep Industry Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Specialized consultants with proven track records across
                  manufacturing, finance, and logistics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 modern-card-hover bg-white/80 backdrop-blur-sm animate-on-scroll">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Tailored Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Custom implementations aligned to your unique business goals
                  and operational requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 modern-card-hover bg-white/80 backdrop-blur-sm animate-on-scroll">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  End-to-End Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Complete support from initial assessment through deployment,
                  training, and continuous optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 modern-card-hover bg-white/80 backdrop-blur-sm animate-on-scroll">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  AI-Powered Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Transform complex process data into clear, actionable
                  intelligence that drives measurable results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 modern-card-hover bg-white/80 backdrop-blur-sm animate-on-scroll">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">Rapid ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Accelerated deployment methodology ensures quick time-to-value
                  with measurable business impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              AOT <span className="text-red-600">Process Intelligence</span>{" "}
              Practice Areas?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive Celonis implementation and consulting services
              tailored to your business needs.
            </p>
          </div>

          <Tabs defaultValue="implementation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-red-50 hidden">
              <TabsTrigger
                value="implementation"
                className="text-base data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Implementation
              </TabsTrigger>
              <TabsTrigger
                value="consulting"
                className="text-base data-[state=active]:bg-red-600 data-[state=active]:text-white"
              >
                Consulting
              </TabsTrigger>
            </TabsList>

            <TabsContent value="implementation">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <Search className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">Process Discovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Comprehensive analysis and visualization of your current
                      business processes.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <Settings className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Conformance Checking
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      The process of comparing the discovered process model with
                      the intended or reference model to detect deviations
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <BarChart className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Performance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Measures key metrics such as cycle times, bottlenecks, and
                      throughput using timestamped event data.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <Eye className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Predictive Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Uses historical data and machine learning to forecast
                      potential outcomes, such as delays or compliance risks
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <Zap className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Process Optimization & Automation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Leverages insights from process mining to redesign
                      processes
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="consulting">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Assessment & Strategy Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Comprehensive evaluation of current state and strategic
                      planning.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <CheckCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Use Case Identification
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Prioritize high-impact opportunities for maximum business
                      value.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <ArrowUp className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Roadmap & Implementation Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Detailed project planning with timelines, resources, and
                      milestones.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Change Management & Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Enable teams to leverage insights through comprehensive
                      training programs.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border border-red-200 modern-card-hover animate-on-scroll">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-3">
                      <RefreshCw className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">
                      Continuous Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Ongoing optimization and enhancement of process mining
                      capabilities.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your operations with measurable improvements across all
              business functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Real-time Visibility into Operations
                  </h3>
                  <p className="text-slate-600">
                    Gain complete transparency into your business processes with
                    live data and insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Detect & Eliminate Inefficiencies
                  </h3>
                  <p className="text-slate-600">
                    Identify bottlenecks, compliance risks, and process
                    deviations before they impact performance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Enhance Customer Experience
                  </h3>
                  <p className="text-slate-600">
                    Optimize workflows to deliver faster, more consistent
                    service to your customers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Support Data-Driven Decision Making
                  </h3>
                  <p className="text-slate-600">
                    Empower leaders at all levels with actionable insights based
                    on actual process data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Achieve Operational Excellence
                  </h3>
                  <p className="text-slate-600">
                    Accelerate your journey to operational excellence with
                    proven methodologies and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partner Section */}
      <section
        id="partner"
        className="py-20 bg-slate-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trusted <span className="text-red-400">Celonis Partnership</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Our certified partnership with Celonis ensures you receive
              world-class process mining technology backed by local expertise in
              the Saudi Arabian market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Certified Implementation Partner
                    </h3>
                    <p className="text-slate-300">
                      Direct access to Celonis resources, latest features, and
                      proven implementation methodologies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Local Market Expertise
                    </h3>
                    <p className="text-slate-300">
                      Deep understanding of Saudi Arabian business requirements
                      and regulatory compliance needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Accelerated Time-to-Value
                    </h3>
                    <p className="text-slate-300">
                      De-risk your adoption journey with proven methodologies
                      and continuous support framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-600">
                  <div className="text-center">
                    <div className="rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <img
                        src="/green.png"
                        alt="AOT Logo"
                        className="h-20 w-auto"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Official Celonis Partner
                    </h3>
                    <p className="text-slate-300 mb-6">
                      Certified Implementation & Consulting Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600">
              A proven methodology that delivers results at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Connect */}
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Link className="w-10 h-10 text-white" />{" "}
                {/* Better for "Connect" */}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Connect</h3>
              <p className="text-slate-600">
                Seamless connection of ERP, CRM, and other systems with data
                preparation.
              </p>
            </div>

            {/* Discover */}
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Search className="w-10 h-10 text-white" />{" "}
                {/* Fits "Discover" */}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Discover
              </h3>
              <p className="text-slate-600">
                Comprehensive analysis and visualization of your current
                business processes.
              </p>
            </div>

            {/* Analyze */}
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart className="w-10 h-10 text-white" />{" "}
                {/* Best for "Analyze" */}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Analyze</h3>
              <p className="text-slate-600">
                Identify bottlenecks, deviations, and inefficiencies for
                targeted improvements.
              </p>
            </div>

            {/* Optimize */}
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Settings className="w-10 h-10 text-white" />{" "}
                {/* Perfect for "Optimize" */}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Optimize
              </h3>
              <p className="text-slate-600">
                Implement automated workflows and actionable improvement
                strategies.
              </p>
            </div>

            {/* Scale */}
            <div className="text-center animate-on-scroll">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />{" "}
                {/* Better than ArrowUp */}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Scale</h3>
              <p className="text-slate-600">
                Expand success across the organization with continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Work <span className="text-red-600">With Us?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Your Trusted Partner in Business Process Optimization — Experience
              the difference of working with certified Celonis experts who
              understand your market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Free Initial Consultation
              </h3>
              <p className="text-slate-600 text-sm">
                Comprehensive assessment and strategic planning at no cost
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Certified Celonis Experts
              </h3>
              <p className="text-slate-600 text-sm">
                Official Celonis partnership ensures quality and support
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Local Market Presence
              </h3>
              <p className="text-slate-600 text-sm">
                Deep understanding of Saudi Arabian business landscape
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Proven Track Record
              </h3>
              <p className="text-slate-600 text-sm">
                50+ successful implementations across various industries
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-modern rounded-3xl p-8 lg:p-12 animate-on-scroll">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Success Guarantee
                </h3>
                <p className="text-slate-600">
                  We're so confident in our approach that we guarantee
                  measurable results within the first 90 days of implementation.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">
                  90 Days
                </div>
                <p className="text-slate-600 font-medium">
                  To Measurable Results
                </p>
              </div>
              <div className="text-center lg:text-right">
                <Button
                  onClick={() => scrollToSection("contact")}
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get <span className="text-red-400">Started?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transform your business with Process Intelligence. Let's discuss
              how Celonis can drive measurable improvements in your
              organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Schedule Consultation
              </h3>
              <p className="text-slate-300 text-sm">
                Book a free 30-minute discovery call with our experts
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Process Assessment
              </h3>
              <p className="text-slate-300 text-sm">
                We analyze your current processes and identify opportunities
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Implementation Plan
              </h3>
              <p className="text-slate-300 text-sm">
                Receive a customized roadmap for your Celonis journey
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white-400 text-write-400 hover:bg-red-600 hover:border-red-600 hover:text-white-700 px-8 py-4 text-lg bg-transparent"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-modern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Contact Our Experts
            </h2>
            <p className="text-xl text-slate-600">
              Get in touch to discuss your specific process mining requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your process mining needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8 animate-on-scroll">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-slate-600">your-email@example.com</div>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <div className="text-slate-600">Your Phone Number</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fff] rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-4">
                  What happens next?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <span className="text-slate-600 text-sm">
                      We'll review your inquiry within 4 hours
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <span className="text-slate-600 text-sm">
                      Schedule a 30-minute discovery call
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <span className="text-slate-600 text-sm">
                      Receive a customized proposal and roadmap
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-4 text-center">
              <img
                src="/aot-logo.png"
                alt="AOT Logo"
                className="h-10 w-auto m-auto"
              />
            </div>
            <p className="text-slate-400 mb-6">
              Your Trusted Partner in Business Process Optimization
            </p>
            <div className="flex justify-center space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a
                href="#contact"
                className="hover:text-red-400 transition-colors"
                className="hover:text-red-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
