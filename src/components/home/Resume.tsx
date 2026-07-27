"use client";

import { Timeline } from "@/components/Timeline";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Ingénieur linux HPC (Apprentissage)",
    subtitle: "Bull",
    startDate: "Sep 2026",
    endDate: "Aug 2029",
    description:
      "Maintenance et configuration de clusters de calcul haute performance pour des clients dans le domaine de la recherche scientifique et de l'industrie.",
    points: [
      "Connaissance des couches logicielles et d'administration HPC : Slurm, Lustre, InfiniBand, OpenMPI, Monitoring",
      "Connaissance de l'administration de systèmes GNU/Linux",
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
      "Développement d'APIs HTTP en Python (FastAPI)",
      "Création d'interfaces web en TypeScript (Next.js 15)",
      "Conception de systèmes d'authentification",
      "Création de scripts de synchronisation et de traitement des données comptables sensibles",
      "Mise en place d'un pipeline de traitement des messages d'une entreprise en temps réel. \
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
      "Diplôme d'ingénieur développé autour de 4 axes : informatique, mathématiques de la décision, connaissance des entreprises, et formation humaine. Spécialité souhaitée : programmation GPU.",
  },
  {
    title: "Bachelor Universitaire de Technologie Informatique",
    subtitle: "IUT de Villetaneuse",
    startDate: "Sep 2023",
    endDate: "Sep 2026",
    description:
      "Formation en informatique avec une approche pratique et une forte composante professionnalisante.",
    points: [
      "Programmation orientée objet",
      "Développement web et mobile",
      "Bases de données",
      "Réseaux et virtualisation",
      "Economie et droit de l'informatique",
      "Communication, travail en équipe et gestion de projet"
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
      "Spécialités : Mathématiques, Physique-Chimie, ainsi que Langues, Littérature et Culture Étrangère (uniquement en première)",
      "Options : Mathématiques expertes, Anglais section européenne",
    ]
  }
];

export default function Resume() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mt-12 px-2">
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