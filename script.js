// Sample photo data - replace with your actual photos
const photos = [
    { src: "riyal.png", caption: "Our first meet" },
    { src: "image2.jpg", caption: "Our first meet" }
];

// Sample journal entries - replace with your actual entries
const journalEntries = [
    {
        title: "The Silent Crush",
        author: "Anmol",
        preview: "She didn’t even know I existed back then.",
        fullContent: "She didn’t even know I existed back then. But I noticed her. Every single time. Back in 12th grade, Ekta and I didn’t speak. Just mutual friends and occasional greetings — that’s all we had. But deep inside, I had a little secret: a crush on her."
    },
    {
        title: "When She Notice Me",
        date: "February, 2025",
        author: "Anmol",
        preview: "The day I saw her name pop up with a compliment… I couldn’t believe it.",
        fullContent: "Years later, in March, I got a message from her out of the blue — “You look good in a moustache.” That was the first time she ever complimented me. That was the spark."
    },
    {
        title: "The Holi DM Chaos",
        date: "March, 2025",
        author: "Anmol",
        preview: "A little bhang, a lot of courage — and suddenly, I was in her DMs",
        fullContent: "On Holi, I was slightly drunk and messaged her saying I drank bhang. I started ranting, oversharing, even asking “Kaunsa logi, cutie?” (about jhumkas!). Instead of being weirded out, she enjoyed it. That moment started everything."
    },
    {
        title: "The Day She Confessed",
        date: "6 May 2025",
        author: "Anmol",
        preview: "She Said She liked me, And I was Stunned.",
        fullContent: "She said 'Look I don't know iske baad aap mere bare me kya sochge but I like you genuinely and respectfully like jab apni baat nh hoti thi usse bhi thda pehle se I used to stalk you, shahjii you are cute yrr, haa sabka apna apna crush hota h apka bhi koi hoga aap bhi kisi ko like krte hoge but merko aap acche lagte ho or ye baat maine soch samajhkar darte darte boldi, dekho in sabke baad mujhe please hate mat karna if aapko koi psnd hoga to mai apse flirt Krna bhi chord dungi but please be a god friend of mine app kya sochte ho mere baare m look it's your life ofcourse vo sab apki choice h but maine ye isliye bol diya kyuki mai chahti hu i bas aapko pta rhe or kuch baat nhi h.'. I read all that, I was very happy but still I couldn't directly tell her that I liked her back. I took my time and told her that I wasn't ready for any kind of relationship at that moment but will be a good friend of her always."
    },
    {
        title: "When Friendship Felt Like Love",
        author: "Anmol",
        preview: "She was flirting with me. And I was falling for her.",
        fullContent: "Even as friends, there was something beautiful building between us. Every late-night chat, every subtle joke — it started to feel like home. Slowly, I realized, I liked her too."
    },
    {
        title: "The Day I Said It Back",
        date: "18 July 2025",
        author: "Anmol",
        preview: "It was the day after my birthday. But this felt like a bigger celebration.",
        fullContent: "On 18th July, I told her how I really felt. No more hesitation, no more waiting. I confessed — I loved her too. And from that moment, it was official."
    }
];

// Load photos into the grid
const photoGrid = document.getElementById('photoGrid');

photos.forEach(photo => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.caption;

    const caption = document.createElement('div');
    caption.className = 'photo-caption';
    caption.textContent = photo.caption;

    photoItem.appendChild(img);
    photoItem.appendChild(caption);
    photoGrid.appendChild(photoItem);

    // Add click event to open modal
    photoItem.addEventListener('click', function () {
        openModal(photo.src, photo.caption);
    });
});

// Add New Memory functionality (button-triggered)
document.getElementById('addMemoryBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        if (!file) return;

        const caption = prompt("Enter a caption for this memory:");
        if (caption === null) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            const imageSrc = event.target.result;

            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';

            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = caption;

            const captionDiv = document.createElement('div');
            captionDiv.className = 'photo-caption';
            captionDiv.textContent = caption;

            photoItem.appendChild(img);
            photoItem.appendChild(captionDiv);
            photoGrid.appendChild(photoItem);

            photoItem.addEventListener('click', function () {
                openModal(imageSrc, caption);
            });
        };
        reader.readAsDataURL(file);
    });

    fileInput.click();
});

// Load journal entries
const journalEntriesContainer = document.getElementById('journalEntries');

journalEntries.forEach((entry) => {
    const entryElement = document.createElement('div');
    entryElement.className = 'journal-entry';

    const journalHeader = document.createElement('div');
    journalHeader.className = 'journal-header';

    const titleElement = document.createElement('h3');
    titleElement.textContent = entry.title;

    const dateElement = document.createElement('div');
    dateElement.className = 'journal-date';
    dateElement.textContent = entry.date || '';

    const authorElement = document.createElement('div');
    authorElement.className = 'journal-author';
    authorElement.textContent = 'By ' + entry.author;

    const contentElement = document.createElement('div');
    contentElement.className = 'journal-content';
    contentElement.textContent = entry.preview;

    const readMoreBtn = document.createElement('a');
    readMoreBtn.href = '#';
    readMoreBtn.className = 'read-more-btn';
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openJournalModal(entry);
    });

    journalHeader.appendChild(titleElement);
    journalHeader.appendChild(dateElement);

    contentElement.appendChild(document.createElement('br'));
    contentElement.appendChild(authorElement);
    contentElement.appendChild(document.createElement('br'));
    contentElement.appendChild(readMoreBtn);

    entryElement.appendChild(journalHeader);
    entryElement.appendChild(contentElement);

    journalEntriesContainer.appendChild(entryElement);
});

// Modal functionality for photos
const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');

function openModal(src, caption) {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalCaption.textContent = caption;
}

function closeModal() {
    modal.style.display = 'none';
}

// Modal functionality for journal entries
const journalModal = document.getElementById('journalModal');
const journalModalTitle = document.getElementById('journalModalTitle');
const journalModalDate = document.getElementById('journalModalDate');
const journalModalAuthor = document.getElementById('journalModalAuthor');
const journalModalBody = document.getElementById('journalModalBody');

function openJournalModal(entry) {
    journalModal.style.display = 'flex';
    journalModalTitle.textContent = entry.title;
    journalModalDate.textContent = entry.date || '';
    journalModalAuthor.textContent = 'By ' + entry.author;
    journalModalBody.textContent = entry.fullContent;
}

function closeJournalModal() {
    journalModal.style.display = 'none';
}

// Show "Add New Entry" functionality (placeholder)
document.getElementById('newEntryBtn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('This would open a form to add a new journal entry. You can implement this functionality by adding a form modal.');
});

// Close modals when clicking outside of content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
    if (event.target === journalModal) {
        closeJournalModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Update timeline items to alternate sides
const updateTimelineResponsive = () => {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.style.left = '0';
        });
    } else {
        document.querySelectorAll('.timeline-item:nth-child(odd)').forEach(item => {
            item.style.left = '0';
        });
        document.querySelectorAll('.timeline-item:nth-child(even)').forEach(item => {
            item.style.left = '50%';
        });
    }
};

updateTimelineResponsive();
window.addEventListener('resize', updateTimelineResponsive);
