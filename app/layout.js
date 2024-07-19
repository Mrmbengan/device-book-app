import './styles/globals.css';
import React from 'react';

export const metadata = {
    title: 'My Books App',
    description: 'A page to collect and rate books',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="container mx-auto">
                    {children}
                </div>
            </body>
        </html>
    );
}