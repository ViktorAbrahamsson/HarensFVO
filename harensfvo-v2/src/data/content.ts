export interface Fact {
  title: string
  value: string
}

export interface Rule {
  title: string
  value: string
}

export interface HomeCard {
  title: string
  text: string
  route: string
  img: string
}

export interface NavLink {
  text: string
  route: string
}

export interface Contact {
  chairman: { name: string; phone: string; email: string }
  developer: { name: string; email: string }
}

export const navLinks: NavLink[] = [
  { text: 'Fiskekort & Regler', route: '/fiskekort' },
  { text: 'Fiskarter', route: '/fiskarter' },
  { text: 'Information', route: '/information' },
  { text: 'Camping', route: '/camping' },
]

export const homeCards: HomeCard[] = [
  {
    title: 'Fiskekort & Regler',
    text: 'Här kan du ta reda på alla gällande priser och regler som är kopplade till fisket i Hären.',
    route: '/fiskekort',
    img: '/images/fiskedrag_350.jpg',
  },
  {
    title: 'Information',
    text: 'Hären med flera sjöars fiskevårdsområde bildades 1938. En gemensam strävan var att vårda och bevara de sjöar som vid den tiden låg inom föreningens förvaltarskap.',
    route: '/information',
    img: '/images/brygga.jpg',
  },
  {
    title: 'Fiskarter',
    text: 'I Hären finns det 9 stycken fiskarter, exempelvis Gädda och Gös.',
    route: '/fiskarter',
    img: '/images/slide2_350.jpg',
  },
]

export const lakeFacts: Fact[] = [
  { title: 'Huvudavrinningsområde', value: '101, Nissan' },
  { title: 'Höjd över havet', value: '163 m' },
  { title: 'Areal', value: '4,01 km²' },
  { title: 'Maxdjup', value: '10,7 m' },
  { title: 'Medeldjup', value: '2,6 m' },
  { title: 'Volym i miljoner', value: '10,4 m³' },
  { title: 'Avrinningsområde', value: '106,9 km²' },
]

export const carouselImages: string[] = [
  '/images/slide1.JPG',
  '/images/slide2.JPG',
  '/images/slide3.JPG',
]

export const permits: Fact[] = [
  { title: 'Dygnskort', value: '70 kr' },
  { title: 'Veckokort', value: '200 kr' },
  { title: 'Årskort', value: '500 kr' },
  { title: 'Angelkort', value: '100 kr' },
  { title: 'Angel ismetekort', value: '10 kr' },
]

export const rules: Rule[] = [
  {
    title: 'Angel-ismetetävling',
    value:
      'Angel-ismetetävling som arrangeras av FVO och av föreningar som är anslutna till FVO är kostnadsfria för deltagarna om det är ett angelkort eller angel ismetekort.',
  },
  {
    title: 'Metartävling & pimpeltävling',
    value:
      'Metartävling & pimpeltävling som arrangeras av FVO och av föreningar som är anslutna till FVO är kostnadsfria för deltagarna och kräver inget fiskekort.',
  },
  {
    title: 'Öppna tillställningar',
    value:
      'Öppna tillställningar som arrangeras av FVO är kostnadsfria för deltagarna och kräver inget fiskekort.',
  },
  {
    title: 'Korpfisketävlingar',
    value:
      'Korpfisketävlingar som arrangeras av föreningar anslutna till FVO är kostnadsfria för deltagarna och kräver inget fiskekort.',
  },
  {
    title: 'Fisketillstånd Företag & Förening',
    value:
      'Fisketillstånd för företag och föreningar kan köpas mot en avgift. Kontakta ordföranden för mer information.',
  },
]

export const historia: string[] = [
  'Hären med flera sjöars fiskevårdsområde bildades 1938. En gemensam strävan var att vårda och bevara de sjöar som vid den tiden låg inom föreningens förvaltarskap. Föreningen har sedan dess vuxit och nu förvaltar vi ett flertal sjöar i Gnosjö kommun.',
  'Fisket i Hären och de angränsande sjöarna bedrivs med stor omsorg om den biologiska mångfalden. Utsättning av fisk sker regelbundet för att säkerställa ett hållbart fiske för kommande generationer. Vattenprover och kontroller genomförs löpande för att följa upp sjöarnas ekologiska status.',
  'Idag fokuserar föreningen på att erbjuda ett varierat och tillgängligt fritidsfiske för alla åldrar. Fiskekort säljs via fiskekort.se och ger tillgång till våra vatten under hela säsongen. Vi välkomnar både erfarna sportfiskare och nybörjare att njuta av de vackra naturmiljöerna runt Hären.',
]

export interface FishSpecies {
  name: string
  img: string
}

export const fishSpecies: FishSpecies[] = [
  { name: 'Abborre', img: '/images/Abborre.png' },
  { name: 'Benlöja', img: '/images/Benloja.PNG' },
  { name: 'Braxen', img: '/images/Braxen.PNG' },
  { name: 'Gädda', img: '/images/Gadda.png' },
  { name: 'Gers', img: '/images/Gers.PNG' },
  { name: 'Gös', img: '/images/Gos.PNG' },
  { name: 'Lake', img: '/images/Lake.PNG' },
  { name: 'Mört', img: '/images/Mort.PNG' },
  { name: 'Ål', img: '/images/al.png' },
]

export const contact: Contact = {
  chairman: {
    name: 'Göran Ericsson',
    phone: '072-249 27 12',
    email: 'goran@harensten.se',
  },
  developer: {
    name: 'Viktor Abrahamsson',
    email: 'wicke.abrahamsson@gmail.com',
  },
}

export const fishingPermitUrl =
  'https://www.ifiske.se/fiske-haren.htm'

export const campingUrl =
  'https://www.gnosjostrand.se/en'
