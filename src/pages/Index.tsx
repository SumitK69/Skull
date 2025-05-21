import React, { useState } from "react";
import NewsletterForm from "@/components/NewsletterForm";
import { Skull } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen w-full dark-gradient-bg m-0 p-0">
      <header className="container mx-auto pt-[2px] pb-2 m-0">
        <div className="flex justify-between items-center -mt-4">
          <div className="flex items-center ">
            {/* Replace Skull icon and text with images */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
              className="flex items-center cursor-pointer" // Add negative margin-top here
            >
              <img
                src="/assets/skull.PNG"
                alt="Skull"
                className="h-12 w-12 object-cover rounded-full"
              />
              <img
                src="/assets/skull_logo.PNG"
                alt="Skull Logo"
                className="h-5"
                style={{ height: "100px" }}
              />
            </a>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="sm:hidden flex flex-col justify-center items-center ml-2"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-sage mb-1"></span>
            <span className="block w-6 h-0.5 bg-sage mb-1"></span>
            <span className="block w-6 h-0.5 bg-sage"></span>
          </button>
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link
              to="/how-it-works"
              className="text-sage hover:text-sunset transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link
              to="/features"
              className="text-sage hover:text-sunset transition-colors duration-200"
            >
              Features
            </Link>
          </nav>
        </div>
        {/* Mobile nav */}
        {navOpen && (
          <nav className="flex flex-col gap-4 mt-4 sm:hidden">
            <Link
              to="/how-it-works"
              className="text-sage hover:text-sunset transition-colors duration-200"
              onClick={() => setNavOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/features"
              className="text-sage hover:text-sunset transition-colors duration-200"
              onClick={() => setNavOpen(false)}
            >
              Features
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1 container mx-auto flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-3xl w-full space-y-12 text-center">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-sage">
              Skills <span className="text-sunset">→</span> Income
            </h1>

            <p className="text-xl text-sage/80 max-w-2xl mx-auto">
              Monetize your skills while studying. Build your profile, showcase
              your work, get paid.
            </p>
          </div>

          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <NewsletterForm />
          </div>

          <div
            className="pt-8 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex justify-center items-center gap-2 text-sunset/80">
              <Skull className="h-4 w-4" />
              <p className="text-sm font-medium uppercase tracking-wider">
                Earn while you learn.
              </p>
              <Skull className="h-4 w-4" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
