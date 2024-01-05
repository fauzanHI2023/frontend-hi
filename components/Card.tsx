"use client"
import React, { useEffect, useState, useCallback } from 'react';

interface CardProps {
  apiUrl?: string;
}

interface Item {
  id: number;
  post_title?: string;
  post_content?: string;
  post_date?: string;
  guid?: string;
}

const formatDate = (dateString: string) => {
  const options: {
    day: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    year: 'numeric' | '2-digit';
  } = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return new Intl.DateTimeFormat('id-ID', options).format(new Date(dateString));
};

const Card: React.FC<CardProps> = ({ apiUrl }) => {
  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const limitPerPage = 10;

  const fetchData = useCallback(async () => {
    try {
      if (loading || !hasNextPage) {
        // Do not fetch more data if already loading or no more pages
        return;
      }

      setLoading(true);

      const response = await fetch(`${apiUrl}?page=${page}&limit=${limitPerPage}`);
      if (!response.ok) {
        // Handle non-JSON response (e.g., HTML error page)
        console.error('Error fetching data. Status:', response.status);

        // Log the response content for debugging
        const errorContent = await response.text();
        console.error('Response content:', errorContent);

        setError('Error fetching data');
        return;
      }

      const contentType = response.headers.get('content-type');

      if (!contentType || !contentType.includes('application/json')) {
        // Handle cases where the response is not JSON
        console.error('Unexpected content type:', contentType);
        setError('Unexpected content type');
        return;
      }

      const result = await response.json();

      // Ensure that the result is an array before setting it as the state
      if (Array.isArray(result)) {
        setData((prevData) => [...prevData, ...result.slice(0, limitPerPage)]);
        setHasNextPage(result.length === limitPerPage);
        setPage((prevPage) => prevPage + 1);
      } else {
        console.error('Invalid data structure:', result);
        setError('Invalid data structure');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  }, [apiUrl, loading, hasNextPage, page]);

  useEffect(() => {
    // Fetch data for the initial load
    fetchData();
  }, []); // Empty dependency array to ensure it runs only once on mount

  const handleLoadMore = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>{apiUrl === process.env.NEXT_PUBLIC_POSTS_API ? 'Posts' : 'Events'}</h2>
      <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div key={index} className="w-1/3 pb-4">
            <p>{formatDate(item.post_date || '')}</p>
            <h4>{item.post_title}</h4>
        </div>
      ))}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {hasNextPage && !loading && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};

export default Card;
