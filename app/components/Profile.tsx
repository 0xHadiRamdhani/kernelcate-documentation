'use client';

import React from 'react';
import Image from 'next/image';

export default function Profile() {
    return (
        <div className="relative z-10 mb-8 p-4 sm:p-6 lg:p-8 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-xl max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Avatar/Profile Image */}
                <div className="flex-shrink-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-red-400 shadow-lg shadow-red-500/50">
                        <Image
                            src="/profile.jpg"
                            alt="Hadi Ramdhani"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Profile Information */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 white-glow">
                        Hadi Ramdhani
                    </h2>
                    <p className="text-gray-300 mb-4 text-base sm:text-lg">
                        Siswa SMK | Programming Enthusiast & Future Software Developer
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-4">
                        <span className="px-3 py-1 sm:px-4 sm:py-2 bg-red-600/20 text-red-400 rounded-full text-sm sm:text-base border border-red-500/30">
                            SMK Student
                        </span>
                        <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-base border border-red-500/30">
                            Programming Enthusiast
                        </span>
                        <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-base border border-red-500/30">
                            Web Developer
                        </span>
                        <span className="px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-base border border-red-500/30">
                            Mobile Developer
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        Siswa SMK yang memiliki minat besar di bidang programming. Aktif belajar dan mengembangkan
                        keterampilan pemrograman melalui berbagai proyek pribadi dan kegiatan sekolah. Fokus utama
                        adalah memahami dasar-dasar pengembangan perangkat lunak, mempelajari bahasa pemrograman modern,
                        serta membangun aplikasi sederhana yang bermanfaat.
                    </p>
                </div>

                {/* Social/Contact Links */}
                <div className="flex flex-col space-y-2 sm:space-y-3">
                    <a
                        href="https://github.com/0xHadiRamdhani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub Profile
                    </a>
                    <a
                        href="mailto:hadsxdev@icloud.com"
                        className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact
                    </a>
                </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-red-500/20">
                <div className="flex justify-center space-x-4 sm:space-x-8 text-sm sm:text-base text-gray-400">
                    <div className="flex items-center">
                        <span className="text-red-400 mr-1">LOCATION:</span>
                        Kota Bandung
                    </div>
                    <div className="flex items-center">
                        <span className="text-red-400 mr-1">FOCUS:</span>
                        Frontend & Mobile Development
                    </div>
                    <div className="flex items-center">
                        <span className="text-red-400 mr-1">EXPERTISE:</span>
                        Problem Solving
                    </div>
                </div>
                <div className="mt-2 sm:mt-3 text-center text-xs sm:text-sm text-gray-500">
                    <p>Senantiasa berkembang, beradaptasi dengan teknologi baru, serta mempersiapkan diri untuk berkarier di dunia IT</p>
                </div>
            </div>
        </div>
    );
}