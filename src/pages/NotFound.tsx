import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-8xl font-poppins font-bold gradient-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, 
            deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-hero inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            <Home className="h-5 w-5" />
            Go Home
          </Link>
          
          <Link
            to="/contact"
            className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg"
          >
            Contact Support
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="glass-card rounded-xl p-6 text-left">
          <h3 className="font-poppins font-semibold text-foreground mb-4">
            What can you do?
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Check the URL for any typos</li>
            <li>• Go back to the previous page</li>
            <li>• Visit our homepage to start fresh</li>
            <li>• Contact us if you think this is an error</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
