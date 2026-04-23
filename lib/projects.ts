export interface Project {
  id: string
  title: string
  category: "Custom Home" | "Renovation" | "Extension"
  location: string
  year: string
  description: string
  features: string[]
  images: string[]
  stats: {
    bedrooms?: number
    bathrooms?: number
    area?: string
    duration?: string
  }
}

export const projects: Project[] = [
  {
    id: "1",
    title: "The Riverfront Residence",
    category: "Custom Home",
    location: "Henley Beach",
    year: "2024",
    description:
      "A stunning contemporary residence designed to maximize river views and natural light. This four-bedroom home features an open-plan living area that flows seamlessly to the outdoor entertainment space, complete with infinity pool and landscaped gardens.",
    features: [
      "Floor-to-ceiling glazing throughout",
      "Integrated smart home technology",
      "Infinity edge pool overlooking the river",
      "Imported Italian kitchen fittings",
      "Sustainable building materials",
    ],
    images: ["/images/project-1.jpg", "/images/project-2.jpg"],
    stats: {
      bedrooms: 4,
      bathrooms: 3,
      area: "380m²",
      duration: "14 months",
    },
  },
  {
    id: "2",
    title: "Coastal Modern Retreat",
    category: "Custom Home",
    location: "Brighton",
    year: "2023",
    description:
      "Inspired by the coastal setting, this home combines natural materials with contemporary design. The result is a warm, inviting residence that embraces indoor-outdoor living while providing shelter from the sea breeze.",
    features: [
      "Natural timber and stone finishes",
      "Double-height living spaces",
      "Covered alfresco with outdoor kitchen",
      "Home theater and wine cellar",
      "Electric vehicle charging",
    ],
    images: ["/images/project-2.jpg", "/images/project-3.jpg"],
    stats: {
      bedrooms: 5,
      bathrooms: 4,
      area: "450m²",
      duration: "16 months",
    },
  },
  {
    id: "3",
    title: "Urban Contemporary",
    category: "Renovation",
    location: "North Adelaide",
    year: "2023",
    description:
      "A complete transformation of a 1970s brick home into a sleek, modern residence. The renovation involved opening up the floor plan, adding skylights, and creating a seamless connection to the newly landscaped rear garden.",
    features: [
      "Complete interior restructure",
      "New glazed extension to rear",
      "Premium kitchen with butler's pantry",
      "Heated flooring throughout",
      "Automated blinds and lighting",
    ],
    images: ["/images/project-3.jpg", "/images/project-4.jpg"],
    stats: {
      bedrooms: 4,
      bathrooms: 3,
      area: "320m²",
      duration: "10 months",
    },
  },
  {
    id: "4",
    title: "The Heritage Transformation",
    category: "Extension",
    location: "Unley",
    year: "2024",
    description:
      "A sensitive modernization of a heritage-listed villa, adding a contemporary two-story extension while preserving the home's original character. The project required careful coordination with heritage authorities.",
    features: [
      "Heritage-compliant design",
      "Two-story rear extension",
      "Original features restored",
      "Modern amenities integration",
      "Energy efficiency upgrades",
    ],
    images: ["/images/project-4.jpg", "/images/project-5.jpg"],
    stats: {
      bedrooms: 5,
      bathrooms: 3,
      area: "420m²",
      duration: "12 months",
    },
  },
  {
    id: "5",
    title: "Minimalist Masterpiece",
    category: "Custom Home",
    location: "Burnside",
    year: "2023",
    description:
      "A study in architectural restraint, this home uses a limited palette of materials to create spaces of calm sophistication. Clean lines, abundant natural light, and carefully considered proportions define this exceptional residence.",
    features: [
      "Minimalist design philosophy",
      "Japanese-inspired gardens",
      "Polished concrete floors",
      "Concealed storage solutions",
      "Natural ventilation systems",
    ],
    images: ["/images/project-5.jpg", "/images/project-6.jpg"],
    stats: {
      bedrooms: 3,
      bathrooms: 2,
      area: "280m²",
      duration: "12 months",
    },
  },
  {
    id: "6",
    title: "The Indoor-Outdoor Home",
    category: "Extension",
    location: "Glenelg",
    year: "2024",
    description:
      "This project transformed a traditional bungalow into a modern family home with seamless indoor-outdoor flow. The new extension includes a covered entertaining area with built-in BBQ and swimming pool.",
    features: [
      "Bi-fold doors spanning 8 meters",
      "Covered outdoor entertaining",
      "Heated swimming pool",
      "Outdoor kitchen and pizza oven",
      "Drought-tolerant landscaping",
    ],
    images: ["/images/project-6.jpg", "/images/project-1.jpg"],
    stats: {
      bedrooms: 4,
      bathrooms: 3,
      area: "350m²",
      duration: "9 months",
    },
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category)
}
