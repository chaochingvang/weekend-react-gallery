--create database named 'react_gallery'

CREATE TABLE "galleryList"(
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(64) NOT NULL, 
"path" TEXT NOT NULL,
"description" VARCHAR(255) NOT NULL,
"likes" INT DEFAULT 0,
"imgStatus" BOOLEAN DEFAULT TRUE
);

INSERT INTO "galleryList" ("title", "path", "description")
VALUES
('Goat', 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park'),
('Unicorn', 'images/unicorn.jpg', 'Photo of a unicorn. Do unicorns neigh?'),
('Dragon', 'images/dragon.jpg', 'Photo of a dragon. A natural procrastinator as they like dragon things on.'),
('Mermaid', 'images/mermaid.jpg', 'Photo of a mermaid. Michael Phelps vs a Mermaid, who wins?'),
('Werewolf', 'images/werewolf.jpg', 'Photo of a werewolf. It is always werewolf, but never how is wolf.'),
('Fairy', 'images/fairy.jpg', 'Photo of a fairy. They actually exist! I am fairy certain.'),
('Leprechaun', 'images/leprechaun.jpg', 'Photo of a leprechaun. The most mysterious thing about these creature is actually the size of their pockets.');