  export interface Root {
    Department: Department[]
  }
  
  export interface Department {
    Marketing?: Marketing
    Services?: Services
    "Business Development"?: BusinessDevelopment
    Support?: Support
    Accounting?: Accounting
    "Product Management"?: ProductManagement
    "Human Resources"?: HumanResources
    "Research and Development"?: ResearchAndDevelopment
    Sales?: Sales
    Legal?: Legal
    Engineering?: Engineering
  }
  
  export interface Marketing {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
 
  export interface Services {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  
  export interface BusinessDevelopment {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  
  export interface Support {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  

  
  export interface Accounting {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  
  export interface ProductManagement {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  export interface HumanResources {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }

  
  export interface ResearchAndDevelopment {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  
  export interface Sales {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  
  export interface Legal {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  
  export interface Engineering {
    male: number
    female: number
    ageRange: string
    hair: {}
    AddressUser: {}
  }
  