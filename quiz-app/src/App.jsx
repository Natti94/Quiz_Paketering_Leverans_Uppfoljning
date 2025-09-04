import { useState, useEffect } from "react";

const questions = [
  {
    question: "Vad är ett versionshanteringssystem (VCS)?",
    options: [
      "Ett system för att hantera och spåra ändringar i kod över tid",
      "Ett system för att hantera databaser",
      "Ett system för att hantera användare",
      "Ett system för att hantera nätverk",
    ],
    correct: 0,
    explanation:
      "Versionshanteringssystem registrerar ändringar i filer över tid och möjliggör samarbete och återställning av tidigare versioner.",
  },
  {
    question: "Vad är syftet med en README.md-fil?",
    options: [
      "Att dokumentera projektet och ge instruktioner",
      "Att lagra kodhistorik",
      "Att hantera beroenden",
      "Att köra tester",
    ],
    correct: 0,
    explanation:
      "README.md är projektets huvuddokumentation och ger information om installation, användning och bidrag.",
  },
  {
    question: "Vad är en merge conflict i Git?",
    options: [
      "När två grenar har ändrat samma del av en fil",
      "När en fil tas bort",
      "När en commit misslyckas",
      "När en branch skapas",
    ],
    correct: 0,
    explanation:
      "En merge conflict uppstår när två grenar har ändrat samma del av en fil och Git inte kan avgöra vilken ändring som ska användas.",
  },
  {
    question: "Vad är Vite?",
    options: [
      "Ett modernt frontend-byggverktyg",
      "Ett testverktyg",
      "Ett backend-ramverk",
      "Ett databasverktyg",
    ],
    correct: 0,
    explanation:
      "Vite är ett snabbt byggverktyg för moderna frontend-projekt med snabb serverstart och HMR.",
  },
  {
    question: "Vad är syftet med linting?",
    options: [
      "Att analysera kod för fel och stilproblem",
      "Att kompilera kod",
      "Att köra tester",
      "Att skapa dokumentation",
    ],
    correct: 0,
    explanation:
      "Linting hjälper till att upprätthålla kodkvalitet och konsekvens genom att upptäcka fel och stilproblem.",
  },
  {
    question: "Vad är en dev environment?",
    options: [
      "En miljö för utveckling och testning av kod",
      "En produktionsmiljö",
      "En miljö för slutanvändare",
      "En miljö för databasbackup",
    ],
    correct: 0,
    explanation:
      "Dev environment är där utvecklare skriver och testar kod, isolerat från produktion.",
  },
  {
    question: "Vad är en deployment pipeline?",
    options: [
      "En serie automatiserade steg från utveckling till produktion",
      "En lista över buggar",
      "En typ av databas",
      "En typ av server",
    ],
    correct: 0,
    explanation:
      "Deployment pipeline automatiserar bygg, test och driftsättning av kod till produktion.",
  },
  {
    question: "Vad är Docker?",
    options: [
      "En plattform för att köra applikationer i containrar",
      "Ett testverktyg",
      "Ett frontend-ramverk",
      "Ett versionshanteringssystem",
    ],
    correct: 0,
    explanation:
      "Docker paketerar applikationer och beroenden i portabla containrar för konsekvent körning i olika miljöer.",
  },
  {
    question: "Vad är en microservice?",
    options: [
      "En liten, oberoende tjänst som ingår i en applikation",
      "En stor monolitisk applikation",
      "En typ av databas",
      "En typ av frontend-komponent",
    ],
    correct: 0,
    explanation:
      "Microservices är små, oberoende tjänster som kommunicerar över nätverk och kan driftsättas separat.",
  },
  {
    question: "Vad är DRY-principen?",
    options: [
      "Don't Repeat Yourself – undvik upprepning av kod",
      "Do Repeat Yourself – upprepa kod ofta",
      "Don't Refactor Yourself – undvik refaktorering",
      "Do Refactor Yourself – refaktorera ofta",
    ],
    correct: 0,
    explanation:
      "DRY syftar till att minska upprepning av kod och logik för bättre underhållbarhet.",
  },
  {
    question: "Vad är skillnaden mellan en interpreter och en compiler?",
    options: [
      "Interpreter exekverar kod direkt, compiler översätter till maskinkod",
      "Compiler exekverar kod direkt, interpreter översätter till maskinkod",
      "Båda gör samma sak",
      "Ingen skillnad",
    ],
    correct: 0,
    explanation:
      "Interpreter kör koden rad-för-rad, compiler översätter hela koden till maskinkod innan körning.",
  },
  {
    question: "Vad är syftet med unit testing?",
    options: [
      "Att testa individuella enheter eller komponenter isolerat",
      "Att testa hela systemet",
      "Att testa användargränssnittet",
      "Att testa integrationen mellan system",
    ],
    correct: 0,
    explanation:
      "Unit testing verifierar att varje enhet fungerar korrekt på egen hand.",
  },
  {
    question: "Vad är en dummy i testning?",
    options: [
      "Ett platshållarobjekt som aldrig används i testet",
      "En riktig implementation",
      "En test som körs i produktion",
      "En test som är beroende av externa system",
    ],
    correct: 0,
    explanation:
      "Dummy används för att uppfylla funktionssignaturen utan att påverka testets utfall.",
  },
  {
    question: "Vad är syftet med end user testing (UAT)?",
    options: [
      "Att faktiska användare testar systemet för att säkerställa att det uppfyller deras krav",
      "Att utvecklare testar systemet",
      "Att systemet testas automatiskt",
      "Att systemet testas i produktion",
    ],
    correct: 0,
    explanation:
      "UAT fokuserar på att validera att programvaran fungerar som förväntat ur användarens perspektiv.",
  },
  {
    question: "Vad innebär test-driven deployment (TDD)?",
    options: [
      "Att skriva tester innan kod implementeras",
      "Att skriva kod och sedan tester",
      "Att skriva tester efter att programmet är klart",
      "Att automatisera deployment",
    ],
    correct: 0,
    explanation:
      "TDD innebär att skriva tester först, sedan kod för att få testerna att passera.",
  },
  {
    question: "Vad används screen.getByText() och fireEvent.click() till?",
    options: [
      "Att hämta element och simulera klick i tester",
      "Att mocka API-anrop",
      "Att kontrollera CSS-styling",
      "Att köra tester parallellt",
    ],
    correct: 0,
    explanation:
      "screen.getByText() används för att hitta element baserat på textinnehåll, och fireEvent.click() simulerar ett klick på ett element i tester.",
  },
  {
    question: "Vad är skillnaden mellan komponenttest och integrationstest?",
    options: [
      "Komponenttest testar flera komponenter, integrationstest testar en",
      "Komponenttest testar en komponent isolerat, integrationstest testar flera tillsammans",
      "Komponenttest är manuella, integrationstest är automatiserade",
      "Det finns ingen skillnad",
    ],
    correct: 1,
    explanation:
      "Komponenttest fokuserar på en enskild React-komponent isolerat, medan integrationstest testar hur flera komponenter fungerar tillsammans.",
  },
  {
    question: "Vad gör MSW (Mock Service Worker)?",
    options: [
      "Renderar komponenter för tester",
      "Mockar HTTP-anrop genom att fånga upp och simulera svar",
      "Kör tester parallellt",
      "Kontrollerar kodkvalitet",
    ],
    correct: 1,
    explanation:
      "MSW (Mock Service Worker) används för att fånga upp och mocka HTTP-anrop i tester, vilket simulerar API-svar utan att kontakta en riktig server.",
  },
  {
    question: "Vilka är fördelarna med mockning i tester?",
    options: [
      "Ökar beroendet av externa system",
      "Gör tester snabbare och mer kontrollerade",
      "Gör testerna långsammare men mer realistiska",
      "Eliminerar behovet av tester",
    ],
    correct: 1,
    explanation:
      "Mockning gör tester snabbare, mer förutsägbara och oberoende av externa system genom att simulera deras beteende.",
  },
  {
    question: "Vad är fetch och vad testar man när man använder fetch i test?",
    options: [
      "En metod för att rendera komponenter, testar UI",
      "En metod för HTTP-anrop, testar API-interaktioner",
      "En metod för att mocka data, testar databasen",
      "En metod för att köra tester, testar testsviten",
    ],
    correct: 1,
    explanation:
      "fetch är en JavaScript-metod för att göra HTTP-anrop. I tester kontrollerar man att API-anrop görs korrekt och hanterar svar eller fel.",
  },
  {
    question: "Varför används async/await i tester av API:er?",
    options: [
      "För att göra testerna snabbare",
      "För att hantera asynkrona anrop och vänta på svar",
      "För att mocka API-svar",
      "För att köra tester parallellt",
    ],
    correct: 1,
    explanation:
      "async/await används för att hantera asynkrona API-anrop i tester, så att testet väntar på svaret innan det fortsätter.",
  },
  {
    question: "Vad var problemet med vattenfallsmetoden?",
    options: [
      "Den var för snabb och saknade planering",
      "Den var för långsam och inflexibel för förändringar",
      "Den saknade tester helt",
      "Den fokuserade för mycket på teamarbete",
    ],
    correct: 1,
    explanation:
      "Vattenfallsmetoden är sekventiell och gör det svårt att anpassa sig till förändringar, vilket ofta leder till försenade eller felaktiga leveranser.",
  },
  {
    question: "Vad betyder WIP-limit i Kanban?",
    options: [
      "Begränsning av antalet uppgifter som kan påbörjas samtidigt",
      "Begränsning av sprintlängden",
      "Begränsning av antalet teammedlemmar",
      "Begränsning av antalet user stories",
    ],
    correct: 0,
    explanation:
      "WIP-limit (Work In Progress) begränsar antalet uppgifter som teamet arbetar på samtidigt för att förbättra fokus och flöde.",
  },
  {
    question: "Vad kännetecknar Scrum?",
    options: [
      "Kontinuerligt flöde utan iterationer",
      "Tidsbegränsade iterationer och regelbundna leveranser",
      "Fokus på enstaka stora leveranser",
      "Ingen teamstruktur",
    ],
    correct: 1,
    explanation:
      "Scrum kännetecknas av korta iterationer (sprintar), regelbundna leveranser och ett strukturerat team med tydliga roller.",
  },
  {
    question: "Vilka roller finns i ett Scrumteam?",
    options: [
      "Projektledare, Testare, Designer",
      "Produktägare, Scrum Master, Utvecklingsteam",
      "Stakeholder, Produktägare, Testare",
      "Scrum Master, Utvecklare, Kund",
    ],
    correct: 1,
    explanation:
      "Ett Scrumteam består av Produktägare (prioriterar backloggen), Scrum Master (stöttar processen) och Utvecklingsteam (bygger produkten).",
  },
  {
    question: "Vad gör utvecklingsteamet i Scrum?",
    options: [
      "Prioriterar backloggen",
      "Bygger och levererar produkten",
      "Faciliterar möten",
      "Skapar roadmaps",
    ],
    correct: 1,
    explanation:
      "Utvecklingsteamet ansvarar för att bygga och leverera produkten enligt backloggen under sprintarna.",
  },
  {
    question: "Vad är sprintplanering?",
    options: [
      "En ceremoni för att reflektera över teamets prestation",
      "En ceremoni för att planera vad som ska göras i en sprint",
      "En ceremoni för att visa produkten för kunder",
      "En ceremoni för att mocka API:er",
    ],
    correct: 1,
    explanation:
      "Sprintplanering är en Scrum-ceremoni där teamet bestämmer vilka uppgifter från backloggen som ska göras i den kommande sprinten.",
  },
  {
    question: "Vad är en sprint review?",
    options: [
      "En ceremoni för att planera nästa sprint",
      "En ceremoni för att visa vad som byggts och få feedback",
      "En ceremoni för att förbättra teamets processer",
      "En ceremoni för att mocka tester",
    ],
    correct: 1,
    explanation:
      "Sprint review är en ceremoni där teamet visar vad som byggts under sprinten och får feedback från intressenter.",
  },
  {
    question: "Vad är en roadmap i agila projekt?",
    options: [
      "En detaljerad plan för hela projektet",
      "En hög nivå-plan för framtida mål och leveranser",
      "En lista över dagliga uppgifter",
      "En teknisk specifikation",
    ],
    correct: 1,
    explanation:
      "En roadmap ger en översikt över projektets långsiktiga mål och förväntade leveranser, men är flexibel för förändringar.",
  },
  {
    question: "Hur skriver man en user story?",
    options: [
      "Som [användare], vill jag [göra något], så att [nytta uppnås]",
      "Som [utvecklare], vill jag [koda något], så att [teknik fungerar]",
      "Som [chef], vill jag [få rapport], så att [jag är nöjd]",
      "Som [testare], vill jag [hitta buggar], så att [koden är perfekt]",
    ],
    correct: 0,
    explanation:
      "En user story skrivs i formatet 'Som [användare], vill jag [göra något], så att [nytta uppnås]' för att fokusera på användarens behov.",
  },
  {
    question: "Varför är working agreements viktiga?",
    options: [
      "De bestämmer vilka verktyg teamet ska använda",
      "De definierar hur teamet samarbetar och kommunicerar",
      "De prioriterar backloggen",
      "De ersätter sprintplanering",
    ],
    correct: 1,
    explanation:
      "Working agreements är gemensamma regler för hur teamet arbetar tillsammans, vilket förbättrar samarbete och effektivitet.",
  },
  {
    question: "Vad innebär servant leadership?",
    options: [
      "Att leda genom att ge order",
      "Att leda genom att stötta och möjliggöra för teamet",
      "Att leda genom att prioritera backloggen",
      "Att leda genom att skriva kod",
    ],
    correct: 1,
    explanation:
      "Servant leadership innebär att en ledare (t.ex. Scrum Master) fokuserar på att stötta teamet och ta bort hinder för att möjliggöra framgång.",
  },
  {
    question: "Vad betyder tvärfunktionellt team?",
    options: [
      "Ett team med medlemmar från samma avdelning",
      "Ett team med olika kompetenser för att leverera en produkt",
      "Ett team som bara arbetar med tester",
      "Ett team som bara arbetar med planering",
    ],
    correct: 1,
    explanation:
      "Ett tvärfunktionellt team har medlemmar med olika kompetenser (t.ex. utvecklare, testare, designers) för att leverera en produkt självständigt.",
  },
  {
    question: "Vad är psykologisk trygghet i ett team?",
    options: [
      "Att alla alltid är överens",
      "Att teamet känner sig tryggt att ta risker och dela idéer",
      "Att teamet har hög teknisk kompetens",
      "Att teamet levererar snabbt",
    ],
    correct: 1,
    explanation:
      "Psykologisk trygghet innebär att teammedlemmar känner sig trygga att uttrycka idéer, ställa frågor eller erkänna misstag utan rädsla för kritik.",
  },
  {
    question: "Ge två exempel på hur man bygger psykologisk trygghet.",
    options: [
      "Ge beröm offentligt och uppmuntra öppna diskussioner",
      "Ge strikta regler och deadlines",
      "Fokusera på individuella prestationer och tävling",
      "Undvika feedback och konflikter",
    ],
    correct: 0,
    explanation:
      "Att ge beröm offentligt och uppmuntra öppna diskussioner skapar en miljö där teammedlemmar känner sig trygga att dela idéer och ta risker.",
  },
  {
    question: "Vad är Project Aristotle och vad visade den studien?",
    options: [
      "En studie om kodkvalitet, visade att tester är viktigast",
      "En studie om team, visade att psykologisk trygghet är nyckeln till framgång",
      "En studie om agila metoder, visade att Scrum är bäst",
      "En studie om ledarskap, visade att auktoritärt ledarskap fungerar",
    ],
    correct: 1,
    explanation:
      "Project Aristotle var en Google-studie som visade att psykologisk trygghet är den viktigaste faktorn för effektiva team.",
  },
  {
    question: "Vad innebär pålitlighet i teamarbete?",
    options: [
      "Att teamet alltid levererar i tid",
      "Att teammedlemmar håller sina löften och levererar kvalitet",
      "Att teamet undviker konflikter",
      "Att teamet har många möten",
    ],
    correct: 1,
    explanation:
      "Pålitlighet betyder att teammedlemmar håller vad de lovar, levererar arbete av hög kvalitet och är ansvariga för sina uppgifter.",
  },
  {
    question: "Hur kan retrospektiv bidra till tryggare team?",
    options: [
      "Genom att prioritera uppgifter",
      "Genom att skapa en säker plats för reflektion och feedback",
      "Genom att fokusera på tekniska lösningar",
      "Genom att undvika diskussioner",
    ],
    correct: 1,
    explanation:
      "Retrospektiv ger teamet en säker miljö att diskutera vad som gick bra och vad som kan förbättras, vilket bygger psykologisk trygghet.",
  },
  {
    question: "Vad är Continuous Deployment (CD)?",
    options: [
      "Att automatiskt distribuera kod till produktion efter tester",
      "Att köra tester manuellt innan lansering",
      "Att planera sprintar i förväg",
      "Att mocka API:er i tester",
    ],
    correct: 0,
    explanation:
      "Continuous Deployment (CD) innebär att kod automatiskt distribueras till produktion efter att ha passerat alla tester, vilket möjliggör snabba leveranser.",
  },
  {
    question: "Vad innebär parprogrammering och mobbprogrammering?",
    options: [
      "Att en person kodar och en testar",
      "Att två eller fler kodar tillsammans för att förbättra kvalitet",
      "Att teamet planerar sprintar tillsammans",
      "Att en person kodar och andra dokumenterar",
    ],
    correct: 1,
    explanation:
      "Parprogrammering innebär att två personer kodar tillsammans, medan mobbprogrammering involverar hela teamet för att samarbeta och förbättra kodkvaliteten.",
  },
];
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);

  const question = shuffledQuestions[index];

  function handleAnswer(i) {
    setSelected(i);
    if (i === question.correct) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    setSelected(null);
    setIndex(index + 1);
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: "200vh",
          paddingLeft: "20px",
        }}
      >
        {index < shuffledQuestions.length ? (
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              gap: "20px",
              backgroundColor: "#fdfdfd",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              color: "blue",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2 style={{ marginBottom: "16px" }}>
                Fråga {index + 1} av {shuffledQuestions.length}
              </h2>
              <p
                style={{
                  fontWeight: "bold",
                  color: "blue",
                }}
              >
                {question?.question}
              </p>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {question?.options.map((opt, i) => {
                  const isCorrect = selected !== null && i === question.correct;
                  const isSelected = selected === i;
                  const baseStyle = {
                    padding: "10px 16px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    backgroundColor:
                      selected === null
                        ? "#f1f1f1"
                        : isCorrect
                        ? "#d4edda"
                        : isSelected
                        ? "#f8d7da"
                        : "#f1f1f1",
                    color: isCorrect ? "green" : "#333",
                    transition: "all 0.2s",
                    cursor: "default",
                  };

                  const hoverStyle =
                    selected === null
                      ? {
                          onMouseEnter: (e) =>
                            (e.currentTarget.style.backgroundColor = "#e2e2e2"),
                          onMouseLeave: (e) =>
                            (e.currentTarget.style.backgroundColor = "#f1f1f1"),
                        }
                      : {};

                  return (
                    <li
                      key={i}
                      style={baseStyle}
                      onClick={() => selected === null && handleAnswer(i)}
                      {...hoverStyle}
                    >
                      {opt}
                    </li>
                  );
                })}
              </ul>
              {selected !== null && (
                <button
                  onClick={nextQuestion}
                  style={{
                    marginTop: "12px",
                    padding: "8px 16px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                  }}
                >
                  Nästa fråga
                </button>
              )}
            </div>

            {selected !== null && (
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#f0f8ff",
                  padding: "20px",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  lineHeight: "1.6",
                  color: "#333",
                }}
              >
                <strong>Förklaring:</strong>
                <p style={{ marginTop: "10px", fontStyle: "italic" }}>
                  {question.explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#fefefe",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Quiz klart!</h2>
            <p>
              Du fick {score} av {shuffledQuestions.length} rätt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
