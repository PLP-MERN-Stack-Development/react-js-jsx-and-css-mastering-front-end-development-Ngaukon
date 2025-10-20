import React from 'react';
import Button from './Button';

/**
 * Navbar component for site navigation
 */
const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Site name */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              PLP Task Manager
            </h1>
          </div>

          {/* Navigation links */}
          <div className="flex gap-4">
            <Button variant="primary" size="sm">
              Home
            </Button>
            <Button variant="secondary" size="sm">
              Tasks
            </Button>
            <Button variant="secondary" size="sm">
              About
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;