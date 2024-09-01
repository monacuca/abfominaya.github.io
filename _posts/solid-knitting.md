---
title: "Solid Knitting"
excerpt: "In Adjunct Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology (UIST '22 Adjunct). Association for Computing Machinery, New York, NY, USA, Article 4, 1–4. https://doi.org/10.1145/3526114.3558690 "
coverImage: "/assets/blog/projects/solidknitting/1.jpeg"
date: "20240802"
author:
  name: Angelica Bonilla (A.B.) Fominaya
  picture: "/assets/blog/authors/abf.png"
ogImage:
  url: "/assets/blog/projects/solidknitting/1.jpeg"
carrouselImages:
  - key: "1"
    url: "/assets/blog/projects/solidknitting/1.jpeg"
    caption: "1"
tags: [
  "knitting",
  "fabrication",
  "scf",
  "robotics",
  "graphics",
  "programming languages",
  "paper",
  "siggraph"
]
mediaType: "research"
---
Access the paper [here (click)](https://dl.acm.org/doi/10.1145/3658123).
## Award:
This paper received a "Best Paper: Honorable Mention Award" at Siggraph 2024.
## Authors: 
- Yuichi Hirose
- Mark Gillespie
- **Angelica M. Bonilla Fominaya**
- James McCann

## Abstract:
We introduce solid knitting, a new fabrication technique that combines the layer-by-layer volumetric approach of 3D printing with the topologically-entwined stitch structure of knitting to produce solid 3D objects. We define the basic building blocks of solid knitting and demonstrate a working prototype of a solid knitting machine controlled by a low-level instruction language, along with a volumetric design tool for creating machine-knittable patterns. Solid knitting uses a course-wale-layer structure, where every loop in a solid-knit object passes through both a loop from the previous layer and a loop from the previous course. Our machine uses two beds of latch needles to create stitches like a conventional V-bed knitting machine, but augments these needles with a pair of rotating hook arrays to provide storage locations for all of the loops in one layer of the object. It can autonomously produce solid-knit prisms of arbitrary length, although it requires manual intervention to cast on the first layer and bind off the final row. Our design tool allows users to create solid knitting patterns by connecting elementary stitches; objects designed in our interface can---after basic topological checks and constraint propagation---be exported as a sequence of instructions for fabrication on the solid knitting machine. We validate our solid knitting hardware and software on prism examples, detail the mechanical errors which we have encountered, and discuss potential extensions to the capability of our solid knitting machine.
