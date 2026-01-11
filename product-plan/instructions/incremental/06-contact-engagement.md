# Milestone 6: Contact & Engagement

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI component with full styling and form validation
- TypeScript interfaces for form data and page content
- Sample data for contact types and page content
- Test specifications for user flows

**What you need to build:**
- Integration of component with routing system
- Backend API endpoint to handle form submissions
- Database storage for ContactInquiry entities
- Email notifications (optional)
- Form validation and error handling
- Success/error state management

**Important guidelines:**
- **DO NOT** redesign or restyle the provided component — use it as-is
- **DO** implement proper backend validation (never trust client-side only)
- **DO** store form submissions using ContactInquiry entity from data model
- **DO** handle form submission errors gracefully
- **DO** protect against spam with rate limiting or CAPTCHA
- **DO** ensure the page works with the full shell

---

## Goal

Implement the Contact & Engagement section — a contact page (route `/contact`) that provides multiple ways to reach ГО "Розum" through engagement type selection, a contact form, and direct email link.

## Overview

A focused contact page that serves as the primary engagement point for the website. The page presents three distinct contact types (Experts, Partners, Investors), allows visitors to fill out a contact form with their inquiry, and provides a direct email link as an alternative. Form submissions are stored in the database as ContactInquiry entities.

**Key Features:**
- Three contact type cards (Experts, Partners, Investors) with descriptions
- Contact type selection with visual feedback
- Contact form with fields: name, email, message
- Form validation and error handling
- Direct email link as alternative contact method
- Success and error states
- Uses full application shell

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/contact-engagement/tests.md` for detailed test-writing instructions.

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### 1. Section Component

Copy and integrate the section component from `product-plan/sections/contact-engagement/components/`:

**Component:**
- `ContactEngagement.tsx` — Main page component with contact types, form, and email link

**Component Integration:**
- Import component from `product-plan/sections/contact-engagement/components/`
- Set up component as the `/contact` route
- Pass page content and contact info as props
- Wire up form submission callback

### 2. Data Integration

Load and pass page content and contact information to the component.

**Data Structure:**
See `product-plan/sections/contact-engagement/sample-data.json` for the data structure.

The component expects these data shapes:

```typescript
interface PageContent {
  headline: string     // "Get In Touch"
  intro: string        // Brief intro paragraph
}

interface ContactType {
  id: 'expert' | 'partner' | 'investor'
  title: string        // "Join as an Expert"
  description: string  // Description of this engagement type
  icon: 'users' | 'handshake' | 'trending-up'
}

interface ContactInfo {
  email: string           // "contact@rozum.org.ua"
  emailSubject: string    // Default subject line
}

interface ContactFormData {
  name: string           // Required
  email: string          // Required, must be valid email
  message: string        // Required
  inquiryType?: 'expert' | 'partner' | 'investor'  // Selected contact type
}
```

**Implementation:**
- For MVP, use the provided sample data for page content and contact types
- Configure the organization's email address
- Pass data as props to the component

### 3. Form Submission Backend

Create an API endpoint to handle contact form submissions.

**Backend Requirements:**
- Create POST endpoint (e.g., `/api/contact` or `/api/inquiries`)
- Validate all fields server-side:
  - Name is required and non-empty
  - Email is required and valid format
  - Message is required and non-empty
  - InquiryType is optional but must be valid if provided
- Store submission as ContactInquiry entity in database
- Return success/error response
- Implement rate limiting to prevent spam
- Consider adding CAPTCHA for production (e.g., reCAPTCHA)
- Optionally send email notification to team when inquiry is submitted

**ContactInquiry Entity:**
From the data model:
```typescript
interface ContactInquiry {
  name: string
  email: string
  message: string
  inquiryType?: 'expert' | 'partner' | 'investor'
}
```

**Implementation:**
- Create database table/collection for ContactInquiry
- Implement API route handler
- Add validation logic
- Add error handling
- Test with sample submissions

### 4. Form Callbacks

Wire up user interactions for form submission.

**Callbacks to Implement:**

| Callback | Trigger | Action | Implementation |
|----------|---------|--------|----------------|
| `onFormSubmit` | "Send Message" button click | Submit form data to backend | POST to `/api/contact`, handle response, show success/error |
| `onEmailClick` | Email link click | Open email client (optional analytics tracking) | Track with analytics if desired |

**Form Submission Flow:**
1. User fills out form and clicks "Send Message"
2. Frontend validates fields client-side
3. If valid, send POST request to backend API
4. Show loading state during submission
5. On success:
   - Show success message
   - Clear form fields
   - Reset selected contact type
6. On error:
   - Show error message
   - Keep form data (don't clear)
   - Allow user to retry

**Error Handling:**
- Network errors (can't reach server)
- Validation errors (invalid data)
- Server errors (500, database issues)
- Rate limit errors (too many submissions)

### 5. Shell Integration

This section uses the standard full shell.

**Shell Configuration:**
- Full navigation is visible (Vision, Investment, Research, About, Contact)
- "Contact" navigation item should be highlighted as active
- Logo and language switcher remain visible
- Standard sticky header behavior

## Files to Reference

**Section Specifics:**
- `product-plan/sections/contact-engagement/spec.md` — Full section specification
- `product-plan/sections/contact-engagement/README.md` — Feature overview
- `product-plan/sections/contact-engagement/tests.md` — Test-writing instructions for TDD
- `product-plan/sections/contact-engagement/sample-data.json` — Page content and contact types

**Components:**
- `product-plan/sections/contact-engagement/components/ContactEngagement.tsx` — Main component
- `product-plan/sections/contact-engagement/components/index.ts` — Component exports

**Types:**
- `product-plan/sections/contact-engagement/types.ts` — TypeScript interfaces
- `product-plan/data-model/types.ts` — ContactInquiry entity interface

**Context:**
- `product-overview.md` — Product description (mentions engagement pathways)
- `product-plan/data-model/data-model.md` — ContactInquiry entity description

## Expected User Flows

### Flow 1: Select Engagement Type and Submit Form

**Actor:** Interested expert, partner, or investor

**Steps:**
1. User navigates to Contact & Engagement page via main navigation or CTA buttons
2. Page loads showing headline, intro text, and three contact type cards
3. User reads the three contact type options:
   - **Experts**: "Join as an Expert" — For professionals wanting to join research teams
   - **Partners**: "Partner With Us" — For organizations seeking collaboration
   - **Investors**: "Invest in Ukraine's Future" — For investors exploring opportunities
4. User clicks on the card that matches their interest (e.g., "Join as an Expert")
5. Card displays selected state (highlighted border, background change, or checkmark)
6. User scrolls down to the contact form
7. User fills in the form fields:
   - Name (required)
   - Email (required, validated format)
   - Message (required, describing their interest or inquiry)
8. User clicks "Send Message" button
9. Form shows loading state (spinner or disabled button)
10. Form submission is sent to backend API with selected inquiry type
11. On success:
    - Success message displays ("Thank you! We'll be in touch soon.")
    - Form fields are cleared
    - Selected contact type is reset
12. User sees confirmation and knows their message was received

**Outcome:** User successfully submits a contact inquiry with their engagement type

### Flow 2: Use Direct Email Link

**Actor:** Visitor who prefers email communication

**Steps:**
1. User is on the Contact & Engagement page
2. User scrolls to the bottom of the page
3. User sees direct email link: "contact@rozum.org.ua"
4. User clicks the email link
5. User's default email client opens with:
   - To: contact@rozum.org.ua
   - Subject: Pre-filled (e.g., "Inquiry from Rozum Website")
6. User composes and sends email through their email client

**Outcome:** User contacts the organization via direct email

### Flow 3: Form Validation Errors

**Actor:** User who submits incomplete form

**Steps:**
1. User is on the Contact & Engagement page
2. User fills out the form partially (e.g., name only)
3. User clicks "Send Message" without filling required fields
4. Form shows validation errors:
   - "Email is required"
   - "Message is required"
5. User corrects the errors and fills in missing fields
6. User clicks "Send Message" again
7. Form submits successfully

**Outcome:** User receives clear feedback about form validation requirements

### Flow 4: Handle Submission Error

**Actor:** User experiencing technical issues

**Steps:**
1. User fills out the contact form completely
2. User clicks "Send Message"
3. Backend API is unreachable or returns an error
4. Form displays error message: "Something went wrong. Please try again or email us directly."
5. Form keeps user's data (doesn't clear fields)
6. User can retry submission or use the direct email link

**Outcome:** User understands the issue and has an alternative contact method

### Flow 5: Navigate to Contact from Other Pages

**Actor:** Visitor from Investment or Vision sections

**Steps:**
1. User is on a different page (e.g., Investment Opportunity)
2. User clicks a CTA button "Contact Us" or clicks "Contact" in navigation
3. Page navigates to `/contact`
4. "Contact" is highlighted as active in navigation
5. User sees contact form and engagement options

**Outcome:** User easily accesses the contact page from anywhere on the site

## Done When

**Component Integration:**
- [ ] ContactEngagement component is set up as the `/contact` route
- [ ] Component renders without errors
- [ ] Page content and contact info are passed as props

**Contact Types Display:**
- [ ] All three contact type cards display correctly
- [ ] Each card shows title, description, and icon
- [ ] Cards are visually distinct and well-formatted
- [ ] Card selection works with visual feedback (border, background, or checkmark)
- [ ] Only one contact type can be selected at a time
- [ ] Selected type is tracked in form state

**Contact Form:**
- [ ] Form displays all fields: name, email, message
- [ ] All fields are properly labeled
- [ ] Form validates required fields client-side
- [ ] Email field validates format
- [ ] "Send Message" button is prominent
- [ ] Form submission sends data to backend API

**Form Submission:**
- [ ] Backend API endpoint is created (`/api/contact` or similar)
- [ ] Server-side validation is implemented
- [ ] ContactInquiry entity is stored in database with all fields
- [ ] Selected inquiry type is included in submission
- [ ] Rate limiting is implemented to prevent spam
- [ ] Loading state displays during submission

**Success & Error States:**
- [ ] Success message displays after successful submission
- [ ] Form fields are cleared on success
- [ ] Selected contact type is reset on success
- [ ] Error message displays if submission fails
- [ ] Form data is preserved on error (for retry)
- [ ] Network errors are handled gracefully
- [ ] Validation errors are shown clearly

**Email Link:**
- [ ] Direct email link displays correctly
- [ ] Email address is clickable (mailto: link)
- [ ] Email client opens with pre-filled subject (if configured)
- [ ] Link is styled clearly as alternative contact method

**Backend & Database:**
- [ ] Database table/collection for ContactInquiry exists
- [ ] API route successfully stores submissions
- [ ] All required fields are validated
- [ ] Invalid submissions are rejected with clear errors
- [ ] Successful submissions return 200/201 status
- [ ] Optional: Email notifications are sent to team

**Shell Integration:**
- [ ] Full navigation shell is visible
- [ ] "Contact" navigation item is highlighted as active
- [ ] Logo links to home page
- [ ] Language switcher is functional
- [ ] Header is sticky at top

**Responsive Behavior:**
- [ ] Layout adapts at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] Contact type cards stack vertically on mobile
- [ ] Form fields are full-width on mobile
- [ ] Form is easily usable on mobile devices (proper input types, sizes)
- [ ] No horizontal overflow on any screen size

**Light & Dark Mode:**
- [ ] All text is readable in both light and dark modes
- [ ] Form inputs have proper backgrounds in both modes
- [ ] Contact type cards are visible in both modes
- [ ] Success/error messages have proper contrast
- [ ] Email link is visible in both modes

**Testing:**
- [ ] No console errors or warnings
- [ ] TypeScript types are correct
- [ ] Form validation tests pass
- [ ] Form submission tests pass (success and error cases)
- [ ] Backend API tests pass
- [ ] Email link works on desktop and mobile
- [ ] Spam protection works (rate limiting tested)

## Notes

- This is the primary engagement point for the website — ensure it works flawlessly
- Form submissions are the main goal — prioritize reliability and user experience
- The selected inquiry type helps the organization route inquiries to the right team
- Consider adding email notifications when inquiries are submitted (to notify the team)
- Spam protection is essential — implement rate limiting and consider CAPTCHA for production
- The direct email link provides a fallback if the form has issues
- Success message should feel personal and reassuring
- Error messages should be helpful and not blame the user
- Consider adding a privacy policy link near the form (GDPR compliance if applicable)
- Test form on actual mobile devices — mobile form UX is critical
- Monitor form submission rates and success/error ratios in production
- This section ties together the entire user journey from Vision → Investment → Contact
