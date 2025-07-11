// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const gridContainer = document.querySelector('.grid-container');
const categoryGrid = document.querySelector('.category-grid');

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        mobileMenuBtn.classList.remove('active');
    });
});

// Tool data with categories
const tools = [
    // PDF Tools
    { name: "PDF to Word", description: "Convert PDF files to editable Word documents", icon: "📄➡️📝", link: "tools/pdf-to-word-converter.html", category: "pdf" },
    { name: "Word to PDF", description: "Convert Word documents to PDF format", icon: "📝➡️📄", link: "tools/word-to-pdf-converter.html", category: "pdf" },
    { name: "PDF Merger", description: "Combine multiple PDFs into one document", icon: "📄➕📄", link: "tools/pdf-merger.html", category: "pdf" },
    { name: "PDF Splitter", description: "Split PDFs into multiple documents", icon: "📄✂️", link: "tools/pdf-splitter.html", category: "pdf" },
    { name: "PDF to Images", description: "Extract images from PDF files", icon: "📄➡️🖼️", link: "tools/pdf-to-images.html", category: "pdf" },
    { name: "Text to PDF", description: "Create PDFs from plain text", icon: "✍️➡️📄", link: "tools/text-pdf-generator.html", category: "pdf" },
    
    // Image Tools
    { name: "Image Compressor", description: "Reduce image file size without losing quality", icon: "🖼️📉", link: "tools/image-compressor.html", category: "image" },
    { name: "JPG to PNG", description: "Convert JPG images to PNG format", icon: "JPG➡️PNG", link: "tools/jpg-to-png.html", category: "image" },
    { name: "PNG to JPG", description: "Convert PNG images to JPG format", icon: "PNG➡️JPG", link: "tools/png-to-jpg.html", category: "image" },
    { name: "Images to PDF", description: "Combine multiple images into a PDF", icon: "🖼️➡️📄", link: "tools/images-to-pdf.html", category: "image" },
    { name: "Image Cropper", description: "Crop and resize images online", icon: "✂️🖼️", link: "tools/image-cropper-resizer.html", category: "image" },
    
    // Video Tools
    { name: "MP4 to MP3", description: "Extract audio from video files", icon: "🎬➡️🎵", link: "tools/mp4-to-mp3.html", category: "video" },
    { name: "GIF to MP4", description: "Convert animated GIFs to video", icon: "GIF➡️MP4", link: "tools/gif-to-mp4-converter.html", category: "video" },
    { name: "MP4 to GIF", description: "Create GIFs from video clips", icon: "MP4➡️GIF", link: "tools/mp4-to-gif-converter.html", category: "video" },
    
    // Text Tools
    { name: "Word Counter", description: "Count words and characters in text", icon: "🔢📝", link: "tools/word-counter.html", category: "text" },
    { name: "Grammar Checker", description: "Check spelling and grammar in text", icon: "🔍✍️", link: "tools/grammer-and-spell-checker.html", category: "text" },
    { name: "Speech to Text", description: "Convert spoken words to written text", icon: "🎤➡️📝", link: "tools/speech-to-text.html", category: "text" },
    { name: "Base64 Converter", description: "Encode/decode Base64 strings", icon: "🔢🔠", link: "tools/base64-encoder-decoder.html", category: "text" },
    { name: "Hash Generator", description: "Create cryptographic hashes", icon: "#️⃣🔒", link: "tools/hash-generator.html", category: "text" },
    
    // Other Tools
    { name: "QR Generator", description: "Create QR codes for URLs and text", icon: "📱🔳", link: "tools/qr-code-generator.html", category: "other" },
    { name: "Time Zone Converter", description: "Convert between time zones", icon: "🌍🕒", link: "tools/time-zone-converter.html", category: "other" },
    { name: "URL Shortener", description: "Create short links from long URLs", icon: "🔗✂️", link: "tools/url-shortener.html", category: "other" },
    { name: "Color Converter", description: "Convert between color formats", icon: "🎨🔄", link: "tools/color-picker-&-converter.html", category: "other" },
    { name: "IP Lookup", description: "Find location and info for IP addresses", icon: "🌐🔍", link: "tools/ip-address-lookup.html", category: "other" }
];

// Categories data
const categories = [
    {
        name: "PDF Tools",
        id: "pdf",
        description: "Convert, merge, split and transform PDF files"
    },
    {
        name: "Image Tools",
        id: "image",
        description: "Edit, convert and optimize images"
    },
    {
        name: "Video Tools",
        id: "video",
        description: "Convert and edit video files"
    },
    {
        name: "Text Tools",
        id: "text",
        description: "Work with text and documents"
    },
    {
        name: "Other Tools",
        id: "other",
        description: "Various useful utilities"
    }
];

// Initialize the page
function initPage() {
    populateToolsGrid();
    populateCategoryGrid();
    setupEventListeners();
}

// Populate tools grid
function populateToolsGrid() {
    gridContainer.innerHTML = '';
    
    tools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <a href="${tool.link}">
                <div class="tool-icon">${tool.icon}</div>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </a>
        `;
        gridContainer.appendChild(toolCard);
    });
}

// Populate category grid
function populateCategoryGrid() {
    categoryGrid.innerHTML = '';
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        
        // Get tools in this category
        const categoryTools = tools.filter(tool => tool.category === category.id);
        
        let toolsList = '';
        categoryTools.slice(0, 4).forEach(tool => {
            toolsList += `<li><a href="${tool.link}">${tool.name}</a></li>`;
        });
        
        categoryCard.innerHTML = `
            <h3>${category.name}</h3>
            <p class="category-description">${category.description}</p>
            <ul>${toolsList}</ul>
            <a href="#" class="view-all" data-category="${category.id}">View all ${categoryTools.length} tools</a>
        `;
        
        categoryGrid.appendChild(categoryCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', searchTools);
    searchBar.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchTools();
    });
    
    // View all tools in category
    document.querySelectorAll('.view-all').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterToolsByCategory(category);
        });
    });
}

// Search tools
function searchTools() {
    const searchTerm = searchBar.value.trim().toLowerCase();
    
    if (!searchTerm) {
        populateToolsGrid();
        return;
    }
    
    const filteredTools = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) || 
        tool.description.toLowerCase().includes(searchTerm)
    );
    
    if (filteredTools.length === 0) {
        gridContainer.innerHTML = `
            <div class="no-results">
                <p>No tools found matching "${searchTerm}"</p>
                <button id="reset-search" class="action-btn">Show All Tools</button>
            </div>
        `;
        
        document.getElementById('reset-search').addEventListener('click', () => {
            searchBar.value = '';
            populateToolsGrid();
        });
        return;
    }
    
    gridContainer.innerHTML = '';
    filteredTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <a href="${tool.link}">
                <div class="tool-icon">${tool.icon}</div>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </a>
        `;
        gridContainer.appendChild(toolCard);
    });
}

// Filter tools by category
function filterToolsByCategory(categoryId) {
    const filteredTools = tools.filter(tool => tool.category === categoryId);
    const categoryName = categories.find(c => c.id === categoryId).name;
    
    gridContainer.innerHTML = '';
    
    // Add back button
    const backButton = document.createElement('button');
    backButton.className = 'back-to-all action-btn secondary';
    backButton.textContent = '← Back to All Tools';
    backButton.addEventListener('click', populateToolsGrid);
    gridContainer.appendChild(backButton);
    
    // Add category header
    const categoryHeader = document.createElement('h3');
    categoryHeader.className = 'category-header';
    categoryHeader.textContent = categoryName;
    gridContainer.appendChild(categoryHeader);
    
    // Add tools
    filteredTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.innerHTML = `
            <a href="${tool.link}">
                <div class="tool-icon">${tool.icon}</div>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </a>
        `;
        gridContainer.appendChild(toolCard);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
