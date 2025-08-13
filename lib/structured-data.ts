export interface OrganizationData {
  name: string
  description: string
  url: string
  logo: string
  contactPoint: {
    telephone: string
    contactType: string
    email: string
  }
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  sameAs: string[]
}

export interface JobPostingData {
  title: string
  description: string
  datePosted: string
  validThrough: string
  employmentType: string
  hiringOrganization: {
    name: string
    sameAs: string
  }
  jobLocation: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  baseSalary?: {
    currency: string
    value: {
      minValue: number
      maxValue: number
      unitText: string
    }
  }
  qualifications: string[]
  responsibilities: string[]
}

export interface BreadcrumbData {
  items: Array<{
    name: string
    url: string
  }>
}

export function generateOrganizationSchema(data: OrganizationData) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    logo: data.logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: data.contactPoint.telephone,
      contactType: data.contactPoint.contactType,
      email: data.contactPoint.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    sameAs: data.sameAs,
    "@id": data.url,
    foundingDate: "1999",
    numberOfEmployees: "450",
    industry: "Oil and Gas Construction",
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
  }
}

export function generateJobPostingSchema(data: JobPostingData) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: data.title,
    description: data.description,
    datePosted: data.datePosted,
    validThrough: data.validThrough,
    employmentType: data.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: data.hiringOrganization.name,
      sameAs: data.hiringOrganization.sameAs,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: data.jobLocation.streetAddress,
        addressLocality: data.jobLocation.addressLocality,
        addressRegion: data.jobLocation.addressRegion,
        postalCode: data.jobLocation.postalCode,
        addressCountry: data.jobLocation.addressCountry,
      },
    },
    baseSalary: data.baseSalary
      ? {
          "@type": "MonetaryAmount",
          currency: data.baseSalary.currency,
          value: {
            "@type": "QuantitativeValue",
            minValue: data.baseSalary.value.minValue,
            maxValue: data.baseSalary.value.maxValue,
            unitText: data.baseSalary.value.unitText,
          },
        }
      : undefined,
    qualifications: data.qualifications,
    responsibilities: data.responsibilities,
  }
}

export function generateBreadcrumbSchema(data: BreadcrumbData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.provider,
    },
    areaServed: {
      "@type": "Country",
      name: service.areaServed,
    },
    serviceType: service.serviceType,
  }
}

export function generateProjectSchema(project: {
  name: string
  description: string
  startDate: string
  endDate: string
  location: string
  value: string
  contractor: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name,
    description: project.description,
    startDate: project.startDate,
    endDate: project.endDate,
    location: {
      "@type": "Place",
      name: project.location,
    },
    budget: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: project.value,
    },
    contractor: {
      "@type": "Organization",
      name: project.contractor,
    },
  }
}

export function generateWebPageSchema(page: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    mainEntity: {
      "@type": "Organization",
      name: "Oil & Gas Construction Co.",
      url: "https://ogconstruction.com",
    },
  }
}

// Default organization data
export const defaultOrganizationData: OrganizationData = {
  name: "Oil & Gas Construction Co.",
  description:
    "Leading oil & gas construction company specializing in pipeline infrastructure, industrial facilities, and energy sector solutions with over 25 years of experience.",
  url: "https://ogconstruction.com",
  logo: "https://ogconstruction.com/logo.png",
  contactPoint: {
    telephone: "+1-555-123-4567",
    contactType: "customer service",
    email: "info@ogconstruction.com",
  },
  address: {
    streetAddress: "123 Industrial Blvd",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77001",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/ogconstruction",
    "https://twitter.com/ogconstruction",
    "https://www.facebook.com/ogconstruction",
  ],
}
