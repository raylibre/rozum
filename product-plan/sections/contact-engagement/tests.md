# Test Instructions: Contact & Engagement

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

A contact page with three engagement type cards, a contact form, and a direct email link. Users can select their engagement type before submitting the form.

---

## User Flow Tests

### Flow 1: Select Engagement Type

**Scenario:** User selects how they want to engage

#### Success Path

**Setup:**
- Page loads with three contact type cards

**Steps:**
1. User navigates to `/contact`
2. User sees three cards: "Join as an Expert", "Partner With Us", "Invest in the Future"
3. User clicks on "Join as an Expert" card

**Expected Results:**
- [ ] Card shows selected state (cyan border, filled checkbox)
- [ ] Other cards remain unselected
- [ ] Selection indicator (checkmark) appears on selected card

---

### Flow 2: Submit Contact Form

**Scenario:** User fills out and submits the contact form

#### Success Path

**Setup:**
- Page loaded, user has optionally selected an engagement type

**Steps:**
1. User enters "John Doe" in "Your name" field
2. User enters "john@example.com" in "Email address" field
3. User enters "I'm interested in contributing..." in "Message" field
4. User clicks "Send Message" button

**Expected Results:**
- [ ] `onFormSubmit` callback is called with form data:
  ```javascript
  { name: "John Doe", email: "john@example.com", message: "...", contactType: "experts" }
  ```
- [ ] Form data includes selected contactType (if one was selected)

#### Failure Path: Validation Errors

**Setup:**
- User leaves required fields empty

**Steps:**
1. User clicks "Send Message" without filling fields

**Expected Results:**
- [ ] Browser validation prevents submission
- [ ] Required fields show validation state
- [ ] Form is not submitted

---

### Flow 3: Use Direct Email

**Scenario:** User clicks the email link

#### Success Path

**Steps:**
1. User scrolls to bottom of page
2. User clicks email link "contact@rozum.org.ua"

**Expected Results:**
- [ ] `onEmailClick` callback is called
- [ ] Email client opens with pre-filled subject line

---

## Component Interaction Tests

### ContactEngagement Component

**Renders correctly:**
- [ ] Displays page headline "Get in Touch"
- [ ] Displays intro text
- [ ] Renders 3 contact type cards
- [ ] Each card shows icon, title, and description
- [ ] Form has name, email, and message fields
- [ ] "Send Message" button is visible
- [ ] Email link displays correct address

**Contact type selection:**
- [ ] Clicking a card selects it
- [ ] Clicking a different card changes selection
- [ ] Selected card shows visual indicator (checkmark, border)
- [ ] Unselected cards show default state

**Form interactions:**
- [ ] Typing in fields updates form state
- [ ] Selected contact type shows below submit button
- [ ] Form clears after successful submission (if implemented)

---

## Empty State Tests

### No Contact Type Selected

**Scenario:** User submits form without selecting engagement type

**Setup:**
- No contact type card selected

**Expected Results:**
- [ ] Form still submits successfully
- [ ] `contactType` field is undefined in submission
- [ ] No error shown (selection is optional)

---

## Edge Cases

- [ ] Form handles very long messages
- [ ] Email with special characters validated correctly
- [ ] Multiple rapid clicks on submit handled
- [ ] Switching contact type selection works correctly

---

## Accessibility Checks

- [ ] Form fields have associated labels
- [ ] Contact type cards are keyboard accessible
- [ ] Error messages announced to screen readers
- [ ] Focus moves appropriately after form submission

---

## Sample Test Data

```typescript
const mockPageContent = {
  headline: "Get in Touch",
  intro: "Whether you're an expert looking to contribute..."
};

const mockContactTypes = [
  { id: "experts", title: "Join as an Expert", description: "...", icon: "users" },
  { id: "partners", title: "Partner With Us", description: "...", icon: "handshake" },
  { id: "investors", title: "Invest in the Future", description: "...", icon: "trending-up" }
];

const mockContactInfo = {
  email: "contact@rozum.org.ua",
  emailSubject: "Inquiry from Website"
};

// Example form submission
const mockFormData = {
  name: "John Doe",
  email: "john@example.com",
  message: "I'm interested in contributing my expertise...",
  contactType: "experts"
};
```
