import { GrammaticalStructure, Owner, WordWithScores } from "./interfaces";

export const testOwners: Owner[] = [
	{
		name: "Ati",
		sex: "male",
		id: 1,
	},
	{
		name: "Petra",
		sex: "female",
		id: 2,
	},
];

export const testWords: WordWithScores[] = [
	{
		id: 1,
		favourite: true,
		deletionDate: null,
		type: "word",
		english: "ditch",
		hungarian: ["árok", "csatorna", "körülárkol"],
		sentences: ["Why do you have a ditch in front of your house?"],
		notes: "A narrow channel dug in the ground, typically used for drainage alongside a road or the edge of a field.",
		ownerId: 1,
		actualScore: 20,
		scoreToAchieve: 40,
		memoryLevel: 50,
		statistics: {
			english: 8,
			hungarian: [8, 1, 3],
		},
	},
	{
		id: 2,
		favourite: false,
		deletionDate: null,
		type: "word",
		english: "candid",
		hungarian: ["őszinte", "nyílt", "pártatlan"],
		sentences: ["His responses were remarkably candid.", "Candid is my new favourite word."],
		notes: null,
		ownerId: 2,
		actualScore: 0,
		scoreToAchieve: 40,
		memoryLevel: 0,
		statistics: {
			english: 0,
			hungarian: [0, 0, 0],
		},
	},
	{
		id: 3,
		favourite: true,
		deletionDate: null,
		type: "word",
		english: "correct",
		hungarian: ["helyes", "korrekt", "helytálló", "kijavít", "helyesbít", "korrigál", "javít"],
		sentences: ["Make sure you have been given the correct information"],
		notes: "Free from error.",
		ownerId: 1,
		actualScore: 72,
		scoreToAchieve: 80,
		memoryLevel: 90,
		statistics: {
			english: 10,
			hungarian: [12, 8, 6, 9, 5, 10, 12],
		},
	},
	{
		id: 4,
		favourite: true,
		deletionDate: null,
		type: "word",
		english: "achieve",
		hungarian: ["elér", "megvalósít"],
		sentences: ["He achieved his ambition to become a journalist"],
		notes: null,
		ownerId: 2,
		actualScore: 8,
		scoreToAchieve: 30,
		memoryLevel: 26.66,
		statistics: {
			english: 2,
			hungarian: [5, 1],
		},
	},
];

export const testGrammar: GrammaticalStructure[] = [
	{
		id: 1,
		title: "Simple present",
		subTitle: "Egyszerű jelen",
		forming: "Egyes szám harmadik személyben az ige -s ragot kap. Segédige: do, does.",
		notes: null,
		basicSentences: ["I work.", "I don't work", "Do you work?", "Where do you work?", "Wo works here?", "Wo doesn't work here?"],
		realLifeUsages: [
			{
				description:
					"Ismétlődő cselekvéseknél. Határozószók: always, usually, never, often, sometimes, rarely, seldom, every day, every week, twice a month stb.",
				example: "I often go abroad in summer.",
			},
			{
				description: "Ha valamiről általánosságban beszélünk.",
				example: "Waiters work in restaurants",
			},
			{
				description: "Ha örök igazságról beszélünk.",
				example: "The Earth goes round the Sun.",
			},
			{
				description: "Ha valamilyen cselekvést közvetítünk pl TV-n, rádión.",
				example: "...and Éles Józsi throws the ball into the goal!",
			},
			{
				description: "Ha valamilyen menetrendszerű dologról beszélünk.",
				example: "The train leaves at 8 o'clock.",
			},
			{
				description: "Here and there után, azonban a szórend megváltozik.",
				example: "Here comes Jack. DE személyes névmással egyenes szórend: Here he comes.",
			},
		],
	},
	{
		id: 2,
		title: "Present continuous",
		subTitle: "Folyamatos jelen",
		forming: "to be + ige + -ing",
		notes: `Leggyakrabban használt, változást kifejező igék: decline - csökken, hanyatlik; fall - esik, csökken; rise - nő, emelkedik; decrease - csökken;
		increase - nő, improve - javul, fejlődik (fejleszt); get better - javul, egyre jobb; get worse - romlik, egyre rosszab; get late/dark - későre jár, sötétedik; 
		get + melléknév - válik valamilyenné; grow - nő (termeszt); grow + melléknév - válik valamilyenné (grow cold, grow old)`,
		basicSentences: ["I am working.", "I'm not working", "Are you working?", "Where are you working?", "Wo is working here?"],
		realLifeUsages: [
			{
				description:
					"Ha a cselekvés a kijelentés időpontjában folyamatosan zajlik. Gyakori határozószók: now, at present, at the moment, just now.",
				example: "We are studying English now.",
			},
			{
				description:
					"Ha a cselekvés a kijelentés ideje körül zajlik. Ezt a cselekvést még korábban elkezdtük, de nem fejeztük be. A cselekvés egy ideig kitölti az életünket, és az is lehet, hogy a jelen pillanatban éppen nem zajlik.",
				example: "What are you doing Steven? I am working on a new documentary.",
			},
			{
				description: "Változó helyzet kifejezésére. (A leggyakrabban használt igék a megjegyzésben)",
				example: "The rate of unemployement is falling.",
			},
			{
				description: "Átmeneti helyzet kifejezésére.",
				example: "I am studying hard this week because I want to pass the exam.",
			},
			{
				description: "A megszokottól eltérő cselekvés kifejezésére.",
				example: "I usually do exercises in the evenings but today I am playing cards with my friends.",
			},
			{
				description: "Előre eltervezett, jövőbeli cselekvés kifejezésére.",
				example: "Tomorrow I'm having lunch with my boss.",
			},
			{
				description:
					"A beszélő szempontjából túlságosan negatív vagy nagyon pozitív rendszeresen bekövetkező cselekvések kifejezésére. Kötelező határozószók: always, forever vagy constantly.",
				example: "1. He is always asking stupid things. 2. My husband is fantastic, he is always making dinner.",
			},
		],
	},
	{
		id: 3,
		title: "Simple present versus Present continuous",
		subTitle: "Igék, amelyeknek különböző igeidőkben más jelentése van",
		forming: "",
		notes: "",
		basicSentences: [],
		realLifeUsages: [
			{
				description: "THINK Simp. Pres. = vélni, gondolni valamit. Pres. Cont. = gondolkodni valamiről, gondolni valamire.",
				example: "I think you are right. I'm thinking of you.",
			},
			{
				description:
					"SEE 'Can' segédigével = látni. (érzékelést kifejező igéket a 'can' segédigével használjuk jelen időben). Pres. Cont. = találkozni valakivel.",
				example: "I can see a man the the picture. I'm seeing my manager on Monday.",
			},
			{
				description:
					"SMELL 'Can' segédigével = ld. SEE igénél. Simp. Pres. = valaminek valamilyen szaga van. Pres. Cont. = szagol, szimatol.",
				example: "I can smell that something is burning. It smells bad. Your dog is smelling the flowers.",
			},
			{
				description: "TASTE Simp. Pres. = valaminek valamilyen íze van. Pres. Cont. = kóstol.",
				example: "The soup tastes bad. I'm just tasting your cake.",
			},
			{
				description: "HAVE Simp. Pres. = birtokol. Pres. Cont. = valamilyen cselekvés kifejezésére használjuk, pl. have dinner.",
				example: "I have a car. He's having a shower.",
			},
			{
				description: "BE Simp. Pres. = lenni. Pres. Cont. = viselkedik.",
				example: "I'm very happy. He is being rude to me.",
			},
			{
				description: "FEEL és LOOK mindkét igeidőben használható jelentéstől függetlenül.",
				example: "I'm feeling well now. I feel well now.'",
			},
		],
	},
	{
		id: 3,
		title: "Simple past",
		subTitle: "Egyszerű múlt",
		forming: "ige + -ed, kivéve a rendhagyó igéket. Segédige: did.",
		notes: "",
		basicSentences: ["He worked.", "He did not work.", "Did he work? When did he work?", "Who worked here?", "Who didn't work here?"],
		realLifeUsages: [
			{
				description: "Rendszeres múltbeli cselekvés kifejezésére.",
				example: "Last year I always drove to work.",
			},
			{
				description: "Olyan cselekvések kifejezésére, amelyek a múltban már lezajlottak és többet már nem következhetnek be.",
				example: "I learnt a lot of things at school.",
			},
			{
				description: "Mese, történet elmondásakor.",
				example: "Then the prince kissed Sleeping Beauty.",
			},
			{
				description:
					"Múltbeli határozószókkal: ...ago (5 weeks ago), yesterday, last night, last week, in May, on Monday, in 1998, at 5 o'clock etc.",
				example: "He was born in 1984. I met him 3 years ago.",
			},
			{
				description: "A következő kérdőszavakkal, ha a cselekvés körülményeire akarunk rákérdezni: why? how? when? who? how long ago?...",
				example: "Why did you go there? When were you in Italy?",
			},
		],
	},
];
