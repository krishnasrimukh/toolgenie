// Current year for footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tool data - we'll populate this with all your tools
const tools = [
    {
        name: "Image Compressor",
        description: "Reduce image file size without losing quality",
        icon: "🖼️",
        link: "tools/image-compressor.html"
    },
    {
        name: "Images to PDF",
        description: "Convert multiple images to a single PDF file",
        icon: "📄",
        link: "tools/images-to-pdf.html"
    },
    {
        name: "JPG to PNG",
        description: "Convert JPG images to PNG format",
        icon: "🔄",
        link: "tools/jpg-to-png.html"
    },
    {
        name: "MP4 to MP3",
        description: "Extract audio from video files",
        icon: "🎵",
        link: "tools/mp4-to-mp3.html"
    },
    {
        name: "PDF Merger",
        description: "Combine multiple PDF files into one",
        icon: "📑",
        link: "tools/pdf-merger.html"
    },
    {
        name: "PDF Splitter",
        description: "Split PDF pages into separate files",
        icon: "✂️",
        link: "tools/pdf-splitter.html"
    },
    {
        name: "PDF to Images",
        description: "Convert PDF pages to image files",
        icon: "🖼️",
        link: "tools/pdf-to-images.html"
    },
    {
        name: "PDF to Word",
        description: "Convert PDF files to editable Word documents",
        icon: "📝",
        link: "tools/pdf-to-word-converter.html"
    },
    {
        name: "PNG to JPG",
        description: "Convert PNG images to JPG format",
        icon: "🔄",
        link: "tools/png-to-jpg.html"
    },
    {
        name: "QR Code Generator",
        description: "Create QR codes for URLs, text, and more",
        icon: "🔳",
        link: "tools/qr-code-generator.html"
    },
    {
        name: "Text to PDF",
        description: "Convert plain text to PDF documents",
        icon: "📄",
        link: "tools/text-pdf-generator.html"
    },
    {
        name: "Time Zone Converter",
        description: "Convert between different time zones",
        icon: "⏰",
        link: "tools/time-zone-converter.html"
    },
    {
        name: "Word Counter",
        description: "Count words, characters, and sentences in text",
        icon: "🔢",
        link: "tools/word-counter.html"
    },
    {
        name: "Word to PDF",
        description: "Convert Word documents to PDF files",
        icon: "📝",
        link: "tools/word-to-pdf-converter.html"
    },
    {
        name: "URL Shortener",
        description: "Shorten long URLs to more manageable links",
        icon: "🔗",
        link: "tools/url-shortener.html"
    },
    {
        name: "Base64 Encoder/Decoder",
        description: "Encode and decode Base64 strings",
        icon: "🔣",
        link: "tools/base64-encoder-decoder.html"
    },
    {
        name: "Hash Generator",
        description: "Generate cryptographic hashes from text",
        icon: "🔒",
        link: "tools/hash-generator.html"
    },
    {
        name: "Color Picker & Converter",
        description: "Pick colors and convert between formats",
        icon: "🎨",
        link: "tools/color-picker-&-converter.html"
    },
    {
        name: "Image Cropper & Resizer",
        description: "Crop and resize images to exact dimensions",
        icon: "✂️",
        link: "tools/image-cropper-resizer.html"
    },
    {
        name: "GIF to MP4",
        description: "Convert animated GIFs to MP4 videos",
        icon: "🎥",
        link: "tools/gif-to-mp4-converter.html"
    },
    {
        name: "MP4 to GIF",
        description: "Convert video clips to animated GIFs",
        icon: "🔄",
        link: "tools/mp4-to-gif-converter.html"
    },
    {
        name: "Grammar & Spell Checker",
        description: "Check text for grammar and spelling errors",
        icon: "✍️",
        link: "tools/grammer-and-spell-checker.html"
    },
    {
        name: "Speech to Text",
        description: "Convert spoken words to written text",
        icon: "🎤",
        link: "tools/speech-to-text.html"
    },
    {
        name: "IP Address Lookup",
        description: "Get information about any IP address",
        icon: "🌐",
        link: "tools/ip-address-lookup.html"
    }
];

// Populate tools grid
const gridContainer = document.querySelector('.grid-container');

tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';
    toolCard.innerHTML = `
        <div class="tool-icon" style="font-size: 3rem; margin-bottom: 1rem;">${tool.icon}</div>
        <h3>${tool.name}</h3>
        <p>${tool.description}</p>
    `;
    toolCard.addEventListener('click', () => {
        window.location.href = tool.link;
    });
    gridContainer.appendChild(toolCard);
});

// Search functionality
const searchBar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');

function searchTools() {
    const searchTerm = searchBar.value.toLowerCase();
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach((card, index) => {
        const toolName = tools[index].name.toLowerCase();
        const toolDesc = tools[index].description.toLowerCase();
        
        if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', searchTools);
searchBar.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchTools();
    }
});
