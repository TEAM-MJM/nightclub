# Night Club
Links
Github
https://github.com/TEAM-MJM/nightclub 

## Screencasts
Mads: https://youtu.be/10_ER3E8YE4

Jonathan: https://youtu.be/S2mOdkdDfDI?si=XtFQig3YgzfHC5-L

Marius: https://youtu.be/oxGi1lc3W1k 

## Figma
https://www.figma.com/design/uQsaeoV3tF6eQ9C6kIvEuJ/E25_Fro_NightClub?node-id=0-1&t=NoqyyoGZXDBUafvO-1
## Team Canvas
https://www.figma.com/board/fcHE24ejWF5W2GKZjClyXz/Team-Canvas?t=NoqyyoGZXDBUafvO-1

## Introduktion / Koncept
Projektet er en webapplikation udviklet i Next.js, som fungerer som et website til en natklub. Formålet med applikationen er at præsentere nyheder, blog posts, events, billeder, musik og video fra klubben, samt mulighed for at booke bord, skrive til klubben og kommentere på blog posts.
Applikationen indeholder blandt andet billedgalleri med lightroom funktion, audioplayer, videoplayer, blog med undersider, testimonials og bordbooking. Data til websitet hentes fra lokal API, som hostes på localserver:4000 og fetches blandt andet med SWR biblioteket.

## Tech stack og overvejelser
Next.js / react
Komponent baseret app der gør at vi kan arbejde uafhængigt af hinanden, også hvis indholdet ligger på samme side. Genanvendelige byggeklodser som let kan bruges på hele siden. Indbygget routing og optimering af performance og SEO.
Typescript
Optimeret for korrekthed og vedligeholdelse. Forebygger fejl, før de sker.
Tailwind CSS
Fungerer godt i en komponent baseret app som Next.js. Der er ikke behov for separate CSS filer, og stylesne kan ligge sammen med resten af komponentet. Gør også, at vi ikke behøver at tænke på class navne.
Framer Motion
Der var flere elementer på siden der skulle have en eller anden form for animation, så det virkede oplagt at benytte sig af et bibliotek der specifikt er lavet for at gøre det bedre.
HTML5 Audio & Video
Vi har valgt at anvende HTML audio og video player i stedet for eksternt library. Denne løsning resulterer i færre dependencies, da funktionaliteten allerede er indbygget i browseren.
SWR
Vi har anvendt SWR til data fetching, da det gør håndtering af async data meget simplere og mere ensartet. Data kan fetches i komponenter ved brug af et enkelt react hook, mens at endpoints bliver samlet i API-mappen. Derudover understøtter SWR automatisk caching, revalidation og genbrug af data, hvilket reducerer antallet af kald til API og forbedrer performance.
Lokal API (localhost:4000)
API’en som vi har fået tildelt kører vi lokalt. Der medfølger også en dokumentation med til brugen af API’en. Ved hjælp af api’en og fetch kan vi hente og manipulere dataen fra api’en. Dermed kan vi gøre vores sider dynamiske og “poste” nye data såsom reservationer og kommentarer.
Swiper
Tænkte der måtte være en nærmere måde at lave en fleksibel carousel på, og fandt så frem til Swiper, som også bliver brugt af mange andre store firmaer.
ShadCN
ShadCN er et komponent bibliotek som vi har valgt at benytte fordi det er muligt at installere kun de nødvendige komponenter. Dermed fylder det mindre end at skulle fx installere et helt bibliotek og samtidig er ShadCN’s komponenter fuldstændig konfigurerbare. 
Lucide
Det var ikke alle ikoner der var med i den udleverede assets mappe, så vi supplerede med Lucide.
Design overvejelser
Vi valgte at lave et popover element til log ind, selvom det ikke var et krav. Log in formen er ikke funktionel, og dataen bliver ikke sendt nogen steder hen, men vi mente alligevel at der skulle ske noget når man trykkede på log in.

På flere af elementerne i figma designet bliver der brugt en border med trekanter i hjørnerne. Vi fandt frem til, ved hjælp af figma MCP, at man kunne lave dem ved at have en div med højde og bredde sat til 0, og så en border hvor 3 af siderne er sat til at være gennemsigtige. Derefter kunne vi placere dem med position absolute. 

Linjerne under nav elementerne, sektions overskrifterne og side overskrifterne valgte vi at lave med en linear gradient i stedet for at bruge billeder fra assets folderen.
På bordbooking har vi valgt at implementere animation, så der er et respons når man hover og klikker på de forskellige borde der kan vælges.
Git branching strategies
Vi brugte feature branches som vores branching strategi. Ved at lave en ny branch for hver ny feature, refactor eller bug fix, kunne vi arbejde uafhængigt af hinanden og sikre at main branchen forblev stabil. Fordelen her er også at med feature branches (stage, commit og push) workflowet kan GitHub automatisk tjekke om der er noget af koden der ikke er i overensstemmelse før man kan merge ind i main branchen.
Til commit beskeder brugte vi VSCodes indbyggede commit message AI. Det gjorde både processen hurtigere og beskederne mere præcise, end hvis vi selv havde skrevet dem.
Projekt-struktur
Projektet er opbygget som en Next.js-applikation med App Router og TypeScript og følger moderne best practices for struktur og vedligeholdelse. Routing er organiseret via route groups, som muliggør forskellige layouts for forside og undersider uden at påvirke URL-strukturen.
(Frontpage)/ - route group til forside
(Other)/ - route group til undersider
API/ - API routes til backend
Action/ - server actions

Komponenterne er struktureret efter Atomic Design, hvor mindre, genanvendelige UI-komponenter som kan bruges flere steder. Dette sikrer høj genbrugelighed, konsistens og skalerbarhed.

API-logik og endpoints er gemt i en separat API-mappe, som også er med til at gøre projektet lettere at vedligeholde.
Hvem lavede hvad
## Mads:
Audio player
Video player
Gallery
Contact us
API routes
## Jonathan:
Navigation
Hero
Footer
Welcome section
Events of the month
Testimonials
Newsletter
Login popover
Section title
Page overskrift
## Marius:
Blog
Blog post 
Recent blogs
Book table
submitForm function
Button Component

## Extras
Framer Motion (https://motion.dev/)
Et animationsbibliotek til React, der gør det nemt at lave flydende overgange og mikrointeraktioner uden tung konfiguration. Det bruges ofte til at forbedre brugeroplevelsen med bevægelse, som stadig er performancevenlig.

I projektet brugte vi det til animationen på hero når siden loader, og hover animationer på blandt andet welcome sektionen og events of the month.
Swiper (https://swiperjs.com/)
Et populært JavaScript-bibliotek til sliders og carousels, især velegnet til touch og mobil. Det er fleksibelt, let at integrere i React og giver god kontrol over navigation og responsivt layout.

Brugte det til at lave carousels for events of the month og testimonials. Det gjorde processen mere ligetil, og samtidigt også mere brugervenligt.
SWR (https://swr.vercel.app/)
Et React-hook til datahentning, der fokuserer på caching, genvalidering og performance. Det gør det lettere at arbejde med API-data og sikre, at brugergrænsefladen altid viser opdateret information.
ShadCN (https://ui.shadcn.com/)
Et komponent-setup til React og Next.js, hvor du selv ejer koden frem for at importere et færdigt UI-bibliotek. Det giver stor fleksibilitet og gør det nemmere at tilpasse design og struktur til projektets behov. Vi har udelukkende brugt biblioteket til at importere Datepicker-komponenten. Det komponent bliver brugt til formen på bord bestillings siden.
Lucide (https://lucide.dev/)
Et ikonbibliotek med simple, konsistente SVG-ikoner, der er lette at style og integrere i moderne webprojekter.

Brug af AI og lignende
Vi brugte GitHub Copilot igennem projektet, som foreslår kode og komplette funktioner baseret på din kontekst, hvilket kan spare tid og hjælpe med at skrive mere konsistent kode. Den kan også være en god hjælp hvis man godt ved hvad det er man vil skrive, men måske har glemt den præcise syntax. 

Copilot har også hjulpet til med at implementere og forstå brugen af SWR data fetching og den error handling vi har brugt på vores API routes. Her har vi promptet AI om “hvad er best practice til error handling” hvilket resulterede i try-catch blokke med statuskoder og fejlbeskeder.

Brugte Copilot til et problem ved brug af samme submitForm function til både BookingForm og CommentForm componentet. Her var det ikke lige til at få submitForm til at kende forskel på hvornår SubmitForm var til Booking eller Comment. Jeg forsøgte mig med logical operatoren not til input felterne. De kunne stadig returns true bare undefined eftersom jeg havde deklareret const før. Eftersom jeg ikke selv kunne finde løsningen brugte jeg Copilot og promptede den til først “Without showing me the solution just answer wether it would be possible for action to check if its being run in bookingform or commentform” hvor efter jeg prøvede mig mere frem indtil jeg måtte spørge igen med “How come my const always returns true” så kom den frem til jeg i stedet skulle tjekke at de ikke var lige med “null” ved brug af strict not equal operatoren.
Brugte Figmas MCP server funktionalitet til implementering af footer og navigation design, med prompten: “Implement this design from Figma. (link til figma komponent)”. Den prøver så godt som muligt at matche designet 1:1, men det kommer med nogle problemer i forhold til responsivitet og generelle best practices. Blev derfor nødt til at omskrive meget af koden alligevel for at gøre det brugbart.
Brugte AI for ukendte fejl. En prompt kunne f.eks være: "Why am I getting the error "Cannot read properties of undefined (reading 'get')"?” Eller hvorfor billeder fra api’en ikke blev vist.

## Mangler i den endelige løsning
Der mangler ikke noget i den endelige løsning af hjemmesiden. Der er altid mulighed for forbedring, men alle sektioner og elementer er til stede på siden.
Fokuspunkter frem til den mundtlige eksamen
Lighthouse test
Se hvordan performance klarer sig, og hvad der kan forbedres/ændres for at gøre det endnu bedre.

## Tænke højt test
Høre hvordan andre synes det føles at bruge siden på det rent praktiske niveau. Da vi ikke selv har designet siden, vil vi ikke fokusere på UI, kun fokusere på om alt virker som det skal, og om brugeren mener at de får brugbar information hvis der f.eks. skulle ske en fejl ved udfyldning af en form eller andet.

## Likert test
I forlængelse af ”tænke højt test" kunne vi få brugeren til at sætte nogle tal på hvad de synes om siden, og på den måde se hvad de synes har mest brug for at blive forbedret/opdateret.


## Funktionalitet



  
