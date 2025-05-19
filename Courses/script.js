document.addEventListener('copy', (event) => {
  const selectedData = window.getSelection().toString();
  // console.log(selectedData);
  // navigator.clipboard.writeText(
  //   'Acche Bachhe Copy Nai Kartey'
  // );
  event.clipboardData.clearData();
  event.clipboardData.setData(
    'text/plain',
    'Acche Bachhe Copy Nai Kartey'
  )
  event.preventDefault();
})
document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {
    element.addEventListener('click', function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains('show')) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }) // forEach

  // content script
  const contentmap = {
    'home': `<h2>Welcome to the E-Learning Platform</h2>
                <p>Select a topic from the sidebar to begin learning.</p>
                <img src="../Assests/click.png" min-width="900" min-height="500" alt="">`,
    '1': ` <h1>What is Cybersecurity?</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/inWWhr5tnEA?si=Z1yLbG9RDuyts5rq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p><strong>Cybersecurity</strong> is the practice of protecting systems, networks, and digital data from unauthorized access, attacks, damage, or theft. It includes a combination of technologies, processes, and practices aimed at safeguarding:</p>
        <ul>
            <li>Computers and servers</li>
            <li>Mobile devices</li>
            <li>Networks</li>
            <li>Applications</li>
            <li>Data</li>
        </ul>

        <h2>Key Goals of Cybersecurity (The CIA Triad)</h2>
        <ul>
            <li><strong>Confidentiality</strong> – Ensuring that data is accessible only to those authorized to have access.</li>
            <li><strong>Integrity</strong> – Ensuring the accuracy and reliability of data and systems.</li>
            <li><strong>Availability</strong> – Ensuring that systems and data are accessible to authorized users when needed.</li>
        </ul>

        <h2>Common Cybersecurity Threats</h2>
        <ul>
            <li>Malware (viruses, worms, ransomware, spyware)</li>
            <li>Phishing (fraudulent attempts to obtain sensitive info)</li>
            <li>Man-in-the-Middle (MitM) attacks</li>
            <li>Denial-of-Service (DoS) attacks</li>
            <li>SQL Injection</li>
            <li>Zero-day exploits</li>
        </ul>
`,
    '2': `<h1>Importance of Cybersecurity in the Modern World</h1>
    <iframe  width="560" height="315" src="https://www.youtube.com/embed/4MiCweOcNKA?si=XYg1IvKxxyETbFgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <ul>
            <li><strong>Protects Sensitive Information:</strong> Safeguards personal and business data from unauthorized access.</li>
            <li><strong>Ensures Safe Online Transactions:</strong> Secures financial transactions and e-commerce activities.</li>
            <li><strong>Defends Against Cyberattacks:</strong> Prevents attacks like hacking, malware, and ransomware that can disrupt businesses or steal data.</li>
            <li><strong>Preserves Critical Infrastructure:</strong> Protects essential services such as healthcare, energy, and government systems from cyber threats.</li>
            <li><strong>Prevents Financial Losses and Identity Theft:</strong> Reduces the risk of financial fraud and identity theft for individuals and organizations.</li>
            <li><strong>Maintains Trust in Digital Services:</strong> Ensures the reliability and security of online platforms, which is vital for user confidence.</li>
            <li><strong>Mitigates the Growing Cyber Threats:</strong> As digital reliance increases, strong cybersecurity is essential to defend against evolving and escalating cyber risks.</li>
        </ul>
`,
    '3': `<h1>Key Concepts: CIA Triad (Confidentiality, Integrity, Availability)</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kPPFNrlN3zo?si=_OlRkb1d9L-ArUt3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <ul>
            <li><strong>Confidentiality:</strong> Ensures that information is accessible only to those authorized to view it. It protects against unauthorized access to sensitive data through encryption and access controls.</li>
            <li><strong>Integrity:</strong> Ensures the accuracy and reliability of data. It involves preventing unauthorized changes to data and ensuring that data remains unaltered unless intentionally modified by authorized users.</li>
            <li><strong>Availability:</strong> Ensures that information and resources are accessible and usable when needed by authorized users. This is achieved through proper maintenance of hardware, regular backups, and network security measures.</li>
        </ul>`,
    '4': ` <h1>Types of Threats: Malware, Phishing, Ransomware, etc.</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cNVwkLo1Snw?si=1ANUwrwiIyqPwXql" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <ul>
            <li><strong>Malware:</strong> Malicious software designed to damage or disrupt systems, steal data, or gain unauthorized access. Examples include viruses, worms, trojans, and spyware.</li>
            <li><strong>Phishing:</strong> A deceptive attempt to obtain sensitive information (like passwords or credit card details) by pretending to be a trustworthy entity, often via email or fake websites.</li>
            <li><strong>Ransomware:</strong> A type of malware that locks or encrypts a user's data and demands payment (a ransom) to restore access.</li>
            <li><strong>Spyware:</strong> Software that secretly monitors and collects user activity and personal information without consent.</li>
            <li><strong>Adware:</strong> Unwanted software designed to display ads on your device, often bundled with free programs and used for tracking user behavior.</li>
            <li><strong>Trojan Horse:</strong> A type of malware disguised as legitimate software, used to trick users into installing it and granting access to attackers.</li>
            <li><strong>Denial-of-Service (DoS) Attacks:</strong> Attacks that overwhelm a system, server, or network with traffic, making it unavailable to users.</li>
            <li><strong>Man-in-the-Middle (MitM) Attacks:</strong> When an attacker secretly intercepts and possibly alters communication between two parties.</li>
            <li><strong>SQL Injection:</strong> An attack that exploits vulnerabilities in applications to execute malicious SQL statements and access or manipulate databases.</li>
        </ul>`,
    '5': `<h1>Key Stakeholders: Individuals, Corporations, Governments</h1>
                <img src="../Assests/Courses/1.png" width="700" height="400" alt="">

        <ul>
            <li><strong>Individuals:</strong> Responsible for protecting personal data, using secure passwords, and being aware of common cyber threats like phishing and scams. Every user plays a role in maintaining cybersecurity.</li>
            <li><strong>Corporations:</strong> Must secure business data, protect customer information, and implement robust cybersecurity policies. They invest in security infrastructure, employee training, and incident response plans.</li>
            <li><strong>Governments:</strong> Develop cybersecurity regulations, protect national infrastructure, and combat cybercrime. They also promote cybersecurity awareness and collaborate with international agencies to address global threats.</li>
        </ul>`,
    '6': ` <h1>Threat Actors and Their Motivations</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6xUH0t6ugIM?si=_VB-iFqMxT85YA4Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <ol>
            <li><strong>👨‍💻 Hackers:</strong> Individuals or groups who exploit system vulnerabilities. Motivated by curiosity, challenge, or sometimes financial or political gain.</li>
            <li><strong>💰 Cybercriminals:</strong> Focused on making money through illegal activities like data theft, ransomware, or online fraud.</li>
            <li><strong>🏢 Insiders:</strong> Employees or associates with access to internal systems who may compromise security—intentionally or unintentionally—due to revenge, carelessness, or greed.</li>
            <li><strong>🎭 Hacktivists:</strong> Politically or socially motivated attackers aiming to spread messages, expose data, or disrupt services to promote a cause.</li>
            <li><strong>🛰️ State-Sponsored Actors:</strong> Government-backed hackers involved in espionage, cyber warfare, and intellectual property theft for national interest.</li>
            <li><strong>🧒 Script Kiddies:</strong> Inexperienced users who launch attacks using ready-made tools or scripts, often just for fun or recognition.</li>
            <li><strong>💣 Terrorist Groups:</strong> Use cyberattacks to create fear, spread propaganda, or disrupt infrastructure as part of ideological warfare.</li>
        </ol>`,
    '7': `  <h1>Types of Cyber Attacks</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Dk-ZqQ-bfy4?si=P16JdulmT4LAse5Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <ul>
            <li><strong>🎭 Social Engineering:</strong> Manipulating people into revealing confidential information (e.g., phishing emails, fake support calls). Relies on human error rather than technical flaws.</li>
            <li><strong>🌐 DoS/DDoS Attacks:</strong> Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) attacks flood a server or network with traffic, making it unavailable to legitimate users.</li>
            <li><strong>🕵️‍♂️ Man-in-the-Middle (MitM) Attack:</strong> An attacker secretly intercepts and possibly alters communication between two parties, often to steal sensitive data like login credentials or financial info.</li>
            <li><strong>💾 SQL Injection:</strong> Exploiting vulnerabilities in a web application's database query system to execute malicious SQL code, allowing attackers to access, modify, or delete data.</li>
        </ul>`,
    "8": `<h1>Recent High-Profile Attacks (Case Studies)</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/fUeJtM1bgGo?si=uAOmuaJLB8PSPzKm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>SolarWinds Attack (2020):</strong> A sophisticated supply chain attack where hackers compromised SolarWinds software updates, affecting U.S. government agencies and Fortune 500 companies.</li>
    <li><strong>Colonial Pipeline Ransomware Attack (2021):</strong> Disrupted fuel supply across the U.S. East Coast. The company paid a ransom of $4.4 million to regain control of systems.</li>
    <li><strong>Microsoft Exchange Hack (2021):</strong> Exploited vulnerabilities in Microsoft Exchange Server, affecting thousands of organizations worldwide. Believed to be state-sponsored.</li>
    <li><strong>Uber Data Breach (2022):</strong> A teenager gained access to internal systems using social engineering tactics, highlighting the importance of employee cybersecurity awareness.</li>
</ul>`,
    "9": `<h1>Cybercrime Ecosystem (Dark Web, Botnets, etc.)</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ecujxzizO58?si=Ycl-tuVmOaBORi7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>Dark Web Marketplaces:</strong> Hidden platforms where cybercriminals buy and sell illicit goods and services, including stolen data, malware, and hacking tools.</li>
    <li><strong>Botnets:</strong> Networks of compromised devices controlled by cybercriminals to launch attacks, such as Distributed Denial-of-Service (DDoS) attacks, or to distribute malware.</li>
    <li><strong>Ransomware-as-a-Service (RaaS):</strong> A business model where ransomware developers lease their malicious software to other criminals, enabling them to carry out attacks without technical expertise.</li>
    <li><strong>Cybercrime-as-a-Service (CaaS):</strong> A growing trend where various cybercriminal services, including malware development, phishing kits, and exploit tools, are offered for rent or sale on the dark web.</li>
    <li><strong>Emerging Threats:</strong> The rise of malicious generative AI and the increasing availability of stealer logs on the dark web are new challenges in the cybercrime landscape.</li>
</ul>`,
    "10": `<h1>OSI Model Overview</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/LuwQr2lMfSU?si=2eoxxS-LWB9Cl1i0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>Layer 1 - Physical Layer:</strong> Deals with the hardware transmission of raw bits over a physical medium like cables and switches.</li>
    <li><strong>Layer 2 - Data Link Layer:</strong> Responsible for node-to-node data transfer and error correction, ensuring reliable data transfer over the physical medium.</li>
    <li><strong>Layer 3 - Network Layer:</strong> Handles routing of data packets across the network and logical addressing (IP addresses).</li>
    <li><strong>Layer 4 - Transport Layer:</strong> Ensures complete data transfer with error handling, flow control, and segmentation (e.g., TCP, UDP).</li>
    <li><strong>Layer 5 - Session Layer:</strong> Manages sessions between applications, ensuring that data is properly synchronized and organized.</li>
    <li><strong>Layer 6 - Presentation Layer:</strong> Converts data into a format that can be understood by the receiving application, including encryption and compression.</li>
    <li><strong>Layer 7 - Application Layer:</strong> The topmost layer, directly interacting with end-users, providing services like email, web browsing, and file transfers.</li>
</ul>`,
    "11": `<h1>IP Addressing and Subnetting</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/OqsXzkXfwRw?si=bjxpI6ZquxprNErq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>IP Addressing:</strong> IP addresses are unique identifiers assigned to devices on a network. IPv4 addresses are 32-bit, while IPv6 uses 128-bit addresses for a larger address space.</li>
    <li><strong>Subnetting:</strong> The practice of dividing an IP network into smaller sub-networks (subnets) to improve performance and security by limiting broadcast traffic.</li>
    <li><strong>Subnet Masks:</strong> Used in conjunction with IP addresses, subnet masks define the network portion and the host portion of an IP address, helping routers determine how to route traffic.</li>
    <li><strong>Classful Addressing:</strong> IPv4 addresses are categorized into classes (A, B, C, D, E), each with its own range and usage, to manage large networks.</li>
    <li><strong>CIDR (Classless Inter-Domain Routing):</strong> A more flexible way of allocating IP addresses and routing traffic using variable-length subnet masking (VLSM), improving IP address efficiency.</li>
</ul>`,
    "12": `<h1>Common Protocols (TCP/IP, HTTP, HTTPS, DNS)</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/WnL3tHmhVqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>TCP/IP:</strong> The foundational communication protocol suite for the internet. TCP (Transmission Control Protocol) ensures reliable data transfer, while IP (Internet Protocol) handles addressing and routing.</li>
    <li><strong>HTTP (Hypertext Transfer Protocol):</strong> The protocol used for transferring web pages and resources over the internet. It is stateless, meaning each request is independent of others.</li>
    <li><strong>HTTPS (Hypertext Transfer Protocol Secure):</strong> An encrypted version of HTTP, using SSL/TLS protocols to secure data between the client and the server, ensuring confidentiality and integrity.</li>
    <li><strong>DNS (Domain Name System):</strong> A hierarchical naming system used to translate human-readable domain names (like www.example.com) into IP addresses, allowing devices to locate each other on the network.</li>
</ul>`,
    "13": `<h1>Firewalls and Ports</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/XEqnE_sDzSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>Firewall Basics:</strong> Firewalls are network security devices that monitor and control incoming and outgoing network traffic based on predetermined security rules. They act as a barrier between a trusted internal network and untrusted external networks, such as the internet.</li>
    <li><strong>Types of Firewalls:</strong> There are several types of firewalls, including:
        <ul>
            <li><strong>Packet Filtering Firewalls:</strong> Examine packets at the network layer and make decisions based on predefined rules.</li>
            <li><strong>Stateful Inspection Firewalls:</strong> Track the state of active connections and make decisions based on the context of the traffic.</li>
            <li><strong>Proxy Firewalls:</strong> Act as intermediaries between users and services, filtering requests and responses.</li>
            <li><strong>Next-Generation Firewalls (NGFWs):</strong> Combine traditional firewall functions with additional features like encrypted traffic inspection, intrusion prevention systems, and application awareness.</li>
        </ul>
    </li>
    <li><strong>Ports and Protocols:</strong> Network ports are logical endpoints for communication. Firewalls use port numbers to allow or block traffic. Common ports include:
        <ul>
            <li><strong>Port 80:</strong> HTTP (Hypertext Transfer Protocol)</li>
            <li><strong>Port 443:</strong> HTTPS (HTTP Secure)</li>
            <li><strong>Port 25:</strong> SMTP (Simple Mail Transfer Protocol)</li>
            <li><strong>Port 21:</strong> FTP (File Transfer Protocol)</li>
        </ul>
    </li>
    <li><strong>Firewall Rules:</strong> Firewalls operate based on a set of rules that define what traffic is allowed or denied. These rules can be based on IP addresses, port numbers, protocols, and other criteria. Properly configured firewall rules are essential for effective network security.</li>
    <li><strong>Importance of Firewalls:</strong> Firewalls are critical in protecting networks from unauthorized access, cyberattacks, and data breaches. They help ensure the confidentiality, integrity, and availability of network resources.</li>
</ul>`,
    "14": `<h1>Introduction to Windows and Linux Security</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1ymog2A8tVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>Windows Security:</strong> Windows operating systems offer built-in security features such as Windows Defender Antivirus, firewall protection, and BitLocker encryption. Regular updates and patch management are crucial to protect against vulnerabilities.</li>
    <li><strong>Linux Security:</strong> Linux provides a robust security model with user-based permissions, SELinux/AppArmor for mandatory access control, and iptables for firewall configuration. Regular system updates and secure configuration practices are essential.</li>
    <li><strong>Common Security Practices:</strong> Both Windows and Linux systems benefit from practices like principle of least privilege, regular auditing, and secure coding practices to mitigate security risks.</li>
</ul>`,
    "15": `<h1>File Systems and Permissions</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1wTj3J8w1bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>File Systems:</strong> File systems organize and store data on storage devices. Common file systems include NTFS for Windows and ext4 for Linux. Each has its own features and limitations regarding security and performance.</li>
    <li><strong>Permissions:</strong> File permissions control access to files and directories. In Linux, permissions are represented as read (r), write (w), and execute (x) for user, group, and others. Windows uses Access Control Lists (ACLs) to define permissions.</li>
    <li><strong>Special Permissions:</strong> Linux offers special permissions like SUID, SGID, and the sticky bit, which provide additional control over file execution and access.</li>
</ul>`
    ,
    "16": `<h1>System Hardening Basics</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1wTj3J8w1bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>Definition:</strong> System hardening involves securing a system by reducing its surface of vulnerability. This includes removing unnecessary services, applying patches, and configuring security settings.</li>
    <li><strong>Best Practices:</strong> Regularly update software, disable unused ports and services, implement strong authentication mechanisms, and use firewalls to protect systems.</li>
    <li><strong>Tools:</strong> Utilize tools like antivirus software, intrusion detection systems, and configuration management tools to assist in hardening systems.</li>
</ul>`
    ,
    "17": `<h1>User Authentication and Authorization</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/CvzPTeGv9Gw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<ul>
    <li><strong>Authentication:</strong> The process of verifying the identity of a user, typically through credentials like usernames and passwords. Multi-factor authentication adds an extra layer of security.</li>
    <li><strong>Authorization:</strong> Determines what an authenticated user is allowed to do. This involves assigning roles and permissions to control access to resources.</li>
    <li><strong>Best Practices:</strong> Implement strong password policies, use encryption for sensitive data, and regularly review and update user access controls to ensure security.</li>
</ul>`,
    "18": `<h1>Career Paths in Cybersecurity</h1>
<!-- YouTube video iframe goes here -->
<ul>
    <li><strong>Security Analyst:</strong> Monitors and defends systems from security breaches. Handles incident response and ensures compliance with security policies.</li>
    <li><strong>Penetration Tester (Ethical Hacker):</strong> Simulates cyberattacks to identify vulnerabilities in systems and applications before malicious hackers can exploit them.</li>
    <li><strong>Security Engineer:</strong> Builds and maintains security infrastructure, including firewalls, VPNs, IDS/IPS, and endpoint protection.</li>
    <li><strong>Security Architect:</strong> Designs secure network and system architecture to protect against internal and external threats.</li>
    <li><strong>SOC Analyst:</strong> Works in a Security Operations Center (SOC), detecting, analyzing, and responding to cybersecurity incidents in real time.</li>
    <li><strong>Governance, Risk, and Compliance (GRC) Specialist:</strong> Ensures the organization meets regulatory and industry security standards. Focuses on policies, risk assessments, and audits.</li>
    <li><strong>Forensics Investigator:</strong> Analyzes digital evidence after a breach or crime. Works closely with law enforcement or incident response teams.</li>
</ul>`
    ,
    "19": `<h1>Key Certifications (CompTIA Security+, CEH, CISSP, etc.)</h1>
<!-- YouTube video iframe goes here -->
<ul>
    <li><strong>CompTIA Security+:</strong> Entry-level certification covering foundational cybersecurity knowledge, including threats, vulnerabilities, and security architecture.</li>
    <li><strong>Certified Ethical Hacker (CEH):</strong> Teaches how to think and act like a hacker to ethically test and secure systems. Focuses on penetration testing tools and techniques.</li>
    <li><strong>Certified Information Systems Security Professional (CISSP):</strong> Advanced certification for experienced professionals covering security architecture, risk management, and compliance.</li>
    <li><strong>CompTIA CySA+ and PenTest+:</strong> Mid-level certifications for analysts and penetration testers, focusing on behavioral analytics and exploit testing.</li>
    <li><strong>GIAC Certifications (e.g., GSEC, GPEN):</strong> Industry-recognized certs from SANS Institute, known for deep technical expertise.</li>
    <li><strong>CISM and CISA:</strong> ISACA’s certifications for security managers and auditors, focusing on governance and auditing rather than technical implementation.</li>
</ul>`
    ,
    "20": `<h1>Ethical Hacking and Bug Bounties</h1>
<!-- YouTube video iframe goes here -->
<ul>
    <li><strong>Ethical Hacking:</strong> Involves legally probing systems and applications for security weaknesses. Helps organizations strengthen their defenses by mimicking real-world attack techniques.</li>
    <li><strong>Bug Bounty Programs:</strong> Platforms like HackerOne and Bugcrowd allow ethical hackers to report security flaws and earn monetary rewards.</li>
    <li><strong>Types of Vulnerabilities Found:</strong> Cross-site scripting (XSS), SQL injection, authentication bypasses, and remote code execution are common targets.</li>
    <li><strong>Legal and Responsible Disclosure:</strong> Ethical hackers must follow legal boundaries and responsible disclosure practices to avoid criminal consequences.</li>
    <li><strong>Building Skills:</strong> Requires understanding of networking, programming, and operating systems. Tools like Burp Suite, Metasploit, and Wireshark are commonly used.</li>
</ul>`
    ,
    "21": `<h1>Quiz !!!</h1>
    <br>
    <h6>( Minimum Score is 7 to Pass, Best Of Luck</h6>
<!-- YouTube video iframe goes here -->
<div class="quiz-container bg-black">
    <h2 class="mb-4">Cybersecurity Quiz</h2>
    <form id="quizForm"></form>
    <button class="btn btn-primary" onclick="getQuiz()">Get Quiz</button>
    <button class="btn btn-primary" onclick="submitQuiz()">Submit Quiz</button>
    <div id="result" class="mt-4"></div>
  </div>`
  };
  const topicMap = {
    'module1': {
      module_title: "Introduction to Cybersecurity",
      topics: [
        "What is Cybersecurity?",
        "Importance of Cybersecurity in the Modern World",
        "Key Concepts: CIA Triad (Confidentiality, Integrity, Availability)",
        "Types of Threats: Malware, Phishing, Ransomware, etc.",
        "Key Stakeholders: Individuals, Corporations, Governments"
      ]
    },
    'module2': {
      module_title: "Cyber Threat Landscape",
      topics: [
        "Threat Actors and Their Motivations",
        "Types of Cyber Attacks: Social Engineering, DoS/DDoS, Man-in-the-Middle, SQL Injection",
        "Recent High-Profile Attacks (Case Studies)",
        "Cybercrime Ecosystem (Dark Web, Botnets, etc.)"
      ]
    },
    'module3': {
      module_title: "Networking Basics for Cybersecurity",
      topics: [
        "OSI Model Overview",
        "IP Addressing and Subnetting",
        "Common Protocols (TCP/IP, HTTP, HTTPS, DNS)",
        "Firewalls and Ports",
      ]
    },
    'module4': {
      module_title: "Operating Systems and Security",
      topics: [
        "Introduction to Windows and Linux Security",
        "File Systems and Permissions",
        "System Hardening Basics",
        "User Authentication and Authorization",
      ]
    },
    'module5': {
      module_title: "Cybersecurity Careers and Next Steps",
      topics: [
        "Career Paths in Cybersecurity",
        "Key Certifications (CompTIA Security+, CEH, CISSP, etc.)",
        "Ethical Hacking and Bug Bounties",
        "Building a Home Lab",
        "Final Project / Capstone / Assessment"
      ]
    }
  };


  document.querySelectorAll('[data-topic]').forEach((element) => {
    element.addEventListener('click', (event) => {
      const topic = event.currentTarget.getAttribute('data-topic');
      const moduleData = topicMap[topic];

      if (moduleData) {
        // Build HTML content
        let html = `<h2>${moduleData.module_title}</h2><ul>`;
        moduleData.topics.forEach(t => {
          html += `<li>${t}</li>`;
        });
        html += '</ul>';
        document.getElementById('content').innerHTML = html;
      } else {
        document.getElementById('content').innerHTML = '<p>Content not found</p>';
      }
    });
  });


  document.querySelectorAll('[data-content]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      console.log("clicked")
      const topic = event.currentTarget.getAttribute('data-content');
      const moduleData = contentmap[topic] || '<p>Content not fount</p>';
      if (moduleData) {
        document.getElementById('content').innerHTML = moduleData;
      } else {
        document.getElementById('content').innerHTML = '<p>Content not found</p>';
      }
    })
  })

  // quiz module
});
const quizData = [
  {
    question: "1. What does the 'C' in the CIA Triad stand for?",
    options: ["Control", "Confidentiality", "Compliance", "Connectivity"],
    answer: "Confidentiality"
  },
  {
    question: "2. What type of attack floods a server with requests to make it unavailable?",
    options: ["MITM", "Phishing", "DDoS", "Spoofing"],
    answer: "DDoS"
  },
  {
    question: "3. Which layer of the OSI model handles routing?",
    options: ["Data Link", "Network", "Transport", "Session"],
    answer: "Network"
  },
  {
    question: "4. What is the main use of port 443?",
    options: ["FTP", "HTTP", "HTTPS", "SSH"],
    answer: "HTTPS"
  },
  {
    question: "5. What is an example of a social engineering attack?",
    options: ["Phishing", "SQL Injection", "Brute Force", "DoS"],
    answer: "Phishing"
  },
  {
    question: "6. What tool is often used in ethical hacking?",
    options: ["Notepad", "Burp Suite", "Word", "Slack"],
    answer: "Burp Suite"
  },
  {
    question: "7. Which certification is ideal for entry-level cybersecurity professionals?",
    options: ["CISSP", "CEH", "Security+", "CISA"],
    answer: "Security+"
  },
  {
    question: "8. What is the function of a firewall?",
    options: ["Boost internet speed", "Encrypt data", "Filter network traffic", "Scan files for viruses"],
    answer: "Filter network traffic"
  },
  {
    question: "9. Which file system is common in Linux?",
    options: ["NTFS", "exFAT", "ext4", "FAT32"],
    answer: "ext4"
  },
  {
    question: "10. What is the goal of system hardening?",
    options: ["Enhance performance", "Reduce vulnerabilities", "Add new features", "Expand storage"],
    answer: "Reduce vulnerabilities"
  }
];
function getQuiz() {
  let form = document.getElementById("quizForm");
  if (form.innerHTML === '') {
    quizData.forEach((item, index) => {
      const questionHTML = `
        <div class="question">
          <p><strong>${item.question}</strong></p>
          ${item.options.map(option => `
            <div class="form-check">
              <input class="form-check-input" type="radio" name="q${index}" value="${option}" required>
              <label class="form-check-label">${option}</label>
            </div>
          `).join('')}
        </div>
        `;
      form.insertAdjacentHTML("beforeend", questionHTML);
    });
  }
  else {
    form.innerHTML = ''
  }



}
function submitQuiz() {
  let score = 0;
  quizData.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.answer) {
      score++;
    }
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
        <div class="alert alert-${score >= 7 ? 'success' : 'danger'}" role="alert">
          You scored <strong>${score}/10</strong>. ${score >= 7 ? 'Great job!' : 'Keep practicing!'}
        </div>
      `;
}