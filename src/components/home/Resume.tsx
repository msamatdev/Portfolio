"use client";

import { Timeline } from "@/components/Timeline";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Ingénieur administrateur système HPC (Apprentissage)",
    subtitle: "Bull",
    startDate: "Sep 2026",
    endDate: "Aug 2029",
    description:
      "Maintenance et administration de clusters de calcul haute performance (HPC) sous GNU/Linux..",
    points: [
      "Apprentissage des couches logicielles et d'administration HPC : Slurm, Lustre, InfiniBand, OpenMPI, Monitoring, ...",
      "Maîtrise de l'administration de systèmes GNU/Linux",
      "Développement de procédures d'automatisations via des scripts (Python)",
      "Rédaction de documentations techniques et de procédures d'exploitation",
      "Support de niveau 1 et 2 sur la stack logicielle fournie par le client",
    ]
  },
  {
    title: "Développeur full-stack (Apprentissage)",
    subtitle: "ADCOSOFT",
    startDate: "Oct 2024",
    endDate: "Sep 2026",
    description:
      "Développement de solutions majoritairement orientées web, avec une composante en comptabilité.",
    points: [
      "Développement d'API HTTP en Python (FastAPI)",
      "Création d'interfaces web en TypeScript (Next.js 15)",
      "Conception de systèmes d'authentification",
            "Maintenance et configuration du parc informatique de l'entreprise",
      "Création de scripts de synchronisation et de traitement manipulant des données comptables sensibles",
      "Mise en place d'un pipeline de traitement des mails et messages whatsapp d'une entreprise en temps réel. \
      Analyse et reclassement automatique par un grand modèle de langage hébergé localement (Hermes agent, Python, ollama)"
    ]
  }
]

const education = [
  {
    title: "Diplôme d'ingénieur spécialité Informatique",
    subtitle: "Ecole nationale supérieure d'informatique pour l'industrie et l'entreprise",
    startDate: "Sep 2026",
    endDate: "Aug 2029",
    description:
      "Diplôme d'ingénieur développé autour de 4 axes : informatique, mathématiques de la décision, connaissance des entreprises, et formation humaine. J'envisage de choisir la spécialité \"Programmation GPU\" qui comprend :",
    points: [
      "Programmation (parallélisme, optimisation, gestion des erreurs, API, ...)",
      "Architecture GPU et écosystème CUDA",
      "Portage de code C ou C++ vers GPU",
    ]
  },
  {
    title: "Bachelor Universitaire de Technologie Informatique",
    subtitle: "IUT de Villetaneuse",
    startDate: "Sep 2023",
    endDate: "Sep 2026",
    description:
      "Formation en informatique axée sur la pratique au travers de projets concrets. De nombreux domaines sont enseignés :",
    points: [
      "Optimisation algorithmique",
      "Développement web et mobile",
      "Administration système et réseau",
      "Communication, travail en équipe et gestion de projet",
    ]
  },
  {
    title: "Baccalauréat général",
    subtitle: "Lycée Jean Zay",
    startDate: "Sep 2020",
    endDate: "Jun 2023",
    description:
      "Diplôme obtenu avec mention bien.",
    points: [
      "Spécialités : Mathématiques, Physique-Chimie, LLCR (en première)",
      "Options : Mathématiques expertes, Anglais section européenne",
    ]
  }
];

export default function Resume() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-16 px-2">
      <Timeline
        title="Education"
        icon={GraduationCap}
        items={education}
      />
      <Timeline
        title="Work experience"
        icon={Briefcase}
        items={experience}
      />
    </div>
  )
}