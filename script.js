document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Framework Custom Loading Screen Controller ---
    const loadingScreen = document.getElementById("loadingScreen");
    const loadingProgress = document.getElementById("loadingProgress");
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => loadingScreen.style.display = "none", 600);
            }, 200);
        }
        loadingProgress.style.width = `${progress}%`;
    }, 40);

    // --- 2. Advanced Adaptive Mouse Micro-Cursor Engine ---
    const dot = document.getElementById("cursorDot");
    const outline = document.getElementById("cursorOutline");
    
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let outX = 0, outY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function renderCursor() {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        outX += (mouseX - outX) * 0.1;
        outY += (mouseY - outY) * 0.1;

        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;
        outline.style.left = `${outX}px`;
        outline.style.top = `${outY}px`;

        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive Hover Tracking expansion
    const targetElements = document.querySelectorAll("a, button, .story-circle, .ig-post, input, textarea");
    targetElements.forEach(elem => {
        elem.addEventListener("mouseenter", () => {
            outline.style.transform = "translate(-50%, -50%) scale(1.6)";
            outline.style.backgroundColor = "rgba(255, 77, 141, 0.05)";
        });
        elem.addEventListener("mouseleave", () => {
            outline.style.transform = "translate(-50%, -50%) scale(1)";
            outline.style.backgroundColor = "transparent";
        });
    });

    // --- 3. Progress Tracking & Sticky Nav blur ---
    const nav = document.querySelector("nav");
    const progressBar = document.getElementById("progressBar");

    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = `${scrolled}%`;

        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // --- 4. Instagram Highlight Stories Tooltip Render engine ---
    const stories = document.querySelectorAll(".story-circle");
    const tooltip = document.getElementById("storyTooltip");

    stories.forEach(story => {
        story.addEventListener("mousemove", (e) => {
            const text = story.getAttribute("data-preview");
            tooltip.textContent = text;
            tooltip.style.opacity = "1";
            tooltip.style.left = `${e.clientX}px`;
            tooltip.style.top = `${e.clientY}px`;
        });
        story.addEventListener("mouseleave", () => {
            tooltip.style.opacity = "0";
        });
    });

    // --- 5. Pure JavaScript Analytical Rendering Engine (No External Canvas Libs) ---
    function generateMockPathData(width, height, pointsCount) {
        let coords = [];
        for (let i = 0; i < pointsCount; i++) {
            let x = (width / (pointsCount - 1)) * i;
            let y = height - (Math.random() * (height * 0.6) + (height * 0.2));
            coords.push({x, y});
        }
        return coords;
    }

    function drawVanillaMiniLineChart(canvasId) {
        const canvas = document.getElementById(canvasId);
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        
        ctx.clearRect(0, 0, w, h);
        const points = generateMockPathData(w, h, 7);
        
        // Draw Fill Gradient
        ctx.beginPath();
        ctx.moveTo(0, h);
        points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.lineTo(w, h);
        ctx.closePath();
        let fillGlow = ctx.createLinearGradient(0, 0, 0, h);
        fillGlow.addColorStop(0, "rgba(255, 77, 141, 0.15)");
        fillGlow.addColorStop(1, "transparent");
        ctx.fillStyle = fillGlow;
        ctx.fill();

        // Draw Stroke Trend Line
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for(let i=1; i<points.length; i++){
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.strokeStyle = "#FF4D8D";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    // --- 6. Intersectional Viewport Counter Metric Engine ---
    const counters = document.querySelectorAll(".counter");
    
    function initializeCounters(elements) {
        elements.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const decimals = counter.getAttribute("data-decimals") ? parseInt(counter.getAttribute("data-decimals")) : 0;
            let current = 0;
            const step = target / 60; // 60 frame rendering loops

            function increment() {
                current += step;
                if (current < target) {
                    counter.textContent = current.toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
                    requestAnimationFrame(increment);
                } else {
                    counter.textContent = target.toLocaleString(undefined, {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
                }
            }
            increment();
        });
    }

    // --- 7. Intersection Observer for Scroll Reveals and Counters ---
    const revealItems = document.querySelectorAll(".scroll-reveal, .ig-post");
    let dashboardTriggered = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                
                // Trigger nested layout counters inside post feeds or metrics
                const innerCounters = entry.target.querySelectorAll(".counter");
                if (innerCounters.length > 0 && !entry.target.classList.contains('counted-done')) {
                    initializeCounters(innerCounters);
                    entry.target.classList.add('counted-done');
                }

                // Initialize canvas drawings if dashboard arrives
                if (entry.target.id === "dashboard" && !dashboardTriggered) {
                    dashboardTriggered = true;
                    setTimeout(() => {
                        drawVanillaMiniLineChart("chartFollowers");
                        drawVanillaMiniLineChart("chartReach");
                        drawVanillaMiniLineChart("chartEngagement");
                        drawVanillaMiniLineChart("chartLeads");
                        drawVanillaMiniLineChart("chartROAS");
                        drawVanillaMiniLineChart("chartViews");
                    }, 300);
                }
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach(item => observer.observe(item));
    const dashSec = document.getElementById("dashboard");
    if(dashSec) observer.observe(dashSec);

    // --- 8. Testimonial Carousel Infinite Loop Handler ---
    const track = document.getElementById("sliderTrack");
    const dotsContainer = document.getElementById("sliderDots");
    const initialCards = document.querySelectorAll(".testimonial-card");
    const cardWidth = 450; 
    const gap = 24; 
    let activeIdx = 0;

    // Build functional indicator dots
    initialCards.forEach((_, idx) => {
        const dotElem = document.createElement("div");
        dotElem.classList.add("dot");
        if(idx === 0) dotElem.classList.add("active");
        dotElem.addEventListener("click", () => shiftTo(idx));
        dotsContainer.appendChild(dotElem);
    });

    const totalDots = dotsContainer.children;

    function shiftTo(idx) {
        activeIdx = idx;
        const offset = activeIdx * (cardWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;
        track.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        
        // Update Indicator Layouts
        Array.from(totalDots).forEach((d, i) => {
            d.classList.toggle("active", i === activeIdx);
        });
    }

    // Auto Advance Loop Logic
    setInterval(() => {
        activeIdx = (activeIdx + 1) % initialCards.length;
        shiftTo(activeIdx);
    }, 4500);

    // --- 9. Mobile Responsive Menu Toggle ---
    const mobileToggle = document.getElementById("mobileToggle");
    const navMenu = document.querySelector(".nav-menu");

    mobileToggle.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
        if(navMenu.style.display === "flex") {
            navMenu.style.position = "absolute";
            navMenu.style.top = "100%";
            navMenu.style.left = "0";
            navMenu.style.width = "100%";
            navMenu.style.flexDirection = "column";
            navMenu.style.background = "#0A0A0A";
            navMenu.style.padding = "20px";
            navMenu.style.borderBottom = "1px solid rgba(255,255,255,0.05)";
        }
    });
});
