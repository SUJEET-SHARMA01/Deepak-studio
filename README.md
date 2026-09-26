# Capture & Craft

Build a modern, professional and fully responsive website for a photography and videography studio.

Business

The studio provides professional photography and videography services for different types of events and functions, including:

Weddings

Engagements

Birthday parties

Pre-wedding shoots

Anniversaries

Corporate events

Religious functions

Other special events

Technology

Use:

React.js

JavaScript

React Router

CSS / modern CSS

Context API where required

Lucide React or another clean icon library

Do NOT use Next.js.
Keep the project beginner-friendly and well organized.

Website Pages

1. Home Page

Create an attractive hero section with:

Large photography background/image

Studio name

Short tagline

"Book Your Shoot" CTA button

"View Portfolio" CTA button

Add sections for:

About the studio

Services

Featured portfolio

Why choose us

Customer testimonials

Call-to-action section

Footer

2. About Page

Include:

Studio introduction

Experience

Photography approach

Professional equipment

Why customers choose the studio

Use a professional photography-related layout.

3. Services Page

Create separate service cards for:

Wedding Photography

Wedding Videography

Pre-Wedding Shoot

Birthday Photography

Engagement Photography

Corporate Event Photography

Traditional/Religious Events

Custom Event Packages

Each card should have:

Image

Service name

Short description

"Enquire Now" button

4. Portfolio Page

Create a beautiful gallery.

Categories:

Weddings

Pre-Wedding

Birthdays

Events

Portraits

Add category filtering using React state.

The gallery should have a modern masonry/grid layout and image hover effects.

When a user clicks an image, open it in a lightbox/modal.

5. Packages Page

Create photography packages such as:

Basic Package

1 Photographer

4 Hours Coverage

Edited Photos

Premium Package

2 Photographers

Photography + Videography

Full Event Coverage

Cinematic Video

Custom Package

Customized according to event requirements

Do not hardcode real prices. Use "Contact for Price" or "Get Quote".

6. Contact Page

Create a professional enquiry form with:

Name

Phone Number

Email

Event Type

Event Date

Location

Message

Add:

Phone number

WhatsApp button

Email

Studio location

Google Maps placeholder

Form should have proper validation.

7. Navbar

Create a sticky responsive navbar with:

Studio logo/name

Home

About

Services

Portfolio

Packages

Contact

"Book Now" button

On mobile, use a hamburger menu.

8. WhatsApp Integration

Add a floating WhatsApp button.

When clicked, it should open WhatsApp with a pre-filled enquiry message such as:

"Hello, I would like to enquire about your photography and videography services."

Keep the WhatsApp number in one configuration file so it can easily be replaced with the client's actual number.

Design

The design should feel:

Premium

Elegant

Modern

Photography-focused

Clean

Trustworthy

Use:

Large images

Smooth animations

Cards

Rounded corners where appropriate

Good typography

Proper spacing

Subtle hover effects

Scroll animations

Use a professional color palette such as:

Black / charcoal

White / off-white

Gold or warm accent color

Do not make the website overly flashy.

Responsive Design

The website must work properly on:

Desktop

Laptop

Tablet

Mobile

Pay special attention to:

Navbar

Hero section

Gallery

Service cards

Contact form

Footer

Components

Create reusable React components:

Navbar
Footer
Hero
ServiceCard
PortfolioCard
PackageCard
TestimonialCard
CTASection
ContactForm
WhatsAppButton
Lightbox

Keep components separated into appropriate folders.

Data

Keep services, packages, portfolio images and testimonials in separate JavaScript data files instead of writing everything directly inside components.

Example structure:

src/
components/
pages/
data/
assets/
context/
App.jsx
main.jsx

Important

Use realistic placeholder images from Unsplash or another suitable image source during development.

Make the website look like a real production photography studio website, not a generic student project.

Write clean, readable and maintainable React code.

First create the complete frontend UI and routing. After that, we can add backend functionality for enquiries, bookings and admin management.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lenslove-studio.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db9e7f5d-3bd3-4ba8-8ebd-d3f019e08f2c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
