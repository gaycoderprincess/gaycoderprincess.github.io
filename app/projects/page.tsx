import ProjectsPage from "@/app/projects/actualPage";

export default async function Projects() {
    return ProjectsPage((a, b) => (new Date(b.metadata.lastUpdated)).getTime() - (new Date(a.metadata.lastUpdated)).getTime())
}
