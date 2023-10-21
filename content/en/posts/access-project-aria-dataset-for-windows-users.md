---
title: "How to Access Project Aria for Windows Users"
date: 2023-10-20T00:00:03.527233
authors: ["Jeff Wang"]
tags: ["Tutorial"]
categories: ["Spatial Data", "Research"]
description: "Read about Meta's Project Aria and how to access the open source database."
thumbnail: "/images/gen/blog/content4-0.webp"
alt: "Thumbnail inviting readers to read the post."
image: ""
---

# Key Points

---

- Project Aria is a research initiative by Meta Reality Labs focused on creating a wearable device to gather multi-sensory data for enhancing augmented reality and personalized AI experiences.
- The Aria Digital Twin dataset is a detailed set of recordings from Project Aria glasses, taken inside Meta's offices, showing how people and objects interact in various indoor settings.
- Learn how to access the Aria Digital Twin dataset on Windows.

---
<br>

<br />

# Table of Contents

---

1. [Project Aria](#projectaria)
    1. [Introduction](#intro)
    2. [Advanced Augmented Reality Versus Autonomous Vehicles](#ar-vs-autonomous-vehicles)
    3. [Core Research Problems](#core-research-problems)
        1. [Egocentric, multimodal data](#problem1)
        2. [Inaccurate Representation of Physical Environment Under Sudden Change](#problem2)
        3. [Applying Macine Learning on Non-ideal Data Source](#problem3)
        4. [Contextual Analysis](#problem4)
    4. [Final Notes](#finalnotes)
2. [Aria Digital Twin Dataset](#adt)
3. [Accessing ADT on Windows](#adt-windows)
    1. [0. Download codebase](#step0)
    2. [1. Install Python](#step1)
    3. [2. Create a virtual environment](#step2)
    4. [3. Visit ADT website sign up](#step3)
    5. [4. Download the download-links file](#step4)
    6. [Setup a folder for ADT data](#step5)
    7. [Find and execute the ADT downloader script](#step6)

---


# Project Aria <a name="projectaria"></a>

## Introduction <a name="intro"></a>

In 2020, Meta began research in AR and AI technologies to develop AR glasses of the future. The culmination of their current work is Project Aria. As a side note, it is not to be confused with AriaVR, and neither are we affiliated with Meta. In a whitepaper released in August 2023, researchers describe “an egocentric, multi-modal data recording and streaming device” in the form of an eyeglass. 

<div style="display: inline-block; text-align: center;">
    <img src="/images/gen/blog/content4-1.webp" alt="Project Aria glasses as demonstrated in the white paper." style="margin: 0; display: block;">
    <span style="display: block; margin-top: 0px; margin-bottom: 10px;">Project Aria glasses as demonstrated in the white paper.</span>
</div>

Jargon aside, the device is a means to collect various data such as sound, depth, and gravitational force from a first-person perspective. The purpose of Project Aria is to develop machine learning capabilities for first-person, multi-sensory data. These advanced machine learning methods are an essential step to enhance augmented reality with personalized AI.

## Advanced Augmented Reality Versus Autonomous Vehicles <a name="ar-vs-autonomous-vehicles"></a>

Before we get to Project Aria’s core research problems, we have to understand the difference between advanced AR and autonomous vehicles. Both use machine learning to semantically label objects in real life environments. Yet, advanced AR has an added step: the reconstruction of physical reality. Here is the workflow of advanced AR:

<p style="text-align: center;">
    <img src="/images/gen/blog/content4-2.webp" alt="Advanced AR workflow" style="margin: 0; display: block;">
    <span style="display: block; margin-top: 0px; margin-bottom: 10px;">An infographic demonstrating an advanced AR workflow.</span>
</p>

The reason why advanced AR applies machine learning in a spatial simulation is efficiency, efficacy, and privacy. 

First, it is faster and computationally easier for machine learning to work with a digital simulation than real time video feed. After all, real objects are represented as point clouds in digital space. That is, they have 3D coordinate attributes. 

Second, creating a digital simulation of the real world allows for better integration of virtual objects into the physical space. A digital simulation allows the machine learning system to understand spatial inter-object relationships and semantics of the real world. Working with a constructed model is actually most similar to our perception. Seeing things as-is is not very useful; it is the connections that we make between objects and the overall entity that is most useful.

Third, wearable devices are to be worn in homes and other private spaces. Abstracting people and physical objects into points provides anonymity and better obscurity.  

On the other hand, autonomous vehicles must work with real time video for the sake of optimizing safety. As such, they require high computational overhead, especially with the greater amount of sensors. That aside, the fundamental difference is in seeing things as-is and applying analyses in real time. The purpose of these vehicles is to identify objects and their movements for object avoidance. It is not important to understand how objects relate in the context of the immediate environment. This is what advanced AR hopes to do.  

## Core Research Problems <a name="core-research-problems"></a>

### Egocentric, multi-modal data <a name="problem1"></a>

The general problem that Project Aria addresses is the use of egocentric, multi-modal data. Egocentric or first-person and multi-modal or multi-sensory data presents unique challenges for machine learning. The challenge is in the data source, namely the quality of the data. Currently, training data for machine learning for computer vision is based on carefully constructed 3D spaces. When such models are applied to data that comes from wearable devices, the accuracy of analyses suffers horribly. Wearable devices have relatively poor data capture due to size constraints. Plus, human users move in unpredictable ways, adding greater complexity.    

<div style="display: inline-block; text-align: center;">
    <img src="/images/gen/blog/content4-3.webp" alt="motion blur is common in egocentric data. " style="margin: 0; display: block;">
    <span style="display: block; margin-top: 0px; margin-bottom: 10px;">Motion blur is common in egocentric data and causes significant distortion.</span>
</div>

### Inaccurate Representation of Physical Environment Under Sudden Change <a name="problem2"></a>

A specific research problem lies in the processing of first-person, multi-sensory data. Mature systems exist to reconstruct or update a map of an unknown environment while simultaneously keeping track of the device’s location. However, when there are sudden and significant changes to the environment, these systems can struggle to adapt, causing disruptions in the tracking process. Factors that are commonly subject to change are lighting, weather, and motion. 

### Applying Machine Learning on Non-ideal Data Source <a name="problem3"></a>

Data sourced from a wearable device like the Project Aria eyeglasses is non-ideal. Data capture on these devices undergo natural human movement, and machine learning models are just not trained to account for this well. The Project Aria glasses inherently solves this problem. The greater availability of egocentric, multi-modal data unlocks new and better models. 

### Contextual Analysis <a name="problem4"></a>

Advanced AR requires understanding the purpose of objects that the user looks at. Usually, this requires understanding the meaning of the object in the given environment. That is, what is the object as well as its role in the given ecosystem. Furthermore, the information must be translated into action items to facilitate interactions between the user and/or digital objects.

## Final Notes <a name="finalnotes"></a>

In brief, Project Aria, developed by Meta, is a groundbreaking venture into augmented reality (AR) using eyeglasses that capture multi-sensory, first-person data. It aims to overcome challenges like handling unpredictable human movements and accurately recognizing and relating objects in ever-changing environments. The ultimate goal is to enhance AR experiences by seamlessly merging the digital and physical worlds through advanced machine learning.

# Aria Digital Twin Dataset <a name="adt"></a>

In the hope of attracting interest and talent, Meta has made Project Aria open source. One of the datasets they provide is the Aria Digital Twin dataset, a collection of sequences recorded in Meta offices by Project Aria glasses. The dataset encompasses detailed data on objects, environments, and user interactions to aid AR research. Its most useful feature is the ability to compare between real and digitally simulated environments. You can train and test machine learning models this way.

If you would like to read more about the dataset, you can do so [here](https://www.projectaria.com/datasets/adt/).

<div style="display: inline-block; text-align: center;">
    <img src="/images/gen/blog/content4-4.webp" alt="Real versus digitally simulated environment from Project Aria Twin Dataset" style="margin: 0; display: block;">
    <span style="display: block; margin-top: 0px; margin-bottom: 10px;">Real versus digitally simulated environment from Project Aria Twin Dataset. Source: Meta</span>
</div>

# Accessing Aria Digital Twin Dataset on Windows <a name="adt-windows"></a>

If you would like access to the dataset as a Windows user, you may be dismayed at the lack of compatibility. From the documentation: 

[](https://facebookresearch.github.io/projectaria_tools/docs/data_utilities/installation/download_codebase#supported-platforms)

```
## Supported Platforms

The codebase has been tested on the following platforms.

- Fedora 36, 37, 38 recommended
- Ubuntu focal (20.04 LTS) and jammy (22.04 LTS)
- Mac Intel or Mac ARM-based (M1)
    - Mac Big Sur or newer
```

What this means is there is no Python package for Windows, so we have to manually source and compile the downloader script. Here is how to do that. 

## 0. Download codebase <a name="step0"></a>

In your preferred home folder, create the following folder and clone the git repository in it.

```
mkdir projectaria_sandbox

cd projectaria_sandbox

git clone https://github.com/facebookresearch/projectaria_tools.git
```

## 1. Install Python (if you haven’t) <a name="step1"></a>

For more information, click this [link](https://www.python.org/downloads/).

## 2. Create a virtual environment <a name="step2"></a>

```
mkdir projectaria_tools_python_env

projectaria_tools_python_env/Scripts/activate.bat
```

## 3. **Visit [ADT website](https://www.projectaria.com/datasets/adt/) sign up.** <a name="step3"></a>

Scroll down to the bottom of the page. Enter your email and select **Access the Datasets**.

## 4. **Download the download-links file.** <a name="step4"></a>

Once you've selected **Access the Datasets** you'll be taken back to the top of the ADT page.

Scroll down the page to select **Aria Digital Twin Download Links** and download the file to the folder Downloads.

## 5. Setup a folder for ADT data. <a name="step5"></a>

```
mkdir projectaria_tools_adt_data

move "\Downloads\aria_digital_twin_dataset_download_urls.json" projectaria_tools_adt_data
```

## 6. Find and execute the ADT downloader script. <a name="step6"></a>

Below, we have included the command to download the sample sequence (~500 MB).

```
cd projectaria_sandbox\projectaria_tools-main\projectaria_tools\projects\adt

adt_benchmark_dataset_downloader -c ../projectaria_tools_adt_data/aria_digital_twin_dataset_download_urls.json \
-o ../projectaria_tools_adt_data/ \
-d 0 1 2 3 -e
```

For more command line download links, visit the [documentation](https://facebookresearch.github.io/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download#download-examples).

To visit the Project Aria page, click [here](https://www.projectaria.com/).