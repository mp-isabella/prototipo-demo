import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Mejores componentes UI para sitios web modernos",
    paragraph:
      "Descubre los elementos clave de diseño que hacen que un sitio web luzca profesional, funcional y atractivo.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Diseñador Gráfico",
    },
    tags: ["negocio"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 formas simples de mejorar tus habilidades de diseño",
    paragraph:
      "Conoce estrategias prácticas para potenciar tu creatividad y perfeccionar tus diseños con mayor eficiencia.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Redactor de Contenidos",
    },
    tags: ["finanzas"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Consejos para mejorar tu velocidad de programación",
    paragraph:
      "Optimiza tu flujo de trabajo, utiliza atajos y aprende buenas prácticas para desarrollar código de forma más rápida.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Diseñador Gráfico",
    },
    tags: ["desarrollo"],
    publishDate: "2025",
  },
];

export default blogData;
