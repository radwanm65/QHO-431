
DROP TABLE IF EXISTS contact;
DROP TABLE IF EXISTS faq;
DROP TABLE IF EXISTS exhibits;
DROP TABLE IF EXISTS zones;

CREATE TABLE zones (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);

CREATE TABLE exhibits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    zone_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    type TEXT NOT NULL,
    image TEXT NOT NULL,

    FOREIGN KEY(zone_id)
        REFERENCES zones(id)
        ON DELETE CASCADE
);

CREATE TABLE faq (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    answer TEXT NOT NULL
);


CREATE TABLE contact (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    submitted DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO zones(name,description,image) VALUES
(
'Coral Reef Zone',
'Discover colourful coral reefs filled with tropical fish, sea anemones and fascinating reef creatures.',
'coral.jpg'
),

(
'Deep Sea Trench',
'Journey into the darkest parts of the ocean to encounter mysterious creatures that thrive under extreme pressure.',
'deepsea.jpg'
),

(
'Coastal Rockpools',
'Experience life along the shoreline through interactive pools containing crabs, sea stars and other coastal wildlife.',
'rockpool.jpg'
),

(
'Freshwater Rivers & Rainforest',
'Explore rivers from around the world featuring freshwater fish, turtles and rainforest habitats.',
'freshwater.jpg'
),

(
'Polar Oceans',
'Learn how marine animals survive freezing waters while discovering the importance of protecting polar ecosystems.',
'polar.jpg'
),

(
'Ocean Conservation Centre',
'Interactive exhibits demonstrating how scientists protect marine biodiversity and reduce ocean pollution.',
'conservation.jpg'
);

INSERT INTO exhibits(zone_id,name,description,type,image) VALUES

-- Coral Reef

(
1,
'Living Coral Garden',
'An enormous living reef ecosystem containing hundreds of colourful coral species.',
'Tank Exhibit',
'living_coral.jpg'
),

(
1,
'Clownfish Cove',
'Meet clownfish living safely among sea anemones.',
'Tank Exhibit',
'clownfish.jpg'
),

(
1,
'Tropical Fish Tunnel',
'Walk through a tunnel surrounded by vibrant reef fish.',
'Walk-through Experience',
'tunnel.jpg'
),

(
1,
'Coral Conservation Lab',
'Learn how damaged reefs are restored using coral farming.',
'Interactive Experience',
'coral_lab.jpg'
),

-- Deep Sea

(
2,
'Shark Tunnel',
'Watch several shark species swim directly overhead.',
'Walk-through Experience',
'shark.jpg'
),

(
2,
'Bioluminescence Gallery',
'Experience glowing deep-sea organisms inside a dark immersive environment.',
'Interactive Experience',
'bioluminescence.jpg'
),

(
2,
'Giant Squid Encounter',
'Life-sized models and digital displays reveal the secrets of giant squid.',
'Digital Exhibit',
'squid.jpg'
),

(
2,
'Deep Ocean Explorer',
'Operate a simulated underwater research submarine.',
'Simulator',
'submarine.jpg'
),

-- Rockpools

(
3,
'Starfish Touch Pool',
'Carefully touch sea stars under staff supervision.',
'Hands-on Activity',
'starfish.jpg'
),

(
3,
'Hermit Crab Corner',
'Observe hermit crabs selecting their shells.',
'Tank Exhibit',
'crabs.jpg'
),

(
3,
'Rockpool Discovery Table',
'Children investigate shells and marine fossils.',
'Interactive Experience',
'discovery.jpg'
),

-- Freshwater

(
4,
'Amazon River Tunnel',
'Travel beneath freshwater rays and giant catfish.',
'Walk-through Experience',
'amazon.jpg'
),

(
4,
'Piranha Lagoon',
'Observe one of South America''s most famous fish species.',
'Tank Exhibit',
'piranha.jpg'
),

(
4,
'Rainforest Waterfall',
'A tropical habitat featuring exotic plants and freshwater turtles.',
'Habitat',
'waterfall.jpg'
),

(
4,
'River Explorer',
'Interactive displays explaining freshwater ecosystems.',
'Interactive Experience',
'river.jpg'
),

-- Polar

(
5,
'Penguin Coast',
'Watch playful penguins swim and dive.',
'Animal Habitat',
'penguins.jpg'
),

(
5,
'Iceberg Theatre',
'Large multimedia presentation explaining polar ecosystems.',
'Multimedia Experience',
'iceberg.jpg'
),

(
5,
'Seal Observation Deck',
'Observe seals both above and below the water.',
'Viewing Area',
'seals.jpg'
),

-- Conservation

(
6,
'Plastic Pollution Challenge',
'Interactive game demonstrating the impact of plastic waste.',
'Interactive Experience',
'plastic.jpg'
),

(
6,
'Marine Rescue Centre',
'Learn how injured marine animals are rescued and rehabilitated.',
'Educational Exhibit',
'rescue.jpg'
),

(
6,
'Future Oceans Gallery',
'Explore technologies helping protect our oceans.',
'Digital Exhibit',
'future.jpg'
);

INSERT INTO faq(question,answer) VALUES

(
'What are your opening hours?',
'Aquarium World is open every day from 9:00 AM until 6:00 PM.'
),

(
'Do I need to book tickets?',
'This website is promotional only and does not provide ticket booking.'
),

(
'Is the aquarium wheelchair accessible?',
'Yes. All public areas are fully accessible.'
),

(
'Can I take photographs?',
'Photography is welcome for personal use. Flash photography should be avoided around sensitive animals.'
),

(
'How long does a visit usually last?',
'Most visitors spend between two and four hours exploring the aquarium.'
),

(
'Are there activities for children?',
'Yes. Many exhibits include hands-on activities and interactive learning experiences.'

),

(
'Do you support marine conservation?',
'Yes. Aquarium World promotes education, sustainable practices and marine conservation projects.'
),

(
'Can I bring food and drinks?',
'Only bottled water is permitted inside the exhibition areas.'
),

(
'Is there parking available?',
'Yes. Visitor parking is available nearby.'
),

(
'Are school visits available?',
'Educational group visits can be arranged through our contact page.'
);

INSERT INTO contact(fullname,email,subject,message) VALUES

(
'Emily Johnson',
'emily@example.com',
'School Visit',
'I would like information about arranging a school trip.'
),

(
'Michael Brown',
'michael@example.com',
'Accessibility',
'Could you provide more information about accessibility services?'
),

(
'Sophia Wilson',
'sophia@example.com',
'Volunteer Opportunities',
'Do you offer volunteer positions for university students?'
),

(
'Daniel Green',
'daniel@example.com',
'Conservation',
'I am interested in learning more about your conservation programmes.'
);
