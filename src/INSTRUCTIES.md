# Portfolio Website - Instructies

## 📸 Afbeeldingen Toevoegen

### Stap 1: Plaats je afbeeldingen in de `/assets` map

De volgende afbeeldingen zijn nodig:

1. **Profielfoto**: `profile.jpg` of `profile.png`
   - Aanbevolen formaat: 800x800px (vierkant)
   - Gebruikt in: About Me sectie

2. **Project afbeeldingen**: 
   - `project-1.jpg` - Voor je eerste project
   - `project-2.jpg` - Voor je tweede project  
   - `project-3.jpg` - Voor je derde project
   - `project-4.jpg` - Voor je vierde project
   - Aanbevolen formaat: 1200x800px (landscape)

### Stap 2: Controleer het pad in `/data/portfolio-content.ts`

De paden zijn al correct ingesteld:
```typescript
photo: "/assets/profile.jpg"
image: "/assets/project-1.jpg"
```

### Belangrijke opmerking:
Als je afbeeldingen niet werken, controleer of:
- De bestandsnamen exact overeenkomen (let op hoofdletters!)
- De bestanden in de `/assets` map staan
- De bestandsextensie klopt (.jpg, .png, etc.)

---

## 🎨 Content Aanpassen

Alle content kan aangepast worden in `/data/portfolio-content.ts`

### Persoonlijke informatie wijzigen:
```typescript
personal: {
  name: "Jouw Naam",
  title: "Jouw Titel",
  tagline: "Jouw tagline hier",
  email: "jouw@email.com",
  photo: "/assets/profile.jpg",
  aboutMe: "Jouw verhaal..."
}
```

### Social media links aanpassen:
```typescript
socials: {
  linkedin: "https://linkedin.com/in/jouwnaam",
  github: "https://github.com/jouwnaam",
  instagram: "https://instagram.com/jouwnaam"
}
```

### Skills toevoegen of wijzigen:
```typescript
skills: [
  {
    name: "Skill naam",
    description: "Korte beschrijving",
    icon: "component", // Kies uit: component, code, palette, sparkles, server, smartphone
    color: "from-blue-500 to-cyan-500" // Tailwind gradient kleuren
  }
]
```

### Projecten toevoegen of wijzigen:
```typescript
projects: [
  {
    id: 1, // Uniek nummer
    title: "Project Titel",
    shortDescription: "Korte omschrijving",
    description: "Lange, gedetailleerde beschrijving...",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/jouwnaam/project",
    image: "/assets/project-1.jpg"
  }
]
```

---

## 🎯 Tips voor het beste resultaat

### Foto kwaliteit:
- Gebruik hoge resolutie afbeeldingen
- Profielfoto: zorg voor goede belichting en professionele uitstraling
- Project screenshots: toon de belangrijkste features van je project

### Content schrijven:
- Houd je about me sectie persoonlijk maar professioneel
- Beschrijf je projecten duidelijk: wat het doet en welke technologie je gebruikte
- Gebruik concrete getallen waar mogelijk (3+ jaar ervaring, 50+ projecten)

### Social media:
- Update alle social media links naar je eigen profielen
- Zorg dat je profielen up-to-date en professioneel zijn

---

## 🚀 Meer projecten toevoegen

Om een 5e, 6e project etc. toe te voegen:

1. Voeg een nieuw project object toe aan de `projects` array in `/data/portfolio-content.ts`
2. Plaats de bijbehorende afbeelding in `/assets` (bijv. `project-5.jpg`)
3. Update de `image` property naar het juiste pad

Voorbeeld:
```typescript
{
  id: 5,
  title: "Nieuw Project",
  shortDescription: "Wat doet het?",
  description: "Uitgebreide beschrijving...",
  technologies: ["Tech1", "Tech2"],
  githubUrl: "https://github.com/jouwnaam/nieuw-project",
  image: "/assets/project-5.jpg"
}
```

---

## ❓ Problemen oplossen

**Afbeelding wordt niet geladen?**
- Controleer of het bestand in `/assets` staat
- Controleer de bestandsnaam (exact match, inclusief extensie)
- Ververs de pagina (hard refresh: Ctrl+Shift+R of Cmd+Shift+R)

**Content wordt niet getoond?**
- Controleer of je wijzigingen in `/data/portfolio-content.ts` hebt opgeslagen
- Controleer of de TypeScript syntax correct is (geen missende komma's of haakjes)

**Wil je meer aanpassen?**
- Kleuren: wijzig de gradient kleuren in `portfolio-content.ts`
- Layout: pas de componenten aan in de `/components` map
- Styling: wijzig globale stijlen in `/styles/globals.css`

---

Veel succes met je portfolio! 🎉
