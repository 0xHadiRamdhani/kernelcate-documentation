'use client';

import React from 'react';
import Layer from './Layer';
import Arrow from './Arrow';

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
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-red-500 mb-8 title-glow">
                    🔒 CATE-KERNEL ARCHITECTURE 🔒
                </h1>

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