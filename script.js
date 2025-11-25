// ==========================================
//              DATA STORAGE
// ==========================================

// --- MODULE 6 DATA (Security) ---
const questionsModule6 = [
    {a: "Denial of Service (DoS) attack", q: "One in which a malicious hacker takes over computers via the internet and causes them to flood a target site with demands for data and other small tasks causing a computer to perform repeated unproductive task."},
    {a: "Operating System", q: "Plays a key role in computer system security."},
    {a: "System Administrators", q: "Must be on guard to arm their operating systems with all available defense against attack."},
    {a: "Strategies for improving system survivability based on knowledge retrieved from attacks", q: "“Adaptation and evolution to reduce effectiveness of future attacks” is described as..."},
    {a: "True", q: "“E-mail” is a vulnerability of LAN connected (with internet).", type: "tf"},
    {a: "LAN connected (with internet)", q: "“E-mail” is a vulnerability of which configuration?"},
    {a: "Strategies for detecting attacks", q: "“Recognition of attacks and damage” is described as..."},
    {a: "Strategies for limiting damage", q: "“Recovery of essential and full services after attack” is described as..."},
    {a: "Strategies for repelling attacks", q: "“Resistance to attacks” is the same as..."},
    {a: "False", q: "“Sniffers” is a vulnerability of a LAN connected (with internet). (Based on provided text)", type: "tf"},
    {a: "True", q: "“Sniffers” is not a vulnerability of a LAN connected (with internet).", type: "tf"},
    {a: "LAN connected (with internet)", q: "“Web Server” is a vulnerability of which configuration?"},
    {a: "Logic Bomb", q: "A type of virus which is triggered by a certain event like keystroke."},
    {a: "Time Bomb", q: "A type of virus which is triggered by a specific time."},
    {a: "False", q: "Antivirus software can remove all impurities from your computer.", type: "tf"},
    {a: "True", q: "Antivirus softwares combat viruses.", type: "tf"},
    {a: "unintentional intrusions", q: "Any breach of security or modification of data that was not the result of a planned intrusion."},
    {a: "True", q: "Blended threats are considered as intentional attacks.", type: "tf"},
    {a: "True", q: "Boot sector virus infects the boot record, the system area of a floppy disk or a hard drive.", type: "tf"},
    {a: "True", q: "Computer “Virus” is a vulnerability of Single Computer (without E-mail or internet).", type: "tf"},
    {a: "True", q: "File infector virus infects files on your computer.", type: "tf"},
    {a: "True", q: "Hoax site is an example of spoofing.", type: "tf"},
    {a: "True", q: "Hoax Sites are used when unauthorized users want to disguise themselves as friendly sites.", type: "tf"},
    {a: "Multipartite virus", q: "Infects both the boot record and program files, making them especially difficult to repair."},
    {a: "Macro Virus", q: "Infects data files (such as word processing documents, spreadsheets, etc.)"},
    {a: "Boot sector virus", q: "Infects the boot record, the system area of a floppy disk or a hard drive."},
    {a: "Spoofing", q: "The act of disguising a communication from an unknown source as being from a known, trusted source."},
    {a: "Browsing", q: "It is when an unauthorized users gain access to search through secondary storage directories or files for information they should not have the privilege to read."},
    {a: "True", q: "LAN connected (without internet) is vulnerable to “sniffers”.", type: "tf"},
    {a: "True", q: "Logic Bomb is a destructive program that can be triggered by a keystroke or connection with the Internet.", type: "tf"},
    {a: "True", q: "Malicious or not, a breach of security severely damages the system’s credibility.", type: "tf"},
    {a: "True", q: "Ransomware is a malware that demands a fee or ransom.", type: "tf"},
    {a: "False", q: "Ransomware is similar to smishing except that the victims receive a voice mail telling them to call a phone number or access a website.", type: "tf"},
    {a: "Trash Collection", q: "Refers to the use of discarded materials such as disks, CDs, printout, etc., to enter the system legally."},
    {a: "True", q: "Repeated trials is also known as Brute Force Attack.", type: "tf"},
    {a: "True", q: "Security breach can happen due to uneducated users and unauthorized access to system resources.", type: "tf"},
    {a: "True", q: "Security breach is a gap in system security that can be malicious or not.", type: "tf"},
    {a: "Virus", q: "Small programs written to alter the way a computer operates, without permission of the user."},
    {a: "True", q: "Sniffers are programs that reside on computer attached to the network.", type: "tf"},
    {a: "True", q: "Spear-phishing is variation of phishing In which the phishier sends fake emails to a certain employee of an organization.", type: "tf"},
    {a: "True", q: "Spoofing can be applied to emails, phone calls, and websites.", type: "tf"},
    {a: "True", q: "Spoofing is the act of disguising a communication from an unknown source as being from a known, trusted source.", type: "tf"},
    {a: "False", q: "Spooping is the act of disguising a communication from an unknown source as being from a known, trusted source.", type: "tf"},
    {a: "False", q: "The “Ease of protection” of a LAN connected (with Internet) is “High”.", type: "tf"},
    {a: "False", q: "The “Ease of protection” of a LAN connected (with internet) is “Medium”.", type: "tf"},
    {a: "Operating System", q: "The more complex and powerful the ________, the more likely it is to have vulnerabilities to attack."},
    {a: "Repeated trials", q: "These refer to entering systems by guessing authentic passwords."},
    {a: "Trap doors", q: "These refers to an unspecified and undocumented entry point to the system."},
    {a: "Master boot record virus", q: "This infects the boot record of a disk, saving a legitimate copy of the master boot record in a different location on the volume."},
    {a: "Self-replicating", q: "To be called a virus, one must be self-executing and __________."},
    {a: "Wire tapping", q: "Unauthorized user monitors or modifies a user’s transmission."},
    {a: "all of these", q: "“Virus” is a vulnerability of which configuration?"},
    {a: "False", q: "Vishing is a type of phishing that involves the use of short messages service (SMS) texting.", type: "tf"},
    {a: "True", q: "Vishing is similar to smishing except that the victims receive a voice mail telling them to call a phone number or access a website.", type: "tf"},
    {a: "low", q: "What is the “ease of protection” of a LAN connected with internet?"},
    {a: "Medium", q: "What is the “ease of protection” of a LAN connected without Internet?"},
    {a: "High", q: "What is the “ease of protection” of a single computer without e-mail or internet?"},
    {a: "low", q: "What is the “Relative risk” of a single computer without e-mail or internet?"},
    {a: "all of these", q: "Which among the given is a vulnerability of a LAN connected with internet?"},
    {a: "Sniffers", q: "Which among the given is a vulnerability of a LAN connected without internet?"},
    {a: "Compressed Passwords", q: "Which among the given is a vulnerability of a single computer without e-mail or internet?"},
    {a: "Single Computer (without E-mail or internet)", q: "Which among the given is NOT a vulnerability of a LAN connected with internet?"},
    {a: "E-mail", q: "Which among the given is NOT a vulnerability of a LAN connected without internet?"},
    {a: "Sniffers", q: "Which among the given is NOT a vulnerability of a single computer without e-mail or internet?"},
    {a: "LAN connected with or without Internet", q: "Which of the configurations is vulnerable to “Sniffers”?"},
    {a: "LAN connected with or without Internet", q: "Which of the configurations is vulnerable to “Spoofing”?"},
    {a: "intrusion recognition patterns", q: "Which example strategy belongs to the key property “Adaptation and evolution to reduce effectiveness of future attacks”?"},
    {a: "authentication", q: "Which example strategy does NOT belong to the key property “Recovery of essential and full services after attack”?"},
    {a: "Hardware malfunction", q: "Which of the given is an example of unintentional attack?"},
    {a: "intrusion detection", q: "Which of the given is an example strategy of the key property “Recognition of attack and damage”?"},
    {a: "contingency planning", q: "Which of the given is an example strategy of the key property “Recover of essential and full services after attack”?"},
    {a: "authentication", q: "Which of the given is an example strategy of the key property “Resistance to attacks”?"},
    {a: "all of these", q: "Which of the given is considered as system vulnerabilities?"},
    {a: "all of the above", q: "Which of these are the key properties of a survivable system?"},
    {a: "False", q: "Worm is a program to use to enhance the speed of your computer.", type: "tf"},
    {a: "True", q: "Worm is an example of Blended Threat.", type: "tf"},
    {a: "Regular", q: "Written policies and procedures and _______ user training are essential elements of system management."}
];

// --- MODULE 5 DATA (Placeholder) ---
// PASTE YOUR MODULE 5 QUESTIONS INSIDE THESE BRACKETS LATER:
// --- MODULE 5 DATA (Disk Scheduling & Storage) ---
const questionsModule5 = [
    {a: "Disks", q: "______ are rigid metal or glass platters covered with magnetic recording material."},
    {a: "Magnetic Tape", q: "_______ was used as an early secondary-storage medium, but the access time is much slower than for disks."},
    {a: "Magnetic", q: "A ______ disk system has several disk platters."},
    {a: "Fixed-head system", q: "A _______ has a separate read-write head for each track."},
    {a: "Movable-Head system", q: "A ________ movable-head system has only one read-write head per surface and the system moves the head to access a particular track."},
    {a: "directory", q: "A disk normally has a device _______ indicating which files are on the disk."},
    {a: "4500 to 7200", q: "A typical hard disk have a rotation speed from __"},
    {a: "Head crashes", q: "An incident where the head contacts the disk surface, the head will scrape the recording medium off the disk."},
    {a: "True", q: "C-SCAN scheduling essentially treats the disk as though it were circular where the last track is adjacent to the first one.", type: "tf"},
    
    // --- Calculation Set 1 (Requests: 39, 14, 38, 17 | Head: 10) ---
    {a: "29 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using C-LOOK (going higher), how many THM?"},
    {a: "54 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using C-LOOK (going lower), how many THM?"},
    {a: "194 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using C-SCAN (going lower), how many THM?"},
    {a: "29 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using C-SCAN (going lower), what is the farthest distance between 2 tracks?"},
    {a: "1 track", q: "Given requests: 39, 14, 38, 17. Head at 10. Using C-SCAN (going lower), what is the shortest distance between 2 tracks?"},
    {a: "99 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using FCFS, how many THM?"},
    {a: "track 39", q: "Given requests: 39, 14, 38, 17. Head at 10. Using FCFS, what is the first served track request?"},
    {a: "track 17", q: "Given requests: 39, 14, 38, 17. Head at 10. Using FCFS, what is the last served track request?"},
    {a: "29 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using LOOK (going higher), how many THM?"},
    {a: "98 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using LOOK (going lower), what is the last served track request?"},
    {a: "49 tracks", q: "Given requests: 39, 14, 38, 17. Head at 10. Using SCAN (heading towards 0 point), how many THM?"},
    {a: "track 14", q: "Given requests: 39, 14, 38, 17. Head at 10. Using SSTF, what is the first served track request?"},
    
    {a: "circular", q: "Each disk platter has a flat _______ shape, like a phonograph record."},

    // --- Calculation Set 2 (Requests: 98, 53, 22, 16, 24 | Head: 32) ---
    {a: "156 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using C-LOOK (going higher), how many THM?"},
    {a: "143 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using C-LOOK (going lower), how many THM?"},
    {a: "177 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using C-SCAN (going lower), how many THM?"},
    {a: "98 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using C-SCAN (going lower), what is the farthest distance between 2 tracks?"},
    {a: "1 track", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using C-SCAN (going lower), what is the shortest distance between 2 tracks?"},
    {a: "156 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using FCFS, how many THM?"},
    {a: "track 98", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using FCFS, what is the first served track request?"},
    {a: "track 24", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using FCFS, what is the last served track request?"},
    {a: "148 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using LOOK (going higher), how many THM?"},
    {a: "track 53", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using LOOK (going higher), what is the first served track request?"},
    {a: "track 16", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using LOOK (going higher), what is the last served track request?"},
    {a: "98 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using LOOK (going lower), what is the last served track request?"},
    {a: "130 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using SCAN (heading towards 0 point), how many THM?"},
    {a: "track 98", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using SCAN, what is the last served track request?"},
    {a: "98 tracks", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using SSTF, how many THM?"},
    {a: "track 24", q: "Given requests: 98, 53, 22, 16, 24. Head at 32. Using SSTF, what is the first served track request?"},

    // --- Definitions ---
    {a: "surface", q: "In a disk the information is recorded on the __"},
    {a: "True", q: "In C-SCAN scheduling, when it reaches the other end, it immediately returns to the beginning of the disk without servicing any requests on the return trip.", type: "tf"},
    {a: "Constant Linear Velocity", q: "It is a way to read and write data on disks, where the density of bits (bits/unit length) per track is uniform."},
    {a: "Constant Angular Velocity", q: "It is a way to read and write data on disks, where the number of bits per track is uniform (constant number of sectors)."},
    {a: "Latency time", q: "It is the time it takes for the sector to rotate under the head."},
    {a: "Transfer time", q: "It is the time it takes to actually transfer data between disk and main memory."},
    {a: "Seek time", q: "It is the time it takes to move the read-write head to the correct track."},
    {a: "Magnetic Disk", q: "It provides the bulk of secondary storage for modern computer systems."},
    {a: "False", q: "LOOK disk scheduling algorithm is sometimes called the elevator algorithm.", type: "tf"},
    {a: "logical block", q: "Modern disks are addressed as large one-dimensional arrays of logical blocks, where the ______ is the smallest unit of transfer."},
    {a: "Magnetic Tape", q: "One of the earliest secondary-storage media is the _______."},
    {a: "Bad block", q: "One or more blocks that are unreadable or not writable."},
    {a: "True", q: "SCAN disk scheduling algorithm is sometimes called the elevator algorithm.", type: "tf"},
    {a: "True", q: "Since most jobs depend heavily on the disk for loading and input and output files, it is important that disk service be as fast as possible.", type: "tf"},
    {a: "tracks", q: "The disk surface is logically divided into _____, which are subdivided into sectors."},
    {a: "True", q: "The First Come First Served disk scheduling selects the request according to the order in the disk queue.", type: "tf"},
    {a: "False", q: "The Look disk scheduling selects the request with the minimum seek time from the current head position.", type: "tf"},
    {a: "permanently", q: "The main requirement of secondary storage is to be able to store very large amount of data _______."},
    {a: "True", q: "The OS can improve on the average disk service time by scheduling the requests for disk access.", type: "tf"},
    {a: "False", q: "The Shortest Seek Time First disk scheduling selects the request with the maximum seek time from the current head position.", type: "tf"},
    {a: "True", q: "The Shortest Seek Time First disk scheduling selects the request with the minimum seek time from the current head position.", type: "tf"},
    {a: "512", q: "The size of a logical block is usually ____ bytes."},
    {a: "magnetically", q: "The system stores information by recording it ______ on the sector under the read-write head."},
    {a: "floppy disks", q: "These disks are coated with a hard surface, so the read-write head scans it directly on the disk surface without destroying the data."},
    {a: "all of these", q: "Which of the given is considered aspects of disk management for which an operating system is responsible? (disk formatting, Booting from disk, Bad-block recovery)"}
];

// --- MODULE 4 DATA (Virtual Memory) ---
const questionsModule4 = [
    {a: "valid-invalid bit", q: "_______ is the additional bit in the page table of demand-paging system."},
    {a: "main memory", q: "A page replacement algorithm is necessary to select which among the pages currently residing in _______ will be replaced."},
    {a: "hard disk", q: "A portion of the ___________ is acting as a virtual memory."},
    {a: "True", q: "Demand paging system is similar to paging system with swapping.", type: "tf"},
    
    // --- 3 Frames Calculations ---
    {a: "2", q: "Ref: 1 3 0 3 5 6 3 (3 Frames). Using LRU, the number of hits is ________"},
    {a: "2", q: "Ref: 1 3 0 3 5 6 3 (3 Frames). Using OPTIMAL, the number of hits is ________."},
    {a: "9", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (3 Frames). Using OPTIMAL, the number of page faults is ________."},
    {a: "11", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (3 Frames). Using OPTIMAL, the number of page hits is ________."},
    {a: "1", q: "Ref: 1 3 0 3 5 6 3 (3 Frames). Using FIFO, the number of page hits is ________."},
    {a: "1", q: "Ref: 1 3 0 3 5 6 3 (3 Frames). Using OPTIMAL, the number of hits is ________. (Note: Check specific variation if distinct from previous)"}, 
    {a: "5", q: "Ref: 1 3 0 3 5 6 3 (3 Frames). Using OPTIMAL, the number of page faults is ________."},
    {a: "6", q: "Ref: 1 3 0 3 5 6 3 (3 Frames). Using FIFO, the number of page faults is ________."},
    {a: "15", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (3 Frames). Using FIFO, the number of page faults is ________."},
    {a: "5", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (3 Frames). Using FIFO, the number of page hits is ________."},
    {a: "8", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (3 Frames). Using LRU, the number of hits is ________."},
    {a: "12", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (3 Frames). Using LRU, the number of page faults is ________."},

    // --- 4 Frames Calculations ---
    {a: "5", q: "Ref: 1 3 0 3 5 6 3 (4 Frames). Using FIFO, the number of page faults is ________."},
    {a: "2", q: "Ref: 1 3 0 3 5 6 3 (4 Frames). Using FIFO, the number of page hits is ________."},
    {a: "2", q: "Ref: 1 3 0 3 5 6 3 (4 Frames). Using LRU, the number of hits is ________."},
    {a: "5", q: "Ref: 1 3 0 3 5 6 3 (4 Frames). Using LRU, the number of page faults is ________."},
    {a: "2", q: "Ref: 1 3 0 3 5 6 3 (4 Frames). Using OPTIMAL, the number of hits is ________."},
    {a: "9", q: "Ref: 9 5 7 9 1 1 4 8 0 1 0 2 7 (4 Frames). Using FIFO, the number of page faults is ________."},
    {a: "4", q: "Ref: 9 5 7 9 1 1 4 8 0 1 0 2 7 (4 Frames). Using FIFO, the number of page hits is ________."},
    {a: "4", q: "Ref: 9 5 7 9 1 1 4 8 0 1 0 2 7 (4 Frames). Using LRU, the number of hits is ________."},
    {a: "9", q: "Ref: 9 5 7 9 1 1 4 8 0 1 0 2 7 (4 Frames). Using LRU, the number of page faults is ________."},
    {a: "8", q: "Ref: 9 5 7 9 1 1 4 8 0 1 0 2 7 (4 Frames). Using OPTIMAL, the number of page faults is ________."},
    {a: "5", q: "Ref: 9 5 7 9 1 1 4 8 0 1 0 2 7 (4 Frames). Using OPTIMAL, the number of page hits is ________."},

    // --- 5 Frames Calculations ---
    {a: "13", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (5 Frames). Using OPTIMAL, the number of page hits is ________."},
    {a: "9", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (5 Frames). Using FIFO, the number of page faults is ________."},
    {a: "11", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (5 Frames). Using FIFO, the number of page hits is ________."},
    {a: "13", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (5 Frames). Using LRU, the number of hits is ________."},
    {a: "7", q: "Ref: 7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1 (5 Frames). Using OPTIMAL, the number of page faults is ________."},

    // --- Definitions & Theory ---
    {a: "page-fault", q: "If a process tries to use a page that is not in physical memory, then a ________ will occur."},
    {a: "True", q: "If a process tries to use a page that is not in physical memory, then a page fault will occur.", type: "tf"},
    {a: "True", q: "In demand paging system, there is an additional bit in the page table which is the valid-invalid bit.", type: "tf"},
    {a: "True", q: "In lazy swapping, the OS swaps only the necessary pages into memory.", type: "tf"},
    {a: "Page replacement", q: "In this scheme, the operating system removes or replaces one of the existing pages in memory to give away for the incoming page."},
    {a: "physical", q: "In virtual memory, programs can be greater than ____________ memory."},
    {a: "pure", q: "In__________ demanding paging, the system never bring a page into memory until it is required."},
    {a: "Lazy swapping", q: "It is a swapping technique where instead of swapping the entire process into memory, the OS swaps only the necessary pages into memory."},
    {a: "Virtual memory", q: "It is a technique that allows the execution of processes that may not be completely in memory."},
    {a: "low", q: "It is important to keep the page-fault rate _____ in a demand-paging system."},
    {a: "False", q: "It is important to keep the page-fault rate high in a demand-paging system.", type: "tf"},
    {a: "True", q: "It is important to keep the page-fault rate low in a demand-paging system.", type: "tf"},
    {a: "True", q: "Modify bit is also known as dirty bit.", type: "tf"},
    {a: "True", q: "Multi programming allows to keep many processes in memory simultaneously.", type: "tf"},
    {a: "larger", q: "One major advantage of virtual memory is that programs can be ________ than physical memory."},
    {a: "Physical memory", q: "One of the major advantages of Virtual memory is that programs can be larger than _________."},
    {a: "True", q: "One of the major advantages of Virtual memory is that programs can be larger than physical memory.", type: "tf"},
    {a: "no", q: "Over-allocated memory occurs if there is a need to transfer a page from disk to memory but there is ____ memory space available."},
    {a: "If no frames is free, the system finds one that is currently being used and frees it", q: "Page replacement takes the following approach:"},
    {a: "principle of locality of reference", q: "The __________ ensures that programs do not access a new page of memory with each instruction execution."},
    {a: "False", q: "The effectiveness of the demand paging is based on a property of computer programs called the publicity of reference.", type: "tf"},
    {a: "False", q: "The first step in page fault service routine is to find a free frame.", type: "tf"},
    {a: "restart the user process", q: "The last step for page fault service routine is ______."},
    {a: "True", q: "The memory is over allocated when there is a need to transfer a page from disk to memory but there is no memory space available.", type: "tf"},
    {a: "False", q: "The memory is over allocated when there is a need to transfer a page from memory to disk but there is no logical memory space available.", type: "tf"},
    {a: "True", q: "The modify bit for a page is set whenever any word or byte is written into, indicating that the page has been modified.", type: "tf"},
    {a: "True", q: "The principle of locality of reference ensures that programs do not access a new page of memory with each instruction execution.", type: "tf"},
    {a: "valid", q: "This bit is set to ____ to indicate that a corresponding page is in memory."},
    {a: "invalid", q: "This bit is set to ____ to indicate that a corresponding page is in secondary storage."},
    {a: "False", q: "This bit is set to invalid to indicate that a corresponding page is in memory.", type: "tf"},
    {a: "True", q: "This bit is set to invalid to indicate that a corresponding page is in secondary storage.", type: "tf"},
    {a: "True", q: "This bit is set to valid to indicate that a corresponding page is in memory.", type: "tf"},
    {a: "False", q: "This bit is set to valid to indicate that a corresponding page is in secondary storage.", type: "tf"},
    {a: "memory is over-allocated", q: "This occurs if there is a need to transfer a page from disk to memory but there is no memory space available."},
    {a: "virtual memory", q: "This technique frees programmers from the concerns of memory-storage limitations."},
    {a: "True", q: "Virtual memory is a technique that allows the execution of processes that may not be completely in memory.", type: "tf"},
    {a: "False", q: "Virtual memory is a technique that does not allow the execution of processes that may not be completely in memory.", type: "tf"},
    {a: "True", q: "Virtual memory is a technique that frees programmers from the concerns of memory-storage limitations.", type: "tf"},
    {a: "True", q: "Virtual memory is the separation of user logical memory from physical memory.", type: "tf"},
    {a: "find the location of the desired page on the disk", q: "What is the first step for page fault service routine is..."}
];

// --- MODULE 1 DATA (Intro to OS) ---
const questionsModule1 = [
    {a: "Application Programs", q: "These are used to solve user computing problems such as word processors and business programs."},
    {a: "Asymmetric", q: "A type of multiprocessing in which a boss processor controls the system and the other processors either look to the boss for instructions or have predefined tasks."},
    {a: "Batch OS", q: "A type of OS where the user has no direct interaction with the computer."},
    {a: "Batch-Based OS", q: "This refers to a non-interactive user interface, where the user specifies all the details of the batch job in advance to batch processing, and receives the output when all the processing is done."},
    {a: "Bootloader", q: "_____is a program that loads and starts the boot time tasks and processes of an OS."},
    {a: "Buffer", q: "_______ is a region of memory used to temporarily hold data while it is being moved from one place to another."},
    {a: "bus", q: "In computer system organization, one or more CPUs, device controllers connect through common ____ providing access to shared memory."},
    {a: "Client-server", q: "A type of computing where one or more computers connect to a central computer to share or use resources."},
    {a: "Cloud Computing", q: "It is a type of computing that delivers computing, storage and even applications as a service across a network."},
    {a: "Command Line Interface", q: "This refers to a text-based type of user interface."},
    {a: "controls", q: "Operating system ______ and coordinates the use of the hardware among the various application programs for the various users."},
    {a: "Distributed Systems", q: "It is a collection of physically separate, possibly heterogeneous computer systems that are networked to provide users with access to the various resources that the system maintains."},
    {a: "Dual mode", q: "______ operation allows OS to protect itself and other system components."},
    {a: "errors", q: "The operating system should be able to detect _____ within the computer system and take the appropriate action."},
    {a: "False", q: "Bootloader is a program that loads and ends the boot time tasks and processes of an OS.", type: "tf"},
    {a: "False", q: "The user of a Batch Operating System has direct interaction with the computer.", type: "tf"},
    {a: "False", q: "Each device controller does not have local buffer.", type: "tf"},
    {a: "False", q: "User can use computer even without an operating system.", type: "tf"},
    {a: "False", q: "Hardware interrupt is a signal created and sent to the CPU that is caused by some action taken by a software.", type: "tf"},
    {a: "False", q: "The OS is not responsible for reading and/or writing data from I/O devices such as disks, tapes, printers, keyboards, etc.", type: "tf"},
    {a: "False", q: "Cold boot is also known as reboot or reset.", type: "tf"},
    {a: "False", q: "In Asymmetric multiprocessing, all processors are considered peers.", type: "tf"},
    {a: "False", q: "Increased throughput means increasing the number of processor, expect to get more work done in more time.", type: "tf"},
    {a: "False", q: "Symmetric multiprocessing applies a boss-worker relationship among processors.", type: "tf"},
    {a: "False", q: "Buffer is a region of memory used to permanently hold data while it is being moved from one place to another.", type: "tf"},
    {a: "False", q: "Windows 10 is an example of hand-held operating system.", type: "tf"},
    {a: "False", q: "In computer system organization, the I/O devices and the CPU both execute one at a time.", type: "tf"},
    {a: "False", q: "Distributed system is also known as tightly coupled system.", type: "tf"},
    {a: "Graphical User Interface", q: "A visual way of interacting with a computer using items such as windows, icons, and menus, used by most modern operating systems."},
    {a: "Hardware", q: "_____interrupt is a signal created and sent to the CPU that is caused by some action taken by a hardware device."},
    {a: "Interrupt", q: "It alerts the processor temporarily to a high priority process requiring interruption of the current working process and then return to its previous task."},
    {a: "Interrupt", q: "It is a signal emitted by hardware or software when a process or an event needs immediate attention."},
    {a: "interrupt", q: "The device controllers use a/n ________ to inform the CPU that I/O operation is completed."},
    {a: "kernel", q: "It is the central part of an OS which manages system resources and is always resident in memory."},
    {a: "Keyboard", q: "Which is not an example of storage device?"},
    {a: "Memory", q: "In program execution, the OS must have the capability to load a program into ________ and execute that program."},
    {a: "MS word", q: "Which is not an example of system software?"},
    {a: "multiple", q: "Distributed systems use ______ central processors to serve multiple real-time applications and multiple users."},
    {a: "Multiprocessor System", q: "Also known as parallel-system or multicore."},
    {a: "Network", q: "_______ Operating System runs on a server and provides the server the capability to manage data, users, groups, security, applications, and other networking functions."},
    {a: "Open-source OS", q: "Operating systems made available in source-code format which has copyleft is called __________________"},
    {a: "Operating System", q: "__________ is a program that acts as an interface or intermediary between the computer user and computer hardware."},
    {a: "Operating System", q: "A software that controls and coordinates the use of the hardware among the various application programs for the various users."},
    {a: "Peer-to-peer", q: "A type of computing environment where all nodes are considered peers."},
    {a: "Polling", q: "A type of interrupt handling in which the OS sends signal to each devices asking if they have a request."},
    {a: "Protection", q: "_________ is any mechanism for controlling access of processes or users to resources defined by the OS."},
    {a: "Public Cloud", q: "Cloud services offered are available via the Internet."},
    {a: "Real Time", q: "________Operating System is an OS intended to serve real-time systems/applications that process data as it comes in, mostly without buffer delay."},
    {a: "Security", q: "_________ is a defense of the system against internal and external attacks."},
    {a: "Symmetric", q: "A type of multiprocessing in which each processor performs all tasks within the operating system. All processors are peers and no boss-worker relationship."},
    {a: "System", q: "Operating system is what type of software?"},
    {a: "System Call", q: "A __________ is a way for programs to interact with the OS."},
    {a: "Tightly", q: "Parallel systems are also known as __________-coupled systems."},
    {a: "Trap", q: "A software-generated interrupt caused either by an error or a user request is called _______________________."},
    {a: "True", q: "Software as a service(SaaS) provides one or more applications available via the Internet.", type: "tf"},
    {a: "True", q: "Execute user programs and make solving user problems easier is one of the goals of OS.", type: "tf"},
    {a: "True", q: "A portion of main memory is dedicated to OS.", type: "tf"},
    {a: "True", q: "Buffer is a region of memory used to temporarily hold data while it is being moved from one place to another.", type: "tf"},
    {a: "True", q: "A computer system is made up of various components such as hardware and software.", type: "tf"},
    {a: "True", q: "Using the computer hardware in an efficient manner is one of the goals of OS.", type: "tf"},
    {a: "True", q: "Android is an example of Handheld OS.", type: "tf"},
    {a: "True", q: "Time-sharing OS creates an interactive environment.", type: "tf"},
    {a: "True", q: "Dual-mode operation allows OS to protect itself and other system components.", type: "tf"},
    {a: "True", q: "OS must have the capability to load a program into memory and execute that program.", type: "tf"},
    {a: "True", q: "Cloud computing is an example of distributed system.", type: "tf"},
    {a: "True", q: "Distributed system is also known as loosely coupled system.", type: "tf"},
    {a: "True", q: "Computer user is one of the components of computer system.", type: "tf"},
    {a: "True", q: "UNIX is an example of Network OS.", type: "tf"},
    {a: "True", q: "Some instructions designated as privileged, only executable in kernel mode.", type: "tf"},
    {a: "True", q: "In computer system organization, one or more CPUs, device controllers connect through common bus providing access to shared memory.", type: "tf"},
    {a: "True", q: "Platform as a service(PaaS) provides software stack ready for application use via the Internet.", type: "tf"},
    {a: "True", q: "OS is an interrupt driven environment.", type: "tf"},
    {a: "True", q: "The OS manages the different computer resources such as CPU time, memory space, file storage space, I/O devices, etc. and allocates them to different application programs and users.", type: "tf"},
    {a: "True", q: "Real-time systems are used when there are time requirements or constraints like missile systems.", type: "tf"},
    {a: "True", q: "Software Interrupt arises due to illegal and erroneous use of an instruction or data.", type: "tf"},
    {a: "True", q: "File-server is an example of client-server computing.", type: "tf"},
    {a: "True", q: "The I/O devices and the CPU both execute concurrently.", type: "tf"},
    {a: "True", q: "Google Apps and Dropbox are examples of SaaS.", type: "tf"},
    {a: "True", q: "Kernel acts like bridge between application and computer hardware.", type: "tf"},
    {a: "True", q: "The main memory is central to the operation of a modern computer system.", type: "tf"},
    {a: "True", q: "Time-sharing is also known as multitasking.", type: "tf"},
    {a: "True", q: "Asymmetric clustering has one machine in hot-standby mode.", type: "tf"},
    {a: "True", q: "Infrastructure as a service is a type of cloud computing service in which servers or storage are available over the Internet.", type: "tf"},
    {a: "True", q: "Private cloud runs by a company for that company’s own use.", type: "tf"},
    {a: "True", q: "Kernel is the first program that loads after the bootloader.", type: "tf"},
    {a: "User Interface", q: "This refers to the part of an OS, or device that allows a user to enter and receive information."},
    {a: "Vectored Interrupt System", q: "A type of interrupt handling in which the requesting device sends interrupt to the operating system."},
    {a: "Virtualization", q: "It is a technology that allows OS to run as applications within other operating system."},
    {a: "Windows Server", q: "An operating system that provides services across the network."}
];
// ==========================================
//              APP LOGIC
// ==========================================

// Global State
let activeData = [];
let currentQuestions = [];
let currentIdx = 0;
let score = 0;
let sessionState = []; 
let activeModuleName = "";

// DOM Elements
const dom = {
    menuScreen: document.getElementById('menu-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    currentQ: document.getElementById('current-q'),
    totalQ: document.getElementById('total-q'),
    scoreScreen: document.getElementById('score-screen'),
    quizContent: document.getElementById('quiz-content'),
    navArea: document.getElementById('nav-area'),
    finalScore: document.getElementById('final-score'),
    scoreText: document.getElementById('score-text'),
    btnPrev: document.getElementById('btn-prev'),
    btnNext: document.getElementById('btn-next'),
    btnCheck: document.getElementById('btn-check'),
    randomToggle: document.getElementById('randomize-toggle'),
    moduleTitle: document.getElementById('module-title')
};

// --- MENU FUNCTIONS ---

function startModule(moduleNum) {
    if (moduleNum === 1) {
        activeData = questionsModule1;
        activeModuleName = "Module 1 (Intro to OS)";
    } else if (moduleNum === 4) {
        activeData = questionsModule4;
        activeModuleName = "Module 4 (Virtual Memory)";
    } else if (moduleNum === 5) {
        activeData = questionsModule5;
        activeModuleName = "Module 5 (Disk Scheduling)";
    } else {
        activeData = questionsModule6;
        activeModuleName = "Module 6 (Security)";
    }

    dom.menuScreen.classList.add('hidden');
    dom.quizScreen.classList.remove('hidden');
    dom.moduleTitle.textContent = activeModuleName;
    
    initQuiz();
}

function showMenu() {
    dom.quizScreen.classList.add('hidden');
    dom.menuScreen.classList.remove('hidden');
}

// --- QUIZ FUNCTIONS ---

function initQuiz() {
    // Reset State
    currentIdx = 0;
    score = 0;
    sessionState = [];
    
    // 1. Copy Data
    currentQuestions = [...activeData];
    
    // 2. Shuffle if toggled
    if (dom.randomToggle.checked) {
        shuffleArray(currentQuestions);
    }

    // 3. Generate Options & Session State
    // We pool all potential answers from the ACTIVE module to use as distractors
    const allAnswers = [...new Set(activeData.map(i => i.a).filter(a => a !== "True" && a !== "False"))];

    currentQuestions.forEach(q => {
        sessionState.push({
            selected: null,
            locked: false,
            isCorrect: null,
            options: generateOptions(q, allAnswers)
        });
    });

    // 4. UI Reset
    dom.totalQ.textContent = currentQuestions.length;
    dom.scoreScreen.classList.add('hidden');
    dom.quizContent.classList.remove('hidden');
    dom.navArea.classList.remove('hidden');
    
    renderCurrentQuestion();
}

function confirmRestart() {
    if(confirm("Are you sure you want to reset the quiz?")) {
        initQuiz();
    }
}

function generateOptions(qData, distractorPool) {
    let opts = [];
    if (qData.type === "tf") {
        opts = ["True", "False"];
    } else {
        opts.push(qData.a);
        // Filter out the correct answer from the pool
        const potentialDistractors = distractorPool.filter(ans => ans !== qData.a);
        
        // Shuffle the pool and pick 3
        shuffleArray(potentialDistractors);
        opts.push(...potentialDistractors.slice(0, 3));
        
        // Shuffle the final options so correct answer isn't always first
        shuffleArray(opts);
    }
    return opts;
}

function renderCurrentQuestion() {
    const qData = currentQuestions[currentIdx];
    const state = sessionState[currentIdx];

    dom.currentQ.textContent = currentIdx + 1;
    dom.questionText.textContent = qData.q;
    dom.optionsContainer.innerHTML = '';

    // Render Options
    state.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        
        // Visual States
        if (state.locked) {
            btn.disabled = true; 
            if (opt === qData.a) btn.classList.add('correct');
            if (opt === state.selected && opt !== qData.a) btn.classList.add('wrong');
        } else {
            if (state.selected === opt) btn.classList.add('selected');
            btn.onclick = () => selectOption(opt);
        }

        dom.optionsContainer.appendChild(btn);
    });

    updateNavButtons();
}

function selectOption(opt) {
    sessionState[currentIdx].selected = opt;
    renderCurrentQuestion();
}

function checkAnswer() {
    const state = sessionState[currentIdx];
    if (!state.selected) return;

    state.locked = true;
    state.isCorrect = (state.selected === currentQuestions[currentIdx].a);
    
    if (state.isCorrect) score++;

    renderCurrentQuestion();
}

function changeQuestion(dir) {
    currentIdx += dir;
    
    if (currentIdx >= currentQuestions.length) {
        endQuiz();
    } else {
        renderCurrentQuestion();
    }
}

function updateNavButtons() {
    const state = sessionState[currentIdx];
    
    // Prev Button
    dom.btnPrev.disabled = (currentIdx === 0);

    // Check Button Logic
    if (state.locked) {
        dom.btnCheck.style.display = 'none';
        dom.btnNext.style.display = 'inline-block';
        dom.btnNext.textContent = (currentIdx === currentQuestions.length - 1) ? "Finish" : "Next";
    } else {
        dom.btnCheck.style.display = 'inline-block';
        dom.btnNext.style.display = 'none';
        dom.btnCheck.disabled = (state.selected === null);
    }
}

function endQuiz() {
    dom.quizContent.classList.add('hidden');
    dom.navArea.classList.add('hidden');
    dom.scoreScreen.classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    dom.finalScore.textContent = percentage + "%";
    dom.scoreText.textContent = `You scored ${score} out of ${currentQuestions.length}.`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
