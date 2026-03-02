export type Locale = "en" | "fr";

type FAQ = { q: string; a: string };
type Feature = { title: string; description: string };

export type Translations = {
  nav: { about: string; events: string; videos: string; members: string; contact: string; faq: string; pastEvents: string; upcomingEvents: string };
  hero: { badge: string; title: string; titleHighlight: string; description: string; applyNow: string; learnMore: string; activeBadge: string };
  about: { title: string; titleHighlight: string; subtitle: string; features: Feature[] };
  partners: { title: string };
  videos: { title: string; titleHighlight: string; subtitle: string; seeMore: string };
  contact: { title: string; titleHighlight: string; subtitle: string; name: string; email: string; subject: string; message: string; send: string; sent: string; sentDescription: string };
  faq: { title: string; titleHighlight: string; items: FAQ[] };
  cta: { title: string; subtitle: string; applyNow: string };
  footer: { rights: string };
  events: { past: string; upcoming: string; noUpcoming: string };
  members: { title: string; titleHighlight: string; subtitle: string; all: string; placeholder: string };
};

export const translations = {
  en: {
    nav: {
      about: "About",
      events: "Events",
      videos: "Videos",
      members: "Members",
      contact: "Contact",
      faq: "FAQ",
      pastEvents: "Past events",
      upcomingEvents: "Upcoming events",
    },
    hero: {
      badge: "Microsoft Student Ambassadors — Togo",
      title: "Elevate skills, empower Togo's future through",
      titleHighlight: "tech leadership.",
      description:
        "Join our global community of students passionate about building AI-powered solutions with Microsoft technology. Accelerate innovation and develop the skills you need.",
      applyNow: "Apply now",
      learnMore: "Learn more",
      activeBadge: "+20 active ambassadors in Togo 🇹🇬",
    },
    about: {
      title: "Why join",
      titleHighlight: "MSA Togo",
      subtitle:
        "Develop your impact and establish yourself as a mentor and leader in your community.",
      features: [
        {
          title: "Learn & Share",
          description:
            "Thousands of resources on Microsoft Learn, USD 150/month free Azure credits, LinkedIn Learning and recommended paths.",
        },
        {
          title: "Guide & Inspire",
          description:
            "Create content, share opportunities, organize events, hackathons and conferences.",
        },
        {
          title: "Grow & Expand",
          description:
            "Inspire thousands of students, lead, grow and be a force for good locally and globally.",
        },
      ],
    },
    partners: {
      title: "Our partners & communities",
    },
    videos: {
      title: "Our latest",
      titleHighlight: "videos",
      subtitle: "Watch our sessions, workshops and events on YouTube.",
      seeMore: "See more on YouTube",
    },
    contact: {
      title: "Propose",
      titleHighlight: "an event",
      subtitle:
        "Have an idea for an event, workshop or hackathon? Contact us!",
      name: "Your name",
      email: "Your email",
      subject: "Subject (e.g. AI Workshop, Hackathon...)",
      message: "Describe your event idea...",
      send: "Send",
      sent: "Message sent!",
      sentDescription: "We'll get back to you soon.",
    },
    faq: {
      title: "Frequently asked",
      titleHighlight: "questions",
      items: [
        {
          q: "What is the MSA program?",
          a: "The Microsoft Student Ambassadors (MSA) program is a global initiative that enables students to develop their technical skills, lead communities and make a positive impact through Microsoft technology.",
        },
        {
          q: "How to become a Student Ambassador?",
          a: "You can apply through the official Microsoft site. You need to be a student, passionate about technology and ready to contribute to your community. The process includes an online application and an interview.",
        },
        {
          q: "What are the benefits of the program?",
          a: "Ambassadors receive free Azure credits (USD 150/month), LinkedIn Learning access, free certifications, mentorship, and the opportunity to participate in the Microsoft MVP Summit.",
        },
        {
          q: "Are there events in Togo?",
          a: "Yes! MSA Togo regularly organizes workshops, hackathons, training sessions and meetups. Follow us on social media to stay informed.",
        },
        {
          q: "Can I propose an event?",
          a: "Absolutely! Use our contact form above to submit your event ideas. We are always open to collaborations.",
        },
      ],
    },
    cta: {
      title: "Ready to get started?",
      subtitle:
        "Join millions of people using technology and AI to make the world a better place!",
      applyNow: "Apply now",
    },
    footer: {
      rights: "All rights reserved.",
    },
    events: {
      past: "Past",
      upcoming: "Upcoming",
      noUpcoming: "No upcoming events yet. Stay tuned!",
    },
    members: {
      title: "Our",
      titleHighlight: "Ambassadors",
      subtitle: "Meet the MSA Togo community members.",
      all: "All",
      placeholder: "Members list coming soon. Check back later!",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      events: "Événements",
      videos: "Vidéos",
      members: "Membres",
      contact: "Contact",
      faq: "FAQ",
      pastEvents: "Événements passés",
      upcomingEvents: "Événements à venir",
    },
    hero: {
      badge: "Microsoft Student Ambassadors — Togo",
      title: "Élevez vos compétences, façonnez l'avenir du Togo par le",
      titleHighlight: "leadership tech.",
      description:
        "Rejoignez notre communauté mondiale d'étudiants passionnés par la création de solutions basées sur l'IA avec la technologie Microsoft. Accélérez l'innovation et développez les compétences dont vous avez besoin.",
      applyNow: "Postuler maintenant",
      learnMore: "En savoir plus",
      activeBadge: "+20 ambassadeurs actifs au Togo 🇹🇬",
    },
    about: {
      title: "Pourquoi rejoindre",
      titleHighlight: "MSA Togo",
      subtitle:
        "Développez votre impact et établissez-vous comme mentor et leader dans votre communauté.",
      features: [
        {
          title: "Apprendre & Partager",
          description:
            "Des milliers de ressources sur Microsoft Learn, USD 150/mois d'Azure gratuit, LinkedIn Learning et des parcours recommandés.",
        },
        {
          title: "Guider & Inspirer",
          description:
            "Créez du contenu, partagez des opportunités, organisez des événements, hackathons et conférences.",
        },
        {
          title: "Grandir & S'étendre",
          description:
            "Inspirez des milliers d'étudiants, dirigez, grandissez et soyez une force du bien localement et globalement.",
        },
      ],
    },
    partners: {
      title: "Nos partenaires & communautés",
    },
    videos: {
      title: "Nos",
      titleHighlight: "vidéos",
      subtitle:
        "Retrouvez nos sessions, workshops et événements sur YouTube.",
      seeMore: "Voir plus sur YouTube",
    },
    contact: {
      title: "Proposez",
      titleHighlight: "un événement",
      subtitle:
        "Vous avez une idée d'événement, workshop ou hackathon ? Contactez-nous !",
      name: "Votre nom",
      email: "Votre email",
      subject: "Sujet (ex: Workshop IA, Hackathon...)",
      message: "Décrivez votre idée d'événement...",
      send: "Envoyer",
      sent: "Message envoyé !",
      sentDescription: "Nous reviendrons vers vous bientôt.",
    },
    faq: {
      title: "Questions",
      titleHighlight: "fréquentes",
      items: [
        {
          q: "Qu'est-ce que le programme MSA ?",
          a: "Le programme Microsoft Student Ambassadors (MSA) est un programme mondial qui permet aux étudiants de développer leurs compétences techniques, de diriger des communautés et d'avoir un impact positif grâce à la technologie Microsoft.",
        },
        {
          q: "Comment devenir un Student Ambassador ?",
          a: "Vous pouvez postuler via le site officiel Microsoft. Il faut être étudiant(e), passionné(e) par la technologie et prêt(e) à contribuer à votre communauté. Le processus inclut une candidature en ligne et un entretien.",
        },
        {
          q: "Quels sont les avantages du programme ?",
          a: "Les ambassadeurs bénéficient de crédits Azure gratuits (USD 150/mois), d'un accès à LinkedIn Learning, de certifications gratuites, de mentorat, et de la possibilité de participer au Microsoft MVP Summit.",
        },
        {
          q: "Y a-t-il des événements au Togo ?",
          a: "Oui ! MSA Togo organise régulièrement des workshops, hackathons, sessions de formation et meetups. Suivez-nous sur nos réseaux sociaux pour rester informé(e).",
        },
        {
          q: "Puis-je proposer un événement ?",
          a: "Absolument ! Utilisez notre formulaire de contact ci-dessus pour nous soumettre vos idées d'événements. Nous sommes toujours ouverts aux collaborations.",
        },
      ],
    },
    cta: {
      title: "Prêt à commencer ?",
      subtitle:
        "Rejoignez des millions de personnes qui utilisent la technologie et l'IA pour rendre le monde meilleur !",
      applyNow: "Postuler maintenant",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    events: {
      past: "Passés",
      upcoming: "À venir",
      noUpcoming: "Aucun événement à venir pour le moment. Restez à l'écoute !",
    },
    members: {
      title: "Nos",
      titleHighlight: "Ambassadeurs",
      subtitle: "Découvrez les membres de la communauté MSA Togo.",
      all: "Tous",
      placeholder: "La liste des membres arrive bientôt. Revenez plus tard !",
    },
  },
} satisfies Record<Locale, Translations>;
