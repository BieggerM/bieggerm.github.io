// js/vfs.js

export const fs = {
    type: 'dir',
    children: {
        'home': {
            type: 'dir',
            children: {
                'guest': {
                    type: 'dir',
                    children: {
                        'welcome.txt': {
                            type: 'file',
                            content: `Welcome to my interactive terminal portfolio.
Type 'help' for a list of commands to get started.`
                        },
                     
                        'about.txt': {
                            type: 'file',
                            content: `
About This Project
==================
This website is an interactive terminal portfolio designed to simulate a Unix-like shell environment.

It is built from scratch using only vanilla JavaScript, HTML, and CSS, with no external libraries or frameworks. The project features a virtual file system that you can navigate using commands like 'ls', 'cd', and 'cat'.

The goal was to create a fun, memorable, and lightweight portfolio that showcases both my professional experience and my passion for building things. Feel free to explore the file system for more details.
`
                        },
                        'documents': {
                            type: 'dir',
                            children: {
                                'cv.txt': {
                                    type: 'file',
                                    content: `Marius Biegger - Curriculum Vitae
=================================================
To view a printer-friendly version, run: open cv

[About Me]
A highly motivated and results-oriented system engineer with over 5 years of experience in designing, implementing, and maintaining robust and scalable IT infrastructure. I possess a strong understanding of Linux systems, network protocols, and cloud technologies. I am passionate about automation and improving system efficiency through scripting and infrastructure-as-code principles.

[Career Journey]
My professional path has taken me through a variety of roles and industries, each contributing to my growth as a system engineer and shaping my approach to technology and teamwork.

Stations:
- Dual Master Student at Audi AG (2024 - Present)
  Currently taking part in a dual master's program focused on cloud applications and security engineering. I'm broadening my knowledge in areas like distributed systems and data infrastructure while gaining practical experience at Audi AG.

- System Engineer - DevOps at Vetter Pharma (2022 - 2024)
  Responsible for automating and maintaining the company's Linux-based server infrastructure and cloud environments (Azure). Led the implementation of automation initiatives and played a key role in improving system security and reliability.

- Cloud Operations Engineer at Liebherr Digital Development Center (2021 - 2022)
  Contributed to the design and deployment of new IT infrastructure projects. Provided technical support and troubleshooting for system-related issues. Gained experience in managing both on-premises and cloud resources.

- Softwaredeveloper at Ametras metals GmbH (2018 - 2021)
  Contributed to a Softwareproject for an ERP-System written in Java. Gained my first experiences working in a technical environment.

[Skills]
- Linux Server Administration (Debian, SUSE)
- Network Configuration (TCP/IP, DNS, DHCP, VLANs)
- Scripting (Bash, Python)
- Cloud Platforms (AWS, Azure)
- Automation Tools (Ansible, Terraform)
- Monitoring Tools (Prometheus, Grafana, Nagios)
- Containerization (Docker, Kubernetes)
- Security Best Practices

[Education]
- Master Cloud Applications & Security Engineering - Technische Hochschule Ingolstadt
- Bachelor Wirtschaftsinformatik - DHBW Ravensburg
`
                                },
                                'projects.txt': {
                                    type: 'file',
                                    content: `Key Projects
============
- Project Heimdall: A real-time monitoring dashboard using Prometheus & Grafana.
- Ansible Playbooks: A public repository of automation scripts for cloud provisioning.
- This Website: An interactive terminal portfolio built with vanilla JS.`
                                }
                            }
                        },
                        '.secret_lair': {
                            type: 'dir',
                            children: {
                                'treasure_map.txt': {
                                    type: 'file',
                                    content: `The real treasure was the commands we typed along the way.`
                                }
                            }
                        }
                    }
                }
            }
        },
               'root': { // Home directory for the root user
            type: 'dir',
            owner: 'root',
            children: {
                '.bash_history': {
                    type: 'file',
                    owner: 'root',
                    content: 'sudo rm -rf / --no-preserve-root'
                }
            }
        },
        'etc': {
            type: 'dir',
            owner: 'root',
            children: {
                'motd': { // Message of the Day
                    type: 'file',
                    owner: 'root',
                    content: `
Welcome to MariusBieggerOS (GNU/Linux 5.15.0 x86_64)

 * Documentation:  cat /home/guest/about.txt
 * Portfolio:      run 'cv' or 'projects'
 * System status:  All systems are fully operational.

Last login: ${new Date().toUTCString()}
`
                },
                'hosts': {
                    type: 'file',
                    owner: 'root',
                    content: `127.0.0.1   localhost
::1         localhost
127.0.1.1   biegger.io
`
                }
            }
        },
        'var': {
            type: 'dir',
            owner: 'root',
            children: {
                'log': {
                    type: 'dir',
                    owner: 'root',
                    children: {
                        'sys.log': {
                            type: 'file',
                            owner: 'root',
                            content: `Jun 07 03:23:25 kernel: Booting up...
Jun 07 03:23:28 services: Starting portfolio daemon.
Jun 07 03:23:30 user: Guest session started from 127.0.0.1
Jun 07 03:23:32 kernel: All systems go.`
                        }
                    }
                }
            }
        },
        'proc': {
            type: 'dir',
            owner: 'root',
            children: {
                'cpuinfo': {
                    type: 'file',
                    owner: 'root',
                    content: `processor   : 0
vendor_id   : GenuineHuman
cpu family  : 6
model name  : Human Brain @ 2.0GHz (Coffee-Fueled)
cache size  : 8192 KB`
                },
                'meminfo': {
                    type: 'file',
                    owner: 'root',
                    content: `MemTotal:       16384 MB
MemFree:        8192 MB
MemAvailable:   12288 MB
SwapTotal:      0 MB
ThoughtsCached: 4096 MB`
                }
            }
        }
    }
};
  