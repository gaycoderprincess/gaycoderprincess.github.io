import ProjectsPage from "@/app/projects/actualPage";

export default async function Projects() {
    return ProjectsPage((a, b) => a.metadata.name.localeCompare(b.metadata.name))
}
