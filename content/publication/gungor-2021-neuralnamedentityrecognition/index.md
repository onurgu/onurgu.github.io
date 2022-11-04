---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Neural Named Entity Recognition for Morphologically Rich Languages
subtitle: ''
summary: ''
authors:
- Onur Güngör
tags: []
categories: []
date: '2021-03-01'
lastmod: 2021-11-06T21:33:42+03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2021-11-06T18:33:41.867150Z'
publication_types:
- '7'
abstract: Named entity recognition (NER) is an important task in natural language
  processing (NLP). Until the revival of neural network based models for NLP, NER
  taggers employed traditional machine learning approaches or finite-state transducers
  to detect the entities in a given sentence. Neural models improved the state-of-the-art
  performance with sequence-based models and word embeddings. These approaches neglect
  the morphological information embedded in the surface forms of the words. In this
  thesis, we introduce two NER taggers that utilize such information, which we show
  to be significant for morphologically rich languages. Using these taggers, we improve
  the state-of-the-art performance levels for Turkish, Czech, Hungarian, Finnish,
  and Spanish. The ablation studies show that  these improvements result from the
  inclusion of morphological information. We also show that it is possible for the
  neural network to also learn how to disambiguate morphological analyses, thereby,
  eliminating the dependence on external morphological disambiguators that are not
  always available. In the second part of this thesis, we propose a model agnostic
  approach for explaining any sequence-based NLP task by extending a well-known feature-attribution
  method. We assess the plausibility of the explanations for our NER tagger for Turkish
  and Finnish through several novel experiments.
publication: 'Bogazici University PhD Thesis'
---
