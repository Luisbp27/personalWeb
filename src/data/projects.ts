import type { ImageMetadata } from "astro";
import bashImage from "@/assets/projects/bash.png";
import chocoSalesImage from "@/assets/projects/choco_sales.png";
import housingImage from "@/assets/projects/housing.png";
import titanicImage from "@/assets/projects/titanic.png";

export interface Project {
    title: string;
    description: string;
    image: ImageMetadata;
    tags: string[];
    link: string;
}

export const tagStyles: Record<string, string> = {
    Python: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    "Machine Learning":
        "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    "Data Science":
        "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    C: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    Linux: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    "Operating System":
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    Economics: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

export const projects: Project[] = [
    {
        title: "Chocolate Sales Analysis",
        description:
            "Explore sales behavior, profitability, and commercial segmentation using clustering and PCA.",
        image: chocoSalesImage,
        tags: ["Python", "Data Science", "Economics"],
        link: "https://github.com/Luisbp27/chocoSales",
    },
    {
        title: "Titanic: Machine Learning from Disaster",
        description:
            "Which are the type of passengers that survived? There is any pattern?",
        image: titanicImage,
        tags: ["Python", "Machine Learning", "Data Science"],
        link: "https://github.com/Luisbp27/practica2_ia",
    },
    {
        title: "Bash clone",
        description: "A simple clone of the bash shell",
        image: bashImage,
        tags: ["C", "Linux", "Operating System"],
        link: "https://github.com/Luisbp27/bash",
    },
    {
        title: "Housing Price Prediction",
        description: "Predict the price of a house based on its features",
        image: housingImage,
        tags: ["Python", "Machine Learning", "Data Science"],
        link: "https://github.com/Luisbp27/housePredict",
    },
];
