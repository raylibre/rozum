# Contact & Engagement

## Overview

A contact page that provides multiple ways to reach ГО "Розум" — both via direct email and a contact form. The page presents distinct contact options for experts interested in joining research teams, partners seeking collaboration, and investors exploring opportunities.

## User Flows

- View contact options for different engagement types (experts, partners, investors)
- Click email link to open email client
- Fill out and submit contact form with name, email, and message

## Design Decisions

- Clean header with headline and intro text
- Three selectable contact type cards with icons and selection states
- Interactive form with validation
- Prominent "Send Message" button with cyan primary color
- Direct email link at bottom
- Full dark mode support

## Data Used

**Entities:**
- PageContent (headline, intro)
- ContactType (id, title, description, icon)
- ContactInfo (email, emailSubject)
- ContactFormData (name, email, message, contactType)

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `ContactEngagement` — Main page with contact types, form, and email link

## Callback Props

| Callback | Description |
|----------|-------------|
| `onEmailClick` | Called when user clicks the email link |
| `onFormSubmit` | Called when user submits the contact form with form data |
