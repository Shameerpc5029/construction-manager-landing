import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-4">
                {/* Logo or App Icon */}
                <div className="relative h-16 w-16 animate-bounce">
                    <img src="/vite.svg" alt="App Logo" className="h-full w-full object-contain" />
                </div>

                {/* Loading Spinner */}
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 animate-ping rounded-full bg-primary/80 delay-75"></div>
                    <div className="h-3 w-3 animate-ping rounded-full bg-primary/80 delay-150"></div>
                    <div className="h-3 w-3 animate-ping rounded-full bg-primary/80 delay-300"></div>
                </div>

                <p className="animate-pulse text-sm font-medium text-slate-500">
                    Loading resources...
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
