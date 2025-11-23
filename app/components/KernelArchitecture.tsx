'use client';

import React from 'react';
import Layer from './Layer';
import Arrow from './Arrow';
import MatrixBackground from './MatrixBackground';

export default function KernelArchitecture() {
    const userApplicationsComponents = [
        {
            title: '🌐 NETWORK SCANNER',
            features: ['• Port Scanning (SYN, CONNECT, FIN)', '• Vulnerability Detection', '• OS Fingerprinting', '• Service Identification', '• Banner Grabbing']
        },
        {
            title: '💥 EXPLOIT FRAMEWORK',
            features: ['• Payload Generation', '• Exploit Development', '• Shellcode Creation', '• ROP/JOP Chains', '• Buffer Overflow Tools']
        },
        {
            title: '🔍 FORENSICS TOOLKIT',
            features: ['• File Carving', '• Memory Analysis', '• Registry Analysis', '• Timeline Reconstruction', '• Evidence Collection']
        },
        {
            title: '🛡️ SECURITY AUDIT',
            features: ['• Authentication Management', '• Privilege Control', '• Audit Logging', '• IDS/IPS Integration', '• Security Monitoring']
        }
    ];

    const syscallComponents = [
        {
            title: '🔧 PENTESTING SYSCALLS',
            features: ['• sys_scan() - Network Scanning', '• sys_exploit() - Exploit Execution', '• sys_forensics() - Forensics Analysis', '• sys_crypto() - Cryptographic Operations', '• sys_audit() - Security Auditing', '• sys_capture() - Packet Capture', '• sys_inject() - Code Injection', '• 15+ Additional Specialized Calls']
        }
    ];

    const kernelCoreComponents = [
        {
            title: '📋 PROCESS MANAGEMENT',
            features: ['• Task Scheduler', '• Process Manager', '• Thread Manager', '• IPC Manager', '• Signal Handler', '• Context Switching']
        },
        {
            title: '💾 MEMORY MANAGEMENT',
            features: ['• Physical Memory Manager', '• Virtual Memory Manager', '• Kernel Heap Manager', '• Buddy Allocator', '• Slab Allocator', '• Memory Protection']
        },
        {
            title: '🔒 SECURITY FRAMEWORK',
            features: ['• Access Control System', '• Authentication Manager', '• Cryptography Engine', '• Audit Logger', '• IDS/IPS Engine', '• Security Validation']
        }
    ];

    const hardwareComponents = [
        {
            title: '🖥️ DEVICE DRIVERS',
            features: ['• VGA/Display Driver (Text Mode)', '• Keyboard Driver (PS/2)', '• Storage Driver (IDE/ATA)', '• Network Stack (TCP/IP)', '• Timer Driver (PIT/HPET)', '• Serial Port Driver']
        },
        {
            title: '⚡ INTERRUPT HANDLING',
            features: ['• IDT Manager (256 entries)', '• IRQ Handler (0-15)', '• Exception Handler', '• System Call Gate', '• Security Validation', '• Interrupt Routing']
        }
    ];

    const bootComponents = [
        {
            title: '🔐 ADVANCED BOOT LOADER',
            features: ['• Multiboot Parser (GRUB2)', '• ACPI Parser (RSDP, FADT, MADT)', '• EFI Support (UEFI)', '• Security Features (SMEP/SMAP)', '• Module Loader (Payload)', '• Hardware Detection', '• Memory Map Parsing', '• Framebuffer Setup']
        }
    ];

    const technicalSpecs = {
        'Architecture:': 'x86_64 (64-bit)',
        'Memory Model:': '4-Level Paging with 2MB Huge Pages',
        'Security Features:': 'SMEP, SMAP, NX Bit, Stack Protection',
        'Boot Protocol:': 'GRUB2 Multiboot2 Specification Compliant',
        'File System:': 'Custom Pentesting-Optimized FS',
        'Network Stack:': 'Complete TCP/IP with Pentesting Extensions',
        'System Calls:': '20+ Specialized Pentesting Syscalls',
        'Memory Protection:': 'Guard Pages, Bounds Checking, ASLR',
        'Hardware Support:': 'ACPI, EFI, Legacy BIOS, UEFI'
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 relative overflow-hidden cyber-matrix">
            <MatrixBackground />
            <div className="relative z-10 max-w-7xl mx-auto">
                <h1
                    className="text-5xl font-bold text-center text-red-500 mb-4 title-glow"
                    style={{ textShadow: '0 0 20px #ef4444, 0 0 40px #ef4444' }}
                >
                    🔒 CATE-KERNEL ARCHITECTURE 🔒
                </h1>
                <div className="text-center mb-8">
                    <div className="inline-flex flex-col items-center space-y-2">
                        <a
                            href="https://github.com/0xHadiRamdhani/cate-kernel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 border-2 border-red-500"
                        >
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            🔗 View Kernel Repository
                        </a>
                        <p className="text-sm text-gray-400">Repository: 0xHadiRamdhani/cate-kernel</p>
                    </div>
                </div>

                <Arrow />

                <Layer
                    title="👤 USER APPLICATIONS LAYER"
                    components={userApplicationsComponents}
                />

                <Arrow />

                <Layer
                    title="⚡ SYSTEM CALL INTERFACE (ABI)"
                    type="syscall"
                    components={syscallComponents}
                />

                <Arrow />

                <Layer
                    title="⚙️ KERNEL CORE SERVICES"
                    components={kernelCoreComponents}
                />

                <Arrow />

                <Layer
                    title="🔌 HARDWARE ABSTRACTION LAYER"
                    components={hardwareComponents}
                />

                <Arrow />

                <Layer
                    title="🚀 BOOT & INITIALIZATION LAYER"
                    type="boot"
                    components={bootComponents}
                />

                <Layer
                    title="📊 TECHNICAL SPECIFICATIONS"
                    type="specs"
                    specs={technicalSpecs}
                />
            </div>
        </div>
    );
}