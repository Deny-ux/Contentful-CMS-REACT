import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
  space: 'pviq9kt8wr2w',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const { items } = await client.getEntries({
        content_type: 'projects',
      });

      setLoading(false);
      const projects = items.map((item) => {
        const {
          sys: { id },
          fields: {
            title,
            url,
            image: {
              fields: {
                file: { url: img },
              },
            },
          },
        } = item;
        return { id, title, url, img };
      });
      console.log(projects);
      setLoading(false);
      setProjects(projects);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
