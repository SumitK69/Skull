import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Check, Award, Search, FileText } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen w-full dark-gradient-bg">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sunset hover:text-sunset/80 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-sage">
              Features
            </h1>
            <p className="text-xl text-sage/80 max-w-2xl mx-auto">
              Discover how Skull helps you monetize your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Feature 1 */}
            <div
              className="bg-midnight-500/30 backdrop-blur-sm p-8 rounded-2xl border border-sage/10 hover:border-sunset/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sunset/10 p-3 rounded-xl border border-sunset/20">
                  <FileText className="h-6 w-6 text-sunset" />
                </div>
                <h3 className="text-2xl font-bold text-sage">
                  Verified Profiles
                </h3>
              </div>
              <p className="text-sage/80 text-lg">
                Create a verified student profile to showcase your skills and
                academic background, building trust with potential clients.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-midnight-500/30 backdrop-blur-sm p-8 rounded-2xl border border-sage/10 hover:border-sunset/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sunset/10 p-3 rounded-xl border border-sunset/20">
                  <Search className="h-6 w-6 text-sunset" />
                </div>
                <h3 className="text-2xl font-bold text-sage">
                  Project Showcase
                </h3>
              </div>
              <p className="text-sage/80 text-lg">
                Upload and showcase your past work, creating a portfolio that
                highlights your capabilities and helps you stand out.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-midnight-500/30 backdrop-blur-sm p-8 rounded-2xl border border-sage/10 hover:border-sunset/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sunset/10 p-3 rounded-xl border border-sunset/20">
                  <Star className="h-6 w-6 text-sunset" />
                </div>
                <h3 className="text-2xl font-bold text-sage">Skull Reviews</h3>
              </div>
              <p className="text-sage/80 text-lg">
                Receive feedback with 💀 Skull ratings, a fresh take on
                traditional star ratings that makes reviews fun and shareable.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="bg-midnight-500/30 backdrop-blur-sm p-8 rounded-2xl border border-sage/10 hover:border-sunset/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-sunset/10 p-3 rounded-xl border border-sunset/20">
                  <Check className="h-6 w-6 text-sunset" />
                </div>
                <h3 className="text-2xl font-bold text-sage">
                  Secure Payments
                </h3>
              </div>
              <p className="text-sage/80 text-lg">
                Our platform handles all financial transactions, ensuring that
                you get paid securely and on time for your completed projects.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Features;
