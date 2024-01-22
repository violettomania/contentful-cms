import { useState, useEffect } from 'react';
import { createClient, Entry } from 'contentful';

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
      response.items.forEach((entry: Entry<any>) => {
        console.log('entry', entry);
        const project: SingleProject = {
          title: entry.fields.title as string,
          image: (entry.fields.image as { fields: { file: { url: string } } })
            .fields.file.url,
          url: entry.fields.url as string,
        };
        console.log('project', project);
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
