import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_SPACE as string,
  environment: 'master',
  accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<SingleProject[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const currentProjects: SingleProject[] = [];
      response.items.forEach((entry: ProjectEntry) => {
        const project: SingleProject = {
          title: entry.fields.title,
          image: entry.fields.image.fields.file.url,
          url: entry.fields.url,
        };
        currentProjects.push(project);
      });
      setProjects(currentProjects);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { isLoading, projects };
};

export default useFetchProjects;
