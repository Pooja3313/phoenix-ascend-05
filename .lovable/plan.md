

## Phoenix Finserv Website — Header, Footer & Home Page

### Brand & Theme
- **Company**: Phoenix Finserv — "Helping secure dreams"
- **Primary color**: Orange (from WealthMax/logo), with green accent on hover states (from logo)
- **Footer**: Gray tone from the Phoenix Finserv logo
- **Font**: Handwritten/stylish font inspired by Odoo for headings, clean consistent font for body text
- **Contact**: accountants@phoenix-accountancy.co.uk | +44 (0) 2079 932 737

---

### 1. Header (Sticky)
- **Top bar**: Orange background with email, phone, and LinkedIn icon (like Phoenix Accountancy)
- **Main nav**: Logo on left, nav links: Home, About, Your Journey, then **5 service dropdowns** (Protection, Mortgage, Commercial Lending, Pensions, Wills & Estate Planning) with mega-menu sub-items matching WealthMax's structure
- **Right side**: "Get a Quote" CTA button + **::: icon** that opens a **right sidebar drawer** with full contact details, social links, and additional info
- **Sticky "Get in Touch"** tab on the right edge of the page (rotated text, always visible)

### 2. Welcome Popup (on load)
- Modal popup: "Revitalise Your Finances" — 30% off first 3 months of Premium Accounting Services
- Styled with Phoenix Finserv orange branding, dismissible with X button

### 3. Home Page Sections (matching Phoenix Accountancy's layout)
- **Hero section**: Full-width dark overlay image with bold headline ("Best Solution to Manage Your Finance and Accounting"), subtitle, and "Get a Quote" button. Odoo-style handwritten font with highlighter/underline decorations on key words
- **Pillars of Values**: Integrity, Professionalism, Customer Focus cards with animated icons (icons move/bounce on hover, green background on hover matching logo). Using image icons + Lucide React icons
- **Services overview**: Step-by-step service cards flowing down the page
- **Testimonial section**: Quote card with avatar (Odoo-style with large quote marks)
- **Pound symbol animation**: Animated £ symbol inspired by CodeTantra's C letter animation — rotating/morphing effect to make it unique
- **Additional home sections**: Matching all sections from Phoenix Accountancy's current home page

### 4. Footer (Odoo-inspired, gray theme)
- Multi-column layout: company info, services links, quick links, contact info
- Gray background matching the gray in Phoenix Finserv logo
- Subtle lighting/glow animation inspired by CodeTantra's footer
- Social media icons, copyright, newsletter signup
- Clean, modern styling consistent with Odoo's footer structure

### 5. Animations & Interactions
- Icon hover: smooth movement/scale + green background highlight
- Odoo-style pen/highlighter marks on key text (CSS pseudo-elements)
- CodeTantra-inspired letter animations on the £ pound symbol
- Fade-in scroll animations throughout page sections
- Smooth mega-menu dropdowns with transitions
- Right sidebar slide-in animation for ::: menu

### 6. Code Structure
- Clean React component architecture: `Header`, `Footer`, `HeroSection`, `ValuesSection`, `ServicesSection`, `TestimonialSection`, `WelcomePopup`, `RightSidebar`, `StickyGetInTouch`
- Tailwind CSS for all styling with custom theme colors (orange, green, gray)
- Lucide React for icons + custom image icons where needed
- Responsive design for all screen sizes

