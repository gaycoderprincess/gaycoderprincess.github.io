import ProjectsPage from "@/app/projects/actualPage";

export default async function Projects() {
    return ProjectsPage((a, b) => b.metadata.name.localeCompare(a.metadata.name))
}
