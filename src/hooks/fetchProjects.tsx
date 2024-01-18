import { useState, useEffect } from 'react';
import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.SPACE as string,
  environment: 'master',
  accessToken: process.env.ACCESS_TOKEN as string,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<SingleProject[]>([]);
  const fetchProjects = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const currentProjects: SingleProject[] = [];
      response.items.forEach((entry: Entry<any>) => {
        const project: SingleProject = {
          title: entry.fields.title as string,
          image: entry.fields.image as string,
          url: entry.fields.url as string,
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
