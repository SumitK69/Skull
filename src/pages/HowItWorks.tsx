
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Briefcase, Handshake, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen w-full dark-gradient-bg">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-sunset hover:text-sunset/80 transition-colors duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-sage">
              How It Works
            </h1>
            <p className="text-xl text-sage/80 max-w-2xl mx-auto">
              Four simple steps to turn your skills into income
            </p>
          </div>

          <div className="space-y-20 mt-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="bg-sunset/10 backdrop-blur-sm p-5 rounded-2xl border border-sunset/20">
                <GraduationCap className="h-8 w-8 text-sunset" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-sage">Create Your Profile</h3>
                <p className="text-sage/80 text-lg">
                  Sign up and build your student profile. Upload your skills, certifications, 
                  and showcase your past work to stand out to potential clients.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="bg-sunset/10 backdrop-blur-sm p-5 rounded-2xl border border-sunset/20">
                <Briefcase className="h-8 w-8 text-sunset" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-sage">Discover Opportunities</h3>
                <p className="text-sage/80 text-lg">
                  Browse through job postings and task requests from clients looking for 
                  services like video editing, logo design, coding, content creation, and more.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="bg-sunset/10 backdrop-blur-sm p-5 rounded-2xl border border-sunset/20">
                <Handshake className="h-8 w-8 text-sunset" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-sage">Connect and Collaborate</h3>
                <p className="text-sage/80 text-lg">
                  The app bridges the gap between you and clients. Apply for jobs, discuss requirements, 
                  and build professional relationships directly through the platform.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="bg-sunset/10 backdrop-blur-sm p-5 rounded-2xl border border-sunset/20">
                <DollarSign className="h-8 w-8 text-sunset" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-2xl font-bold text-sage">Get Paid Securely</h3>
                <p className="text-sage/80 text-lg">
                  All payments are handled securely through the platform. Clients pay Skull, 
                  and Skull pays you, ensuring safe and timely transactions for your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto py-8 text-center text-sm text-sage/60">
        <p>© {new Date().getFullYear()} Skull. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HowItWorks;
